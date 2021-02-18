<template>
  <div class="msg-notice">
    <div
      class="notice-item fill-bg"
      v-for="(item, index) in notices"
      :key="index"
    >
      <div class="notice-content">
        <div class="content" v-html="item.content">
          {{ item.content }}
        </div>
        <p>
          <span class="time">{{ formatTime(item.createDate) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import msgApi from "@/common/service/msg/index";

import moment from "moment";

export default {
  name: "notice",
  data() {
    return {
      notices: [],
      totalPage: 10,
      totalCount: 90,
      curPage: 1,
      pageSize: 10,
    };
  },
  created() {
    this.getNoticeList(this.curPage, this.pageSize);
  },
  methods: {
    /* 获取所有的通知消息 */
    getNoticeList(page, size) {
      msgApi.getNoticeList(page, size).then((res) => {
        if (res.code === 200) {
          let data = res.data;
          this.notices = data.notices;
          this.totalPage = data.totalPage;
          this.totalCount = data.totalCount;
        }
      });
    },
    /* 时间格式转换 */
    formatTime(timestamp, format = "YYYY-MM-DD HH:mm:ss") {
      return moment(timestamp).format(format);
    },
  },
};
</script>

<style lang="less" scoped>
/* 通知的全局样式开始 */
.msg-notice {
  .notice-item {
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
    .notice-content {
      margin-left: 0px;
      font-size: 14px;
      .content {
        margin-bottom: 10px;
        font-size: 14px;
        /deep/ a {
          color: #7171fc;
        }
      }
      p {
        line-height: 1.4pm;
        .time {
          float: right;
          color: #aaa;
          font-weight: 400;
          margin-right: 30px;
        }
      }
    }
  }
  .notice-item + .notice-item {
    margin-top: 20px;
  }
}
/* 通知的全局样式结束 */
</style>