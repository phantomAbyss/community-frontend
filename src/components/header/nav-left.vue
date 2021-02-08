<template>
  <div>
    <!-- 网页logo -->
    <a class="header-logo" href="/"></a>
    <!-- 网页导航栏内容 -->
    <ul class="navbar-menu">
      <router-link
        to="/news"
        tag="li"
        class="menu-item"
        active-class="navbar-this"
      >
        <a href="javascript:void(0);">首页</a>
      </router-link>
      <router-link
        to="/"
        tag="li"
        class="menu-item"
        active-class="navbar-this"
        exact
      >
        <a href="javascript:void(0);">吐槽</a>
      </router-link>
      <router-link
        to="/community"
        tag="li"
        class="menu-item"
        active-class="navbar-this"
      >
        <a href="javascript:void(0);">逛一逛</a>
      </router-link>
      <router-link
        to="/test"
        tag="li"
        class="menu-item"
        active-class="navbar-this"
      >
        <a href="javascript:void(0);">测试</a>
      </router-link>
      <!-- <li class="menu-item"><a href="/">首页</a></li>
        <li class="menu-item navbar-this"><a href="/test">测试</a></li>
        <li class="menu-item"><a href="#">大数据</a></li>
        <li class="menu-item"><a href="#">社区</a></li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "nav-left",
};
</script>

<style lang="less" scoped>
/* 网页logo样式开始 */
.header-logo {
  background: url(~@/assets/img/header-logo.jpg) no-repeat;
  background-size: 100px 50px;
  display: block;
  width: 150px;
  height: 60px;
  float: left;
  margin: 5px 0px 0px 40px;
  //   border: 1px solid red;
}
/* 网页logo样式结束 */
/* 网页导航栏内容样式开始 */
.navbar-menu {
  //   border: 1px solid red;
  margin-left: 80px;
  float: left;
  width: 500px;
  position: relative;
  padding: 0 20px;
  background-color: #7171fc;
  color: #fff;
  border-radius: 2px;
  font-size: 20px;
  box-sizing: border-box;
}
.navbar-menu .menu-item {
  position: relative;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: middle;
  line-height: 60px;
}
.navbar-menu .menu-item a {
  display: block;
  padding: 0 20px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
}
.navbar-menu .navbar-this:after {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 5px;
  background-color: #5fb878;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
}
.navbar-menu .menu-item a:hover,
.navbar-menu .navbar-this a {
  color: #fff;
  font-size: 25px;
}
.navbar-menu .navbar-this:after {
  content: "";
  top: auto;
  bottom: 0;
  width: 100%;
}
/* 网页导航栏内容样式结束 */
</style>