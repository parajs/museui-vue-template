<template>
  <mu-appbar z-depth="0" class="top-nav">
    <div slot="left">
      <slot name="left"></slot>
    </div>
    <div slot="default" style="text-align:center">
      <slot></slot>
    </div>
    <div slot="right">
      <slot name="right"></slot>
    </div>
  </mu-appbar>
</template>

<script>
export default {
  name: "TopNav"
};
</script>
<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
}
</style>
