<template>
  <div>
    <navigation />
    <graph />
    <file-manage />
    <trace-source />
  </div>
</template>

<script>
import navigation from "./navigation";
import graph from "./graph";
import fileManage from "./fileManage";
import traceSource from "./traceSource";
export default {
  name: "LeftCollapse",
  components: {
    navigation,
    graph,
    fileManage,
    traceSource,
  },
};
</script>

<style>
</style>