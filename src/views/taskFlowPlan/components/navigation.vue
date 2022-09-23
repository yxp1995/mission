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
    <div class="collapse-body" :class="collapseCut?'':'close'">
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
        start: undefined,
        end: undefined,
        character: undefined,
        type: undefined,
      },
      characterList: [
        { value: 1, label: "任务性质名称" },
        { value: 2, label: "任务性质名称" },
        { value: 3, label: "任务性质名称" },
        { value: 4, label: "任务性质名称" },
        { value: 5, label: "任务性质名称" },
      ],
      typeList: [
        { value: 1, label: "类型1" },
        { value: 2, label: "类型2" },
        { value: 3, label: "类型3" },
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
  background: url(~@/assets/images/sixteen.png) no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  .collapse-body {
    width: 100%;
    height: 200px;
    transition: height .5s ease;
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
    transition: height .5s ease;
  }
}
</style>