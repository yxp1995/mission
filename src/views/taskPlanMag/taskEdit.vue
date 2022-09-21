<template>
  <div class="pro-box">
    <el-row :gutter="20">
      <el-col :span="7" class="linear-text"> 任务查询: </el-col>
      <el-col :span="8">
        <div class="btn">{{ "NO:" + process.num1 }}</div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="7" class="linear-text"> 任务修改: </el-col>
      <el-col :span="8">
        <div class="btn">{{ "NO:" + process.num2 }}</div>
      </el-col>
    </el-row>
    <div class="btn-footer">
      <el-button size="mini" class="linear">删除</el-button>
      <el-button size="mini" class="linear">更新</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskEdit",
  data() {
    return {
      process: {
        num1: 5678,
        num2: "手动输入",
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
    margin-top: 10px;
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
    }
  }
  .linear {
    background-image: linear-gradient(#d19afa, #8e96f4, #e1e3f7);
    color: #fff;
  }
  .linear-text {
    font-weight: 600;
    background-image: -webkit-linear-gradient(#66bdcc, #f3fcfa);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .btn-footer {
    margin-top: 20%;
    display: flex;
    justify-content: space-between;
    padding: 0 50px 0 20px;
  }
}
</style>