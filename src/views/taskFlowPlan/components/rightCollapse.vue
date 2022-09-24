<template>
  <div>
    <hint />
    <warning />
  </div>
</template>

<script>
import hint from "./hint";
import warning from "./warning";
export default {
  name: "LeftCollapse",
  components: {
    hint,
    warning,
  },
};
</script>

<style>
</style>