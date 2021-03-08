<template>
  <div class="message">
    <!-- 这是消息页面 -->
    <!-- 左边侧边栏 -->
    <!-- <left-menu></left-menu> -->
    <msg-menu></msg-menu>
    <div class="message-content">
        <!-- 这是消息的展示页面 -->
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftMenu from "./leftMenu";
import msgMenu from "./msgMenu"

export default {
  name: "index",
  components: {
    leftMenu,
    msgMenu
  },
};
</script>

<style lang="less" scoped>
/* 消息全局样式开始 */
.message {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: fixed;
  left: calc(50% - 1097px / 2);
  width: auto;
  min-width: 896px;
  min-height: 800px;
  background: transparent;
  margin: 70px auto 0;
  /* 内容部分样式开始 */
  .message-content {
    position: relative;
    margin-left: 250px;
    // background-color: #fff;
    padding: 10px;
    // -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    min-height: 400px;
  }
  /* 内容部分样式结束 */
}
/* 消息全局样式结束 */
</style>