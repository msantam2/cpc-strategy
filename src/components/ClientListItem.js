import React, { Component } from "react"; 
import { hashHistory } from 'react-router';
import { Icon } from "antd";
import "../stylesheets/ClientListItem.css"; 

class ClientListItem extends Component {
  constructor() {
    super();
    this.clientMetrics = this.clientMetrics.bind(this);
    this.routeToClientPage = this.routeToClientPage.bind(this);
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
      <span className="client-metrics">
        {productCount} products over {keywordCount} keywords with {rankCount} rank data points
      </span>
    );
  }

  routeToClientPage() {
    const { client } = this.props; 
    const clientId = client.client_id; 
    const clientName = client.client_name; 

    hashHistory.push({
      pathname: `/clients/${clientId}/${clientName}`,
      state: { client }
    });
  }

  render() {
    const clientName = this.props.client.client_name; 

    return (
      <li className="client-list-item" onClick={this.routeToClientPage}>
        <div className="client-list-item-content">
          <span className="client-name">{clientName}</span>
          {this.clientMetrics()}
          <Icon type="arrow-right" />          
        </div>  
      </li>
    ); 
  }
}

export default ClientListItem;
