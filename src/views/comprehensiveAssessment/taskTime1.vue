<template>
   <div class="box">
    <div id="main"></div>
   </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "TaskTime1",
  data() {
    return {
     
       
    };
  },
  mounted(){
    this.getBar()
  },
  methods: {
    getBar(){
      var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: [
      {
        name: '已认证',
        icon: 'rect' //图例形状
      },
      {
        name: '已检测',
        icon: 'rect' //图例形状
      },
      {
        name: '认证中',
        icon: 'rect' //图例形状
      }
    ]
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['5月份', '6月份', '7月份', '8月份', '9月份', '10月份']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '单位 / 个'
    }
  ],
  series: [
    {
      name: '已认证',
      type: 'bar',
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }, //设置柱子圆角
      data: [320, 332, 301, 334, 390, 330, 320, 110, 150, 250, 210, 100]
    },

    {
      name: '已检测',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      },
      data: [150, 232, 201, 154, 190, 330, 410, 510, 450, 750, 910, 600]
    },
    {
      name: '认证中',
      type: 'bar',
      data: [
        862, 1018, 964, 1026, 1679, 1600, 1570, 1110, 1250, 2250, 2110, 1000
      ],
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
      // markLine: {
      //   lineStyle: {
      //     type: 'dashed'
      //   },
      //   data: [[{ type: 'min' }, { type: 'max' }]]
      // }
    }
  ],
  color: ['#3366CC', '#FFCC99', '#99CC33']
};

option && myChart.setOption(option);

    }
  },
};
</script>

<style lang="scss" scoped>
.box{
  height: 100%;
  overflow: auto;
}
  #main{
    width: 280px;
    height: 200px;
  }
</style>