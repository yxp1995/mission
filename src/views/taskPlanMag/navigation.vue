<template>
  <div class="nav-box">
    <el-input v-model="queryParams.search" size="mini">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree"
    >
    </el-tree>
  </div>
</template>

<script>
export default {
  name: "TaskPlanMagNavigation",
  data() {
    return {
      queryParams: {
        search: undefined,
      },
      data: [
        {
          id: "1",
          label: "导航内容1",
          children: [
            {
              id: "1-1",
              label: "二级细分内容",
            },
            {
              id: "1-2",
              label: "二级细分内容",
            },
          ],
        },
        {
          id: "2",
          label: "导航内容2",
          children: [
            {
              id: "2-1",
              label: "二级细分内容",
            },
            {
              id: "2-2",
              label: "二级细分内容",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  watch: {
    "queryParams.search"(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-box {
  height: 100%;
}
:deep(.el-input__inner) {
  background-color: rgba(2, 64, 105, 0.247);
  color: #fff;
  border: 1px solid #07dbff;
}
:deep(.el-input-group__append) {
  background-color: rgba(2, 64, 105, 0.247);
  color: #fff;
  border: 1px solid #07dbff;
}
:deep(.el-tree) {
  height: calc(100% - 48px);
  color: #fff;
  background: rgba(0, 0, 0, 0);
  margin-top: 10px;
  overflow: auto;
  .el-tree-node__content {
    &:hover {
      background: #045274;
    }
  }
  .el-tree-node.is-current > .el-tree-node__content {
    background: #08dffe;
    color: #fff;
  }
}
</style>