<template>
  <mu-bottom-nav class="bottom-nav" :value.sync="shift">
    <mu-bottom-nav-item
      value="/"
      title="Home"
      icon="home"
      to="/"
    ></mu-bottom-nav-item>
    <mu-bottom-nav-item
      value="/list"
      title="list"
      icon="list"
      to="/list"
    ></mu-bottom-nav-item>
    <mu-bottom-nav-item
      value="/my"
      title="my"
      icon="person_outline"
      to="/my"
    ></mu-bottom-nav-item>
  </mu-bottom-nav>
</template>

<script>
export default {
  name: "BottomNav",
  data() {
    return {
      shift: this.$route.path
    };
  },
  watch: {
    $route: function(to) {
      this.shift = to.path;
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
}
</style>
