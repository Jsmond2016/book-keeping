import React from 'react'
import './index.scss'

type TProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

const Input: React.FC<TProps> = (props) => {
  const {label, ...rest} = props

  return (
    <div className="label">
      <span>{props.label}</span>
      <input {...rest}/>
    </div>
  )
}

export default Input