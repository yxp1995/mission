<template>
  <div class="dis-box">
    <div ref="chartPanel" id="chart-panel" class="top"></div>

    <div ref="chartPanel2" id="chart-panel2" class="btm"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },

  mounted() {
    this.getPie();
    this.getPie2();
  },
  methods: {
    getPie() {
      var chartDom = document.getElementById("chart-panel");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "Z型产品",
          top:"0",
          left: "0",
            textStyle: {
            // 主标题文字的设置
            fontSize: 16,
            fontWeight: "normal",
            color:"#fff"
          },
        },
        tooltip: {
          trigger: "item",
        },
 

        series: [
          {
            name: "Z型产品",
            type: "pie",
            radius: "70%",
            label: {
              normal: {
                show: true,
                formatter: "{b} {d}%", //自定义显示格式(b:name, c:value, d:百分比)
              },
            },
       center:["50%","80"],
            data: [
              { value: 1048, name: "维修" },
              { value: 735, name: "贮存" },
              { value: 580, name: "值班" },
              { value: 484, name: "战备" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },

    getPie2() {
      var chartDom = document.getElementById("chart-panel2");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "S型产品",
          top:"0",
          left: "0",
          textStyle: {
            // 主标题文字的设置
            fontSize: 16,
            fontWeight: "normal",
            color:"#fff"
          },
          
        },
        tooltip: {
          trigger: "item",
        },
 
        series: [
          {
            name: "S型产品",
            type: "pie",
            radius: "70%",
                  center:["50%","80"],
            label: {
              normal: {
                show: true,
                formatter: "{b} {d}%", //自定义显示格式(b:name, c:value, d:百分比)
              },
            },
            data: [
              { value: 1048, name: "维修" },
              { value: 735, name: "贮存" },
              { value: 580, name: "值班" },
              { value: 484, name: "战备" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
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
.dis-box {
  height: 100%;
  overflow: auto;
  .top {
    width: 100%;
    height: calc(50% - 8px);
  }
  .btm {
    width: 100%;
    height: calc(50% - 8px);
    margin-top: 16px;
  }
}
</style>