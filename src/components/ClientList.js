import React, { Component } from "react"; 
import { connect } from 'react-redux'; 
import ClientListItem from "./ClientListItem"; 
import "../stylesheets/ClientList.css"; 

class ClientList extends Component {
  constructor(props) {
    super(props); 
    this.renderClientList = this.renderClientList.bind(this);
    this.sortByClientName = this.sortByClientName.bind(this);
    this.clientMetrics = this.clientMetrics.bind(this);
  }
  
  sortByClientName() {
    const { clients } = this.props; 
    return clients.sort((a, b) => {
      let first = a.client_name.replace(/,| |-/g, "").toLowerCase();
      let second = b.client_name.replace(/,| |-/g, "").toLowerCase();
      return first.localeCompare(second);
    }); 
  }

  renderClientList() {
    return this.sortByClientName().map(client => {
      const clientId = client.client_id; 
      const clientName = client.client_name; 
      return <ClientListItem key={client.client_id}
        clientId={clientId}
        clientName={clientName}
        clientMetrics={this.clientMetrics(client)}
      />; 
    }); 
  }

  clientMetrics(client) {
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

  render() {
    const { clients } = this.props; 
    if (clients.length === 0) { // spinning loading icon if no clients yet
      return (
        <svg className="loading-icon uil-ring-alt" width='140px' height='140px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect><circle cx="50" cy="50" r="40" stroke="#afafb7" fill="none" strokeWidth="10" strokeLinecap="round"></circle><circle cx="50" cy="50" r="40" stroke="#5cffd6" fill="none" strokeWidth="6" strokeLinecap="round"><animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"></animate><animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate></circle></svg>
      );
    }

    return (
      <ul className="client-list">
        {this.renderClientList()}
      </ul>
    );
  }
} 

const mapStateToProps = ({ clients }) => {
  return { clients }; 
}; 

export default connect(mapStateToProps)(ClientList); 
