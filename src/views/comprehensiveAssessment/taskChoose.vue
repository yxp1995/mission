<template>
  <div class="box">
    <div class="item">任务1</div>
    <div class="item">任务2</div>
    <div class="item">任务3</div>
    <div class="item">任务4</div>
    <div class="item">任务5</div>
  </div>
</template>

<script>
export default {
  name: "TaskChoose",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  color: #fff;
  overflow: auto;
  .item {
    width: 100%;
    height: 30px;
    border: 1px solid #07dbff;
    text-align: center;
    box-shadow: 0 0 10px 2px #07dbff inset;
  }
}
</style>