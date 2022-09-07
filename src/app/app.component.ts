import { Component } from "@angular/core";
import { EChartOption } from "echarts";
import * as echarts from "echarts";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  chartOption: EChartOption = {
    title: {
      text: "echarts - pie chart",
      left: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        return `<b>${params.data["nodeName"]}</b> : ${params.data["totalCount"]} </br>
        <ul style="text-align: left; margin: 0; padding-left: 0px;list-style-type:none ">
          <li class="tooltip_item"><div  style="display:inline-block;width: 10px;height:10px;border-radius:10px;background: red;margin-right: 5px"></div>High ${params.data["high"]}</li>
          <li><div style="display:inline-block;width: 10px;height:10px;border-radius:10px;background: orange;margin-right: 5px"></div>Medium ${params.data["medium"]}</li>
          <li><div style="display:inline-block;width: 10px;height:10px;border-radius:10px;background: yellow;margin-right: 5px"></div>Low ${params.data["low"]}</li>
        </ul>
        `;
      }
    },
    /* legend: {
      orient: "vertical",
      left: "left",
      textStyle:{
        color:'green'
     },
    }, */
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        /* width: 200,
        height: 200, */
        data: [
          {
            value: 4,
            name: "aaaaaaaaaaa",
            totalCount: 4,
            nodeName: "aaaaaaaaaaa",
            high: 4,
            medium: 0,
            low: 0
          },
          {
            value: 4,
            name: "bbbbbbbbbb",
            totalCount: 4,
            nodeName: "bbbbbbbbbbbb",
            high: 4,
            medium: 0,
            low: 0
          },
          {
            value: 4,
            name: "cccccccccccc",
            totalCount: 4,
            nodeName: "ccccccccccccccc",
            high: 4,
            medium: 0,
            low: 0
          },
          {
            value: 4,
            name: "dddddddddddd",
            totalCount: 4,
            nodeName: "ddddddddddddddd",
            high: 4,
            medium: 0,
            low: 0
          },
          {
            value: 4,
            name: "eeeeeeeeeeee",
            totalCount: 4,
            nodeName: "eeeeeeeeeeeee",
            high: 4,
            medium: 0,
            low: 0
          }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        },
        label: {
          show: true,
          textStyle: {
            color: "green"
          }
        },
        labelLine: {
          show: true
        }
      }
    ]
  };

  ngOnInit() {}

  ngAfterViewInit() {
    var pieChart = echarts.init(document.getElementById("chart-container"));

    pieChart.setOption(this.chartOption);
    pieChart.on("click", (params) => {
      //your code
      alert("clicked");
    });
  }
}
