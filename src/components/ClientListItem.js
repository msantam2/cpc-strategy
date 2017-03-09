import React from "react"; 
import { hashHistory } from "react-router";
import { Icon } from "antd";
import "../stylesheets/ClientListItem.css"; 

const ClientListItem = ({ clientId, clientName, clientMetrics }) => {
  const routeToClientPage = () => {
    hashHistory.push(`/clients/${clientId}`);
  };

  return (
    <li className="client-list-item" onClick={routeToClientPage}>
      <div className="client-list-item-content">
        <span className="client-name">{clientName}</span>
        {clientMetrics}
        <Icon type="arrow-right" />
      </div>
    </li>
  );
};

export default ClientListItem;
