<template>
  <div>
    <div class="dia-top">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="title">产品选择提示：</div>
        </el-col>
        <el-col :span="18">
          <div>
            1.您当前正在为_(任务名称)、(任务编号)_选择 (X型)(X类)
            产品,计划动用数量为___,备用数量为___ ;
          </div>
          <div>
            2.可用产品清单是基于计划动用类型确定的选择规则自动筛选的,选择规则可进入系统数据管理相应端口修改;
          </div>
          <div>
            3.拟用产品清单总数为产品计划动用数量与备用数量之和,备用产品排序末尾,拟用产品清单序列为该任务流程计划产品动用序列。
          </div>
          <div>4.当前页面产品的选择时间(即计划动用时间)是：___________。</div>
        </el-col>
      </el-row>
      <div class="title">可用产品清单：</div>
      <el-table
        :data="List1"
        border
        size="mini"
        style="width: 100%"
        class="container-table"
        height="270px"
        @selection-change="handleSelectionChange1"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" label="序号" width="80"></el-table-column>
        <el-table-column prop="cpbh" label="产品编号"></el-table-column>
        <el-table-column prop="cpmc" label="产品名称"></el-table-column>
        <el-table-column prop="cfwz" label="存放位置"></el-table-column>
        <el-table-column
          prop="fysj"
          label="服役时间"
          width="100px"
        ></el-table-column>
        <el-table-column
          prop="bjsyts"
          label="下次B检剩余天数"
        ></el-table-column>
        <el-table-column
          prop="ajsyts"
          label="下次A检剩余天数"
        ></el-table-column>
        <el-table-column
          prop="zthfsj"
          label="上次状态恢复时间"
          width="100px"
        ></el-table-column>
        <el-table-column prop="zbkyd" label="战备可用度"></el-table-column>
        <el-table-column prop="bjdy" label="是否已标记动用"></el-table-column>
        <el-table-column prop="wtsm" label="技术状态问题说明"></el-table-column>
        <el-table-column label="产品信息确认" fixed="right" width="180px">
          <template>
            <el-button size="mini">编辑</el-button>
            <el-button size="mini">保存</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="table-operation">
        <el-button type="text" size="mini" @click="add">
          加入
          <span class="el-icon-bottom"></span>
        </el-button>
        <el-button type="text" size="mini" @click="remove">
          移除
          <span class="el-icon-top"></span>
        </el-button>
      </div>
      <div class="title">拟用产品清单：</div>
      <el-table
        id="sortTable"
        :data="List2"
        border
        row-key="id"
        size="mini"
        style="width: 100%"
        class="container-table"
        height="270px"
        @selection-change="handleSelectionChange2"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" label="序号" width="80"></el-table-column>
        <el-table-column prop="cpbh" label="产品编号"></el-table-column>
        <el-table-column prop="cpmc" label="产品名称"></el-table-column>
        <el-table-column prop="cfwz" label="存放位置"></el-table-column>
        <el-table-column
          prop="fysj"
          label="服役时间"
          width="100px"
        ></el-table-column>
        <el-table-column
          prop="bjsyts"
          label="下次B检剩余天数"
        ></el-table-column>
        <el-table-column
          prop="ajsyts"
          label="下次A检剩余天数"
        ></el-table-column>
        <el-table-column
          prop="zthfsj"
          label="上次状态恢复时间"
          width="100px"
        ></el-table-column>
        <el-table-column prop="zbkyd" label="战备可用度"></el-table-column>
        <el-table-column prop="bjdy" label="是否已标记动用"></el-table-column>
        <el-table-column prop="wtsm" label="技术状态问题说明"></el-table-column>
        <el-table-column label="产品信息确认" fixed="right" width="180px">
          <template>
            <el-button size="mini">编辑</el-button>
            <el-button size="mini">保存</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="table-operation">
        <el-button size="mini">确认</el-button>
        <el-button size="mini">取消</el-button>
        <el-button size="mini">查看</el-button>
        <el-button size="mini" @click="closeDialog">完成</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Sortable from "sortablejs";
export default {
  name: "ProductCheck",
  data() {
    return {
      List1: [],
      List2: [],
      selectList1: [],
      selectList2: [],
    };
  },
  created() {
    this.getList();
  },
  mounted() {
    // 阻止默认行为
    document.body.ondrop = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    this.rowDrop(); //行拖拽
  },
  methods: {
    //行拖拽
    rowDrop() {
      const tbody = document.querySelector(
        "#sortTable .el-table__body-wrapper tbody"
      );
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          if (newIndex == oldIndex) return;
          _this.List2.splice(newIndex, 0, _this.List2.splice(oldIndex, 1)[0]);
          var newArray = _this.List2.slice(0);
          _this.List2 = [];
          _this.$nextTick(function () {
            _this.List2 = newArray;
          });
        },
      });
    },
    getList() {
      this.List1 = [];
      for (let i = 0; i < 10; i++) {
        const obj = {
          id: i,
          cpbh: "123456" + i,
          cpmc: "XX型",
          cfwz: "DKW",
          fysj: "2004-06-07",
          bjsyts: "35天",
          ajsyts: "401天",
          zthfsj: "2021-09-03",
          zbkyd: "0.864",
          bjdy: "0",
          wtsm: "——空",
        };
        this.List1.push(obj);
      }
    },
    handleSelectionChange1(val) {
      this.selectList1 = val;
    },
    handleSelectionChange2(val) {
      this.selectList2 = val;
    },
    add() {
      if (this.selectList1.length > 0) {
        const ids = this.selectList1.map((item) => {
          return item.id;
        });
        this.List2 = this.List2.concat(this.selectList1);
        this.List1 = this.List1.filter((item) => {
          return !ids.includes(item.id);
        });
      }
    },
    remove() {
      if (this.selectList2.length > 0) {
        const ids = this.selectList2.map((item) => {
          return item.id;
        });
        this.List1 = this.List1.concat(this.selectList2);
        this.List2 = this.List2.filter((item) => {
          return !ids.includes(item.id);
        });
      }
    },
    closeDialog() {
      this.$emit("setDetailModal", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0px;
  &:nth-child(1) {
    margin: 0px;
  }
}
.table-operation {
  margin: 10px 0px;
  text-align: center;
}
</style>