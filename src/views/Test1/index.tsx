import * as React from 'react'
import { observer, PropTypes } from 'mobx-react'

// import { Store } from '../../store/index'

// import { BrowserRouter } from 'react-router-dom'

import './index.scss'

// interface IContext {
//   mobxStores: {
//     store: Store
//   }
// }

@observer
class Home extends React.Component<any> {
  static contextTypes = {
    mobxStores: PropTypes.objectOrObservableObject
  }

  aaa = () => {
    this.props.history.push('/home')
  }

  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div className="home" onClick={this.aaa}>
        {/* <Example /> */}
        11111111
      </div>
    )
  }
}

export default Home
