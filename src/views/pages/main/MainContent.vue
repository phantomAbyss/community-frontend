<template>
  <!-- 主要内容开始 -->
  <div class="content infinite-list-wrapper">
    <!-- 可以在这里添加菜单、最新、最热的部分 -->
    <div></div>
    <!-- 内容展示部分 -->
    <ul
      class="main-content"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
    >
      <li class="content-item" v-for="(item, index) in posts" :key="index">
        <!-- 帖子简介展示 -->
        <div class="content-item-box">
          <!-- 头像 -->
          <a
            :href="'/user/profile/' + item.userInfo.userId"
            class="user-avatar"
          >
            <img :src="item.userInfo.avatar" :alt="item.userInfo.username" />
          </a>
          <!-- 内容 -->
          <div class="content-item-bd">
            <div class="content-info">
              <p>
                <a
                  :href="'/user/profile/' + item.userInfo.userId"
                  class="name"
                  >{{ item.userInfo.username }}</a
                >
              </p>
              <div class="content-time">
                <a href="#">
                  <span>{{ item.post.publishTime }}</span>
                </a>
              </div>
            </div>
            <a :href="'/article/' + item.post.postId" target="_blank">
              <div class="content-area">
                {{ item.post.content }}
                <!-- <img
                  style="width: 200px; height: 200px; margin-right: 10px"
                  src="@/assets/img/avatar.jpg"
                />
                <p>
                  脂肪是如何伴你一生的？如何才能去除这些多余的脂肪？
                  脂肪是如何伴你一生的？如何才能去除这些多余的脂肪？脂肪细胞主要在幼年时期增殖，且这个过程不可逆。如果你小时候是个小胖子，长大后大概率会成为大胖子。
                  脂肪细胞主要在幼年时期增殖，且这个过程不可逆。如果你小时候是个小胖子，长大后大概率会成为大胖子。
                </p> -->
              </div>
            </a>
          </div>
        </div>
        <!-- 点赞、评论、转发 -->
        <div class="content-item-ft">
          <!-- 点赞 -->
          <a href="javascript:void(0);" class="flex-item">
            <svg
              t="1611229559285"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1154"
              width="22"
              height="22"
            >
              <path
                d="M 861.577 428.695 h -223.037 c 86.425 -319.186 -59.547 -335.487 -59.547 -335.487 c -61.867 0 -49.042 48.918 -53.716 57.076 c 0 156.096 -165.796 278.407 -165.796 278.407 v 442.661 c 0 43.695 59.547 59.433 82.908 59.433 h 335.111 c 31.537 0 57.221 -82.709 57.221 -82.709 c 82.903 -281.911 82.903 -365.789 82.903 -365.789 c 0.001 -58.247 -56.046 -53.591 -56.046 -53.591 v 0 v 0 Z M 861.577 428.695 Z"
                fill="#1296db"
                p-id="1155"
              ></path>
              <path
                d="M 267.943 428.841 h -133.553 c -27.581 0 -28.006 27.09 -28.006 27.09 l 27.581 446.441 c 0 28.416 28.464 28.416 28.464 28.416 h 115.593 c 24.081 0 23.865 -18.798 23.865 -18.798 v -449.296 c 0 -34.287 -33.945 -33.854 -33.945 -33.854 v 0 v 0 Z M 267.943 428.841 Z"
                fill="#1296db"
                p-id="1156"
              ></path>
            </svg>
            {{ item.post.like }}
          </a>
          <!-- 评论 -->
          <a
            :href="'/article/' + item.post.postId"
            target="_blank"
            class="flex-item"
          >
            <svg
              t="1611229879421"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3933"
              width="22"
              height="22"
            >
              <path
                d="M836.53608 825.254796h-128.442434c0.973049 0.973049 1.946097 0.973049 1.946098 0.973048-314.294742 0-544.907292 119.684994-544.907292 119.684995v-122.604141c-85.628289-10.703536-151.795603-82.709143-151.795603-171.256577v-398.949982c0-96.331825 77.843899-174.175724 173.202675-174.175723h649.996556c95.358776 0 173.202675 77.843899 173.202674 173.202674v398.949982c0 96.331825-77.843899 174.175724-173.202674 174.175724z m-533.230708-425.222298c-36.002803 0-65.194265 28.218413-65.194265 63.248168s29.191462 63.248168 65.194265 63.248168 65.194265-28.218413 65.194266-63.248168-29.191462-63.248168-65.194266-63.248168z m224.774258 0c-35.029754 0-63.248168 28.218413-63.248167 63.248168s28.218413 63.248168 63.248167 63.248168 63.248168-28.218413 63.248168-63.248168-28.218413-63.248168-63.248168-63.248168z m224.774258 0c-36.002803 0-65.194265 28.218413-65.194265 63.248168s29.191462 63.248168 65.194265 63.248168 65.194265-28.218413 65.194266-63.248168-29.191462-63.248168-65.194266-63.248168z m0 0"
                fill="#1296db"
                p-id="3934"
              ></path>
            </svg>
            {{ item.post.comment }}
          </a>
          <!-- 转发 -->
          <a href="javascript:void(0);" class="flex-item">
            <svg
              t="1611229949107"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4789"
              width="22"
              height="22"
            >
              <path
                d="M752.91357235 342.02712494C429.0200968 351.86561581 157.29651358 568.7007763 65.3842963 864.76167902c157.2864-154.43841581 406.09665581-255.9302163 687.52927605-261.10836939V342.02712494z"
                fill="#00a1d6"
                p-id="4790"
              ></path>
              <path
                d="M939.19762963 542.16274173c16.05227457-16.18172839 16.05227457-42.59030914 0-58.77203754L586.8243121 129.46394075c-16.05227457-16.18172839-29.25656494-10.74466765-29.25656493 12.03920592V884.82702222c0 22.78387358 13.07483653 28.22093431 29.25656493 12.03920593l352.37331753-354.70348642z"
                fill="#1296db"
                p-id="4791"
              ></path>
            </svg>
            {{ item.post.share }}
          </a>
        </div>
      </li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
  <!-- 主要内容结束 -->
