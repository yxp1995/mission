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
            流程计划窗口
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
            工序安排窗口
          </div>
          <div class="text-img2">
            <img src="~@/assets/images/seven.png" alt="" />
            <img src="~@/assets/images/nine.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="pro-container">
      <el-row :gutter="20">
        <el-col :span="4" class="linear-text">匹配任务名称:</el-col>
        <el-col :span="7">
          <el-select
            v-model="queryParams.taskName"
            filterable
            allow-create
            size="mini"
          >
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
          <el-select
            v-model="queryParams.taskNum"
            filterable
            allow-create
            size="mini"
          >
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
  </div>
</template>

<script>
export default {
  name: "WorkManagement",
  data() {
    return {
      count: 0,
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
      taskList: [],
      numList: [],
      planList: [],
      operationList: [
        { value: 1, label: "平常模式" },
        { value: 2, label: "加强模式" },
        { value: 3, label: "超常模式" },
      ],
      formatList: [
        { value: 1, label: "2013版式" },
        { value: 2, label: "2016版式" },
        { value: 3, label: "2022版式" },
        { value: 4, label: "自定义版式" },
      ],
      serveList: [
        { value: 1, label: "接收入库" },
        { value: 2, label: "战备转换" },
        { value: 3, label: "状态恢复" },
        { value: 4, label: "转运装车" },
        { value: 5, label: "A级测试" },
        { value: 6, label: "B级测试" },
      ],
      modelList: [
        { value: 1, label: "E型" },
        { value: 2, label: "S型" },
      ],
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
    height: calc(100% - 40px);
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
}
</style>