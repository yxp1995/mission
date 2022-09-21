<template>
  <div class="flow-box">
    <el-row>
      <el-col :span="7">风险度</el-col>
      <el-col :span="17">
        <div id="charts1" class="charts1"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">效能</el-col>
      <el-col :span="17">
        <div id="charts2" class="charts2"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">时间分布</el-col>
      <el-col :span="17">
        <div id="charts3" class="charts3"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "FlowData",
  data() {
    return {
      myChart: undefined,
      option1: {
        series: [
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            splitNumber: 12,
            itemStyle: {
              color: "#FFAB91",
            },
            progress: {
              show: true,
              width: 10,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                width: 10,
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            anchor: {
              show: false,
            },
            title: {
              show: true,
              color: "#ffffff",
              fontSize: 12,
            },
            detail: {
              valueAnimation: true,
              width: "60%",
              lineHeight: 40,
              borderRadius: 8,
              offsetCenter: [0, "-15%"],
              fontSize: 14,
              fontWeight: "bolder",
              formatter: "{value} %",
              color: "auto",
            },
            data: [
              {
                value: 20,
                name: "风险等级",
              },
            ],
          },
        ],
      },
      option2: {
        // tooltip: {
        //   trigger: "item",
        //   formatter: function (params) {
        //     const { dataIndex, data } = params;
        //     if (dataIndex == 1) {
        //       console.log(data)
        //       return `<div>占比量:</div><div>${data.value}%</div>`;
        //     } else {
        //       return "";
        //     }
        //   },
        // },
        color: ["#ffffff"],
        title: {
          text: ["86.4%", "完成率"].join("\n"),
          left: "center",
          top: "40%",
          textStyle: {
            color: "#ffffff",
            fontSize: 14,
          },
        },
        visualMap: {
          show: false,
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["70%", "80%"],
            center: ["50%", "55%"],
            avoidLabelOverlap: false,
            label: {
              //将视觉引导图关闭
              show: false,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function () {
              return Math.random() * 200;
            },
            data: [
              { value: 100 - 86.4, itemStyle: { color: "#253150" } },
              { value: 86.4, itemStyle: { color: "#0ffdfe" } },
            ],
          },
        ],
      },
      option3: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: "0",
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "1" },
              { value: 735, name: "2" },
              { value: 580, name: "3" },
              { value: 484, name: "4" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            itemStyle: {
              normal: {
                color: function (colors) {
                  var colorList = [
                    "#dd5aff",
                    "#b8cc54",
                    "#50cefe",
                    "#86a5fa",
                  ];
                  return colorList[colors.dataIndex];
                },
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      for (let i = 1; i <= 3; i++) {
        let chartDom = document.getElementById(`charts${i}`);
        this.myChart = echarts.init(chartDom);
        this[`option${i}`] && this.myChart.setOption(this[`option${i}`]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flow-box {
  height: 100%;
  .el-row {
    height: 35%;
    font-weight: 600;
    background-image: -webkit-linear-gradient(#66bdcc, #f3fcfa);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    &:nth-child(2) {
      height: 30%;
    }
    .el-col {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .charts1 {
    width: 100%;
    height: 100%;
  }
  .charts2 {
    width: 100%;
    height: 100%;
  }
  .charts3 {
    width: 100%;
    height: 100%;
  }
}
</style>