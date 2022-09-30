<template>
  <div class="box">
    <div id="all"></div>
  </div>
</template>

<script>
import {comprehensiveAssessment} from "../../assets/jsonData"
import * as echarts from "echarts";
export default {
  name: "TaskTime2",
  data() {
    return {};
  },
  mounted() {
    this.getLine();
  },
  methods: {
    getLine() {
      var chartDom = document.getElementById("all");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "axis",
        },
        // legend: {
        //   bottom:0,
        //   data: [
        //     {
        //       name: "已认证",
        //       icon: "rect", //图例形状
        //       textStyle: {
        //       color: "#fff",
        //     },
        //     },
        //     {
        //       name: "已检测",
        //       icon: "rect", //图例形状
        //       textStyle: {
        //       color: "#fff",
        //     },
        //     },
        //     {
        //       name: "认证中",
        //       icon: "rect", //图例形状
        //       textStyle: {
        //       color: "#fff",
        //     },
        //     },
        //   ],
        // },
        grid: {
          left: "3%",
          right: "4%",
          top: "1%",
          containLabel: true,
        },
         
        xAxis: {
          type: "category",
          boundaryGap: false,
          data:comprehensiveAssessment.taskTime2.xAxisData,
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
          type: "value",
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
        series: [
          {
            name: "已认证",
            type: "line",

            data: comprehensiveAssessment.taskTime2.value1,
          },
          {
            name: "认证中",
            type: "line",

            data: comprehensiveAssessment.taskTime2.value2,
          },
          {
            name: "已检测",
            type: "line",

            data: comprehensiveAssessment.taskTime2.value3,
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  // overflow: auto;
}
#all {
  width: 100%;
  height: 150px;
}
</style>