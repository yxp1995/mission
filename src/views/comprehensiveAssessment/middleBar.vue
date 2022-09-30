<template>
  <div class="box">
    <div id="item"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {comprehensiveAssessment} from "../../assets/jsonData"
export default {
  name: "middleBar",
  data() {
    return {};
  },
  mounted() {
    // this.$nextTick(() => {
    this.getChartsBar();
    // console.log(canvas);

    // });
  },
  methods: {
    getChartsBar() {
      var chartDom = document.getElementById("item");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        legend: {
          data: comprehensiveAssessment.middleBar.legendData,
          textStyle: {
            color: "#fff",
          },
          top: 0,
          right: 0,
          orient: "vertical",
        },
        radar: {
          // shape: 'circle',
          indicator:  comprehensiveAssessment.middleBar.indicatorData,
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            type: "radar",
            gird: {
              left: 0,
              top: 0,
            },
            data: [
              {
                value:  comprehensiveAssessment.middleBar.value1,
                name: "2016",
                areaStyle: {
                  // 区域样式
                  color: "#409EFF",
                  opacity: 0.5,
                },
                itemStyle: {
                  //阴影部分的边框
                  normal: {
                    color: "#409EFF",
                    lineStyle: {
                      color: "#409EFF",
                    },
                  },
                },
              },
              {
                value:comprehensiveAssessment.middleBar.value2,
                name: "2017",
                areaStyle: {
                  color: "#ee6666",
                  opacity: 0.5,
                },
                itemStyle: {
                  normal: {
                    color: "#ee6666",
                    lineStyle: {
                      color: "#ee6666",
                    },
                  },
                },
              },
              {
                value: comprehensiveAssessment.middleBar.value3,
                name: "2018",
                areaStyle: {
                  color: "#5470c6",
                  opacity: 0.5,
                },
                itemStyle: {
                  normal: {
                    color: "#5470c6",
                    lineStyle: {
                      color: "#5470c6",
                    },
                  },
                },
              },
            ],
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
  overflow: auto;
}
#item {
  width: 100%;
  height: 100%;
}
</style>