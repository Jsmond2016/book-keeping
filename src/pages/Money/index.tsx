import React, { useState } from 'react'
import './index.scss'
import TagSection from './tagssection'
import NoteSection from './notesection'
import CategorySection from './categorysection'
import NumberPadSection from './numberpadsection'
import {useRecords} from '../../hooks/useRecords'
import Layout from '../../components/layout/index';

const defaultForm = {
  tagIds: [] as number[],
  note: '',
  category: '-' as ('-' | '+'),
  amount: 0
}

const categoryMap  = {
  '-': '支出',
  '+': '收入'
}

type TCategory = keyof typeof categoryMap



const Money: React.FunctionComponent = () => {

  const [record, setRecords] = useState(defaultForm)

  const {addRecord} = useRecords()

  const changeRecords = (obj: Partial<typeof record>) => {
    setRecords({...record, ...obj})
  }

  const submit = () => {
    if (record.amount <= 0) {
      return alert('不能为0')
    }
    if (record.tagIds.length === 0) {
      return alert('一定要选标签')
    }

    addRecord({
      ...record,
      createdAt: new Date().toISOString()
    })
    alert('保存成功')
    setRecords(defaultForm)
  }

  const tagsSectionProps = {
    value: record.tagIds,
    onChange: (tagIds: number[]) => changeRecords({tagIds}),
  }

  const noteSectionProps = {
    value: record.note,
    onChange: (note: string) => changeRecords({note})
  }

  const categorySectionProps = {
    value: record.category,
    onChange: (category: TCategory) => changeRecords({category})
  }

  const numberPadSectionProps = {
    value: record.amount,
    onOk: submit,
    onChange: (amount: number) => changeRecords({amount})
  }

  return (
    <Layout scrollTop={9999}>
      <TagSection {...tagsSectionProps} />
      <NoteSection {...noteSectionProps} />
      <CategorySection {...categorySectionProps} />
      <NumberPadSection {...numberPadSectionProps} />
    </Layout>
  )
}

export default Money

