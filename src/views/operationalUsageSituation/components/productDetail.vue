<template>
  <div class="pollutions">
    <ul class="th">
      <li>序号</li>
      <li>编号</li>
      <li>型号</li>
      <li>存放位置</li>
      <li>有效起始时间</li>
      <li>状态恢复时间</li>
      <li>值班上舰时间</li>
      <li>接续存放位置</li>
      <li>战备可用度</li>
      <li>技术状态说明</li>
           <li>信息确认</li>
    </ul>
    <div class="seamless-warp">
      <ul class="item">
        <li v-for="(item, i) in unitOutList" :key="i">
          <span>{{ i + 1 }}</span>
          <span>{{ item.code }}</span>
          <span>{{ item.productType }}</span>
          <span>{{ item.position1 }}</span>
          <span>{{ item.time1 }}</span>
          <span>{{ item.time2 }}</span>
          <span>{{ item.time3 }}</span>
          <span>{{ item.position2 }}</span>
          <span>{{ item.use }}</span>
            <span>{{ item.des }}</span>
               <span> <el-button class="linear" size="mini">编辑/保存</el-button> </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { operationalUsageSituation } from "../../../assets/jsonData";
export default {
  name: "productDetail",
  data() {
    return {
      unitOutList: operationalUsageSituation.productDetailList,
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