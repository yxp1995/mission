<template>
  <div class="pollutions">
    <ul class="th">
        <li>序号</li>
      <li>产品编号</li>
      <li>产品名称</li>
      <li>产品类别</li>
      <li>产品位置</li>
      <li>开始时间</li>
      <li>结束时间</li>
      <li>动用产品</li>
      <li>战备动用时间</li>
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
          <span>{{ item.useProduct }}</span>
          <span>{{ item.useTime }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "productDetail",
  data() {
    return {
      unitOutList: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      for (let i = 0; i < 5; i++) {
        const obj = {
          code: "12345",
          productName: "文字可修改",
          productClass: "文字可修改",
          productPosition: "文字可修改",
          startTime: "2021/03/06",
          endTime: "2021/03/06",
          useProduct: "文字可修改",
          useTime: "2021/03/06",
        };
        this.unitOutList.push(obj);
      }
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
</style>