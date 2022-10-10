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
            选择产品窗口
          </div>
          <div class="text-img2">
            <img src="~@/assets/images/seven.png" alt="" />
            <img src="~@/assets/images/nine.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="pro-container" v-show="count == 0">
      <el-form
        :model="queryParams1"
        :rules="rules1"
        ref="queryParams1"
        label-width="118px"
        class="demo-ruleForm linear-text"
      >
        <el-row :gutter="20">
          <el-col :span="24" class="radio">
            <el-form-item label-width="0px">
              <el-radio v-model="queryParams1.radio" label="1">
                创建任务规划
              </el-radio>
              <el-radio v-model="queryParams1.radio" label="2">
                修改任务规划
              </el-radio>
              <el-radio v-model="queryParams1.radio" label="3">
                删除任务规划
              </el-radio>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="taskName" label="任务名称:">
              <el-input
                v-model="queryParams1.taskName"
                size="mini"
                v-if="queryParams1.radio == 1 || queryParams1.radio == 3"
              ></el-input>
              <el-select
                v-model="queryParams1.taskName"
                size="mini"
                v-if="queryParams1.radio == 2"
              ></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="taskNature" label="任务性质:">
              <el-select
                v-model="queryParams1.taskNature"
                size="mini"
                @change="natureChange"
              >
                <el-option
                  v-for="item in natureList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="taskNum" label="任务编号:">
              <el-input v-model="queryParams1.taskNum" size="mini"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="taskType" label="任务类型:">
              <el-select v-model="queryParams1.taskType" size="mini">
                <el-option
                  v-for="item in taskTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="startTime" label="任务开始时间:">
              <el-date-picker
                v-model="queryParams1.startTime"
                type="date"
                placeholder="选择开始时间"
                size="mini"
                popper-class="elDatePicker"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="endTime" label="任务结束时间:">
              <el-date-picker
                v-model="queryParams1.endTime"
                type="date"
                placeholder="选择结束时间"
                size="mini"
                popper-class="elDatePicker"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="chartsLocation" label="任务图例位置:">
              <el-input
                v-model="queryParams1.chartsLocation"
                size="mini"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="chartsColor" label="任务图例颜色:">
              <el-select v-model="queryParams1.chartsColor" size="mini">
                <el-option
                  v-for="item in colorList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="chartsWidth" label="任务图例宽度:">
              <el-input
                v-model="queryParams1.chartsWidth"
                size="mini"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="chartsBorder" label="任务图例边框:">
              <el-color-picker
                v-model="queryParams1.chartsBorder"
                size="mini"
              ></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="任务动用产品:">
              <el-button type="text" size="mini" @click="toProduct"
                >进入</el-button
              >
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="任务流程计划:">
              <el-button type="text" size="mini" @click="toTaskFlowPlan"
                >进入</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="footer-btn">
        <el-button class="linear" size="mini">确认</el-button>
        <el-button class="linear" size="mini">取消</el-button>
        <el-button class="linear" size="mini">下一项任务规划</el-button>
        <el-button class="linear" size="mini">完成</el-button>
      </div>
    </div>
    <div class="pro-container" v-show="count == 1">
      <el-form
        :model="queryParams2"
        :rules="rules2"
        ref="queryParams2"
        label-width="118px"
        class="demo-ruleForm linear-text"
      >
        <el-row :gutter="20">
          <el-col :span="24" class="radio">
            <el-radio
              v-model="queryParams2.radio"
              label="1"
              class="linear-text"
            >
              手动选择模式
            </el-radio>
            <el-radio
              v-model="queryParams2.radio"
              label="2"
              class="linear-text"
            >
              自动选择模式
            </el-radio>
            <el-radio
              v-model="queryParams2.radio"
              label="3"
              class="linear-text"
            >
              跳过选择产品
            </el-radio>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="taskName" label="匹配任务名称:">
              <el-select
                v-model="queryParams2.taskName"
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
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="taskNum" label="匹配任务编号:">
              <el-select
                v-model="queryParams2.taskNum"
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
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="type" label="选择产品类型:">
              <el-select v-model="queryParams2.type" size="mini">
                <el-option
                  v-for="item in typeList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="type" label="选择产品型号:">
              <el-select v-model="queryParams2.modelNumber" size="mini">
                <el-option
                  v-for="item in modelList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="planStartTime" label="计划动用时间:">
              <el-date-picker
                v-model="queryParams2.planStartTime"
                type="date"
                placeholder="选择开始时间"
                size="mini"
                popper-class="elDatePicker"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="planType" label="计划动用类型:">
              <el-select v-model="queryParams2.planType" size="mini">
                <el-option
                  v-for="item in planTypeList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="pitchNum" label="计划动用数量:">
              <el-input-number
                v-model="queryParams2.pitchNum"
                size="mini"
                controls-position="right"
              ></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="standbyNum" label="计划备用数量:">
              <el-input-number
                v-model="queryParams2.standbyNum"
                size="mini"
                controls-position="right"
              ></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="拟用产品核验:">
              <el-button type="text" size="mini" @click="productCheck"
                >进入</el-button
              >
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="任务流程计划:">
              <el-button type="text" size="mini" @click="toTaskFlowPlan"
                >进入</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="footer-btn">
        <el-button class="linear" size="mini">确认</el-button>
        <el-button class="linear" size="mini">取消</el-button>
        <el-button class="linear" size="mini">下一项任务规划</el-button>
        <el-button class="linear" size="mini">完成</el-button>
      </div>
    </div>
    <!-- 拟用产品核验弹窗 -->
    <el-dialog
      title="拟用产品核验窗口"
      :visible.sync="detailDialog"
      :show-close="true"
      center
      width="1000px"
    >
      <product-check @setDetailModal="setDetailModal"/>
    </el-dialog>
  </div>
