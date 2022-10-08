<template>
  <div class="item-box">
    <div class="text-title">
      <div class="text-img">
        <img src="~@/assets/images/eight.png" alt="" />
        <img src="~@/assets/images/seven.png" alt="" />
      </div>
      <div class="text-txt">操作提示</div>
      <div class="text-img">
        <img src="~@/assets/images/seven.png" alt="" />
        <img src="~@/assets/images/nine.png" alt="" />
      </div>
      <img
        src="~@/assets/images/nineTeen.png"
        alt=""
        class="title-icon"
        @click="cut"
      />
    </div>

    <div class="pollutions collapse-body" :class="collapseCut ? '' : 'close'">
      <!-- <ul class="th">
        <li>任务流程名称</li>
        <li>合理性建议</li>
        <li>待补充</li>
      </ul>
      <div class="seamless-warp">
        <ul class="item">
          <li v-for="(item, i) in unitOutList" :key="i">
            <span>{{ item.taskName }}</span>
            <span>{{ item.suggest }}</span>
            <span>{{ item.supplement }}</span>
          </li>
        </ul>
      </div> -->

      <div class="container">
        经系统数据验证，您的推演数据逻辑不完整，需要重新校正相关数据。
      </div>
      <div class="footer-btn">
        <el-button class="linear" size="mini">修改</el-button>
        <el-button class="linear" size="mini">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { rightCollapse } from "@/assets/jsonData";
export default {
  name: "Hint",
  data() {
    return {
      collapseCut: true,
      unitOutList: rightCollapse.unitOutList,
    };
  },
  methods: {
    cut() {
      this.collapseCut = !this.collapseCut;
    },
  },
};
</script>

<style lang="scss" scoped>

// .item-box {
//   width: 100%;
//   // background: url(~@/assets/images/sixteen.png) no-repeat;
//   border: 1px solid #053366;
//   box-shadow: 0 0 10px #053366 inset;
//   background-size: 100% 100%;
//   box-sizing: border-box;
//   padding: 10px 20px 10px 20px;
//   margin-bottom: 10px;
// }
// .collapse-body {
//   width: 100%;
//   height: 500px;
//   transition: height 0.5s ease;
//   overflow-y: auto;
// }
// .collapse-body.close {
//   height: 0px;
//   overflow: hidden;
//   transition: height 0.5s ease;
// }

.item-box {
  width: 100%;
  padding: 10px 20px 10px 20px;
  // background: url(~@/assets/images/sixteen.png) no-repeat;
  border: 1px solid #053366;
  box-shadow: 0 0 10px #053366 inset;
  background-size: 100% 100%;
  box-sizing: border-box;
  .collapse-body {
    width: 100%;
    height: 184px;
    transition: height 0.5s ease;
    overflow: hidden;
    .container {
      min-height: 100px;
      // line-height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
    .footer-btn {
      margin-top: 30px;
      .linear {
        background-image: linear-gradient(#d19afa, #8e96f4, #e1e3f7);
        color: #fff;
        &:nth-child(1) {
          margin-right: 20%;
        }
      }
    }
  }
  .linear-text {
    font-weight: 600;
    background-image: -webkit-linear-gradient(#66bdcc, #f3fcfa);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .collapse-body.close {
    height: 0px;
    overflow: hidden;
    transition: height 0.5s ease;
  }
}
</style>