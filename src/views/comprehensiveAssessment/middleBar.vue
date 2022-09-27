<template>
  <div class="box">
    <div id="item"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
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
          data: ["2016", "2017", "2018"],
          textStyle: {
            color: "#fff",
          },
          top: 0,
          right: 0,
          orient: "vertical",
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "战备效能", max: 70 },
            { name: "值班效能", max: 50 },
            { name: "反击效能", max: 50 },
            { name: "保障效益", max: 1 },
            { name: "任务饱和度", max: 100 },
          ],
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
                value: [15.821, 11.454, 8.210, 0.762, 71.25],
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
                value: [24.362, 15.372, 11.864, 0.821, 85.36],
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
                value: [31.234, 24.537, 16.722, 0.751, 91.35],
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