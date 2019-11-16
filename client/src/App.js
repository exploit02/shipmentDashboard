import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './components/dashboard'

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component = {Dashboard}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
