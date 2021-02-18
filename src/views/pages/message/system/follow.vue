<template>
  <div class="msg-follow">
    <div
      class="follow-item fill-bg"
      v-for="(item, index) in follows"
      :key="index"
    >
      <a :href="item.finalPcUrl" target="_blank" class="item-head">
        <img
          :src="item.triggerUser.head"
          :alt="item.triggerUser.nickname"
        />
      </a>
      <div class="item-content">
        <div class="info">
          <a :href="item.finalMobileUrl">{{ item.triggerUser.nickname }}</a>
          <span>刚刚关注了你</span>
          <span class="time">{{ formatTime(item.createDate) }}</span>
        </div>
        <div class="content">
          <a :href="item.targetEntityJson.pcUrl" target="_blank"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import msgApi from "@/common/service/msg/index";

import moment from "moment";

export default {
  name: "follow",
  data() {
    return {
      follows: [],
      curPage: 1,
      pageSize: 10,
      totalPage: 1,
      totalCount: 2,
    };
  },
  created() {
    this.getFollowList(this.curPage, this.pageSize);
  },
  methods: {
    /* 格式化时间 */
    formatTime(timestamp, format = "YYYY-MM-DD HH:mm:ss") {
      return moment(timestamp).format(format);
    },
    /* 获取所有的关注列表 */
    getFollowList(page, size) {
      msgApi
        .getFollowList(page, size)
        .then((res) => {
          if (res.code === 200) {
            let data = res.data;
            this.follows = data.follows;
            this.totalPage = data.totalPage;
            this.totalCount = data.totalCount;
          } else {
            this.$message({
              message: "关注列表信息获取失败，请检查网络后重新尝试",
              type: "error",
              center: true,
            });
          }
        })
        .catch((err) => {
          this.$message({
            message: err.message,
            type: "error",
            center: true,
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
/* 关注部分的样式开始 */
.msg-follow {
  .follow-item {
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    .item-head {
      width: 50px;
      height: 50px;
      display: block;
      float: left;
      overflow: hidden;
      border: 1px solid #ededed;
      margin-right: 15px;
      margin-left: 20px;
      border-radius: 50%;
      color: #333;
      img {
        border: 0;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .item-content {
      margin: 15px 0px 0px 70px;
      font-size: 14px;
      .info {
        margin-bottom: 10px;
        font-weight: 600;
        a {
          color: #7171fc;
          margin-right: 10px;
        }
        .time {
          float: right;
          color: #aaa;
          font-weight: 400;
        }
      }
      .content {
        margin-bottom: 10px;
        a {
          color: #333;
        }
      }
    }
  }
  .follow-item + .follow-item {
    margin-top: 20px;
  }
}
/* 关注部分的样式结束 */
</style>