<template>
  <div class="pro-box">
    <el-row :gutter="20">
      <el-col :span="16">
        <el-transfer v-model="transfer" :data="data"></el-transfer>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="16">
            <div class="linear-text">匹配维修</div>
            <div class="btn">手动输入</div>
            <div class="linear-text">选择数量</div>
            <div class="btn">手动输入</div>
            <div class="linear-text">选择型号</div>
            <div class="btn">手动输入</div>
          </el-col>
          <el-button size="mini" class="linear">生成</el-button>
          <el-button size="mini" class="linear">保存</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ProductSelection",
  data() {
    return {
      data: [
        { key: 1, label: "型号名称" },
        { key: 2, label: "型号名称" },
        { key: 3, label: "型号名称" },
        { key: 4, label: "型号名称" },
        { key: 5, label: "型号名称" },
        { key: 6, label: "型号名称" },
        { key: 7, label: "型号名称" },
      ],
      transfer: [1, 4],
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
    height: 100%;
    .el-col {
      height: 100%;
      .el-transfer {
        height: 100%;
        :deep(.el-transfer-panel) {
          height: 100%;
          background: rgba(0, 0, 0, 0);
          border: 1px solid #94a9db;
          .el-transfer-panel__body {
            height: 100%;
            overflow: auto;
            .el-transfer-panel__list {
              height: fit-content;
              .el-checkbox__label {
                color: #fff;
              }
            }
          }
          .el-transfer-panel__header {
            display: none;
          }
          .el-transfer-panel__item {
            padding: 0 0 0 20px;
            margin: 0;
            text-align: left;
          }
        }
      }
      :deep(.el-transfer__buttons) {
        width: 56px;
        padding: 10px;
        .el-button {
          &:nth-child(2) {
            margin: 0;
          }
        }
      }
      .btn {
        width: 70%;
        height: 26px;
        line-height: 26px;
        border: 1px solid #07dbff;
        text-align: center;
        box-shadow: 0 0 10px 2px #07dbff inset;
        margin: 5px auto;
        font-size: 14px;
      }
      .linear-text {
        font-weight: 600;
        background-image: -webkit-linear-gradient(#66bdcc, #f3fcfa);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 14px;
      }
      .linear {
        background-image: linear-gradient(#d19afa, #8e96f4, #e1e3f7);
        color: #fff;
        margin: 0;
        &:nth-child(2) {
          margin: 20% 0 10% 0;
        }
      }
    }
  }
}
</style>