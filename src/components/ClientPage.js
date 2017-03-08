import React, { Component } from 'react';
import { hashHistory } from 'react-router'; 
import { connect } from 'react-redux';  

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

const mapStateToProps = (state, ownProps) => ({
  client: state.clients[ownProps.params.clientId - 1]
});

export default connect(mapStateToProps)(ClientPage); 
