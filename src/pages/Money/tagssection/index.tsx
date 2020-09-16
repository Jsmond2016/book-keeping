import React from 'react'
import './tagssection.scss'
import useTags from '../../../hooks/useTags'



type TProps = {
  value: number[]
  onChange: (tagIds: number[]) => void
}


const TagSection: React.FC<TProps> = (props) => {

  const {tags, addTag} = useTags()

  const selectedTagIds = props.value

  const onToggleTag = (tagId: number) => {
    if (selectedTagIds.find(id => id === tagId)) {
      props.onChange(selectedTagIds.filter(id => id !== tagId))
    } else {
      props.onChange([...selectedTagIds, tagId])
    }
  }

  const selectedClass = (tagId: number) => selectedTagIds.includes(tagId) ? 'selected' : ''

  return (
    <div className="tag-section">
      <ol>
        {tags && tags.map(tag =>
          <li key={tag.id}
              className={selectedClass(tag.id)}
              onClick={() => onToggleTag(tag.id)}>
            {tag.name}
          </li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </div>
  )
}

export default TagSection