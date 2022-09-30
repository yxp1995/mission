<template>
  <div class="box">
    <div id="main"></div>
  </div>
</template>

<script>
import {comprehensiveAssessment} from "../../assets/jsonData"
import * as echarts from "echarts";
export default {
  name: "TaskTime1",
  data() {
    return {};
  },
  mounted() {
    this.getBar();
  },
  methods: {
    getBar() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        // legend: {
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
        //          textStyle: {
        //       color: "#fff",
        //     },
        //     },
        //   ],
        // },
        grid: {
          left: "3%",
          right: "4%",
          top: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: comprehensiveAssessment.taskTime1.xAxisData,
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
        ],
        yAxis: [
          {
            type: "value",
            name: "单位 / 个",
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
        ],
        series: [
          {
            name: "已认证",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0],
              },
            }, //设置柱子圆角
            data:  comprehensiveAssessment.taskTime1.value1,
          },

          {
            name: "已检测",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            data:  comprehensiveAssessment.taskTime1.value2,
          },
          {
            name: "认证中",
            type: "bar",
            data: comprehensiveAssessment.taskTime1.value3,
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            // markLine: {
            //   lineStyle: {
            //     type: 'dashed'
            //   },
            //   data: [[{ type: 'min' }, { type: 'max' }]]
            // }
          },
        ],
        color: ["#3366CC", "#FFCC99", "#99CC33"],
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
 
#main {
  width: 100%;
 height: 150px;
}
</style>