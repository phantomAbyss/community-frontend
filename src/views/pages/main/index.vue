<template>
  <!-- 网站首页开始 -->
  <div class="main">
    <!-- 内容 -->
    <main-content></main-content>
    <!-- 侧边栏 -->
    <content-bar></content-bar>
  </div>
  <!-- 网站首页结束 -->
</template>

<script>
import MainContent from '@/views/pages/main/MainContent.vue'
import ContentBar from '@/views/pages/main/ContentBar.vue'
export default {
  name: 'index',
  components: {
    MainContent,
    ContentBar
  }
}
</script>

<style lang="less" scoped>
/* 网站首页样式开始 */
.main {
  overflow: auto;
  margin: 0 auto;
  width: 1000px;
  padding: 70px 0px 250px;
  //   border: 1px solid red;
}
/* 网站首页样式结束 */
</style>
