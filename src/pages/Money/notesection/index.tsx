import React, { ChangeEventHandler } from 'react'
import './notesection.scss'

import Input from '../../../components/input'


type TProps = {
  value: string
  onChange: (note: string) => void
}


const NoteSection: React.FC<TProps> = (props) => {

  const note = props.value

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <div className="note-section">
      <Input label="标签" onChange={onChange} value={note} placeholder="请填写备注"/>
    </div>
  )
}

export default NoteSection