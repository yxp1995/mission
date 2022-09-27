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
            <div class="text-txt">显控窗口</div>
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
            <div class="text-txt">作战使用态势</div>
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
          <!-- <div class="text-title">
            <div class="text-img">
              <img src="~@/assets/images/eight.png" alt="" />
              <img src="~@/assets/images/seven.png" alt="" />
            </div>
            <div class="text-txt">任务详情</div>
            <div class="text-img">
              <img src="~@/assets/images/seven.png" alt="" />
              <img src="~@/assets/images/nine.png" alt="" />
            </div>
          </div>
    <div class="main-container">
            <task-detail />
          </div> -->
             <detail/>
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
import detail  from "./components/detail.vue"
import middleBar from "./middleBar.vue"
import leftCollapse from "../taskFlowPlan/components/leftCollapse.vue";
import rightCollapse from "../taskFlowPlan/components/rightCollapse.vue"
export default {
  name: "OperationalUsageSituation",
  components: {
    // navigation,
    usingDistribution,
    // prompt,
    // taskEdit,
    detail,
    middleBar,
    leftCollapse,
    rightCollapse
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.center-top{
  height: 55%!important;
}
.center-btm{
  height: 45%!important;
}
</style>