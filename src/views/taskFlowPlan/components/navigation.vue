<template>
  <div class="item-box">
    <div class="text-title">
      <div class="text-img">
        <img src="~@/assets/images/eight.png" alt="" />
        <img src="~@/assets/images/seven.png" alt="" />
      </div>
      <div class="text-txt">导航窗口</div>
      <div class="text-img">
        <img src="~@/assets/images/seven.png" alt="" />
        <img src="~@/assets/images/nine.png" alt="" />
      </div>
      <img
        src="~@/assets/images/nineTeen.png"
        alt=""
        class="title-icon"
        @click="cut"
      />
    </div>
    <div class="collapse-body" :class="collapseCut ? '' : 'close'">
      <el-input v-model="queryParams.search" size="mini">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-row :gutter="20">
        <el-col :span="8" class="linear-text">起始时间</el-col>
        <el-col :span="16">
          <el-date-picker
            v-model="queryParams.start"
            type="date"
            placeholder="选择日期"
            popper-class="elDatePicker"
            size="mini"
          >
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8" class="linear-text">结束时间</el-col>
        <el-col :span="16">
          <el-date-picker
            v-model="queryParams.end"
            type="date"
            placeholder="选择日期"
            popper-class="elDatePicker"
            size="mini"
          >
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8" class="linear-text">任务性质</el-col>
        <el-col :span="16">
          <el-select v-model="queryParams.character" size="mini">
            <el-option
              v-for="item in characterList"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8" class="linear-text">任务类型</el-col>
        <el-col :span="16">
          <el-select v-model="queryParams.type" size="mini">
            <el-option
              v-for="item in typeList"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      collapseCut: true,
      queryParams: {
        search: undefined,
        start: "2022-01-01",
        end: "2022-12-01",
        character: undefined,
        type: undefined,
      },
      characterList: [
        { value: 1, label: "实战实用" },
        { value: 2, label: "巡逻值班" },
        { value: 3, label: "接送产品" },
        { value: 4, label: "贮存保障" },
        { value: 5, label: "考核训练" },
      ],
      typeList: [
        { value: 1, label: "抽检实验" },
        { value: 2, label: "战训打靶" },
        { value: 3, label: "海域巡逻" },
        { value: 4, label: "战备转换" },
        { value: 5, label: "状态恢复" },
        { value: 6, label: "HHM接送" },
        { value: 7, label: "HHN接送" },
        { value: 8, label: "入库测试" },
        { value: 9, label: "年度检验" },
        { value: 10, label: "实装训练" },
      ],
    };
  },
  methods: {
    cut() {
      this.collapseCut = !this.collapseCut;
    },
  },
};
</script>

<style lang="scss" scoped>
.item-box {
  width: 100%;
  padding: 10px 20px 10px 20px;
  // background: url(~@/assets/images/sixteen.png) no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  border: 1px solid #053366;
  box-shadow: 0 0 10px #053366 inset;
  margin-bottom: 10px;
  .collapse-body {
    width: 100%;
    height: 200px;
    transition: height 0.5s ease;
    overflow: hidden;
    .el-row {
      margin-top: 10px;
      height: 28px;
      line-height: 28px;
      .el-col {
        &:nth-child(1) {
          text-align: right;
        }
      }
      .linear-text {
        font-weight: 600;
        background-image: -webkit-linear-gradient(#66bdcc, #f3fcfa);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .collapse-body.close {
    height: 0px;
    overflow: hidden;
    transition: height 0.5s ease;
  }
}
</style>