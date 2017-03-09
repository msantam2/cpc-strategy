import React from "react"; 
import { Router, hashHistory, Route, IndexRoute } from "react-router"; 
import App from "./App"; 
import ClientList from "./ClientList"; 
import ClientPage from "./ClientPage"; 
import NotFound from "./NotFound"; 

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
