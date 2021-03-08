<template>
  <!-- 文章主体内容开始 -->
  <div class="content">
      <!-- 文章内容 -->
      <main-content :postId="postId"></main-content>
      <!-- 评论列表 -->
      <comment-list :postId="postId"></comment-list>
      <!-- 回帖 -->
      <reply-post></reply-post>
  </div>
  <!-- 文章主体内容结束 -->
</template>

<script>
import mainContent from './mainContent'
import commentList from './commentList'
import replyPost from './replyPost'

export default {
  name: "articleContent",
  props: {
    postId: {
      type: String,
      default: ''
    }
  },
  components: {
      mainContent,
      commentList,
      replyPost
  }
};
</script>

<style lang="less" scoped>
/* 文章主体内容样式开始 */
.content {
  float: left;
  width: 690px;
  margin: 20px 10px 0 0;
}
/* 文章主体内容样式结束 */
</style>