import React from 'react'; 
import { Router, hashHistory, Route, IndexRoute } from 'react-router'; 
import App from './App'; 
import Clients from './Clients'; 

const AppRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Clients}/>
    </Route>
  </Router>
); 

export default AppRouter; 
