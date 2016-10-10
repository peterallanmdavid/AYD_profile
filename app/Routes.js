import React from 'react'
import ProfileMain from './profile/ProfileMain'
import {
  Router,
  Route,
  Link,
  IndexRoute,
  browserHistory,
} from 'react-router'

const Routes = ({store}) => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={ProfileMain}/>
    </Router>
  )

}

export default Routes
