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
    this.getLoop();
    this.getLoop2();
  },
  methods: {
    getLoop() {
      var chartDom = document.getElementById("chart-panel");
      var myChart = echarts.init(chartDom);
      var option;

      let data = 89;
      option = {
        title: {
          // 标题组件，包含主标题和副标题
          text: "Z型产品", // 主标题文本，支持使用 \n 换行。
          top: "0", // title 组件离容器上侧的距离。top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
          left: "0", // title 组件离容器左侧的距离。 ...同上
          textStyle: {
            // 主标题文字的设置
            fontSize: 16,
            fontWeight: "normal",
            color:"#fff"
          },
        },
        series: [
          {
            type: "gauge", // 测量仪
            center: ["50%", "50%"], // 图形坐标位置 左, 右
            radius: "100%", // 控制饼图的大小
            startAngle: 90, // 开始位置
            endAngle: -270, // 结束位置
            pointer: {
              // 显示仪表盘指针
              show: false, // 是否显示仪表盘指针
            },
            progress: {
              // 展示当前进度。
              show: true, // 是否展示进度条
              overlap: false, // 是否重叠
              roundCap: true, // 是否圆顶
              clip: false, // 是否裁掉超出部分
              itemStyle: {
                // 设置圆形
                color: "#409EFF", // 设置进度条初期式样
              },
            },
            axisLine: {
              // 设置线条
              lineStyle: {
                width: 10, // 线条宽度
                color: [[1, "#d2eef9"]], // 不透明度, 线条设置背景色
              },
            },
            splitLine: {
              // 分隔线样式。
              show: false, // 是否显示分隔线。
              distance: 0, // 分隔线与轴线的距离。
              length: 1033, // 分隔线线长。支持相对半径的百分比。
            },
            axisTick: {
              // 刻度样式。
              show: false, // 是否显示刻度。
            },
            axisLabel: {
              //刻度标签。
              show: false, // 是否显示标签。
              distance: 50, // 标签与刻度线的距离。
            },
            data: [
              {
                name: "战备使用",
                value: data, // 可写变量  此value 对应 formatter: '{value}%' 中的Value  64类型不对请用'64'
                detail: {
                  // 仪表盘边框数据详情，用于显示数据。
                  valueAnimation: false, // 是否开启标签的数字动画。
                  offsetCenter: ["5%", "-15%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                  fontSize: 20, // 文字的字体大小。
                },
              },
            ],
            detail: {
              //仪表盘详情，用于显示数据 仪表盘中间数字数据。
              color: "#1f78b4", // 文本颜色，默认取数值所在的区间的颜色
              formatter: "{value}%", // 格式化函数或者字符串  formatter: function (value) { return value.toFixed(0);}
              // width: 20,
              // height: 14,
              // fontSize: 14,
              // borderColor: 'auto',
              // borderRadius: 20,
              // borderWidth: 1,
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    getLoop2() {
      var chartDom = document.getElementById("chart-panel2");
      var myChart = echarts.init(chartDom);
      var option;

      let data = 65;
      option = {
        title: {
          // 标题组件，包含主标题和副标题
          text: "S型产品", // 主标题文本，支持使用 \n 换行。
          top: "0", // title 组件离容器上侧的距离。top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
          left: "0", // title 组件离容器左侧的距离。 ...同上
          textStyle: {
            // 主标题文字的设置
            fontSize: 16,
            fontWeight: "normal",
            color:"#fff"
          },
        },
        series: [
          {
            type: "gauge", // 测量仪
            center: ["50%", "50%"], // 图形坐标位置 左, 右
            radius: "100%", // 控制饼图的大小
                 startAngle: 90, // 开始位置
            endAngle: -270, // 结束位置
            pointer: {
              // 显示仪表盘指针
              show: false, // 是否显示仪表盘指针
            },
            progress: {
              // 展示当前进度。
              show: true, // 是否展示进度条
              overlap: false, // 是否重叠
              roundCap: true, // 是否圆顶
              clip: false, // 是否裁掉超出部分
              itemStyle: {
                // 设置圆形
                color: "#1f78b4", // 设置进度条初期式样
              },
            },
            axisLine: {
              // 设置线条
              lineStyle: {
                width: 10, // 线条宽度
                color: [[1, "#d2eef9"]], // 不透明度, 线条设置背景色
              },
            },
            splitLine: {
              // 分隔线样式。
              show: false, // 是否显示分隔线。
              distance: 0, // 分隔线与轴线的距离。
              length: 1033, // 分隔线线长。支持相对半径的百分比。
            },
            axisTick: {
              // 刻度样式。
              show: false, // 是否显示刻度。
            },
            axisLabel: {
              //刻度标签。
              show: false, // 是否显示标签。
              distance: 50, // 标签与刻度线的距离。
            },
            data: [
              {
                name: "战备使用",
                nameTextStyle:{
                  color:"#fff"
                },
                value: data, // 可写变量  此value 对应 formatter: '{value}%' 中的Value  64类型不对请用'64'
                detail: {
                  // 仪表盘边框数据详情，用于显示数据。
                  valueAnimation: false, // 是否开启标签的数字动画。
                  offsetCenter: ["5%", "-15%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                  fontSize: 20, // 文字的字体大小。
                },
              },
            ],
            detail: {
              //仪表盘详情，用于显示数据 仪表盘中间数字数据。
              color: "#1f78b4", // 文本颜色，默认取数值所在的区间的颜色
              formatter: "{value}%", // 格式化函数或者字符串  formatter: function (value) { return value.toFixed(0);}
              // width: 20,
              // height: 14,
              // fontSize: 14,
              // borderColor: 'auto',
              // borderRadius: 20,
              // borderWidth: 1,
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