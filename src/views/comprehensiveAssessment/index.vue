<template>
  <div class="datacommon-container">
    <div class="main">
      <div class="main-left">
        <!-- <div class="left-top">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">导航窗口</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <navigation />
          </div>
        </div> -->
        <!-- <div class="left-center">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">任务选择窗口</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <task-choose />
          </div>
        </div> -->
        <!-- <div class="left-btm">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">指标选择</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <task-edit />
          </div>
        </div> -->
        <left-collapse/>
      </div>
      <div class="main-center">
        <div class="center-top">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">年度任务性能评估</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <middle-bar />
          </div>
        </div>

        <div class="center-btm">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">年度任务强度分析</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <task-detail />
          </div>
        </div>

        <div class="center-bottom">
          <div class="center-bottom-left">
            <div class="text-title">
              <div class="text-img">
                <img src="~@/assets/images/eight.png" alt="" />
                <img src="~@/assets/images/seven.png" alt="" />
              </div>
              <div class="text-txt">任务风险系数对比</div>
              <div class="text-img">
                <img src="~@/assets/images/seven.png" alt="" />
                <img src="~@/assets/images/nine.png" alt="" />
              </div>
            </div>
            <div class="main-container">
               <task-time-2 />
         
            </div>
          </div>
          <div class="center-bottom-right">
            <div class="text-title">
              <div class="text-img">
                <img src="~@/assets/images/eight.png" alt="" />
                <img src="~@/assets/images/seven.png" alt="" />
              </div>
              <div class="text-txt">产品使用时域分布</div>
              <div class="text-img">
                <img src="~@/assets/images/seven.png" alt="" />
                <img src="~@/assets/images/nine.png" alt="" />
              </div>
            </div>
            <div class="main-container">
                   <task-time-1 />
            </div>
          </div>
        </div>
      </div>

      <div class="main-right">
        <div class="right-top">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">产品战储分布</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>

          <div class="main-container">
            <using-distribution />
          </div>
        </div>
        <!-- <div class="right-btm">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">提示窗口</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <prompt />
          </div>
        </div> -->
        <right-collapse/>
      </div>
    </div>
  </div>
</template>

