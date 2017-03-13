import React, { Component } from "react"; 
import * as RankingsParsing from "../../utilities/RankingsParsing"; 

class Chart extends Component {
  componentDidMount() {
    const { keywords } = this.props; 
    const dataPoints = RankingsParsing.parse(keywords);
    const rankingsArray = [[{ label: "Date", type: "date" }, "Ranking"]]
      .concat(dataPoints);  
    const data = window.google.visualization.arrayToDataTable(rankingsArray);

    const options = {
      title: "Rankings Over Time",
      hAxis: { title: "Date" },
      vAxis: { title: "Ranking" },
      legend: "none",
      trendlines: { 0: {} }
    };

    const chart = new window.google.visualization.ScatterChart(
      document.getElementById("chart-div")
    );
    chart.draw(data, options);
  }

  render() {
    return (
      <div id="chart-div"></div>
    ); 
  }
}

export default Chart;
