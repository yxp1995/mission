 <template>
  <div class="box">
    <div id="all2"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {comprehensiveAssessment} from "../../assets/jsonData"
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
          data:comprehensiveAssessment.taskDetail.xAxisData,
          show: true,
          name:"日期",
           axisLabel: {
            color: "#fff",
            fontSize: 10,
          },
        },
        yAxis: {
          show: true,
          name:"人次",
           axisLabel: {
            color: "#fff",
            fontSize: 10,
          },
        },
        series: [
          {
            name: "人次",
            type: "line",

            data: comprehensiveAssessment.taskDetail.series1,
          },
          // {
          //   name: "已检测",
          //   type: "line",

          //   data: comprehensiveAssessment.taskDetail.series2,
          // },
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
  width: 100%;
  height: 140px;
}
</style>