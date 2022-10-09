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
                创建流程计划
              </el-radio>
              <el-radio v-model="queryParams1.radio" label="2">
                修改流程计划
              </el-radio>
              <el-radio v-model="queryParams1.radio" label="3">
                跳过流程计划
              </el-radio>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="taskName" label="匹配任务名称:">
              <el-select
                v-model="queryParams1.taskName"
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
                v-model="queryParams1.taskNum"
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
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="planName" label="流程计划名称:">
              <el-input v-model="queryParams1.planName" size="mini"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="planNum" label="流程计划编号:">
              <el-select v-model="queryParams1.planNum" size="mini">
                <el-option
                  v-for="item in planList"
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
            <el-form-item prop="operation" label="流程运行模式:">
              <el-select v-model="queryParams1.operation" size="mini">
                <el-option
                  v-for="item in operationList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="fileFormat" label="流程文件版式:">
              <el-select v-model="queryParams1.fileFormat" size="mini">
                <el-option
                  v-for="item in formatList"
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
            <el-form-item prop="serveType" label="流程服务类别:">
              <el-select v-model="queryParams1.serveType" size="mini">
                <el-option
                  v-for="item in serveList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="modelNumber" label="通用产品型号:">
              <el-select v-model="queryParams1.modelNumber" size="mini">
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
            <el-form-item prop="startTime" label="计划开始时间:">
              <el-date-picker
                v-model="queryParams1.startTime"
                type="date"
                placeholder="选择日期"
                popper-class="elDatePicker"
                size="mini"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="startTime" label="计划结束时间:">
              <el-date-picker
                v-model="queryParams1.endTime"
                type="date"
                placeholder="选择日期"
                popper-class="elDatePicker"
                size="mini"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="任务规划选择:">
              <el-button type="text" size="mini" @click="toTaskPlanMag"
                >进入</el-button
              >
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="操作工序安排:">
              <el-button type="text" size="mini" @click="toProcess"
                >进入</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="footer-btn">
        <el-button class="linear" size="mini">确认</el-button>
        <el-button class="linear" size="mini">取消</el-button>
        <el-button class="linear" size="mini">下一项任务流程</el-button>
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
            <el-form-item label-width="0px">
              <el-radio v-model="queryParams2.radio" label="1">
                创建操作工序
              </el-radio>
              <el-radio v-model="queryParams2.radio" label="2">
                修改操作工序
              </el-radio>
              <el-radio v-model="queryParams2.radio" label="3">
                跳过操作工序
              </el-radio>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="processName" label="匹配流程名称:">
              <el-select
                v-model="queryParams2.processName"
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
            <el-form-item prop="processNum" label="匹配流程编号:">
              <el-select
                v-model="queryParams2.processNum"
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
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="procedureName" label="工序(组合)名称:">
              <el-select v-model="queryParams2.procedureName" size="mini">
                <el-option
                  v-for="item in procedureList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="procedureOperate" label="工序操作对象:">
              <el-select v-model="queryParams2.procedureOperate" size="mini">
                <el-option
                  v-for="item in operateList"
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
            <el-form-item prop="front" label="前向工序名称:">
              <el-select v-model="queryParams2.front" size="mini">
                <el-option
                  v-for="item in frontList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="later" label="工序操作对象:">
              <el-select v-model="queryParams2.later" size="mini">
                <el-option
                  v-for="item in frontList"
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
            <el-form-item prop="procedureStart" label="工序开始时间:">
              <el-date-picker
                v-model="queryParams1.procedureStart"
                type="datetime"
                placeholder="选择时间"
                popper-class="elDatePicker"
                format="MM-dd-HH-mm"
                value-format="MM-dd-HH-mm"
                size="mini"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="specialty" label="工序所属专业:">
              <el-select v-model="queryParams2.specialty" size="mini">
                <el-option
                  v-for="item in specialtyList"
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
            <el-form-item prop="sustainTime" label="工序持续时间:">
              <el-time-picker
                v-model="queryParams1.sustainTime"
                placeholder="选择时间"
                format="HH-mm"
                value-format="HH-mm"
                size="mini"
              >
              </el-time-picker>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="peopleNum" label="工序所需人数:">
              <el-input-number
                v-model="queryParams2.peopleNum"
                size="mini"
                controls-position="right"
              ></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item prop="chartsLocation" label="工序图例位置:">
              <el-input
                v-model="queryParams2.chartsLocation"
                size="mini"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="chartsColor" label="工序图例颜色:">
              <el-select v-model="queryParams2.chartsColor" size="mini">
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
            <el-form-item prop="chartsWidth" label="工序图例宽度:">
              <el-input
                v-model="queryParams1.chartsWidth"
                size="mini"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="chartsBorder" label="工序图例边框:">
              <el-color-picker
                v-model="queryParams1.chartsBorder"
                size="mini"
              ></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="流程计划选择:">
              <el-button type="text" size="mini" @click="toPlan"
                >进入</el-button
              >
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="任务规划选择:">
              <el-button type="text" size="mini" @click="toTaskPlanMag"
                >进入</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="footer-btn">
        <el-button class="linear" size="mini">确认</el-button>
        <el-button class="linear" size="mini">取消</el-button>
        <el-button class="linear" size="mini">下一项工序安排</el-button>
        <el-button class="linear" size="mini">完成</el-button>
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
      rules1: {
        taskName: [
          { required: true, message: "请选择任务名称", trigger: "change" },
        ],
        taskNum: [
          { required: true, message: "请选择任务编号", trigger: "change" },
        ],
        planName: [
          { required: true, message: "请输入流程计划名称", trigger: "blur" },
        ],
        planNum: [
          { required: true, message: "请选择流程计划编号", trigger: "change" },
        ],
        operation: [
          { required: true, message: "请选择流程运行模式", trigger: "change" },
        ],
        fileFormat: [
          { required: true, message: "请选择流程文件版式", trigger: "change" },
        ],
        serveType: [
          { required: true, message: "请选择流程服务类别", trigger: "change" },
        ],
        modelNumber: [
          { required: true, message: "请选择通用产品型号", trigger: "change" },
        ],
        startTime: [
          { required: true, message: "请选择开始时间", trigger: "change" },
        ],
        endTime: [
          { required: true, message: "请选择结束时间", trigger: "change" },
        ],
      },
      rules2: {
        processName: [
          { required: true, message: "请选择匹配流程名称", trigger: "change" },
        ],
        processNum: [
          { required: true, message: "请选择匹配流程编号", trigger: "change" },
        ],
        procedureName: [
          {
            required: true,
            message: "请选择工序(组合)名称",
            trigger: "change",
          },
        ],
        procedureOperate: [
          { required: true, message: "请选择工序操作对象", trigger: "change" },
        ],
        front: [
          { required: true, message: "请选择前向工序名称", trigger: "change" },
        ],
        later: [
          { required: true, message: "请选择后向工序名称", trigger: "change" },
        ],
        procedureStart: [
          { required: true, message: "请选择工序开始时间", trigger: "change" },
        ],
        specialty: [
          { required: true, message: "请选择工序所属专业", trigger: "change" },
        ],
        sustainTime: [
          { required: true, message: "请选择工序持续时间", trigger: "change" },
        ],
        peopleNum: [
          { required: true, message: "请输入工序所需人数", trigger: "blur" },
        ],
        chartsLocation: [
          { required: true, message: "请输入工序图例位置", trigger: "blur" },
        ],
        chartsColor: [
          { required: true, message: "请选择工序图例颜色", trigger: "change" },
        ],
        chartsWidth: [
          { required: true, message: "请输入工序图例宽度", trigger: "blur" },
        ],
        chartsBorder: [
          { required: true, message: "请选择工序图例边框", trigger: "change" },
        ],
      },
      queryParams1: {
        radio: "1",
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
      queryParams2: {
        radio: "1",
        processName: undefined,
        processNum: undefined,
        procedureName: 1,
        procedureOperate: undefined,
        front: undefined,
        later: undefined,
        procedureStart: undefined,
        specialty: undefined,
        sustainTime: undefined,
        peopleNum: undefined,
        chartsLocation: undefined,
        chartsColor: undefined,
        chartsWidth: undefined,
        chartsBorder: undefined,
      },
      procedureList: [
        { value: 1, label: "N单件拆解" },
        { value: 2, label: "N设备联调" },
        { value: 3, label: "T系统初检" },
        { value: 4, label: "T系统误差修正" },
        { value: 5, label: "M总体拆解" },
        { value: 6, label: "M系列单元测试" },
        { value: 7, label: "NTM整体组装" },
        { value: 8, label: "整系统联调" },
      ],
      operateList: [
        { value: 1, label: "123456" },
        { value: 2, label: "789456" },
        { value: 3, label: "12358" },
        { value: 4, label: "755622" },
        { value: 5, label: "SD46646" },
      ],
      frontList: [
        { value: 1, label: "N单件拆解" },
        { value: 2, label: "N设备联调" },
        { value: 3, label: "T系统初检" },
        { value: 4, label: "T系统误差修正" },
        { value: 5, label: "M总体拆解" },
        { value: 6, label: "M系列单元测试" },
        { value: 7, label: "NTM整体组装" },
        { value: 8, label: "整系统联调" },
      ],
      specialtyList: [
        { value: 1, label: "拆卸安装" },
        { value: 2, label: "燃料加注" },
        { value: 3, label: "单元测试" },
        { value: 4, label: "综合测试" },
        { value: 5, label: "联合调试" },
        { value: 6, label: "转运装车" },
        { value: 7, label: "密封检查" },
      ],
      colorList: [
        { value: 1, label: "红" },
        { value: 2, label: "橙" },
        { value: 3, label: "黄" },
        { value: 4, label: "蓝" },
        { value: 5, label: "绿" },
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
    // 流程计划窗口 start
    toProcess() {
      this.count = 1;
    },
    // 流程计划窗口 end
    // 工序安排窗口 start
    toPlan() {
      this.count = 0;
    },
    // 工序安排窗口 end
    // 公用
    toTaskPlanMag() {
      this.$router.push({
        path: "/taskPlanMag",
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