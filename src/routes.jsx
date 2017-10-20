import { Route, IndexRedirect } from 'react-router'
import LocalCounter from './containers/LocalCounter'
import RemoteCounter from './containers/RemoteCounter'
import QueryTester from './containers/QueryTester'
import App from './components/App'
import React from 'react'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/query-tester' />
    <Route path='query-tester' component={QueryTester} />
  </Route>
)
