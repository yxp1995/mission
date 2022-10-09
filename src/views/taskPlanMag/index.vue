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
        </div>
        <div class="left-btm">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">任务编辑窗口</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <task-edit/>
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
            <div class="text-txt">任务规划</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <task-overview />
          </div>
        </div>
        <div class="center-btm">
          <product-selection />
        </div>
      </div>
      <div class="main-right">
        <div class="right-top">
          <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">使用分布</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
          <div class="main-container">
            <use-distribution />
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
// import taskEdit from "./taskEdit";
import productSelection from "./productSelection";
// import hintWindow from "./hintWindow";
import taskOverview from "./taskOverview";
import useDistribution from "./useDistribution";
import leftCollapse from "@/views/taskFlowPlan/components/leftCollapse";
import rightCollapse from "@/views/taskFlowPlan/components/rightCollapse";
export default {
  name: "TaskPlanMag",
  components: {
    // navigation,
    // taskEdit,
    productSelection,
    // hintWindow,
    taskOverview,
    useDistribution,
    leftCollapse,
    rightCollapse,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>