<template>
  <div class="nav-box">
    <el-input v-model="queryParams.search" size="mini">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <!-- <el-timeline class="timeLine">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        color="#00b2ff"
        @click.native="timeClick(activity)"
      >
        <div class="btn" :class="activity.active ? 'active' : ''">
          {{ activity.content }}
        </div>
      </el-timeline-item>
    </el-timeline> -->
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
  name: "Navigation",
  data() {
    return {
      queryParams: {
        search: undefined,
      },
      activities: [
        {
          id: 1,
          content: "导航内容1选中",
          active: true,
        },
        {
          id: 2,
          content: "二级细分内容",
          active: false,
        },
        {
          id: 3,
          content: "二级细分内容",
          active: false,
        },
        {
          id: 4,
          content: "二级细分内容",
          active: false,
        },
        {
          id: 5,
          content: "二级细分内容",
          active: false,
        },
      ],
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
    timeClick(item) {
      this.activities.forEach((itemx) => {
        if (itemx.id == item.id) {
          itemx.active = true;
        } else {
          itemx.active = false;
        }
      });
    },
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
:deep(.el-timeline-item__tail) {
  border-left: 1px solid #00b2ff;
}
.timeLine {
  height: calc(100% - 48px);
  margin-top: 10px;
  padding: 10px 0 0 44px;
  overflow: auto;
  :deep(.el-timeline-item__content) {
    color: #fff;
    text-align: left;
  }
  .btn {
    cursor: pointer;
    height: 34px;
    line-height: 34px;
    &.active {
      height: 20px;
      line-height: 20px;
      display: inline-block;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 5px;
      background-color: #08dffe;
      padding: 6px;
    }
  }
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