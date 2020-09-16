import React, { useState } from 'react'
import './categorysection.scss'

const categoryMap  = {
  '-': '支出',
  '+': '收入'
}

type TCategory = keyof typeof categoryMap
type TProps = {
  value: TCategory
  onChange: (category: TCategory) => void
}


const CategorySection: React.FC<TProps> = (props) => {

  const [categoryList] = useState<TCategory[]>(['-', '+'])
  const category = props.value

  const selectedClass = (type: string) => category === type ? 'selected' : ''

  return (
    <div className="category-section">
      <ul>
        {categoryList.map(c => (
          <li key={c} className={selectedClass(c)} onClick={() => props.onChange(c)}>
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategorySection