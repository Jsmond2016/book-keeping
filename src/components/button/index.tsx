import React from 'react'
import './index.scss'

type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void
}

const Button: React.FunctionComponent<TButton> = (props) => {
  return (
    <button className="button" {...props}></button>
  )
}

export default Button