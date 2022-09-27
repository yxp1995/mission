<template>
  <div class="item-box">
    <div class="text-title">
      <div class="text-img">
        <img src="~@/assets/images/eight.png" alt="" />
        <img src="~@/assets/images/seven.png" alt="" />
      </div>
      <div class="text-txt">文件管理</div>
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
        <el-col :span="8" class="linear-text">项目类型</el-col>
        <el-col :span="16">
          <el-select v-model="queryParams.project" size="mini">
            <el-option
              v-for="item in projectList"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8" class="linear-text">文档名称</el-col>
        <el-col :span="16">
          <el-select v-model="queryParams.file" size="mini">
            <el-option
              v-for="item in fileList"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <div class="footer-btn">
        <el-button class="linear" size="mini">编辑</el-button>
        <el-button class="linear" size="mini">取消</el-button>
      </div>
      <div class="footer-btn">
        <el-button class="linear" size="mini">导入</el-button>
        <el-button class="linear" size="mini">导出</el-button>
      </div>
      <div class="footer-btn2">
        <el-button class="linear" size="mini">模板设置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileManage",
  data() {
    return {
      collapseCut: true,
      queryParams: {
        file: undefined,
        project: undefined,
      },
      projectList: [
        { value: 1, label: "任务规划" },
        { value: 2, label: "流程计划" },
        { value: 3, label: "效能评估" },
        { value: 4, label: "系统数据" },
      ],
      fileList: [
        { value: 1, label: "任务规划文档" },
        { value: 2, label: "产品动用文档" },
        { value: 3, label: "流程计划文档" },
        { value: 4, label: "工序安排文档" },
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
    height: 274px;
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
    .footer-btn {
      margin-top: 30px;
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

.footer-btn2 {
  margin-top: 30px;
  .linear {
    background-image: linear-gradient(#d19afa, #8e96f4, #e1e3f7);
    color: #fff;
    &:nth-child(1) {
      margin-right: 33%;
    }
  }
}
</style>