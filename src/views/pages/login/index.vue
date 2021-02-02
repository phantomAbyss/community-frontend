<template>
  <!-- 登录注册界面开始 -->
  <div class="main">
    <div class="wrapper">
      <!-- 登录注册按钮开始 -->
      <div class="tabbed">
        <ul class="tab-btn">
          <li :class="{'tab-selected':isLogin}" @click="changeForm">
            <a href="javascript:void(0);"> 登录 </a>
          </li>
          <li :class="{'tab-selected':!isLogin}" @click="changeForm">
            <a href="javascript:void(0);"> 注册 </a>
          </li>
        </ul>
      </div>
      <!-- 登录注册按钮结束 -->
      <!-- 登录和注册的内容 -->
      <div class="wrapper-content">
        <!-- 账号密码登录或者手机注册 -->
       <div class="login-input">
         <login-input v-if="isLogin"></login-input>
         <reg-input v-else></reg-input>
       </div>
        <!-- 第三方登录 -->
        <other-login></other-login>
      </div>
    </div>
  </div>
  <!-- 登录注册界面结束 -->
</template>

<script>
import LoginInput from '@/views/pages/login/LoginInput.vue'
import RegInput from '@/views/pages/login/RegInput.vue'
import OtherLogin from '@/views/pages/login/OtherLogin.vue'

export default {
  name: 'login',
  components: {
    LoginInput,
    RegInput,
    OtherLogin
  },
  data () {
    return {
      /* 目前是否处于登录状态 */
      isLogin: true
    }
  },
  methods: {
    /* 登录表单和注册表单的切换 */
    changeForm() {
      this.isLogin = !this.isLogin;
    }
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
.login-input {
  float: left;
  width: 450px;
  border-right: 1px solid #ededed;
  padding-right: 60px;
  margin-right: -1px;
  position: relative;
}
/* 登录注册按钮样式结束 */
</style>
