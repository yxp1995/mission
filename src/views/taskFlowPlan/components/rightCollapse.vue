<template>
  <div>
    <hint />
    <warning />
    <help/>
  </div>
</template>

<script>
import hint from "./hint";
import warning from "./warning";
import help from "./help"
export default {
  name: "LeftCollapse",
  components: {
    hint,
    warning,
    help
  },
};
</script>

<style>
</style>