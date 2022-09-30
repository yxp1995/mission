<template>
  <div class="pollutions" style="overflow: auto">
    <ul class="th">
      <li>序号</li>
      <li>任务编号</li>
      <li>任务名称</li>
      <li>任务性质</li>
      <li>任务类别</li>
      <li>开始时间</li>
      <li>结束时间</li>
      <li>动用产品</li>
      <li>XX计划</li>
    </ul>
    <div class="seamless-warp">
      <ul class="item">
        <li v-for="(item, i) in unitOutList" :key="i">
          <span>{{ i + 1 }}</span>
          <span>{{ item.code }}</span>
          <span>{{ item.productName }}</span>
          <span>{{ item.productClass }}</span>
          <span>{{ item.productPosition }}</span>
          <span>{{ item.startTime }}</span>
          <span>{{ item.endTime }}</span>

          <span> <el-button class="linear" size="mini">进入</el-button></span>
          <span> <el-button class="linear" size="mini">进入</el-button> </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { operationalUsageSituation } from "../../../assets/jsonData";
export default {
  name: "taskDetail",
  data() {
    return {
      unitOutList: operationalUsageSituation.taskDetailList,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      // for (let i = 0; i < 5; i++) {
      //   const obj = {
      //     code: "12345",
      //     productName: "文字可修改",
      //     productClass: "文字可修改",
      //     productPosition: "文字可修改",
      //     startTime: "2021/03/06",
      //     endTime: "2021/03/06",
      //     useProduct: "文字可修改",
      //     useTime: "2021/03/06",
      //   };
      //   this.unitOutList.push(obj);
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  overflow-y: scroll;
  height: 170px;
}
.pollutions .th {
  font-size: 10px !important;
}
.item li span {
  font-size: 10px !important;
}
:deep(.datacommon .pollutions .seamless-warp .item li span) {
  font-size: 10px !important;
}
.linear {
  background-image: linear-gradient(#d19afa, #8e96f4, #e1e3f7);
  color: #fff;
  font-size: 10px;
}
:deep(.el-button--mini) {
  padding: 5px 5px;
}
:deep(.el-button--mini.is-round) {
  padding: 5px 5px;
}

:deep(.el-button--mini span) {
  font-size: 10px;
}
</style>