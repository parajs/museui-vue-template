<template>
  <div class="main-content">
    <router-view :key="key" />
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from "components/BottomNav";
export default {
  name: "Layout",
  components: {
    BottomNav
  },
  computed: {
    key() {
      return this.$route.fullPath;
    }
  }
};
</script>
<style lang="scss" scoped>
.main-content {
  height: calc(100vh - 112px);
  overflow: auto;
  margin-top: 56px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
