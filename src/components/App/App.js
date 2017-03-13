import React, { Component } from "react";
import { connect } from "react-redux"; 
import { fetchClients } from "../../actions/ClientActions";
import "../../stylesheets/App.css"; 
  
class App extends Component {
  componentDidMount() {
    this.props.fetchClients(
      "https://github.com/msantam2/data/blob/master/data.json",
      {'mode': 'no-cors'}
    ); 
  }

  render() {
    return (
      this.props.children
    );
  }
}

export default connect(null, { fetchClients })(App);
