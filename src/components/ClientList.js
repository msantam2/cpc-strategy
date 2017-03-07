import React from "react"; 
import ClientListItem from "./ClientListItem"; 
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
      return <ClientListItem key={client.client_id} client={client} />; 
    }); 
  };

  return (
    <ul className="client-list">
      {renderClientList()}
    </ul>
  );
}; 

export default ClientList; 
