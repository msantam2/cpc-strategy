import React, { Component } from "react"; 
import "../stylesheets/Client.css"; 

class Client extends Component {
  constructor() {
    super();
    this.clientMetrics = this.clientMetrics.bind(this);
  }

  clientMetrics() {
    const { client } = this.props;
    let productCount = client.products.length; 
    let [keywordCount, rankCount] = [0, 0];
    for (let product of client.products) {
      keywordCount += product.keywords.length; 
      for (let keyword of product.keywords) {
        rankCount += keyword.ranks.length; 
      }
    }

    return (
      <p className="client-metrics">
        {productCount} products over {keywordCount} keywords with {rankCount} rank data points
      </p>
    );
  }

  render() {
    const clientName = this.props.client.client_name; 

    return (
      <li className="client-list-item">
        <p className="client-name">{clientName}</p>
        {this.clientMetrics()}
      </li>
    ); 
  }
}

export default Client;
