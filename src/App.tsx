import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Tags from './pages/Tags'
import Money from './pages/Money'
import Statistics from './pages/Statistics'
import NotFound from './pages/NotFound'
import Tag from './pages/Tag'


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags" component={Tags} />
        <Route path="/tags/:tagId" component={Tag} />
        <Route path="/money" component={Money} />
        <Route path="/statistics" component={Statistics} />
        <Redirect exact from="/" to="/money"/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
