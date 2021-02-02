<template>
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
    <li class="menu-item" v-if="userInfo.name !== undefined">
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
    <li class="menu-item user" v-if="userInfo.name !== undefined">
      <!-- 导航栏的头像 -->
      <div class="avatar">
        <a href="#">
          <img class="user-avatar" src="@/assets/img/avatar.jpg" />
        </a>
      </div>
      <!-- 鼠标滑过后显示 -->
      <nav-user :name="userInfo.name"></nav-user>
    </li>
    <!-- 当用户没有登录的时候，不显示消息和个人中心，而是显示一个登录按钮 -->
    <li class="menu-item" v-else>
      <el-button round>
        <router-link to="/login">登录 / 注册</router-link>
        <!-- <a href="/login">登录 / 注册</a> -->
      </el-button>
    </li>
  </ul>
</template>

<script>
import navUser from "@/components/header/nav-user";
import { getUser } from '@/common/utils/auth'
export default {
  name: "nav-right",
  components: {
    navUser,
  },
  data() {
    return {
      /* 用户信息 */
      userInfo: {}
    };
  },
  created () {
    this.userInfo = getUser();
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
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
.user:hover .user-submenu {
  display: block;
}
.user:hover .avatar {
  display: none;
}
/* 用户头像部分样式结束 */
/* 登录和注册按钮样式开始 */
.el-button {
  position: relative;
  top: 13px;
  left: 10px;
  background: rgb(235, 225, 225);
  font-size: 15px;
  padding: 10px 20px 8px;
}
/* 登录和注册按钮样式结束 */
/* 网页顶部右部分样式结束 */
</style>