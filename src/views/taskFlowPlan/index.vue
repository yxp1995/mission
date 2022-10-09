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
        <!-- <div class="left-btm">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">流程管理</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <process-management/>
          </div>
        </div> -->
        <left-collapse />
      </div>
      <div class="main-center">
        <div class="center-top">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">流程计划</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <process-plan />
          </div>
        </div>
        <div class="center-btm">
          <work-management />
        </div>
      </div>
      <div class="main-right">
        <div class="right-top">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">任务分析</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <flow-data />
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
            <hint-window />
          </div>
        </div> -->
        <right-collapse />
      </div>
    </div>
  </div>
</template>

<script>
// import navigation from "./navigation";
// import processManagement from "./processManagement";
import workManagement from "./workManagement";
// import hintWindow from "./hintWindow";
import processPlan from "./processPlan";
import flowData from "./flowData";
import leftCollapse from "./components/leftCollapse";
import rightCollapse from "./components/rightCollapse";
export default {
  name: "TaskFlowPlan",
  components: {
    // navigation,
    // processManagement,
    leftCollapse,
    workManagement,
    // hintWindow,
    processPlan,
    flowData,
    rightCollapse,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>