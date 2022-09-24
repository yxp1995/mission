<template>
  <div class="pro-box">
    <el-row :gutter="20">
      <el-col :span="24" class="radio">
        <el-radio v-model="queryParams.radio" label="1" class="linear-text">
          手动选择模式
        </el-radio>
        <el-radio v-model="queryParams.radio" label="2" class="linear-text">
          自动选择模式
        </el-radio>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" class="linear-text">匹配任务名称:</el-col>
      <el-col :span="7">
        <el-select v-model="queryParams.taskName" size="mini">
          <el-option
            v-for="item in taskList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="linear-text">匹配任务编号:</el-col>
      <el-col :span="7">
        <el-select v-model="queryParams.taskNum" size="mini">
          <el-option
            v-for="item in numList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" class="linear-text">产品类型:</el-col>
      <el-col :span="7">
        <el-select v-model="queryParams.type" size="mini">
          <el-option
            v-for="item in typeList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="linear-text">产品型号:</el-col>
      <el-col :span="7">
        <el-select v-model="queryParams.modelNumber" size="mini">
          <el-option
            v-for="item in modelList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" class="linear-text">选用数量:</el-col>
      <el-col :span="7">
        <el-input v-model="queryParams.pitchNum" size="mini"></el-input>
      </el-col>
      <el-col :span="4" class="linear-text">备用数量:</el-col>
      <el-col :span="7">
        <el-input v-model="queryParams.standbyNum" size="mini"></el-input>
      </el-col>
    </el-row>
    <div class="footer-btn">
      <el-button class="linear" size="mini">进入</el-button>
      <el-button class="linear" size="mini">确认</el-button>
      <el-button class="linear" size="mini">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSelection",
  data() {
    return {
      queryParams: {
        radio: "1",
        taskName: undefined,
        taskNum: undefined,
        type: undefined,
        modelNumber: undefined,
        pitchNum: undefined,
        standbyNum: undefined,
      },
      taskList: [
        { value: 1, label: "任务1" },
        { value: 2, label: "任务2" },
      ],
      numList: [
        { value: 1, label: "编号1" },
        { value: 2, label: "编号2" },
      ],
      typeList: [
        { value: 1, label: "类型1" },
        { value: 2, label: "类型2" },
      ],
      modelList: [
        { value: 1, label: "型号1" },
        { value: 2, label: "型号2" },
      ],
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
      &:nth-child(2n + 1) {
        text-align: right;
      }
      &:nth-child(2n) {
        text-align: left;
      }
      &.radio {
        text-align: left;
        margin-left: 3%;
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
  .footer-btn {
    margin-top: 20px;
    .linear {
      background-image: linear-gradient(#d19afa, #8e96f4, #e1e3f7);
      color: #fff;
      &:nth-child(1) {
        margin-right: 5%;
      }
      &:nth-child(2) {
        margin-right: 5%;
      }
    }
  }
}
</style>