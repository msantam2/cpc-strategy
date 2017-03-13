import React, { Component } from "react"; 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts"; 
import "../stylesheets/Charts.css"; 

class Charts extends Component {
  render() {
    const data = this.props.keywords; // [{kw1}, {kw2}, etc.]
    return (
      <div className="line-chart-wrapper">
        <LineChart
          data={data}  
          width={600}
          height={300}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="keyword_id" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone"
            yAxisId="left"
            dataKey="keyword_id"
            stroke="#8884d8"
          />
        </LineChart>
      </div>
    ); 
  }
}

export default Charts;
