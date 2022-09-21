<template>
  <div class="box1">
    <div class="left1">
      <div class="left-top1">包图网项目增长</div>
      <div class="left-middle1">
        <div class="btn11"></div>
        <div class="btn21"></div>
      </div>
      <div class="left-btm1">占比20%</div>
    </div>

    <div class="right1">
      <!-- <div id="main" ></div> -->
      <el-progress type="circle" :percentage="25"  ></el-progress>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "TaskEdit",
  data() {
    return {
      process: {
        num1: 5678,
        num2: 5678,
        num3: 5678,
      },
      query: {
        content: undefined,
      },
      value: 33,
    };
  },
  mounted() {
    // this.getEcharts();
  },
  methods: {
    getEcharts() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      let data = 89;
      option = {
        title: {
          // 标题组件，包含主标题和副标题
          // text: '工作情况统计', // 主标题文本，支持使用 \n 换行。
          top: "8", // title 组件离容器上侧的距离。top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
          left: "8", // title 组件离容器左侧的距离。 ...同上
          textStyle: {
            // 主标题文字的设置
            fontSize: 16,
            fontWeight: "normal",
          },
        },
        series: [
          {
            type: "gauge", // 测量仪
               center: ['10%', '50%'], // 图形坐标位置 左, 右
                    radius: '10%', // 控制饼图的大小
            startAngle: -90, // 开始位置
            endAngle: 270, // 结束位置
            pointer: {
              // 显示仪表盘指针
              show: false, // 是否显示仪表盘指针
            },
            progress: {
              // 展示当前进度。
              show: false, // 是否展示进度条
              overlap: false, // 是否重叠
              roundCap: false, // 是否圆顶
              clip: false, // 是否裁掉超出部分
            },

            splitLine: {
              // 分隔线样式。
              show: false, // 是否显示分隔线。
              distance: 0, // 分隔线与轴线的距离。
              length: 10, // 分隔线线长。支持相对半径的百分比。
            },
            axisTick: {
              // 刻度样式。
              show: true, // 是否显示刻度。
            },
            axisLabel: {
              //刻度标签。
              show: false, // 是否显示标签。
              distance: 20, // 标签与刻度线的距离。
            },
            data: [
              {
                value: data, // 可写变量  此value 对应 formatter: '{value}%' 中的Value  64类型不对请用'64'
                detail: {
                  // 仪表盘边框数据详情，用于显示数据。
                  valueAnimation: false, // 是否开启标签的数字动画。
                   offsetCenter: ['5%', '0%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                  fontSize: 5, // 文字的字体大小。
                },
              },
            ],
            detail: {
              //仪表盘详情，用于显示数据 仪表盘中间数字数据。
              color: "#1f78b4", // 文本颜色，默认取数值所在的区间的颜色
              formatter: "{value}%", // 格式化函数或者字符串  formatter: function (value) { return value.toFixed(0);}
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
.box1 {
  height: 100%;
  color: #fff;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  .left1 {
    .left-top1 {
      text-align: left;
    }
    .left-middle1 {
      display: flex;
      margin-top: 10px;
      .btn11 {
        width: 50px;
        height: 20px;
        background-color: #fff;
      }
      .btn21 {
        width: 50px;
        height: 20px;
        background-color: #fff;
        opacity: 0.5;
      }
    }
    .left-btm1 {
      text-align: left;
      margin-top: 10px;
    }
  }
  .right1 {
    width: 48%;
    height: 80%;
   
  }
}

/deep/.el-progress-circle{
  width: 90px !important;
  height: 90px !important;
}
</style>