import React from "react"; 
import Client from "./Client"; 
import "../stylesheets/ClientList.css"; 

const ClientList = ({ clients }) => {
  const sortByClientName = () => {
    return clients.sort((a, b) => {
      let first = a.client_name.replace(/,| |-/g, "").toLowerCase();
      let second = b.client_name.replace(/,| |-/g, "").toLowerCase();
      return first.localeCompare(second);
    }); 
  }; 

  const renderClientList = () => {
    return sortByClientName().map(client => {
      return <Client key={client.client_id} client={client} />; 
    }); 
  };

  return (
    <div className="client-list-container">
      {renderClientList()}
    </div>
  );
}; 

export default ClientList; 
