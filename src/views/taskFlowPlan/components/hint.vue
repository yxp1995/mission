<template>
  <div class="item-box">
    <div class="text-title">
      <div class="text-img">
        <img src="~@/assets/images/eight.png" alt="" />
        <img src="~@/assets/images/seven.png" alt="" />
      </div>
      <div class="text-txt">操作提示</div>
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
    <div class="pollutions collapse-body" :class="collapseCut ? '' : 'close'">
      <ul class="th">
        <li>任务流程名称</li>
        <li>合理性建议</li>
        <li>待补充</li>
      </ul>
      <div class="seamless-warp">
        <ul class="item">
          <li v-for="(item, i) in unitOutList" :key="i">
            <span>{{ item.a }}</span>
            <span>{{ item.name }}</span>
            <span>{{ item.code }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hint",
  data() {
    return {
      collapseCut: true,
      unitOutList: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    cut() {
      this.collapseCut = !this.collapseCut;
    },
    getList() {
      for (let i = 0; i < 18; i++) {
        const obj = {
          a: i + 1,
          name: "系统维护",
          code: "XXX",
        };
        this.unitOutList.push(obj);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.item-box {
  width: 100%;
  // background: url(~@/assets/images/sixteen.png) no-repeat;
  border: 1px solid #053366;
  box-shadow: 0 0 10px #053366 inset;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 10px 20px 10px 20px;
  margin-bottom: 10px;
}
.collapse-body {
  width: 100%;
  height: 500px;
  transition: height 0.5s ease;
  overflow-y: auto;
}
.collapse-body.close {
  height: 0px;
  overflow: hidden;
  transition: height 0.5s ease;
}
</style>