<template>
  <div class="pro-box">
    <el-row :gutter="20">
      <el-col :span="4">项目名称:</el-col>
      <el-col :span="7">
        <div class="btn">{{ "NO:" + process.num1 }}</div>
      </el-col>
      <el-col :span="4">项目人数:</el-col>
      <el-col :span="7">
        <div class="btn">{{ process.num2 }}</div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">流程起始时间:</el-col>
      <el-col :span="7">
        <div class="btn">{{ process.num2 }}</div>
      </el-col>
      <el-col :span="4">流程结束时间:</el-col>
      <el-col :span="7">
        <div class="btn">{{ process.num2 }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "WorkManagement",
  data() {
    return {
      process: {
        num1: 5678,
        num2: "手动输入",
        num3: "手动输入",
        num4: "手动输入",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.pro-box {
  height: 100%;
  color: #fff;
  overflow: auto;
  .el-row {
    margin-top: 20px;
    .el-col {
      height: 32px;
      line-height: 32px;
      &:nth-child(2n+1) {
        text-align: right;
      }
      &:nth-child(2n) {
        text-align: left;
      }
      .btn {
        width: 100%;
        height: 30px;
        border: 1px solid #07dbff;
        text-align: center;
        box-shadow: 0 0 10px 2px #07dbff inset;
      }
    }
  }
}
</style>