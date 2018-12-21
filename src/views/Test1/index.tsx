import * as React from 'react'
import { observer, PropTypes } from 'mobx-react'

// import { Store } from '../../store/index'

import { Route, Link } from 'react-router-dom'

import './index.scss'

// interface IContext {
//   mobxStores: {
//     store: Store
//   }
// }

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

@observer
class Home extends React.Component<any> {
  static contextTypes = {
    mobxStores: PropTypes.objectOrObservableObject
  }

  aaa = () => {
    // this.props.history.push('/home')
  }

  constructor(props: any) {
    super(props)

    console.log(this.props.routes, '~~~~~~')
  }

  public render() {
    return (
      <div className="home" onClick={this.aaa}>
        {/* <Example /> */}
        <ul>
          <li>
            <Link to="/test/a">aaaa</Link>
          </li>
          <li>
            <Link to="/test/b">bbbb</Link>
          </li>
        </ul>
        {this.props.routes.map((route, i) => (
          <RouteWithSubRoutes
            key={i}
            {...route}
            routes={route.routes || [] }
          />
        ))}
      </div>
    )
  }
}

export default Home
