<template>
  <div class="navbar">
    <div class="navbar-main">
      <!-- 网页logo -->
      <a class="header-logo" href="#"></a>
      <!-- 网页导航栏内容 -->
      <ul class="navbar-menu">
        <li class="menu-item"><a href="#">最新活动</a></li>
        <li class="menu-item navbar-this"><a href="#">产品</a></li>
        <li class="menu-item"><a href="#">大数据</a></li>
        <li class="menu-item"><a href="#">社区</a></li>
      </ul>
      <!-- 网页顶部右部分 -->
      <ul class="navbar-user">
        <!-- 搜索框 -->
        <li class="menu-item search-box">
          <input class="search-txt" type="text" placeholder="想搜点啥呢" />
          <a class="search-btn">
            <svg
              t="1611034848789"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="894"
              width="32"
              height="32"
            >
              <path
                d="M257.7275 276.5675A284.0175 284.0175 0 0 0 179.495 530.75c16.92-76.7925 56.7-151.83 118.665-213.84C360.17 254.8775 435.2075 215.12 512 198.2c-89.325-16.83-185.175 9.2475-254.2725 78.3675z"
                fill="#ffffff"
                p-id="895"
              ></path>
              <path
                d="M931.625 803.315l-106.965-106.965a103.725 103.725 0 0 0-81.5625-29.9925c100.5975-145.5075 86.0625-346.635-43.4925-476.2125-145.845-145.89-382.365-145.89-528.255 0-145.845 145.89-145.845 382.4325 0 528.3225 129.555 129.5775 330.525 144 476.1225 43.4025-2.25 29.25 7.785 59.355 29.9925 81.5625l106.965 106.9875c40.5 40.41 106.6725 40.41 147.0825 0 40.6125-40.41 40.6125-106.605 0.1125-147.105zM656.225 674.975c-121.8825 121.8825-319.3875 121.8825-441.225 0-121.8825-121.8825-121.8825-319.4325 0-441.315 121.8375-121.8825 319.3425-121.8825 441.225 0 121.86 121.7925 121.86 319.4325 0 441.315z"
                fill="#ffffff"
                p-id="896"
              ></path>
            </svg>
          </a>
        </li>
        <!-- 消息 -->
        <li class="menu-item">
          <Badge :count="20" :offset="[15, 1]">
            <a href="#" class="message-box">
              <svg
                t="1611044606256"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1393"
                width="30"
                height="30"
              >
                <path
                  d="M624.128 424.448c-22.528 0-33.792 9.728-33.792 29.184V512c0 19.456 11.264 29.184 33.792 29.184 22.528 0 33.792-9.728 33.792-29.184v-58.368c0-19.456-11.264-29.184-33.792-29.184z m-224.256 0c-22.528 0-33.792 9.728-33.792 29.184V512c0 19.456 11.264 29.184 33.792 29.184s33.792-9.728 33.792-29.184v-58.368c-0.512-19.456-11.776-29.184-33.792-29.184zM153.6 856.064L115.2 934.4c-11.264 13.312-13.824 32.256-6.144 48.128s23.552 26.112 40.96 26.112H512c273.92 0 496.64-222.72 496.64-496.64S785.92 15.36 512 15.36 15.36 238.08 15.36 512c0 128 49.152 251.392 138.24 344.064z m64.512 79.872c18.944-46.592 22.016-95.232-12.288-130.56C130.048 726.528 87.552 621.056 87.552 512c0-233.984 189.952-423.936 423.936-423.936S935.424 278.016 935.424 512 745.472 935.936 511.488 935.936H218.112zM512 719.872c32.768 0 64-16.384 84.992-44.544 3.584-4.608 3.072-11.264-1.024-14.848-1.536-1.536-3.584-2.56-6.144-2.56s-5.632 1.536-7.168 3.584c-17.92 23.552-44.032 37.376-71.168 37.376-27.648 0-53.248-13.312-71.168-37.376-2.048-2.56-4.608-3.584-7.168-3.584-2.048 0-4.096 1.024-6.144 2.56-2.048 2.048-3.072 4.608-3.072 7.168 0 2.56 0.512 5.632 2.048 7.68C448 704 479.232 719.872 512 719.872z"
                  fill="#fff"
                  p-id="1394"
                ></path>
              </svg>
            </a>
          </Badge>
          <!-- <a href="#">消息</a> -->
        </li>
        <!-- 个人中心 -->
        <li class="menu-item user">
          <!-- 导航栏的头像 -->
          <div class="avatar">
            <a href="#">
              <img class="user-avatar" src="../assets/img/avatar.jpg" />
            </a>
          </div>
          <!-- 鼠标滑过头像时显示个人中心 -->
          <div class="user-submenu">
            <!-- 用户头像和用户名 -->
            <div class="user-submenu-top">
              <a href="#">
                <img class="user-submenu-avatar" src="../assets/img/avatar.jpg" />
              </a>
              <span class="user-submenu-nickname">phantom</span>
            </div>
            <!-- 用户粉丝、收藏、获赞 -->
            <div class="user-submenu-mid">
              <a href="#">
                <i class="user-fans-count">--</i>粉丝
                </a>
              <a href="#">
                <i class="user-favorites-count">7</i>收藏
              </a>
              <a href="#">
                <i class="user-like-count">100</i>获赞
              </a>
            </div>
            <!-- 用户个人中心、个人资料修改等 -->
            <div class="user-submenu-bottom">
              <ul class="submenu-bottom">
                <li class="submenu-item">
                  <a href="/user/profile">
                    <svg
                      t="1611213240032"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3902"
                      width="22"
                      height="22"
                    >
                      <path
                        d="M952.832 911.872s-25.6 45.056-84.992 45.056h-716.8c-33.28 0-61.44-17.92-77.312-45.056 0 0-12.288-12.8-12.288-45.056V844.8h1.536c11.776-135.68 131.072-248.832 294.4-293.376C287.232 502.784 240.64 421.888 240.64 329.728c0-148.48 120.32-268.8 268.8-268.8S778.24 181.248 778.24 329.728c0 92.16-46.592 173.056-117.248 221.696 163.328 44.032 282.624 157.696 294.4 293.376h1.536v22.528c0 14.848-1.536 29.696-4.096 44.544z"
                        fill="#1296db"
                        p-id="3903"
                      ></path>
                    </svg>
                    个人中心
                  </a>
                </li>
                <li class="submenu-item"><a href="#">内容管理</a></li>
                <li class="submenu-item submenu-item-exit">
                  <a href="#">
                    <svg
                      t="1611212900562"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3680"
                      width="22"
                      height="22"
                    >
                      <path
                        d="M459.86323093 99.67145599c0-36.26160532 31.13470508-65.641136 69.52806187-65.64113599 38.39990613 0 69.51714667 29.37953068 69.51714668 65.64113599l0 365.1451232c0 36.25069011-31.11724053 65.63567787-69.51714668 65.63567788-38.39444907 0-69.52806188-29.38498772-69.52806187-65.63567788L459.86323093 99.67145599 459.86323093 99.67145599zM512.00545813 989.96858773c-239.97540054 0-434.51709654-183.69628799-434.51709655-410.28302293 0-174.4445088 115.51735254-323.07222933 278.09150936-382.42180588L355.57987092 343.3198432c-83.39263361 49.31517226-139.04520853 136.60673813-139.04520851 236.3657216 0 154.0853536 132.29629973 278.98874453 295.47188799 278.98874453 163.18759469 0 295.46642986-124.90338986 295.46642987-278.98874453 0-85.18273708-40.543664-161.31562667-104.27790294-212.4962176L703.19507627 211.68500907c143.97563413 66.83417493 243.3176544 206.29088853 243.31765439 368.01256318C946.52255466 806.27229974 751.98085761 989.96858773 512.00545813 989.96858773L512.00545813 989.96858773zM512.00545813 989.96858773"
                        fill="#1296db"
                        p-id="3681"
                      ></path>
                    </svg>
                    退出登录
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="less" scoped>
/* navbar总体样式开始 */
.navbar {
  position: relative;
  width: 1200px;
  //   border: 1px solid blue;
  margin: 0 auto;
}
/* navbar总体样式结束 */
/* 网页logo样式开始 */
.header-logo {
  background: url(../assets/img/header-logo.jpg) no-repeat;
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
/* 网页顶部右部分样式开始 */
.navbar-user {
  width: 350px;
  position: relative;
  float: right;
  //   border: 1px solid red;
}
.navbar-user .menu-item {
  float: left;
  //   border: 1px solid red;
}
/* 搜索框样式开始 */
.search-box {
  //   position: absolute;
  //   margin: 15px 30px 0px 0px;
  transform: translate(-50%, 0);
  background: #7171fc;
  height: 30px;
  border-radius: 40px;
  padding: 10px;
}
.search-box:hover > .search-txt {
  width: 200px;
  padding: 0 6px;
  background-color: #fff;
  border-radius: 20px;
}
.search-btn {
  float: right;
  width: 30px;
  border-radius: 20px;
  background: #7171fc;
  display: flex;
  justify-content: center;
  transition: 0.4s;
  margin-left: -50px;
}
svg {
  position: relative;
  top: 1px;

}
.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  font-size: 16px;
  transition: 0.4s;
  line-height: 32px;
  width: 0px;
}
/* 搜索框样式结束 */
/* 消息按钮样式开始 */
.message-box {
  padding: 10px 10px;
  font-size: 20px;
  display: inline-block;
}
/* 消息按钮样式结束 */
/* 用户头像部分样式开始 */
.user-avatar {
  width: 35px;
  height: 35px;
  margin: 12px 0px 0px 25px;
  border-radius: 50%;
}
/* 用户头像部分样式结束 */
/* 头像的下拉列表的样式开始 */
.user-submenu {
  display: none;
  width: 248px;
  color: #222226;
  background: #fff;
  position: absolute;
  min-height: 200px;
  top: 60px;
  left: 50%;
  margin-left: -185px;
  z-index: 100;
  border-radius: 4px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .06);
}
.user:hover .user-submenu {
  display: block;
}
.user:hover .avatar {
  display: none;
}
/* 下拉列表的头像开始 */
.user-submenu-top {
  text-align: center;
  padding: 20px 0 12px;
  border-bottom: 1px solid #e8e8ed;
}
.user-submenu-top .user-submenu-avatar {
  position: absolute;
  width: 50px;
  height: 50px;
  top: -30px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
  border: 1px solid #e8e8ed;
}
a:visited {
  text-decoration: none!important;
}
.user-submenu-top .user-submenu-nickname {
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  font-size: 16px;
  color: #222226;
  font-weight: 500;
  height: 30px;
  line-height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
/* 下拉列表的头像结束 */
/* 下拉列表的收藏、获赞样式开始 */
.user-submenu-mid {
  display: flex;
  justify-content: space-around;
  color: #999aaa;
  font-size: 14px;
  text-align: center;
  padding: 8px 0;
  border-bottom: 1px solid #e8e8ed;
}
.user-submenu-mid a {
  display: block;
  height: 50px;
  line-height: 20px;
  color: inherit;
}
.user-submenu-mid i {
  font-size: 20px;
  color: #222226;
  font-style: normal;
  font-weight: 600;
  display: block;
  line-height: 30px;
  height: 30px;
}
/* 下拉列表的收藏、获赞样式结束 */
/* 下拉列表的个人中心、退出样式开始 */
.user-submenu-bottom {
  text-align: center;
}
.user-submenu-bottom ul {
  padding: 8px 0;
  font-weight: 400;
  color: #555666;
  border-radius: 0 0 4px 4px;
  border-bottom: 1px solid #e8e8ed;
}
.user-submenu-bottom li:hover {
  background: #f0f0f5;
  color: black;
}
.user-submenu-bottom ul li a {
  display: block;
  padding: 0 16px;
  height: 40px;
  line-height: 40px;
  color: inherit;
}
.user-submenu-bottom .submenu-item-exit {
  padding-top: 8px;
  border-top: 1px solid #e8e8ed;
}
.user-submenu-bottom a svg {
  position: relative;
  top: 5px;
}
/* 下拉列表的个人中心、退出样式结束 */
/* 头像的下拉列表的样式结束 */
/* 网页顶部右部分样式结束 */
</style>
