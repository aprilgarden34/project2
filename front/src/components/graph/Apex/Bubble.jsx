import React, { Component } from "react";
import Chart from "react-apexcharts";


function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
  
      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

class Bubble extends Component {



  constructor(props) {
    super(props);

          this.state = {
          
            series: [{
              name: 'Fish, Seafood',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
              })
            },
            {
              name: 'Desserts',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
              })
            },
            {
              name: 'Fruites',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
              })
            },
            {
              name: 'Vegetables',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
              })
            }],
            options: {
              chart: {
                  height: 350,
                  type: 'bubble',
              },
              dataLabels: {
                  enabled: false
              },
              fill: {
                  opacity: 0.8
              },
              title: {
                  text: '음식 카테고리에 따른 두 영양 성분 상대 비교'
              },
              xaxis: {
                  tickAmount: 12,
                  type: 'category',
              },
              yaxis: {
                  max: 70
              }
            },
          
          
          };
        }
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
                options={this.state.options} series={this.state.series} type="bubble" height={350}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Bubble;