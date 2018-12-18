import './App.scss'

import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './views/Home/'
import Foot from './components/foot'


class App extends React.Component{
  public render() {
    return (
      <div id="app">
        <Switch>
          <Redirect path="/" to={{pathname:"/home"}} exact={true}/>
          <Route path="/home" component={Home}/>
        </Switch>
        <Foot/>
      </div>
    )
  }
}


export default App