</template>

<script>
import mainApi from "@/common/service/main/index";
export default {
  name: "mainContent",
  data() {
    return {
      // count: 3,
      curpage: 1,
      pageSize: 10,
      loading: false,
      posts: [],
      totalCount: 0,
    };
  },
  computed: {
    noMore() {
      // return this.count >= 6
      return this.posts.length >= 100;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  created() {
    this.getPostList(this.curpage++, this.pageSize, {});
  },
  methods: {
    /* 分页获取帖子 */
    getPostList(page, size, data) {
      mainApi
        .search(page, size, data)
        .then((res) => {
          if (res.code === 200) {
            let data = res.data;
            this.posts = this.posts.concat(data.rows);
          } else {
            this.$message({
              message: res.message || "获取帖子信息失败，请稍后重试",
              type: "error",
              center: true,
            });
          }
          // alert("len = " + this.items.length);
        })
        .catch((err) => {
          this.$message({
            message: err.message || "接口异常，请稍后重试",
            type: "error",
            center: true,
          });
        });
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        // this.count += 2
        this.getPostList(this.curpage, this.pageSize, {});
        this.page++;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
/* 首页的内容部分样式开始 */
.content {
  float: left;
  margin: 0 10px 0 0;
  overflow: auto;
  position: relative;
  width: 690px;
  min-width: 690px;
  min-height: 800px;
  background: transparent;
}
/* 内容展示样式开始 */
.main-content {
  display: block;
}
.content-item {
  border: none;
  padding: 0;
  border-radius: 3px;
  margin-bottom: 10px;
  background: #fff;
  display: block;
}
/* 帖子简介展示样式开始 */
.content-item-box {
  padding: 15px;
  display: block;
  zoom: 1;
}
a:link,
a:visited {
  text-decoration: none;
}
.user-avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  float: left;
  background: #dadada;
  display: block;
  vertical-align: middle;
  overflow: hidden;
}
a {
  color: #333;
}
div {
  display: block;
}
p {
  line-height: 1.4em;
}
.user-avatar img {
  width: 100%;
  object-fit: cover;
}
.content-item-bd {
  font-size: 14px;
  margin-left: 45px;
  position: relative;
}
.content-info {
  font-size: 16px;
  margin-bottom: 10px;
  vertical-align: middle;
  p {
    margin: 0;
    .name {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
      color: rgb(66, 64, 64);
    }
  }
}
.content-item-box .content-time {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  color: #888;
}
.content-area {
  display: flex;
  //   border: 1px solid red;
  //   width: 100%;
}
/* 帖子简介展示样式结束 */
/* 帖子的点赞、评论、转发样式开始 */
.content-item-ft {
  padding: 3px 0;
  position: relative;
  border-top: 1px solid #eee;
  font-size: 0;
  display: flex;
}
.content-item-ft {
  a {
    color: #a2a2a2;
    text-align: center;
    font-size: 14px;
    padding: 4px 0;
    overflow: hidden;
    svg {
      position: relative;
      top: 4px;
      right: 2px;
    }
  }
}
.content-item-ft a + a {
  border-left: 1px solid #eee;
}
.flex-item {
  flex: 1;
}
/* 帖子的点赞、评论、转发样式结束 */
/* 内容展示样式结束 */
/* 首页的内容部分样式结束 */
/* 首页的侧边栏样式开始 */
.bar {
  width: 300px;
  float: left;
}
/* 首页的侧边栏样式结束 */
</style>
