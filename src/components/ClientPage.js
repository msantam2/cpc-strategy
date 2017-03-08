import React, { Component } from 'react'; 
import { hashHistory } from 'react-router'; 

class ClientPage extends Component {
  constructor(props) {
    super(props); 
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    hashHistory.replace("/"); 
  }  

  render() {
    return (
      <button onClick={this.goBack}>Go Back</button>
    ); 
  }
}

export default ClientPage; 
