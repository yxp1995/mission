<template>
  <div class="pollutions">
    <ul class="th">
      <li>提示内容</li>
      <li>存在风险</li>
      <li>风险等级</li>
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
</template>

<script>
export default {
  name: "TaskPlanMagHintWindow",
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
      for (let i = 0; i < 18; i++) {
        const obj = {
          a: "文字可修改",
          name: "风险内容",
          code: "6.12",
        };
        this.unitOutList.push(obj);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>