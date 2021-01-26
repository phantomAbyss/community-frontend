<template>
  <!-- 登录注册界面开始 -->
  <div class="main">
    <div class="wrapper">
      <!-- 登录注册按钮开始 -->
      <div class="tabbed">
        <ul class="tab-btn">
          <li class="tab-selected">
            <a href="#"> 登录 </a>
          </li>
          <li>
            <a href="#">
              注册
            </a>
          </li>
        </ul>
      </div>
      <!-- 登录注册按钮结束 -->
      <!-- 登录和注册的内容 -->
      <div class="wrapper-content">
        <!-- 账号密码登录或者手机注册 -->
        <login-input></login-input>
        <!-- 第三方登录 -->
        <other-login></other-login>
      </div>
    </div>
  </div>
  <!-- 登录注册界面结束 -->
</template>

<script>
import LoginInput from '@/components/login/LoginInput.vue'
import OtherLogin from '@/components/login/OtherLogin.vue'

export default {
  name: 'login',
  components: {
    LoginInput,
    OtherLogin
  }
}
</script>

<style lang="less" scoped>
/* 登录注册界面的全局样式开始 */
.main {
  display: block;
  zoom: 1;
  margin: 0 auto;
  width: 1000px;
  padding: 70px 0px 250px;
}
.wrapper {
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
}
/* 登录注册界面的全局样式结束 */
/* 登录注册按钮样式开始 */
.tab-btn {
  display: block;
  overflow: hidden;
  zoom: 1;
}
.tabbed li.tab-selected {
  background: #fff;
  border-top: 2px solid #25bb9b;
}
.tabbed a {
  color: #666;
  font-size: 24px;
}
.tabbed li {
  float: left;
  background: #f3f4f5;
  border-top: 2px solid #f3f4f5;
  width: 50%;
  text-align: center;
  height: 83px;
  line-height: 83px;
}
.tab-selected a,
.tabbed a:hover {
  text-decoration: none;
  color: #25bb9b;
}
a:-webkit-any-link {
  cursor: pointer;
}
/* 登录模块的样式开始 */
.wrapper-content {
  border-top: 1px solid #ededed;
  margin: 0 20px;
  padding: 60px 70px 80px 40px;
  overflow: hidden;
}
/* 登录模块的样式结束 */
/* 登录注册按钮样式结束 */
</style>
