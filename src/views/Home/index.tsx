import * as React from 'react'
import { observer, PropTypes } from 'mobx-react'

import { Store } from '../../store/index'

import './index.scss'


function Example() {
  const [count, setCount] = React.useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


interface IContext {
  mobxStores: {
    store: Store
  }
}

@observer
class Home extends React.Component<any> {
  static contextTypes = {
    mobxStores: PropTypes.objectOrObservableObject
  }

  public context: IContext

  public state = {
    username: '',
    password: ''
  }

  constructor(props: any) {
    super(props)
  }

  public render() {
<<<<<<< HEAD
    return <div className="home">1234</div>
=======
    return (
      <div className="home">
        <Example />
      </div>
    )
>>>>>>> c18b8e5148995a17a468191fab0454914a9d5cc8
  }
}

export default Home
