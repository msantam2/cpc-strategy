import React, { Component } from "react";
import SearchInput, { createFilter } from "react-search-input"; 
import ProductCard from "./ProductCard"; 
import "../stylesheets/ProductGrid.css";

const KEYS_TO_FILTER = ["product_id", "product_name", "product_asin"]; 

class ProductGrid extends Component {
  constructor(props) {
    super(props); 
    this.state = { searchTerm: "" }; 
    this.generateProductCards = this.generateProductCards.bind(this); 
    this.searchUpdated = this.searchUpdated.bind(this); 
  }

  generateProductCards() {
    const { products } = this.props; 
    return products.map(product => {
      return <ProductCard key={product.product_id} product={product} />;
    }); 
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    const { products } = this.props; 
    const { searchTerm } = this.state; 
    const filteredProducts = products.filter(
      createFilter(searchTerm, KEYS_TO_FILTER)
    ); 

    return (
      <div>
        <SearchInput className="search-input"
          onChange={this.searchUpdated}
          placeholder="Search by Product Name, ID, or ASIN"
        />
        <div className="product-grid">
          {filteredProducts.map(product => {
            return <ProductCard key={product.product_id} product={product} />;
          })}
        </div>
      </div>
    ); 
  }
}

export default ProductGrid; 
