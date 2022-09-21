<template>
  <div class="pro-box">
    <el-row :gutter="20">
      <el-col :span="7">
        匹配任务:
      </el-col>
      <el-col :span="14">
        <div class="btn">{{process.num1}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ProcessManagement",
  data() {
    return {
      process: {
        num1: 5678,
        num2: 5678,
        num3: 5678,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-box {
  height: 100%;
  color: #fff;
}
</style>