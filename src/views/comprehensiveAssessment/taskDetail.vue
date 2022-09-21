 <template>
  <div class="box">
    <div id="all2"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "TaskDetail",
  data() {
    return {};
  },
  mounted() {
    this.getLine2();
  },
  methods: {
    getLine2() {
      var chartDom = document.getElementById("all2");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "axis",
        },
        // legend: {
        //   data: [
        //     {
        //       name: "已检测",
        //       icon: "rect", //图例形状
        //     },
        //     {
        //       name: "认证中",
        //       icon: "rect", //图例形状
        //     },
        //   ],
        // },
        grid: {
          left: "0",
          top: "0",
          containLabel: true,
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1", "2", "3", "4", "5", "6"],

          show: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            name: "认证中",
            type: "line",

            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "已检测",
            type: "line",

            data: [150, 232, 201, 154, 190, 330, 410],
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
#all2 {
  width: 670px;
  height: 120px;
}
</style>