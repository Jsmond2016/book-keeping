import React, { useState } from 'react'
import dayjs from 'dayjs'
import './index.scss'
import Layout from '../../components/layout/index'
import CategorySection from '../Money/categorysection'
import { useRecords, TRecord } from '../../hooks/useRecords';
import useTags from '../../hooks/useTags';

const Statiscs: React.FunctionComponent = () => {

  const [category, setCategory] = useState<'-' | '+'>('-')
  const { records } = useRecords()
  const { getName } = useTags()
  const selectedRecords = records.filter(record => record.category === category)

  let hash: { [key: string]: TRecord[] } = {}

  selectedRecords.forEach(r => {
    const key = dayjs(r.createdAt).format('YYYY年MM月DD日')
    const value = r

    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(value)
  })

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0
    if (a[0] > b[0]) return 1
    if (a[0] < b[0]) return -1
    return 0
  })

  const categorySectionProps = {
    value: category,
    onChange: (category: ('-' | '+')) => setCategory(category)
  }

  return (
    <Layout>
      <CategorySection {...categorySectionProps} />
      {array.map(([date, record]) => 
        <div key={date}>
          <h3 className="header">{date}</h3>
          <div>
            {record && record.map(r => {
              return (
                <div className="item" key={r.createdAt}>
                  <div className="tags">
                    {r.tagIds.map(tagId => getName(tagId)!.name).join(',')}
                  </div>
                  {
                    r.note && <div className="note">{r.note}</div>
                  }
                  <div className="amount">
                    $ {r.amount}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Statiscs
