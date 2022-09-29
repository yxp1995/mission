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
            规划任务窗口
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
            自动选择模式
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
  </div>
</template>

<script>
export default {
  name: "ProductSelection",
  data() {
    return {
      count: 0,
      queryParams: {
        radio: "1",
        taskName: undefined,
        taskNum: undefined,
        type: undefined,
        modelNumber: undefined,
        pitchNum: undefined,
        standbyNum: undefined,
      },
      taskList: [],
      numList: [],
      typeList: [
        { value: 1, label: "抽试" },
        { value: 2, label: "真品" },
        { value: 3, label: "训练" },
        { value: 4, label: "模拟" },
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
}
</style>