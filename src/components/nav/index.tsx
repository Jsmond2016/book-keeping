import React from 'react'
import { NavLink } from 'react-router-dom'

import './nav.scss'
import Icon from '../icon'

const Nav: React.FC = (props) => {


  return (
    <div className="navwrapper">
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected"><Icon name="tag" />标签页</NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected"><Icon name="money" />记账页</NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected"><Icon name="chart" />统计页</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav