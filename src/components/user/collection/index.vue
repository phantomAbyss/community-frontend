<template>
    <!-- 用户的收藏开始 -->
  <div class="user-collection fill-bg">
      <!-- 收藏夹头部 -->
      <collection-header></collection-header>
      <!-- 收藏夹内容部分 -->
      <collection-content></collection-content>
  </div>
  <!-- 用户的收藏结束 -->
</template>

<script>
import collectionHeader from './collectionHeader'
import collectionContent from './collectionContent'
export default {
  name: 'index',
  components: {
      collectionHeader,
      collectionContent
  }
}
</script>

<style lang="less" scoped>
/* 用户的收藏样式开始 */
.user-collection {
  width: 998px;
  background: #fff;
}
/* 用户的收藏样式结束 */
</style>