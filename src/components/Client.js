import React, { Component } from 'react'; 

class Client extends Component {
  render() {
    return (
      <li>
        {this.props.client.client_name}
      </li>
    ); 
  }
}

export default Client;
