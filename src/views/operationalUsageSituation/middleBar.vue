<template>
  <div id="charts" class="charts"></div>
</template>

<script>
import * as echarts from "echarts";
import { taskFlowPlan } from "@/assets/jsonData";
export default {
  name: "middleBar",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      let chartDom = document.getElementById("charts");
      let myChart = echarts.init(chartDom);
      let colors = ["#01a3ff", "#14bcd1"];
      let option;

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
            let tar;
            if (params[1].value !== "-") {
              tar = params[1];
            } else {
              tar = params[0];
            }
            return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
          },
        },
        // legend: {
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          top: "0%",
          containLabel: true,
        },
        xAxis: {
          position: "top",
          type: "value",
          name: "日期",
          nameTextStyle: {
            color: "#fff",
            align: "right",
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
          min: 1,
          splitNumber: 10,
        },
        yAxis: {
          type: "category",
          name: "流程编号",
          data: taskFlowPlan.processPlan.yAxis,
          nameLocation: "start",
          nameTextStyle: {
            color: "#fff",
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            show: true,
          },
        },
        series: [
          {
            name: "Placeholder",
            type: "bar",
            stack: "Total",
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
            emphasis: {
              itemStyle: {
                borderColor: "transparent",
                color: "transparent",
              },
            },
            data: taskFlowPlan.processPlan.baseLine,
          },
          {
            name: "Income",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              position: "top",
            },
            data: taskFlowPlan.processPlan.one,
            itemStyle: {
              //这里是颜色
              color: function (p) {
                if (p.data != "-") {
                  return colors[0];
                }
              },
            },
          },
          {
            name: "Expenses",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              position: "bottom",
            },
            data: taskFlowPlan.processPlan.two,
            itemStyle: {
              //这里是颜色
              color: function (p) {
                if (p.data != "-") {
                  return colors[1];
                }
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.charts {
  height: 100%;
}
</style>