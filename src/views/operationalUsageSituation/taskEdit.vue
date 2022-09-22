<template>
  <div class="pro-box">
    <div class="top">显示范围调整</div>
    <el-slider v-model="value" :show-tooltip="false"></el-slider>

    <div class="top">显示内容选择</div>

    <el-row :gutter="30">
      <el-col :span="10">
        <div class="btn">{{ "NO:" + process.num2 }}</div>
      </el-col>
      <el-col :span="10">
        <div class="add" @click="addClick(2)">+</div>
        <div class="minus" @click="minusClick(2)">-</div>
      </el-col>

      <el-col :span="8">
        <el-button  size="mini" class="linear">单独显示</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="10">
        <div class="btn">{{ "NO:" + process.num3 }}</div>
      </el-col>
      <el-col :span="10">
        <div class="add" @click="addClick(3)">+</div>
        <div class="minus" @click="minusClick(3)">-</div>
      </el-col>
      <el-col :span="8">
        <el-button   size="mini" class="linear">单独显示</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TaskEdit",
  data() {
    return {
      process: {
        num1: 5678,
        num2: 5678,
        num3: 5678,
      },
      query: {
        content: undefined,
      },
      value: 33,
    };
  },
  methods: {
    addClick(num) {
      this.process[`num${num}`]++;
    },
    minusClick(num) {
      this.process[`num${num}`]--;
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  text-align: left;
}

.pro-box {
  height: 100%;
  color: #fff;
  overflow: auto;
  .el-row {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .el-col {
      height: 32px;
      line-height: 32px;
      &:nth-child(1) {
        text-align: right;
      }
      &:nth-child(2) {
        text-align: left;
      }
      &:nth-child(3) {
        text-align: left;
      }
      .btn {
        width: 100%;
        height: 30px;
        border: 1px solid #07dbff;
        text-align: center;
        box-shadow: 0 0 10px 2px #07dbff inset;
      }
      .add {
        display: inline-block;
        width: 30px;
        height: 20px;
        line-height: 20px;
        background: #253449;
        color: #27abec;
        font-size: 18px;
        border-radius: 10px 0 0 10px;
        border-right: 1px solid #3d4957;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        margin-top: 8px;
      }
      .minus {
        display: inline-block;
        width: 30px;
        height: 20px;
        line-height: 17px;
        background: #253449;
        color: #27abec;
        font-size: 18px;
        border-radius: 0px 10px 10px 0;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        margin-top: 8px;
      }
    }
  }
  .linear {
    background-image: linear-gradient(#d19afa, #8e96f4, #e1e3f7);
    color: #fff;
  }
}
</style>