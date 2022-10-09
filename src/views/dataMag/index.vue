<template>
  <div class="dataMag-box">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#020c2b"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <span>组织人员管理</span>
            </template>
            <el-menu-item index="1-1">组织机构</el-menu-item>
            <el-menu-item index="1-2">岗位人员</el-menu-item>
            <el-menu-item-group>
              <template slot="title">武器装备管理</template>
              <el-menu-item index="1-3">产品武器</el-menu-item>
              <el-menu-item index="1-4">机载平台</el-menu-item>
              <el-menu-item index="1-5">技保装备</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">任务流程管理</template>
              <el-menu-item index="1-6">任务规划</el-menu-item>
              <el-menu-item index="1-7">流程计划</el-menu-item>
              <el-menu-item index="1-8">操作工序</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">模型规则管理</template>
              <el-menu-item index="1-9">模型参数</el-menu-item>
              <el-menu-item index="1-10">指标参数</el-menu-item>
              <el-menu-item index="1-11">规则设置</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">系统信息管理</template>
              <el-menu-item index="1-12">用户信息</el-menu-item>
              <el-menu-item index="1-13">权限管理</el-menu-item>
              <el-menu-item index="1-14">系统日志</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <div class="user">
          <i class="el-icon-user-solid"></i>
          <div class="userinfo">
            <div>admin</div>
            <div>XXXXXXXXXXX</div>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="search">
          <el-row :gutter="20">
            <el-col :span="2" class="linear-text">查询:</el-col>
            <el-col :span="4">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="18" class="btn">
              <el-button size="mini" class="linear">确认</el-button>
              <el-button size="mini" class="linear">取消</el-button>
              <el-button size="mini" class="linear">刷新</el-button>
              <el-button size="mini" class="linear">新建</el-button>
              <el-button size="mini" class="linear">编辑</el-button>
              <el-button size="mini" class="linear">导入</el-button>
              <el-button size="mini" class="linear">导出</el-button>
            </el-col>
          </el-row>
        </div>
        <div class="table">
          <el-table
            :data="tableData"
            style="width: 100%"
            height="calc(100% - 50px)"
          >
            <!-- <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column> -->
          </el-table>
          <div class="pagination-body">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "DataMag",
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.dataMag-box {
  height: calc(100% - 143px);
  padding: 10px;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
      .el-menu {
        width: 100%;
        height: calc(100% - 100px);
        overflow: auto;
        border: none;
        border: 1px solid #053366;
        box-shadow: 0 0 10px #053366 inset;
        .el-submenu {
          width: 100%;
        }
      }
    }
    .user {
      display: flex;
      width: 100%;
      height: 100px;
      color: #fff;
      border: 1px solid #053366;
      box-shadow: 0 0 10px #053366 inset;
      i {
        display: inline-block;
        font-size: 40px;
        vertical-align: middle;
        margin-left: 4%;
        margin-top: 12%;
      }
      .userinfo {
        width: calc(96% - 40px);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: 600;
        div {
          &:nth-child(1) {
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  .search {
    width: 100%;
    padding: 20px 10px;
    border: 1px solid #053366;
    box-shadow: 0 0 10px #053366 inset;
    height: 70px;
    box-sizing: border-box;
    .linear-text {
      font-weight: 600;
      background-image: -webkit-linear-gradient(#66bdcc, #f3fcfa);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .btn {
      display: flex;
      justify-content: flex-start;
      .linear {
        background-image: linear-gradient(#d19afa, #8e96f4, #e1e3f7);
        color: #fff;
        margin-right: 3%;
      }
    }
  }
  .table {
    width: 100%;
    height: calc(100% - 70px);
    border: 1px solid #053366;
    box-shadow: 0 0 10px #053366 inset;
    box-sizing: border-box;
    .el-table--fit {
      padding: 20px;
    }
    .el-table,
    .el-table__expanded-cell {
      background-color: transparent;
    }
    .el-table tr {
      background-color: transparent;
    }
    .el-table__header {
      background-color: transparent;
      thead {
        background-color: transparent;
        th {
          background-color: transparent;
          border: none;
        }
      }
    }
    .el-table::before {
      //去除底部白线
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0px;
    }
    .pagination-body {
      height: 50px;
      line-height: 50px;
      :deep(.btn-prev) {
        background-color: transparent;
        border: 1px solid #053366;
        box-shadow: 0 0 4px #053366 inset;
        color: #fff;
      }
      :deep(.number) {
        background-color: transparent;
        border: 1px solid #053366;
        box-shadow: 0 0 4px #053366 inset;
        color: #fff;
      }
      :deep(.more) {
        background-color: transparent;
        border: 1px solid #053366;
        box-shadow: 0 0 4px #053366 inset;
        color: #fff;
      }
      :deep(.btn-next) {
        background-color: transparent;
        border: 1px solid #053366;
        box-shadow: 0 0 4px #053366 inset;
        color: #fff;
      }
    }
  }
}
</style>