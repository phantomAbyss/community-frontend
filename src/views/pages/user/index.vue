<template>
  <!-- 用户的个人信息页面开始 -->
  <div class="user-main">
    <!-- 左部侧边栏开始 -->
    <div class="main-left left-fixed">
      <ul>
        <router-link tag="li" to="/user/profile">
          <a 
          href="javascript:;"
          class="">个人资料</a>
        </router-link>
        <!-- <li class="link-active"></li> -->
        <router-link tag="li" to="/user/account">
          <a 
          href="javascript:void(0);"
          class="">账号设置</a>
        </router-link>
        <router-link tag="li" to="/user/collection">
          <a 
          href="javascript:void(0);"
          class="">我的收藏</a>
        </router-link>
      </ul>
    </div>
    <!-- 左部侧边栏结束 -->
    <!-- 右部内容栏开始 -->
    <div class="main-right">
      <router-view></router-view>
    </div>
    <!-- 右部内容栏结束 -->
  </div>
  <!-- 用户的个人信息页面结束 -->
</template>

<script>
export default {
  name: "user",
};
</script>

<style lang="less" scoped>
/* 用户个人信息样式开始 */
.user-main {
  position: relative;
  width: auto;
  min-width: 896px;
  min-height: 800px;
  background: transparent;
  margin: 80px auto 0;
}
/* 左部侧边栏样式开始 */
.user-main .main-left {
  position: absolute;
  width: 186px;
  top: 0;
  float: left;
  background: #fff;
}
.user-main .left-fixed {
  position: fixed;
  top: 80px;
}
.main-left ul {
  width: 100%;
  list-style: none;
  font-size: 14px;
  padding: 8px 0;
}
.main-left .router-link-active {
  font-weight: 500;
  color: #222226;
  background: #f0f0f5;
}
.main-left .router-link-active a {
  color: #222226;
}
.main-left ul a {
  display: block;
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  color: #555666;
}
/* 左部侧边栏样式结束 */
/* 右部内容栏样式开始 */
.user-main .main-right {
  min-width: 500px;
  margin-left: 202px;
  min-height: 800px;
}
/* 右部内容栏样式结束 */
/* 用户个人信息样式结束 */
</style>
