<template>
  <div class="other-login">
    <!-- 分割线 -->
    <span class="separate-line"></span>
    <!-- 第三方登录 -->
    <div class="login-way">
      <!-- QQ -->
      <a href="" class="other-login-common login-qq">QQ账号登录</a>
      <!-- 微信账号 -->
      <a href="" class="other-login-common login-wx">微信账号登录</a>
      <!-- 微博账号 -->
      <a href="" class="other-login-common login-wb">微博账号登录</a>
      <!-- 其他三方登录 -->
      <a href="" class="other-login-common">更多三方登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'otherLogin'
}
</script>

<style lang="less" scoped>
/* 第三方登录的样式开始 */
.other-login {
  float: left;
  border-left: 1px solid #ededed;
  padding-left: 60px;
  position: relative;
}
/* 分割线样式开始 */
.separate-line {
  position: absolute;
  top: 46%;
  left: -6px;
  background: #fff;
  color: #999;
  font-size: 14px;
}
/* 分割线样式结束 */
/* 三方登录共同样式开始 */
.login-way .login-qq {
  background-position: 8px -235px;
}
.login-way .login-wx {
  background-position: 8px -278px;
}
.login-way .login-wb {
  background-position: 8px -390px;
}
.login-way a {
  display: block;
  margin-bottom: 20px;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  line-height: 38px;
  height: 38px;
  font-size: 14px;
  color: #666;
  padding-left: 50px;
  width: 155px;
  background: #f2f2f2;
}
.other-login-common {
}
/* 三方登录共同样式结束 */
/* 第三方登录的样式结束 */
</style>
