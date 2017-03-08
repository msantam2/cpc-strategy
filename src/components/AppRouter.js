import React from "react"; 
import { Router, hashHistory, Route } from "react-router"; 
import App from "./App"; 
import ClientPage from './ClientPage'; 
import NotFound from './NotFound'; 

const AppRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/clients/:clientId/:clientName" component={ClientPage} />
    <Route path="*" component={NotFound} />
  </Router>
); 

export default AppRouter; 
