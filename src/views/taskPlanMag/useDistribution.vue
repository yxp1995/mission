<template>
  <div class="dis-box">
    <div class="txt">Z型产品</div>
    <div ref="chartPanel" id="chart-panel" class="top"></div>
        <div class="line"></div>
    <div class="txt">S型产品</div>
    <div ref="chartPanel2" id="chart-panel2" class="btm"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { taskPlanMag } from "@/assets/jsonData";
export default {
  name: "UseDistribution",
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
            center: ["50%", "80"],
            itemStyle: {
              normal: {
                color: function (colors) {
                  var colorList = ["#51ccff", "#85a4fa", "#de58ff", "#b8cb55","#67C23A","#409EFF"];
                  return colorList[colors.dataIndex];
                },
              },
            },
            data: taskPlanMag.useDistribution.optionZ,
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
        tooltip: {
          trigger: "item",
        },

        series: [
          {
            name: "S型产品",
            type: "pie",
            radius: "70%",
            center: ["50%", "80"],
            label: {
              normal: {
                show: true,
                formatter: "{b} {d}%", //自定义显示格式(b:name, c:value, d:百分比)
              },
            },
            itemStyle: {
              normal: {
                color: function (colors) {
                 var colorList = ["#51ccff", "#85a4fa", "#de58ff", "#b8cb55","#67C23A","#409EFF"];
                  return colorList[colors.dataIndex];
                },
              },
            },
            data: taskPlanMag.useDistribution.optionS,
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
    height: calc(50% - 29px);
  }
  .btm {
    width: 100%;
    height: calc(50% - 29px);
    margin-top: 16px;
  }
  .txt {
    height: 21px;
    text-align: left;
    font-weight: 600;
    background-image: -webkit-linear-gradient(#66bdcc, #f3fcfa);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
   .line{
    height: 0;
    width: 100%;
    border-top:1px dashed #fff;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
</style>