import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardActions
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton"; 
import "../stylesheets/ProductCard.css"; 

class ProductCard extends Component {
  constructor(props) {
    super(props); 
    this.getAvgRankPerKeyword = this.getAvgRankPerKeyword.bind(this);
    this.keywords = this.keywords.bind(this); 
    this.averagesSynopsis = this.averagesSynopsis.bind(this); 
    
    this.avgRankPerKeyword = this.getAvgRankPerKeyword(); 
  }

  getAvgRankPerKeyword() {
    const { keywords } = this.props.product; // [{kw1}, {kw2}, {kw3}, etc.]
    let averages = {}; // desired: {"foo": 54.4, "bar": 502.1, "hello": 132}
    for (let keyword of keywords) {
      let { ranks } = keyword; // [{rank1}, {rank2}, {rank3}, etc.]
      let avgRank = ranks.map(rank => rank.rank_position)
        .reduce((a, b) => a + b)
        / ranks.length; 
      averages[keyword.keyword_name] = avgRank; 
    }

    return averages; 
  }
  
  keywords() {
    const keywordCount = Object.keys(this.avgRankPerKeyword).length;
    return "Keywords: " + Object.keys(this.avgRankPerKeyword)
      .join(", ")
      .concat(` (${keywordCount})`); 
  }

  averagesSynopsis() {
    let synopsis = "";
    for (let keyword in this.avgRankPerKeyword) {
      if (this.avgRankPerKeyword.hasOwnProperty(keyword)) {
        let avgRank = this.avgRankPerKeyword[keyword]; 
        synopsis += `${keyword}: ${avgRank.toFixed(1)} `; 
      }
    }

    return "Average Rankings: " + synopsis;
  }

  render() {
    const { product } = this.props; 
    const productName = product.product_name; 
    const productId = product.product_id; 
    const productASIN = product.product_asin; 
    const keywords = this.keywords(); 
    const averagesSynopsis = this.averagesSynopsis(); 
    
    return (
      <MuiThemeProvider>
        <Card className="product-card">
          <CardHeader 
            title={productName}
            subtitle={`ID: ${productId}   ASIN: ${productASIN}`}
          />  

          <CardMedia
            overlay={<CardTitle
              title={keywords}
              subtitle={averagesSynopsis}
            />}
          >
            <img src={product.product_image_url} />
          </CardMedia>

          <CardActions>
            <FlatButton label="Keyword Analytics" />
          </CardActions>
        </Card>
      </MuiThemeProvider>
    ); 
  }
}

export default ProductCard; 
