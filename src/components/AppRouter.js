import React from "react"; 
import { Router, hashHistory, Route } from "react-router"; 
import App from "./App"; 
import ClientPage from './ClientPage'; 

const AppRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/clients/:id/:clientName" component={ClientPage} />
  </Router>
); 

export default AppRouter; 
