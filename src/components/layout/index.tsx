import React, { useEffect, useRef } from 'react'
import './layout.scss'

import Nav from '../nav'

type TProps = {
  className?: string
  scrollTop?: number
}

const Layout: React.FC<TProps> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) return
      mainRef.current.scrollTop = props.scrollTop!
    }, 0)
  }, [props.scrollTop])

  return (
    <div className="wrapper">
      <div className="main">
        {props.children}
      </div>
      <Nav />
    </div>
  )

}

Layout.defaultProps = {
  scrollTop: 0
}

export default Layout