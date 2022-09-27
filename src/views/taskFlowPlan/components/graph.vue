<template>
  <div class="item-box">
    <div class="text-title">
      <div class="text-img">
        <img src="~@/assets/images/eight.png" alt="" />
        <img src="~@/assets/images/seven.png" alt="" />
      </div>
      <div class="text-txt">图形设置</div>
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
      <el-row :gutter="20">
        <el-col :span="8" class="linear-text">系统背景设置</el-col>
        <el-col :span="16">
          <el-select v-model="queryParams.back" size="mini">
            <el-option
              v-for="item in backList"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8" class="linear-text">图像操作选项</el-col>
        <el-col :span="16">
          <el-select v-model="queryParams.graph" size="mini">
            <el-option
              v-for="item in graphList"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="linear-text">显示范围调整</div>
        </el-col>
      </el-row>
      <el-slider v-model="queryParams.slider" class="slider"></el-slider>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="linear-text">更换图例颜色</div>
        </el-col>
        <el-col :span="12">
          <el-color-picker
            v-model="queryParams.color"
            size="mini"
          ></el-color-picker>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8" class="linear-text">图例边框设置</el-col>
        <el-col :span="16">
          <el-select v-model="queryParams.border" size="mini">
            <el-option
              v-for="item in borderList"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8" class="linear-text">字体调整</el-col>
        <el-col :span="16">
          <el-select v-model="queryParams.font" size="mini">
            <el-option
              v-for="item in fontList"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8" class="linear-text">字体颜色调整</el-col>
        <el-col :span="16">
          <el-select v-model="queryParams.fontColor" size="mini">
            <el-option
              v-for="item in fontColorList"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
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
  name: "Graph",
  data() {
    return {
      collapseCut: true,
      queryParams: {
        back: undefined,
        graph: undefined,
        slider: 50,
        color: "#409EFF",
        border: undefined,
        font: undefined,
        fontColor: undefined,
      },
      backList: [
        { value: 1, label: "红色" },
        { value: 2, label: "蓝色" },
        { value: 3, label: "绿色" },
      ],
      graphList: [
        { value: 1, label: "战训态势图" },
        { value: 2, label: "任务规划图" },
        { value: 3, label: "流程计划图" },
        { value: 4, label: "综合雷达图" },
        { value: 5, label: "战储分布图" },
        { value: 6, label: "动用分布图" },
        { value: 7, label: "任务分析图" },
        { value: 8, label: "战备分析图" },
      ],
      borderList: [
        { value: 1, label: "虚线" },
        { value: 2, label: "实线" },
      ],
      fontList: [
        { value: 1, label: "12px" },
        { value: 2, label: "16px" },
      ],
      fontColorList: [
        { value: 1, label: "#ffffff" },
        { value: 2, label: "#f1f1f1" },
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
  border: 1px solid #053366;
  box-shadow: 0 0 10px #053366 inset;
  background-size: 100% 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  .collapse-body {
    width: 100%;
    height: 390px;
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
        &:nth-child(2) {
          text-align: left;
        }
      }
    }
    .slider {
      width: 94%;
      margin-left: 5%;
      :deep(.el-slider__runway) {
        height: 4px;
      }
      :deep(.el-slider__bar) {
        height: 4px;
        background-image: -webkit-linear-gradient(#f3fcfa, #259290);
      }
      :deep(.el-slider__button) {
        width: 6px;
        height: 12px;
        background: #d6d0d3;
        border: none;
      }
    }
    .footer-btn {
      margin-top: 20px;
      .linear {
        background-image: linear-gradient(#d19afa, #8e96f4, #e1e3f7);
        color: #fff;
        &:nth-child(1) {
          margin-right: 20%;
        }
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
  .collapse-body.close {
    height: 0px;
    overflow: hidden;
    transition: height 0.5s ease;
  }
}
</style>