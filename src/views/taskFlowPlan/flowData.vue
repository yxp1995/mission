<template>
  <div class="item-box">
    <el-row>
      <el-col :span="7">任务风险系数</el-col>
      <el-col :span="17">
        <div id="charts1" class="charts1"></div>
      </el-col>
    </el-row>
    <div class="txt">任务时长分布</div>
    <div id="charts2" class="charts2"></div>
    <div class="txt">任务号手分布</div>
    <div id="charts3" class="charts3"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { taskFlowPlan } from "@/assets/jsonData";
export default {
  name: "FlowData",
  data() {
    return {
      myChart: undefined,
      option1: {
        series: [
          {
            name: "Pressure",
            type: "gauge",
            progress: {
              show: true,
              width: 10,
              itemStyle: {
                // 设置圆形
                color: "red", // 设置进度条初期式样
              },
            },
            pointer: {
              show: false,
            },
            axisTick: {
              // 刻度样式。
              show: false, // 是否显示刻度。
            },
            splitLine: {
              // 分隔线样式。
              show: false, // 是否显示分隔线。
            },
            axisLabel: {
              //刻度标签。
              show: false, // 是否显示标签。
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
              color: "red",
            },
            data: [
              {
                name: "风险度较高",
                nameTextStyle: { color: "red" },
                value: taskFlowPlan.flowData.riskFactor, // 可写变量  此value 对应 formatter: '
              },
            ],
          },
        ],
      },
      option2: {
        grid: {
          left: "15%",
          bottom: 30,
          top: "10%",
          right: "5%",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: taskFlowPlan.flowData.operationTime.xAxis,
          nameTextStyle: {
            color: "#fff",
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisLabel: {
            color: "#fff",
            fontSize: 10,
          },
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            color: "#fff",
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisLabel: {
            color: "#fff",
            fontSize: 10,
          },
        },
        series: [
          {
            data: taskFlowPlan.flowData.operationTime.yAxis,
            type: "line",
            areaStyle: {
              opacity: 0.5,
            },
          },
        ],
      },
      option3: {
        grid: {
          left: "15%",
          bottom: "30%",
          top: "20%",
          right: "5%",
        },
        xAxis: {
          type: "category",
          data: taskFlowPlan.flowData.personnelDistribution.xAxis,
          nameTextStyle: {
            color: "#fff",
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisLabel: {
            color: "#fff",
            fontSize: 10,
          },
        },
        yAxis: {
          name: "人数",
          type: "value",
          nameTextStyle: {
            color: "#fff",
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisLabel: {
            color: "#fff",
            fontSize: 10,
          },
        },

        series: [
          {
            data: taskFlowPlan.flowData.personnelDistribution.yAxis,
            type: "bar",
            barWidth: 8,
            itemStyle: {
              // color:"red" //柱子颜色
              opacity: 0.8,
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initCharts();
    });
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
.item-box {
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
  .txt {
    height: 21px;
    text-align: left;
    font-weight: 600;
    background-image: -webkit-linear-gradient(#66bdcc, #f3fcfa);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    &:nth-child(4) {
      margin-bottom: 10px;
    }
  }
  .charts2 {
    width: 100%;
    height: calc(35% - 21px);
  }
  .charts3 {
    width: 100%;
    height: calc(35% - 34px);
  }
}
</style>