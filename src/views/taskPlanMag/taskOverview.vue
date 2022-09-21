<template>
  <div id="charts" class="charts"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "TaskOverview",
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
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          name: "日期",
          nameTextStyle: {
            color: "#fff",
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "category",
          name: "任务编号",
          data: (function () {
            let list = [];
            for (let i = 1; i <= 11; i++) {
              list.push(i);
            }
            return list;
          })(),
          nameTextStyle: {
            color: "#fff",
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
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
            data: [1, 1.5, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            name: "Income",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              position: "top",
            },
            data: [3.5, 4.2, 5, "-", "-", 8, 9, 10, "-", "-", "-"],
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
            data: ["-", "-", "-", 6, 7, "-", "-", "-", 11, 12, 13],
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