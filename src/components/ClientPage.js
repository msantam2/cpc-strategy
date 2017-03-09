import React, { Component } from "react";
import { hashHistory } from "react-router"; 
import { connect } from "react-redux";  
import TitleBar from "./TitleBar"; 

class ClientPage extends Component { // has this.props.client :) 
  constructor(props) {
    super(props); 
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    hashHistory.replace("/"); 
  }  

  render() { 
    const clientName = this.props.client.client_name; 
    return (
      <div>
        <TitleBar backToText="Clients"
          titleHeader={clientName}
          backToURL="/" />
          
      </div>  
    ); 
  }
}

const mapStateToProps = (state, ownProps) => ({
  client: state.clients[ownProps.params.clientId - 1]
});

export default connect(mapStateToProps)(ClientPage); 