<script>
// import navigation from "../taskFlowPlan/navigation.vue";
import usingDistribution from "./usingDistribution.vue";
// import prompt from "./prompt.vue";
// import taskEdit from "./taskEdit.vue";
import TaskDetail from "./taskDetail.vue";
import middleBar from "./middleBar.vue";
// import TaskChoose from "./taskChoose.vue";
import TaskTime1 from "./taskTime1.vue";
import TaskTime2 from "./taskTime2.vue";
import leftCollapse from "../taskFlowPlan/components/leftCollapse.vue"
import rightCollapse from "../taskFlowPlan/components/rightCollapse.vue"
export default {
  name: "OperationalUsageSituation",
  components: {
    // navigation,
    usingDistribution,
    // prompt,
    // taskEdit,
    TaskDetail,
    middleBar,
    // TaskChoose,
    TaskTime1,
    TaskTime2,
    leftCollapse,
    rightCollapse,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

ul {
  margin: 0px;
  padding: 0px;
}

li {
  list-style: none;
}

.datacommon {
  width: 100%;
  height: 100vh;
  min-width: 1366px;
  min-height: 768;
  background: url(../../assets/images/three.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;

  .leftImg {
    position: absolute;
    height: 110px;
    left: 20px;
    bottom: 30px;
  }

  .rightImg {
    position: absolute;
    height: 110px;
    right: 20px;
    bottom: 30px;
  }

  .datacommon-frame {
    height: calc(100% - 50px);
    width: calc(100% - 70px);
    margin: 25px auto;
    background: url(../../assets/images/five.png) no-repeat;
    background-size: 100% 100%;

    .datacommon-title {
      width: 60%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      // background: url(~@/assets/images/four.png) no-repeat;
      // background-size: 100% 100px;

      .title-txt {
        color: #fff;
        font-size: 28px;
        font-weight: 600;
      }

      .title-img {
        height: 21px;
      }
    }
  }

  .datacommon-container {
    width: calc(100% - 30px);
    height: calc(100% - 143px);
    margin: 25px 15px 0px 15px;

    .main {
      display: flex;
      justify-content: space-between;
      height: 100%;

      .main-left {
        width: calc(25% - 30px);
        height: 100%;

        .left-top {
          height: 35%;
          padding: 0 10px;
          background: url(~@/assets/images/sixteen.png) no-repeat;
          background-size: 100% 100%;
        }

        .left-center {
          height: 35%;
          padding: 0 10px;
          background: url(~@/assets/images/sixteen.png) no-repeat;
          background-size: 100% 100%;
        }

        .left-btm {
          height: 30%;
          padding: 0 10px;
          background: url(~@/assets/images/sixteen.png) no-repeat;
          background-size: 100% 100%;
          margin-top: 1%;
        }
      }

      .main-center {
        width: 50%;
        height: 100%;
        .center-top {
          height: 45%;
          background: url(~@/assets/images/seventeen.png) no-repeat;
          background-size: 100% 100%;
        }

        .center-btm {
          height: 24%;
          background: url(~@/assets/images/seventeen.png) no-repeat;
          background-size: 100% 100%;
        }
        .center-bottom {
          height: 28%;
          background: url(~@/assets/images/seventeen.png) no-repeat;
          background-size: 100% 100%;

          display: flex;
          .center-bottom-left {
            height: 100%;
            width: 50%;
            background: url(~@/assets/images/seventeen.png) no-repeat;
            background-size: 100% 100%;
          }
          .center-bottom-right {
            height: 100%;
            width: 50%;
            background: url(~@/assets/images/seventeen.png) no-repeat;
            background-size: 100% 100%;
          }
        }
      }

      .main-right {
        width: calc(25% - 30px);
        height: 100%;

        .right-top {
          height: 58%;
          padding: 0 10px;
          background: url(~@/assets/images/sixteen.png) no-repeat;
          background-size: 100% 100%;
        }

        .right-btm {
          height: 38%;
          padding: 0 10px;
          background: url(~@/assets/images/sixteen.png) no-repeat;
          background-size: 100% 100%;
          margin-top: 4%;
        }
      }

      .main-container {
        padding: 10px 20px;
        height: calc(100% - 70px);
        margin-top: 10px;
      }

      .text-title {
        display: flex;
        justify-content: space-between;
        width: 270px;
        height: 40px;
        line-height: 40px;
        margin: auto;

        .text-txt {
          font-size: 16px;
          color: #fff;
        }

        .text-img {
          img {
            vertical-align: middle;
          }
        }
      }
    }
  }

  .datacommon-nav {
    display: flex;
    width: 40%;
    margin: auto;

    li {
      flex: 1;
      height: 40px;
      line-height: 40px;
      color: #ffffff;
      overflow: hidden;
      background: url(~@/assets/images/twelve.png) no-repeat left 0px top 0px;
      background-size: 100% 100%;

      &.active {
        background: url(~@/assets/images/fourteen.png) no-repeat left 0px top
          0px;
        background-size: 100% 100%;
      }
    }
  }

  .pollutions {
    height: 100%;

    .th {
      font-size: 14px;
      min-height: 30px;
      display: flex;

      li {
        flex: 1;
        text-align: center;
        color: #09e7f1;
        background: rgba(7, 169, 201, 0.2);
        line-height: 30px;
      }
    }

    .seamless-warp {
      font-size: 14px;
      height: calc(100% - 30px);
      overflow: auto;

      .item li {
        min-height: 30px;
        line-height: 30px;
        display: flex;
        padding: 5px 0;

        span {
          flex: 1;
          text-align: center;
          color: #fff;
          font-size: 14px;

          img {
            position: relative;
            top: 4px;
            margin-right: 2px;
          }
        }

        .red {
          color: #ff0202;
        }
      }

      .item li:nth-child(2n) {
        background: rgba(7, 169, 201, 0.1);
      }
    }
  }
}

//滚动条整体样式
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background-color: #010a27;
}

//滚动条滑块的样式
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20%;
}

//两个滚动条交叉处的样式
::-webkit-scrollbar-corner {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>