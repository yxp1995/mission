<template>
  <div class="item-box" id="warning">
    <div class="text-title">
      <div class="text-img">
        <img src="~@/assets/images/eight.png" alt="" />
        <img src="~@/assets/images/seven.png" alt="" />
      </div>
      <div class="text-txt">系统帮助</div>
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
    <div class="collapse-body" :class="collapseCut ? '' : 'close'">
      <div class="container">提示内容</div>
      <div class="footer-btn">
        <el-button class="linear" size="mini">修改</el-button>
        <el-button class="linear" size="mini">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "help",
  data() {
    return {
      collapseCut: true,
      background: "",
    };
  },
  methods: {
    cut() {
      this.collapseCut = !this.collapseCut;
      // const dom = document.getElementById("warning");
      // if (this.collapseCut) {
      //   dom.style.background = ""
      //   const url = require("@/assets/images/sixteen.png");
      //   setTimeout(() => {
      //     dom.style.background = `url(${url}) no-repeat`;
      //     dom.style.backgroundSize = "100% 100%";
      //   }, 500);
      // } else {
      //   dom.style.background = ""
      //   const url = require("@/assets/images/twenty.png");
      //   setTimeout(() => {
      //     dom.style.background = `url(${url}) no-repeat`;
      //     dom.style.backgroundSize = "100% 100%";
      //   }, 500);
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
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
      line-height: 100px;
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