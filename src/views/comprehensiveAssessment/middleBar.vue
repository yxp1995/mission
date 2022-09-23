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
          data: ["2013", "2014", "2015", "2016"],
          textStyle: {
              color: "#fff",
            },
          top:0,
          right: 0,
           orient: 'vertical',
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "战备效能", max: 6500 },
            { name: "值班效能", max: 16000 },
            { name: "反击效能", max: 30000 },
            { name: "保障效益", max: 38000 },
            { name: "任务完成度", max: 52000 },
          ],
             textStyle: {
              color: "#fff",
            },
        },
        series: [
          {
            type: "radar",
            gird:{
              left:0,
              top:0
            },
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000],
                name: "2013",
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
                value: [5000, 14000, 28000, 26000, 42000],
                name: "2014",
                areaStyle: {
                  // 区域样式
                  color: "#ee6666",
                  opacity: 0.5,
                },
                itemStyle: {
                  //阴影部分的边框
                  normal: {
                    color: "#ee6666",
                    lineStyle: {
                      color: "#ee6666",
                    },
                  },
                },
              },
              {
                value: [3500, 3000, 10000, 25000, 30000],
                name: "2015",
                areaStyle: {
                  // 区域样式
                  color: "#5470c6",
                  opacity: 0.5,
                },
                itemStyle: {
                  //阴影部分的边框
                  normal: {
                    color: "#5470c6",
                    lineStyle: {
                      color: "#5470c6",
                    },
                  },
                },
              },
              {
                value: [6200, 3700, 20300, 15000, 20000],
                name: "2016",
                areaStyle: {
                  // 区域样式
                  color: "#fc8452",
                  opacity: 0.5,
                },
                itemStyle: {
                  //阴影部分的边框
                  normal: {
                    color: "#fc8452",
                    lineStyle: {
                      color: "#fc8452",
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