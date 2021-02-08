<template>
  <!-- 文章详情页面开始 -->
  <div class="main fill-bg">
    <!-- 面包屑 -->
    <breadcrumb></breadcrumb>
    <!-- 文章内容部分 -->
    <article-content></article-content>
  </div>
  <!-- 文章详情页面结束 -->
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
import articleContent from "./articleContent";
export default {
  name: "index",
  components: {
    breadcrumb,
    articleContent,
  },
};
</script>

<style lang="less" scoped>
/* 文章详情页面样式开始 */
.main {
  margin: 0 auto;
  width: 1000px;
  padding: 90px 0px 250px;
  display: block;
}
/* 文章详情页面样式结束 */
</style>