</template>

<script>
import productCheck from "./productCheck";
export default {
  name: "ProductSelection",
  components: {
    productCheck,
  },
  data() {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("任务名称不能为空"));
      }
      if (value.length > 10) {
        callback(new Error("不能超过10个字符"));
      } else {
        callback();
      }
    };
    return {
      count: 0,
      rules1: {
        taskName: [
          {
            validator: checkAge,
            required: true,
            trigger: "change",
          },
        ],
        taskNature: [
          { required: true, message: "请选择任务性质", trigger: "change" },
        ],
        taskNum: [
          { required: true, message: "请输入任务编号", trigger: "blur" },
        ],
        taskType: [
          { required: true, message: "请选择任务类型", trigger: "change" },
        ],
        startTime: [
          { required: true, message: "请选择开始时间", trigger: "change" },
        ],
        endTime: [
          { required: true, message: "请选择结束时间", trigger: "change" },
        ],
        chartsLocation: [
          { required: true, message: "请输入图例位置", trigger: "blur" },
        ],
        chartsColor: [
          { required: true, message: "请选择图例颜色", trigger: "change" },
        ],
        chartsWidth: [
          { required: true, message: "请输入图例宽度", trigger: "blur" },
        ],
        chartsBorder: [
          { required: true, message: "请选择图例边框颜色", trigger: "change" },
        ],
      },
      rules2: {
        taskName: [
          { required: true, message: "请选择任务名称", trigger: "change" },
        ],
        taskNum: [
          { required: true, message: "请选择任务编号", trigger: "change" },
        ],
        type: [
          { required: true, message: "请选择产品类型", trigger: "change" },
        ],
        modelNumber: [
          { required: true, message: "请选择产品型号", trigger: "change" },
        ],
        planStartTime: [
          { required: true, message: "请选择计划动用时间", trigger: "change" },
        ],
        planType: [
          { required: true, message: "请选择计划动用类型", trigger: "change" },
        ],
        pitchNum: [
          { required: true, message: "请输入计划动用数量", trigger: "blur" },
        ],
        standbyNum: [
          { required: true, message: "请选择计划备用数量", trigger: "blur" },
        ],
      },
      queryParams1: {
        radio: "1",
        taskName: undefined,
        taskNature: 1,
        taskNum: undefined,
        taskType: undefined,
        startTime: undefined,
        endTime: undefined,
        chartsLocation: undefined,
        chartsColor: undefined,
        chartsWidth: undefined,
        chartsBorder: undefined,
      },
      natureList: [
        { value: 1, label: "全部" },
        { value: 2, label: "实战实用" },
        { value: 3, label: "巡逻值班" },
        { value: 4, label: "接送产品" },
        { value: 5, label: "贮存保障" },
        { value: 6, label: "考核训练" },
      ],
      taskTypeList: [
        { value: 1, label: "全部" },
        { value: 2, label: "抽检实验" },
        { value: 3, label: "战训打靶" },
        { value: 4, label: "海域巡逻" },
        { value: 5, label: "战备转换" },
        { value: 6, label: "状态恢复" },
        { value: 7, label: "HHM接送" },
        { value: 8, label: "HHN接送" },
        { value: 9, label: "年度检验" },
        { value: 10, label: "实装训练" },
      ],
      colorList: [
        { value: 1, label: "红色" },
        { value: 2, label: "橙色" },
        { value: 3, label: "黄色" },
        { value: 4, label: "蓝色" },
        { value: 5, label: "绿色" },
      ],
      detailDialog: false,
      queryParams2: {
        radio: "1",
        taskName: undefined,
        taskNum: undefined,
        type: undefined,
        modelNumber: undefined,
        planStartTime: undefined,
        planType: undefined,
        pitchNum: undefined,
        standbyNum: undefined,
      },
      planTypeList: [
        { value: 1, label: "出库装车" },
        { value: 2, label: "返回检修" },
        { value: 3, label: "入库检测" },
        { value: 4, label: "接收送修" },
        { value: 5, label: "年度检验" },
      ],
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
    // 规划任务窗口 start
    natureChange(val) {
      if (val == 1) {
        this.queryParams1.chartsColor = undefined;
      } else {
        this.queryParams1.chartsColor = val - 1;
      }
    },
    toProduct() {
      this.count = 1;
    },
    // 规划任务窗口 end
    // 选择产品窗口 start
    productCheck() {
      this.detailDialog = true;
    },
    setDetailModal(val) {
      this.detailDialog = val;
    },
    // 选择产品窗口 end
    // 公用
    toTaskFlowPlan() {
      this.$router.push({
        path: "/taskFlowPlan",
      });
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
        &.radio {
          text-align: left;
          margin-left: 3%;
        }
      }
    }
    .linear-text {
      :deep(.el-form-item__label) {
        font-weight: 600;
        background-image: -webkit-linear-gradient(#66bdcc, #f3fcfa);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      :deep(.el-form-item__label) {
        &::before {
          display: none;
        }
      }
      :deep(.el-radio__label) {
        font-weight: 600;
        background-image: -webkit-linear-gradient(#66bdcc, #f3fcfa);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .el-color-picker {
      vertical-align: middle;
    }
    .footer-btn {
      margin-top: 20px;
      margin-bottom: 20px;
      .linear {
        background-image: linear-gradient(#d19afa, #8e96f4, #e1e3f7);
        color: #fff;
        margin-right: 5%;
      }
    }
  }
}
</style>