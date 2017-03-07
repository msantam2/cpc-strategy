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
    const { clients } = this.state;
    if (clients.length === 0) {
      return (
        <svg className="loading-icon" width='140px' height='140px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring-alt"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><circle cx="50" cy="50" r="40" stroke="#afafb7" fill="none" stroke-width="10" stroke-linecap="round"></circle><circle cx="50" cy="50" r="40" stroke="#5cffd6" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"></animate><animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate></circle></svg>
      );
    }

    return <ClientList clients={this.state.clients} />;
  }
}

export default App;
