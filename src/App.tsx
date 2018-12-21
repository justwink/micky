import './App.scss'

import * as React from 'react'
// import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import Home from './views/Home/'
import Test from './views/Test1/'
import Foot from './components/foot'

import routes from './routes'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

class App extends React.Component {
  public render() {
    return (
      <div id="app">
        {/* <Switch> */}
        <ul>
          <li>
            <Link to="/home">Tacos</Link>
          </li>
          <li>
            <Link to="/test">Sandwiches</Link>
          </li>
        </ul>
        {/* <Redirect path="/" to={{ pathname: '/home' }} exact={true} /> */}
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Route path="/home" component={Home} />
        <Route path="/test" component={Test} />
        {/* </Switch> */}
        <Foot />
      </div>
    )
  }
}

export default App
