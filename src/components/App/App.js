import React, { Component } from "react";
import { connect } from "react-redux"; 
import { fetchClients } from "../../actions/ClientActions";
import "../../stylesheets/App.css"; 
  
class App extends Component {
  componentDidMount() {
    this.props.fetchClients("https://msantam2.github.io/data/data.json"); 
  }

  render() {
    return (
      this.props.children
    );
  }
}

export default connect(null, { fetchClients })(App);
