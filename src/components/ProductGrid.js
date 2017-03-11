import React, { Component } from "react";
import ProductCard from "./ProductCard"; 
import "../stylesheets/ProductGrid.css";

class ProductGrid extends Component {
  constructor(props) {
    super(props); 
    this.generateProductCards = this.generateProductCards.bind(this); 
  }

  generateProductCards() {
    const { products } = this.props; 
    return products.map(product => {
      return <ProductCard key={product.product_id} product={product} />;
    }); 
  }

  render() {
    return (
      <div className="product-grid">
        {this.generateProductCards()}
      </div>
    ); 
  }
}

export default ProductGrid; 
