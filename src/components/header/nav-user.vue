<template>
  <!-- 鼠标滑过头像时显示个人中心 -->
  <div class="user-submenu">
    <!-- 用户头像和用户名 -->
    <div class="user-submenu-top">
      <a href="#">
        <img class="user-submenu-avatar" :src="avatar" />
      </a>
      <span class="user-submenu-nickname">{{ name }}</span>
    </div>
    <!-- 用户粉丝、收藏、获赞 -->
    <div class="user-submenu-mid">
      <a href="#"> <i class="user-fans-count">--</i>粉丝 </a>
      <a href="#"> <i class="user-favorites-count">7</i>收藏 </a>
      <a href="#"> <i class="user-like-count">100</i>获赞 </a>
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
          <a href="javascript:void(0);" @click="logout">
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
</template>

<script>
import { removeUser } from "@/common/utils/auth";
export default {
  name: "nav-user",
  props: ["name", "avatar"],
  methods: {
    logout() {
      /* 移除cookie的数据 */
      removeUser();
      location.href = "/";
    },
  },
};
</script>

<style lang="less" scoped>
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
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.06);
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
  text-decoration: none !important;
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
</style>