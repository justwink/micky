import Home from '../views/Home'
import Test from '../views/Test1'

import a from '../views/Test1/views/a'
import b from '../views/Test1/views/b'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/test',
    component: Test,
    routes: [
      {
        path: '/test/a',
        component: a
      },
      {
        path: '/test/b',
        component: b
      }
    ]
  }
]
