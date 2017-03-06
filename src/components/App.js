import React, { Component } from "react";
import ClientList from "./ClientList"; 
import "../stylesheets/App.css"; 
  
class App extends Component {
  constructor() {
    super(); 
    this.state = { clients: [] }; 
  }

  componentDidMount() {
    fetch("http://frontendtest.cpcstrategy.com/").then(res => {
      res.json().then(data => {
        this.setState({ clients: data }); 
      }); 
    }); 
  }

  render() {
    return (
      <ClientList clients={this.state.clients} />
    );
  }
}

export default App;
