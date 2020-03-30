import React from "react";
import Highcharts from "../highcharts";
import HighchartsReact from "highcharts-react-official";

const BARS_NAME = "Orders";
const LINE_NAME = "Sales";

/** @type {Highcharts.Options} */
const theme = {
  chart: {
    // styledMode: true
    // zoomType: "xy"
  },
  title: {
    text: undefined
  },
  subtitle: {
    // text: "Source: WorldClimate.com"
  },
  xAxis: [
    {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
      // crosshair: true
    }
  ],
  // yAxis: [
  //   {
  //     // Primary yAxis
  //     labels: {
  //       // format: "{value}°C",
  //       style: {
  //         // color: Highcharts.getOptions().colors[1]
  //       }
  //     },
  //     title: {
  //       text: BARS_NAME,
  //       style: {
  //         // color: Highcharts.getOptions().colors[1]
  //       }
  //     }
  //   },
  //   {
  //     // Secondary yAxis
  //     title: {
  //       text: LINE_NAME,
  //       style: {
  //         // color: Highcharts.getOptions().colors[0]
  //       }
  //     },
  //     labels: {
  //       // format: "{value} mm",
  //       style: {
  //         // color: Highcharts.getOptions().colors[0]
  //       }
  //     },
  //     opposite: true
  //   }
  // ],
  tooltip: {
    // shared: true,
    borderWidth: 2,
    headerFormat: undefined,
    pointFormat: "{point.y}"
  },
  legend: {
    // layout: "vertical",
    // align: "left",
    // x: 120,
    // verticalAlign: "top",
    // y: 100,
    // floating: true,
    // backgroundColor:
    //   Highcharts.defaultOptions.legend.backgroundColor || // theme
    //   "rgba(255,255,255,0.25)"
    // enabled: false
    itemStyle: ''
  },
  series: [
    {
      name: BARS_NAME,
      type: "column",
      data: [
        100000,
        168303,
        111014,
        176253,
        64000,
        78304,
        56709,
        148200,
        120400,
        89030,
        95001,
        70200
      ],
      color: "#4BA484",
      tooltip: {
        // valueSuffix: " mm",
        style: {
          color: '#FFF'
        }
      }
    },
    {
      name: LINE_NAME,
      type: "line",
      data: [
        100000,
        146389,
        104593,
        176253,
        54673,
        82798,
        87293,
        135003,
        136939,
        130495,
        68349,
        67023
      ],
      color: "#324684",
      lineWidth: 4,
      tooltip: {
        style: {
          color: "#324684",
          borderWidth: 5
        }
      },
      marker: {
        radius: 6,
        fillColor: "#FFFFFF",
        lineColor: "#55B1F8",
        lineWidth: 2
      },
      states: {
        hover: {
          lineWidthPlus: 0
        }
      },
    }
  ],
  plotOptions: {
    series: {
      borderRadiusTopLeft: "50%",
      borderRadiusTopRight: "50%",
      animation: false,
      states: {
        inactive: {
          enabled: false
        }
      },
      events: {
        legendItemClick: () => false
      }
    }
  },
  credits: {
    enabled: false
  }
};

const chart = () => <HighchartsReact highcharts={Highcharts} options={theme} />;

export default chart;
