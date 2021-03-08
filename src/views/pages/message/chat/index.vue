<template>
  <div class="chat-box">
    <div class="chat">
      <user-menu></user-menu>
      <msg></msg>
    </div>
  </div>
</template>

<script>
import userMenu from "./userMenu";
import msg from "./msg";
export default {
  name: "index",
  components: {
    userMenu,
    msg
  },
};
</script>

<style lang="less" scoped>
/* 聊天界面的样式开始 */
.chat-box {
  overflow: inherit !important;
  margin-left: 10px;
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: calc(100% - 60px);
  * {
    box-sizing: border-box;
  }
  .chat {
    height: calc(100vh - 128px);
    font-size: 12px;
    color: #666;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgb(121 146 185 / 54%);
    box-shadow: 0 2px 4px 0 rgb(121 146 185 / 54%);
    border-radius: 4px;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
  }
}
/* 聊天界面的样式结束 */
</style>