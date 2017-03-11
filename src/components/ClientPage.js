import React from "react";
import { connect } from "react-redux";  
import TitleBar from "./TitleBar"; 
import ProductGrid from "./ProductGrid"; 

const ClientPage = ({ client }) => {
  const clientName = client.client_name;
  const products = client.products; 
  return (
    <div>
      <TitleBar backToText="Clients"
        titleHeader={clientName}
        backToURL="/" />
      <ProductGrid products={products} />
    </div>  
  ); 
}; 

const mapStateToProps = (state, ownProps) => ({
  client: state.clients[ownProps.params.clientId - 1]
});

export default connect(mapStateToProps)(ClientPage);
