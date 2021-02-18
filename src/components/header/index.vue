<template>
  <div class="navbar">
    <div class="navbar-main">
      <nav-left></nav-left>
      <nav-right></nav-right>
    </div>
  </div>
</template>

<script>
import navLeft from "@/components/header/nav-left";
import navRight from "@/components/header/nav-right";
export default {
  name: "index",
  components: {
    navLeft,
    navRight,
  },
};
</script>

<style lang="less" scoped>
/* navbar总体样式开始 */
.navbar {
  position: relative;
  width: 1200px;
  //   border: 1px solid blue;
  margin: 0 auto;
  top: 0px;
  left: 0px;
}
/* navbar总体样式结束 */
</style>