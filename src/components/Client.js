import React, { Component } from "react"; 
import "../stylesheets/Client.css"; 

class Client extends Component {
  render() {
    return (
      <div className="client-list-item">
        <p className="client-name">{this.props.client.client_name}</p>
      </div>
    ); 
  }
}

export default Client;
