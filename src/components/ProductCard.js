import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardActions
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton"; 
import Dialog from "material-ui/Dialog"; 
import "../stylesheets/ProductCard.css"; 

class ProductCard extends Component {
  constructor(props) {
    super(props); 
    this.state = { open: false };
    
    this.getAvgRankPerKeyword = this.getAvgRankPerKeyword.bind(this);
    this.keywords = this.keywords.bind(this); 
    this.averagesSynopsis = this.averagesSynopsis.bind(this); 
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
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

  handleOpen() {
    this.setState({ open: true }); 
  }

  handleClose() {
    this.setState({ open: false }); 
  }

  render() {
    const { product } = this.props; 
    const productName = product.product_name; 
    const productId = product.product_id; 
    const productASIN = product.product_asin; 
    const keywords = this.keywords(); 
    const averagesSynopsis = this.averagesSynopsis();
    const modalAction = <RaisedButton
      label="OK"
      onTouchTap={this.handleClose}
    />; 
    
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
            <RaisedButton
              label="Keyword Analytics"
              onTouchTap={this.handleOpen}
            />
          </CardActions>

          <Dialog 
            open={this.state.open}
            title={productName}
            actions={modalAction}
            onRequestClose={this.handleClose}
          >
            This is where the Chart component is going to go  
          </Dialog>  
        </Card>
      </MuiThemeProvider>
    ); 
  }
}

export default ProductCard; 
