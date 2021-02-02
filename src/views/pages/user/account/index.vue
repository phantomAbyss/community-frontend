<template>
  <!-- 用户的账户设置开始 -->
  <div class="user-account">
      <!-- 账户设置头部 -->
      <account-header></account-header>
      <!-- 账户设置的内容 -->
      <account-setting></account-setting>
  </div>
  <!-- 用户的账户设置结束 -->
</template>

<script>
import accountHeader from './accountHeader';
import accountSetting from './accountSetting';
export default {
  name: "index",
  components: {
      accountHeader,
      accountSetting
  }
};
</script>

<style lang="less" scoped>
/* 用户的账户设置样式开始 */
.user-account {
  width: 998px;
}
/* 用户的账户设置样式结束 */
</style>