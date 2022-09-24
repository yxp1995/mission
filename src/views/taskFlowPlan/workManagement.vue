<template>
  <div class="pro-box">
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
      <el-col :span="4" class="linear-text">流程计划名称:</el-col>
      <el-col :span="7">
        <el-input v-model="queryParams.planName" size="mini"></el-input>
      </el-col>
      <el-col :span="4" class="linear-text">流程计划编号:</el-col>
      <el-col :span="7">
        <el-select v-model="queryParams.planNum" size="mini">
          <el-option
            v-for="item in planList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" class="linear-text">流程运行模式:</el-col>
      <el-col :span="7">
        <el-select v-model="queryParams.operation" size="mini">
          <el-option
            v-for="item in operationList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="linear-text">流程文件版式:</el-col>
      <el-col :span="7">
        <el-select v-model="queryParams.fileFormat" size="mini">
          <el-option
            v-for="item in formatList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4" class="linear-text">流程服务类别:</el-col>
      <el-col :span="7">
        <el-select v-model="queryParams.serveType" size="mini">
          <el-option
            v-for="item in serveList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="linear-text">通用产品型号:</el-col>
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
      <el-col :span="4" class="linear-text">计划开始时间:</el-col>
      <el-col :span="7">
        <el-date-picker
          v-model="queryParams.startTime"
          type="date"
          placeholder="选择日期"
          popper-class="elDatePicker"
          size="mini"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="4" class="linear-text">计划结束时间:</el-col>
      <el-col :span="7">
        <el-date-picker
          v-model="queryParams.endTime"
          type="date"
          placeholder="选择日期"
          popper-class="elDatePicker"
          size="mini"
        >
        </el-date-picker>
      </el-col>
    </el-row>
    <div class="footer-btn">
      <el-button class="linear" size="mini">确认</el-button>
      <el-button class="linear" size="mini">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkManagement",
  data() {
    return {
      queryParams: {
        taskName: undefined,
        taskNum: undefined,
        planName: undefined,
        planNum: undefined,
        operation: undefined,
        fileFormat: undefined,
        serveType: undefined,
        modelNumber: undefined,
        startTime: undefined,
        endTime: undefined,
      },
      taskList: [
        { value: 1, label: "任务1" },
        { value: 2, label: "任务2" },
      ],
      numList: [
        { value: 1, label: "编号1" },
        { value: 2, label: "编号2" },
      ],
      planList: [
        { value: 1, label: "编号1" },
        { value: 2, label: "编号2" },
      ],
      operationList: [
        { value: 1, label: "模式1" },
        { value: 2, label: "模式2" },
      ],
      formatList: [
        { value: 1, label: "文件版式1" },
        { value: 2, label: "文件版式2" },
      ],
      serveList: [
        { value: 1, label: "服务1" },
        { value: 2, label: "服务2" },
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
        margin-right: 10%;
      }
    }
  }
}
</style>