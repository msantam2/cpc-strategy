import React, { Component } from "react";
import { connect } from 'react-redux'; 
import { fetchClients } from "../actions/ClientActions";
import "../stylesheets/App.css"; 
  
class App extends Component {
  componentDidMount() {
    this.props.fetchClients("http://frontendtest.cpcstrategy.com/"); 
  }

  render() {
    return (
      this.props.children
    );
  }
}

export default connect(null, { fetchClients })(App);
