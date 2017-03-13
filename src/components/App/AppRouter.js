import React from "react"; 
import { Router, hashHistory, Route, IndexRoute } from "react-router"; 
import App from "./App"; 
import ClientList from "../Client/ClientList"; 
import ClientPage from "../Client/ClientPage"; 
import NotFound from "../Common/NotFound"; 

const AppRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ClientList} /> 
      <Route path="/clients/:clientId" component={ClientPage} />
      <Route path="*" component={NotFound} />
    </Route>  
  </Router>
); 

export default AppRouter; 
