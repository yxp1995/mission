<template>
  <div id="app" class="datacommon">
    <img src="~@/assets/images/six.png" alt="" class="leftImg" />
    <div class="datacommon-frame">
      <div class="datacommon-title">
        <img src="~@/assets/images/one.png" class="title-img" />
        <div class="title-txt">XXXXXX数据管理系统</div>
        <img src="~@/assets/images/two.png" class="title-img" />
      </div>
      <router-view />
      <ul id="nav" class="datacommon-nav">
        <li :class="num == 1 ? 'active' : ''">
          <div class="bgc">
            <router-link to="/taskFlowPlan">任务流程计划</router-link>
          </div>
        </li>
        <li :class="num == 2 ? 'active' : ''">
          <div class="bgc">
            <router-link to="/taskPlanMag">任务规划管理</router-link>
          </div>
        </li>
        <li :class="num == 3 ? 'active' : ''">
          <div class="bgc">
            <router-link to="/operationalUsageSituation"
              >作战使用态势</router-link
            >
          </div>
        </li>
        <li :class="num == 4 ? 'active' : ''">
          <div class="bgc">
            <router-link to="/comprehensiveAssessment"
              >综合效能评估</router-link
            >
          </div>
        </li>
        <li :class="num == 5 ? 'active' : ''">
          <div class="bgc">
            <router-link to="/dataMag">系统数据管理</router-link>
          </div>
        </li>
      </ul>
    </div>
    <img src="~@/assets/images/six.png" alt="" class="rightImg" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      num: 1,
    };
  },
  watch: {
    $route: {
      handler: function (to) {
        if (to.path == "/taskFlowPlan") {
          this.num = 1;
        } else if (to.path == "/taskPlanMag") {
          this.num = 2;
        } else if (to.path == "/operationalUsageSituation") {
          this.num = 3;
        } else if (to.path == "/comprehensiveAssessment") {
          this.num = 4;
        } else if (to.path == "/dataMag") {
          this.num = 5;
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
