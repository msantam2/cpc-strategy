import React from "react";
import "../stylesheets/NotFound.css"; 

const NotFound = () => (
  <div className="not-found">
    <p className="error-text">404 page not found</p>
    <p className="error-text">We are sorry but the page you are looking for does not exist.</p>
    <p className="error-text">Hint: Try the root URL (/). We still hope you have a great day!</p>
  </div>
); 

export default NotFound; 
