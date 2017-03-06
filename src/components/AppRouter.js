import React from "react"; 
import { Router, hashHistory, Route } from "react-router"; 
import App from "./App"; 

const AppRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
); 

export default AppRouter; 
