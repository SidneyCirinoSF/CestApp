import { Component } from "react";
import ReactApexChart from "react-apexcharts"; {/*instalar com: npm install --save react-apexcharts apexcharts */}

export default class MedidorGrafico extends Component {
    constructor(props) {
    super(props);

    console.log(props.darkMode);

    this.state = {
      series: [props.percentage],
      options: {
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -140,
            endAngle: 140,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "22px",
                color: "#9aaeb5",
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        colors: [props.chartBg],
      },
    };
    }

    render() {
        return(
            <div id="chart">
                <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="radialBar"
                height={400}
                width={400}
                />
            </div>
        );
    }

}