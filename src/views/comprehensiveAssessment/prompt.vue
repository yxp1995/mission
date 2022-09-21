<template>
  <div class="pollutions">
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
</template>

<script>
export default {
  name: "prompt",
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
          name: "文字可修改",
          code: "284.56",
        };
        this.unitOutList.push(obj);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>