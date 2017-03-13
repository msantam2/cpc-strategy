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
import Chart from "./Chart"; 
import "../stylesheets/ProductCard.css"; 

class ProductCard extends Component {
  constructor(props) {
    super(props); 
    this.state = { open: false };
    
    this.getAvgRankPerKeyword = this.getAvgRankPerKeyword.bind(this);
    this.averagesSynopsis = this.averagesSynopsis.bind(this); 
    this.keywordNames = this.keywordNames.bind(this); 
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  getAvgRankPerKeyword() {
    const { keywords } = this.props.product; // [{kw1}, {kw2}, {kw3}, etc.]
    let averages = {}; // desired: {"foo": 54.4, "bar": 502.1, "hello": 132.0}
    for (let keyword of keywords) {
      let { ranks } = keyword; // [{rank1}, {rank2}, {rank3}, etc.]
      let avgRank = ranks.map(rank => rank.rank_position)
        .reduce((a, b) => a + b)
        / ranks.length; 
      averages[keyword.keyword_name] = avgRank; 
    }

    return averages; 
  }
  
  averagesSynopsis() {
    let avgRankPerKeyword = this.getAvgRankPerKeyword(); 
    let synopsis = "";
    for (let keyword in avgRankPerKeyword) {
      if (avgRankPerKeyword.hasOwnProperty(keyword)) {
        let avgRank = avgRankPerKeyword[keyword]; 
        synopsis += `${keyword}: ${avgRank.toFixed(1)} `; 
      }
    }

    return "Average Rankings: " + synopsis;
  }

  keywordNames() {
    const { keywords } = this.props.product; 
    const keywordCount = keywords.length;
    return "Keywords: " + keywords.map(keyword => keyword.keyword_name)
      .join(", ")
      .concat(` (${keywordCount})`); 
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
    const keywordNames = this.keywordNames(); 
    const averagesSynopsis = this.averagesSynopsis();
    const modalAction = <RaisedButton
      label="OK"
      onTouchTap={this.handleClose}
    />; 
    const keywords = product.keywords; 
    
    return (
      <MuiThemeProvider>
        <Card className="product-card">
          <CardHeader 
            title={productName}
            subtitle={`ID: ${productId}   ASIN: ${productASIN}`}
          />  

          <CardMedia
            overlay={<CardTitle
              title={keywordNames}
              subtitle={averagesSynopsis}
            />}
          >  
            <img src={product.product_image_url} />
          </CardMedia>

          <CardActions>
            <RaisedButton
              label="Ranking Analytics"
              onTouchTap={this.handleOpen}
            />
          </CardActions>

          <Dialog   
            open={this.state.open}
            title={productName}
            actions={modalAction}
            onRequestClose={this.handleClose}
          >
            <Chart keywords={keywords} />
            <br></br>
            <p className="trendline-explanation">If your trendline is decreasing (slope is negative), great! Your overall rankings for this product are heading towards #1.<br></br>
            If your trendline is increasing (slope is positive) you may be moving away from #1. We can promise that our team will work with you to improve your rankings and, thus, the visibility of your product!</p>
          </Dialog>  
        </Card>
      </MuiThemeProvider>
    ); 
  }
}

export default ProductCard; 
