<template>
  <div>
    <div
      ref="chartPanel"
      id="chart-panel"
      style="width: 100%; height: 110px"
    ></div>

    <div
      ref="chartPanel2"
      id="chart-panel2"
      style="width: 100%; height: 110px; margin-top: 15px"
    ></div>
  </div>
</template>

<script>
import { getPie3D } from "../../utils/echarts/3Dpie";
import * as echarts from "echarts";
export default {
  data() {
    return {
      optionData: [
        {
          name: "医药研发",
          value: 12,
          itemStyle: {
            opacity: 0.2,
            color: "#D6476C",
          },
        },
        {
          name: "生物科技",
          value: 16,
          itemStyle: {
            opacity: 0.2,
            color: "#017DC1",
          },
        },
        {
          name: "房地产",
          value: 14,
          itemStyle: {
            opacity: 0.2,
            color: "#804BC6",
          },
        },
        {
          name: "互联网科技",
          value: 81,
          itemStyle: {
            opacity: 0.2,
            color: "#44BA9C",
          },
        },
        {
          name: "软件外包",
          value: 66,
          itemStyle: {
            opacity: 0.2,
            color: "#3F14C9",
          },
        },
      ],
    };
  },

  mounted() {
    this.draw3d();
    this.$nextTick(() => {
      let parent = document.getElementById("chart-panel"); // 获取父元素
      let canvas = parent.getElementsByTagName("canvas"); // 获取父元素下面的所有canvas元素
      // console.log(canvas);
      canvas[1].style.transform = "rotateX(-30deg)";
    });

    this.draw3d2();
    this.$nextTick(() => {
      let parent = document.getElementById("chart-panel2"); // 获取父元素
      let canvas = parent.getElementsByTagName("canvas"); // 获取父元素下面的所有canvas元素
      // console.log(canvas);
      canvas[1].style.transform = "rotateX(-30deg)";
    });


  },
  methods: {
    draw3d() {
      let legendData = [];
      this.optionData.forEach((item) => legendData.push(item.name));
      // 基于准备好的dom，初始化echarts实例
      let chartPanel = echarts.init(document.getElementById("chart-panel"));
      for (let i = 0; i < this.optionData.length; i++) {
        delete this.optionData[i].itemStyle.opacity;
      }
      // 传入数据生成 option
      let series = getPie3D(this.optionData, 2);
      let option = {
        title: {
          text: "产品分布",
         textStyle:{
            color:"#fff",
            fontSize:14
         },
         left:3

        },
        tooltip: {
          formatter: (params) => {
            // console.log(params)
            if (
              params.seriesName !== "mouseoutSeries" &&
              params.seriesName !== "pie2d"
            ) {
              return `<div style="padding:0 10px">${params.seriesName}：${(
                option.series[params.seriesIndex].pieData.proportion * 100
              ).toFixed(2)}%</div>`;
            }
          },
        },
        legend: {
          data: legendData,
          //   width: "90%",
          itemGap: 5,
          bottom: "bottom",
          right: "right",
          textStyle: {
            color: "#fff",
            fontSize: 10,
          },
        },
        xAxis3D: {
          min: -1,
          max: 1,
        },
        yAxis3D: {
          min: -1,
          max: 1,
        },
        zAxis3D: {
          min: -1,
          max: 1,
        },

        grid3D: {
          show: false, //是否显示三维笛卡尔坐标系。
          boxHeight: 40, //三维笛卡尔坐标系在三维场景中的高度
          left: -70,
         top:10,
          // environment: "#021041", //背景
          viewControl: {
            //用于鼠标的旋转，缩放等视角控制
            alpha: 40, //角度
            distance: 180, //调整视角到主体的距离，类似调整zoom 重要
            rotateSensitivity: 0, //设置为0无法旋转
            zoomSensitivity: 0, //设置为0无法缩放
            panSensitivity: 0, //设置为0无法平移
            autoRotate: false, //自动旋转
          },
        },
        series: series,
      };
      chartPanel.setOption(option);

      //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
      option.series.push({
        name: "pie2d",
        type: "pie",
        label: {
          color: "#fff",
          fontSize: 10,
          position: "inner",
          formatter: "{d}%",

          //   formatter: (item) => {
          //     //  console.log(item)
          //     return item.data.name + ":" + item.data.value + "家" + "";
          //   },
        },
        labelLine: {
          length: 50,
          length2: 50,
          lineStyle: {
            color: "#ffffff",
            width: 1.5,
          },
        },
        startAngle: 321, //起始角度，支持范围[0, 360]。 //重要
        clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ["20%", "70%"],
        center: ["30%", "60%"],
        data: this.optionData,
        itemStyle: {
          opacity: 0,
        },
        top: "-20%",
        avoidLabelOverlap: true, //防止标签重叠
      });
      chartPanel.setOption(option);
    },

    draw3d2() {
      let legendData = [];
      this.optionData.forEach((item) => legendData.push(item.name));
      // 基于准备好的dom，初始化echarts实例
      let chartPanel = echarts.init(document.getElementById("chart-panel2"));
      for (let i = 0; i < this.optionData.length; i++) {
        delete this.optionData[i].itemStyle.opacity;
      }
      // 传入数据生成 option
      let series = getPie3D(this.optionData, 2);
      let option = {
        title: {
          text: "位置分布",
         textStyle:{
            color:"#fff",
            fontSize:14
         },
             left:3

        },
        tooltip: {
          formatter: (params) => {
            // console.log(params)
            if (
              params.seriesName !== "mouseoutSeries" &&
              params.seriesName !== "pie2d"
            ) {
              return `<div style="padding:0 10px">${params.seriesName}：${(
                option.series[params.seriesIndex].pieData.proportion * 100
              ).toFixed(2)}%</div>`;
            }
          },
        },
        legend: {
          data: legendData,
          //   width: "90%",
          itemGap: 5,
          bottom: "bottom",
          right: "right",
          textStyle: {
            color: "#fff",
            fontSize: 10,
          },
        },
        xAxis3D: {
          min: -1,
          max: 1,
        },
        yAxis3D: {
          min: -1,
          max: 1,
        },
        zAxis3D: {
          min: -1,
          max: 1,
        },

        grid3D: {
          show: false, //是否显示三维笛卡尔坐标系。
          boxHeight: 40, //三维笛卡尔坐标系在三维场景中的高度
          left: -70,
         top:10,
          // environment: "#021041", //背景
          viewControl: {
            //用于鼠标的旋转，缩放等视角控制
            alpha: 40, //角度
            distance: 180, //调整视角到主体的距离，类似调整zoom 重要
            rotateSensitivity: 0, //设置为0无法旋转
            zoomSensitivity: 0, //设置为0无法缩放
            panSensitivity: 0, //设置为0无法平移
            autoRotate: false, //自动旋转
          },
        },
        series: series,
      };
      chartPanel.setOption(option);

      //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
      option.series.push({
        name: "pie2d",
        type: "pie",
        label: {
          color: "#fff",
          fontSize: 10,
          position: "inner",
          formatter: "{d}%",

          //   formatter: (item) => {
          //     //  console.log(item)
          //     return item.data.name + ":" + item.data.value + "家" + "";
          //   },
        },
        labelLine: {
          length: 50,
          length2: 50,
          lineStyle: {
            color: "#ffffff",
            width: 1.5,
          },
        },
        startAngle: 321, //起始角度，支持范围[0, 360]。 //重要
        clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ["20%", "70%"],
        center: ["30%", "60%"],
        data: this.optionData,
        itemStyle: {
          opacity: 0,
        },
        top: "-20%",
        avoidLabelOverlap: true, //防止标签重叠
      });
      chartPanel.setOption(option);
    },
  },


};
</script>

<style lang="scss" scoped>
</style>