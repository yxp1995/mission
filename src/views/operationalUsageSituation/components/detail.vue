<template>
  


<div class="pro-box">
    <div class="pro-tab">
      <div style="display: flex">
        <div class="text-title2" @click="chooseTask">
          <div class="text-img2">
            <img src="~@/assets/images/eight.png" alt="" />
            <img src="~@/assets/images/seven.png" alt="" />
          </div>
          <div class="text-txt2" :style="count == 0 ? 'color: #09e7f1' : ''">
            任务详情
          </div>
          <div class="text-img2">
            <img src="~@/assets/images/seven.png" alt="" />
            <img src="~@/assets/images/nine.png" alt="" />
          </div>
        </div>

        <div class="text-title2" @click="chooseProduct">
          <div class="text-img2">
            <img src="~@/assets/images/eight.png" alt="" />
            <img src="~@/assets/images/seven.png" alt="" />
          </div>
          <div class="text-txt2" :style="count == 1 ? 'color: #09e7f1' : ''">
            产品详情
          </div>
          <div class="text-img2">
            <img src="~@/assets/images/seven.png" alt="" />
            <img src="~@/assets/images/nine.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="pro-container">
      <task-deatil v-if="count == 0" />
      <product-deatil v-if="count == 1" />
      <div class="footer-btn">
        
             <el-button class="linear" size="mini">上一页</el-button>
      <el-button class="linear" size="mini">下一页</el-button>
      <el-button class="linear" size="mini">标记</el-button>
      <el-button class="linear" size="mini">确认</el-button>
      <el-button class="linear" size="mini">编辑</el-button>
      <el-button class="linear" size="mini">下一步</el-button>
      </div>
    </div>
  </div>





     
 
</template>

<script>
import taskDeatil from "./taskDetail.vue";
import productDeatil from "./productDetail.vue";
export default {
  name: "detail",
  components: {
    taskDeatil,
    productDeatil,
  },
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    chooseProduct() {
      this.count = 1;
    },
    chooseTask() {
      this.count = 0;
    },
  },

  destroyed() {
    this.count = 0;
  },
};
</script>

<style lang="scss" scoped>
 .pro-box {
  height: 100%;
  color: #fff;
  .pro-tab {
    .text-title2 {
      display: flex;
      justify-content: space-between;
      width: 270px;
      height: 40px;
      line-height: 40px;
      margin-right: 15px;
      margin-left: 10px;
      cursor: pointer;

      .text-txt2 {
        font-size: 16px;
        color: #fff;
      }

      .text-img2 {
        img {
          vertical-align: middle;
        }
      }

      .title-icon2 {
        width: 16px;
        height: 16px;
        position: absolute;
        right: 20px;
        top: 22px;
        cursor: pointer;
      }
    }
  }
  .pro-container {
    height: 150px;
    overflow: auto;
    
    .linear-text {
      font-weight: 600;
      background-image: -webkit-linear-gradient(#66bdcc, #f3fcfa);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .footer-btn {
      margin-top: 20px;
      .linear {
        background-image: linear-gradient(#d19afa, #8e96f4, #e1e3f7);
        color: #fff;
        
      }
    }
  }
}
</style>