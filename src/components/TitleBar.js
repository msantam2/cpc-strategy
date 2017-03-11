import React from "react";
import { hashHistory } from "react-router"; 
import { Button } from "antd"; 
import "../stylesheets/TitleBar.css"; 

const TitleBar = ({ backToText, titleHeader, backToURL }) => {
  const goBack = () => hashHistory.push(backToURL); 
  
  return (
    <div className="title-bar">
      <Button className="back-to-btn" onClick={goBack}>
        <span className="back-to-btn-text">
          Back to {backToText}
        </span>
      </Button>
      <h1 className="title-header">{titleHeader}</h1>
    </div>
  ) ; 
}; 

export default TitleBar; 
