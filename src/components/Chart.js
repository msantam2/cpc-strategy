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
import "../stylesheets/Chart.css"; 

class Chart extends Component {
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
          <YAxis yAxisId="left" orientation="left" stroke="#19c3d4" />
          <YAxis yAxisId="right" orientation="right" stroke="#19c3d4" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone"
            yAxisId="left"
            dataKey="keyword_id"
            stroke="#19c3d4"
          />
        </LineChart>
      </div>
    ); 
  }
}

export default Chart;
