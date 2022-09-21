<template>
  <div class="box">
    <!-- <div id="main" class="bar"></div> -->
    雷达图
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
        //  this.getBar();
      // console.log(canvas);
     
    // });
  },
  methods: {
    getBar() {
       var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: function (params) {
      let tar;
      if (params[1].value !== '-') {
        tar = params[1];
      } else {
        tar = params[0];
      }
      return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
    }
  },

  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
    // show:true,
    // backgroundColor:"black"

  },
  xAxis: {
    type: 'category',
    name: '日期',
    nameLocation: 'start',
    data: (function () {
      let list = [];
      for (let i = 1; i <= 12; i++) {
        list.push(i);
      }
      return list;
    })()
  },
  yAxis: {
    type: 'value',
    name: '任务编号'
  },
  series: [
    {
      name: '任务1',
      type: 'bar',
      stack: 'Total',
      itemStyle: {
        borderColor: 'transparent',
        color: 'transparent'
      },
      emphasis: {
        // itemStyle: {
        //   borderColor: 'transparent',
        //   color: 'transparent'
        // }
      },
      data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
    },
    {
      name: '任务2',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
    },
    {
      name: '任务3',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'bottom'
      },
      data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
    }
  ]
};

option && myChart.setOption(option);

    },
  },
};
</script>

<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 263px;
  background-color: black;
}
 
</style>