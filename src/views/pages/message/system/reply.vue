<template>
  <div class="msg-reply">
    <div class="reply-item fill-bg" v-for="(item, index) in replys" :key="index">
      <a href="#" target="_blank" class="item-head">
        <img
          :src="item.triggerUser.head"
          :alt="item.triggerUser.nickname"
        />
      </a>
      <div class="item-content">
        <div class="info">
          <a href="#" target="_blank">{{ item.triggerUser.nickname }}</a>
          <span>{{ item.shortName }}</span>
          <span class="time">{{ formatTime(item.createDate) }}</span>
        </div>
        <div class="content">
          <a :href="item.finalMobileUrl" target="_blank">
            {{item.entityJson.content}}
          </a>
        </div>
        <div class="quote">
          <span>{{ item.targetEntityJson.entityTypeNameWithAuthor }}：</span>
          <a href="#" target="_blank"
            >{{ item.targetEntityJson.content }}</a
          >
        </div>
        <div class="origin">
          <span>来自：</span>
          <a href="#">{{ item.sourceEntityJson.content }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import msgApi from '@/common/service/msg/index'

import moment from "moment";

export default {
  name: "reply",
  data () {
    return {
      replys: [],
      totalPage: 4,
      totalCount: 10,
      curPage: 1,
      pageSize: 10
    }
  },
  created () {
    this.getReplyList(this.curPage, this.pageSize);
  },
  methods: {
    /* 格式化时间 */
    formatTime(timestamp, format = "YYYY-MM-DD HH:mm:ss") {
      return moment(timestamp).format(format);
    },
    /* 获取所有的回复消息 */
    getReplyList(page, size) {
      msgApi.getReplyList(page, size).then(res => {
        if (res.code === 200) {
          let data = res.data;
          this.replys = data.replys;
          this.totalPage = data.totalPage;
          this.totalCount = data.totalCount;
        } else {
          this.$message({
            message: '获取回复消息数据失败，请稍后重试',
            type: 'error',
            center: true
          })
        }
      }).catch(err => {
        this.$message({
          message: err.message,
          type: 'error',
          center: true
        })
      })
    }
  }
};
</script>

<style lang="less" scoped>
/* 回复的样式开始 */
.msg-reply {
  .reply-item {
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
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .item-content {
      margin-left: 70px;
      font-size: 14px;
      .info {
        margin-bottom: 10px;
        font-weight: 600;
        a {
          color: #7171fc !important;
          margin-right: 5px;
        }
        .time {
          float: right;
          color: #aaa;
          font-weight: 400;
          margin-right: 30px;
        }
      }
      .content {
        margin-bottom: 10px;
        a {
          color: #333;
        }
      }
      .quote {
        background: #f8f8f8;
        padding: 10px;
        margin-bottom: 10px;
        color: #aaa;
        & > span {
          vertical-align: middle;
          display: inline-block;
        }
        & > a {
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          max-width: 34em;
          color: #999;
        }
      }
      .origin {
        color: #aaa;
        & > span {
          vertical-align: middle;
          display: inline-block;
        }
        & > a {
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          max-width: 32em;
          color: #999;
        }
      }
    }
  }
  .reply-item + .reply-item {
    margin-top: 20px;
  }
}
/* 回复的样式结束 */
</style>