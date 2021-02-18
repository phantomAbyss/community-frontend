<template>
  <div class="chat-box">
    <!-- 这是和好友 {{ username }} 的聊天 -->
    <div class="chat-head">
      <div class="head-content">
        <span>
          <a href="#" target="_blank">
            {{ targetUserName }}
          </a>
        </span>
        <div class="head-oprt">
          <el-popover
            popper-class="oprt-popover"
            placement="bottom"
            width="150"
            trigger="hover"
          >
            <div class="oprt-item">删除对话</div>
            <svg
              slot="reference"
              t="1613535092814"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4051"
              width="22"
              height="22"
            >
              <path
                d="M512 1024C229.229714 1024 0 794.770286 0 512S229.229714 0 512 0s512 229.229714 512 512-229.229714 512-512 512zM310.857143 585.142857a54.857143 54.857143 0 1 0 0-109.714286 54.857143 54.857143 0 0 0 0 109.714286z m219.428571 0a54.857143 54.857143 0 1 0 0-109.714286 54.857143 54.857143 0 0 0 0 109.714286z m219.428572 0a54.857143 54.857143 0 1 0 0-109.714286 54.857143 54.857143 0 0 0 0 109.714286z"
                fill="#7171fc"
                p-id="4052"
              ></path>
            </svg>
          </el-popover>
        </div>
      </div>
    </div>
    <div class="chat-body">
      <div
        class="chat-item fill-bg"
        :class="{'my-reply': targetUserId == item.receiver}"
        v-for="(item, index) in messages"
        :key="index"
      >
        <a href="#" target="_blank" class="chat-head">
          <img
            :src="targetUserId == item.send ? targetUserHead : user.avatar"
            alt="用户的头像"
          />
        </a>
        <div class="tooltip">
          <div class="tooltip-arrow"></div>
          <div class="msg-chat">
            <div class="chat-content">
              <div>{{item.content}}</div>
            </div>
          </div>
          <div class="msg-info">
            <span>{{formatTime(item.createDate)}}</span>
            <a href="javascript:void(0);">删除</a>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-edit">
      <!-- 表情和图片的选项卡 -->
      <div>
        <span class="tool-bar">
          <a href="javascript:void(0);"
            ><svg
              t="1613566502060"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3718"
              width="25"
              height="25"
            >
              <path
                d="M512 804.352a220.928 220.928 0 0 0 214.912-169.856H297.152A220.8 220.8 0 0 0 512 804.352zM261.952 449.216a61.632 61.632 0 1 0 123.264 0 61.632 61.632 0 0 0-123.264 0zM635.328 449.216a61.632 61.632 0 1 0 123.264 0 61.632 61.632 0 0 0-123.264 0z"
                p-id="3719"
                fill="#7171fc"
              ></path>
              <path
                d="M512 84.352A450.624 450.624 0 1 0 512 985.6 450.624 450.624 0 0 0 512 84.352z m0 84.416a363.968 363.968 0 0 1 258.944 107.264 363.968 363.968 0 0 1 107.264 258.944 363.968 363.968 0 0 1-107.264 258.944 366.08 366.08 0 0 1-116.416 78.528c-45.12 19.136-93.056 28.8-142.528 28.8a363.968 363.968 0 0 1-258.944-107.264A364.224 364.224 0 0 1 145.792 535.04a363.968 363.968 0 0 1 107.264-258.944 366.08 366.08 0 0 1 116.416-78.528A362.88 362.88 0 0 1 512 168.768"
                p-id="3720"
                fill="#7171fc"
              ></path></svg
          ></a>
          <a href="javascript:void(0);">
            <svg
              t="1613566634250"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6108"
              width="22"
              height="22"
            >
              <path
                d="M911.522909 93.090909H118.760727C54.574545 93.090909 0 146.618182 0 209.640727v607.883637C0 880.523636 51.362909 930.909091 115.549091 930.909091h792.762182c64.186182 0 115.549091-50.385455 115.549091-113.384727V209.640727C1027.072 146.618182 975.709091 93.090909 911.522909 93.090909zM57.762909 244.270545c0-62.999273 28.904727-91.345455 93.090909-91.345454h722.152727c64.186182 0 93.090909 28.346182 93.09091 91.345454v371.665455l-73.844364-72.448c-44.916364-44.078545-118.737455-40.936727-163.677091 3.165091l-96.279273 97.629091-231.098182-217.320727c-48.151273-44.101818-121.949091-40.96-166.888727 6.283636l-176.546909 179.549091V244.270545zM876.218182 874.216727H154.065455c-64.186182 0-93.090909-28.346182-93.09091-91.345454v-85.038546l192.581819-198.423272c44.916364-50.408727 86.667636-50.408727 131.584-6.30691l288.861091 267.729455 3.211636 3.141818c6.423273 3.141818 9.634909 6.283636 19.269818 6.283637 16.058182 0 28.881455-12.567273 28.881455-28.32291 0-6.306909-3.211636-12.613818-6.423273-18.897454l-6.423273-6.306909-38.516363-31.488 73.82109-72.448c44.939636-44.101818 86.667636-47.243636 131.607273-3.165091l93.090909 88.203636v85.038546c-3.234909 59.857455-32.116364 91.345455-96.302545 91.345454zM625.873455 256.884364c-57.786182 0-105.914182 47.243636-105.914182 103.936 0 56.692364 48.128 103.936 105.890909 103.936 57.786182 0 105.937455-47.243636 105.937454-103.936 0-59.857455-48.151273-103.936-105.914181-103.936z m0 148.014545c-25.669818 0-48.151273-22.039273-48.151273-47.243636 0-25.181091 22.481455-47.243636 48.151273-47.243637s48.128 22.062545 48.128 47.243637c-3.188364 25.204364-22.458182 47.243636-48.128 47.243636z"
                fill="#7171fc"
                p-id="6109"
              ></path>
            </svg>
          </a>
        </span>
      </div>
      <!-- 聊天内容编辑框 -->
      <textarea
        placeholder="请输入聊天内容，按回车发送"
        class="msg-input"
      ></textarea>
      <!-- 发送按钮 -->
      <div>
        <a href="javascript:void(0);" class="post-msg">发送</a>
      </div>
    </div>
  </div>
</template>

<script>
import msgApi from "@/common/service/msg/index";
import { getUser } from '@/common/utils/auth'

import moment from 'moment'

export default {
  name: "chat",
  props: {
    conversationId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      user: {},
      targetUserName: "",
      curPage: 1,
      pageSize: 10,
      msgType: 0,
      totalPage: 10,
      messages: [],
      unRead: 10,
      targetUserId: "",
      targetUserHead: "",
    };
  },
  created() {
    this.getMsgList(this.conversationId, this.curPage, this.pageSize);
    this.user = getUser();
  },
  methods: {
    // 格式化时间
    formatTime (timestamp, format = 'YYYY-MM-DD HH:mm:ss') {
      return moment(timestamp).format(format)
    },
    /* 根据会话的id分页获取 */
    getMsgList(msgId, page, size) {
      msgApi
        .getMsgList(msgId, page, size)
        .then((res) => {
          if (res.code === 200) {
            let data = res.data;
            this.targetUserName = data.targetUserName;
            this.curPage = data.curPage;
            this.msgType = data.msgType;
            this.totalPage = data.totalPage;
            this.messages = data.messages.reverse();
            this.unRead = data.unRead;
            this.targetUserId = data.targetUserId;
            this.targetUserHead = data.targetUserHead;
          } else {
            this.$message({
              message: "获取数据失败",
              type: "error",
              center: true,
            });
          }
        })
        .catch((err) => {
          this.$message({
            message: err.message || "接口异常，请稍后重试",
            type: "error",
            center: true,
          });
        });
    },
  },
  watch: {
    $route(to, from) {
      /* 监听路由变化，解决原来组件实例被复用的问题 */
      this.getMsgList(this.conversationId, this.curPage, this.pageSize)
      // console.log(to + ", " + from);
    }
  }
};
</script>

<style lang="less" scoped>
/* 好友聊天界面样式 */
.chat-box {
  height: 635px;
  width: 725px;
  overflow: hidden;
  margin: 0;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  background: #fff;
  float: left;
  display: flex;
  flex-direction: column;
  .chat-head {
    border-bottom: 1px solid #ededed;
    .head-content {
      background: #f6f6f6;
      text-align: center;
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 4px 4px 0 0;
      color: #3d444d;
      .head-oprt {
        position: relative;
        float: right;
        cursor: pointer;
      }
    }
  }
  .chat-body {
    height: 373px;
    padding: 15px;
    flex: 1;
    overflow-y: auto;
    .chat-item {
      margin-bottom: 20px;
      .chat-head {
        display: block;
        float: left;
        width: 40px;
        height: 40px;
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
      .tooltip {
        padding: 0;
        margin: 0;
        position: relative;
        float: left;
        display: block;
        line-height: 1.4;
        visibility: visible;
        font-size: 14px;
        z-index: 99;
        .tooltip-arrow {
          border-right-color: #ebf8f5;
          left: -9px;
          margin-top: -35px;
          border-width: 5px 10px;
          top: 50px;
          content: "";
          height: 0;
          width: 0;
          border-right: 9px solid #ebf8f5;
          border-top: 9px dashed transparent;
          border-bottom: 9px dashed transparent;
          position: absolute;
        }
        .msg-chat {
          background: #ebf8f5;
          max-width: 537px;
          padding: 10px;
          text-align: left;
          color: #666;
          line-height: 18px;
          border-radius: 6px;
          font-size: 12px;
          box-shadow: 0 0 5px #f0f0f0;
          .chat-content {
            font-size: 14px;
          }
        }
        .msg-info {
          margin-top: 10px;
          color: #999;
          font-size: 12px;
          a {
            color: #25bb9b;
            margin-left: 10px;
          }
        }
      }
    }
    .my-reply {
      .chat-head {
        float: right;
        margin: 0 0 0 15px;
      }
      .tooltip {
        padding: 0;
        margin: 0;
        float: right;
        .tooltip-arrow {
          border: 5px solid #ebf8f5;
          border-width: 5px 10px;
          border-color: transparent transparent transparent #ebf8f5;
          right: -20px;
          left: auto;
        }
        .msg-info {
          text-align: right;
        }
      }
    }
    .chat-item:last-child {
      margin-bottom: 0;
    }
  }
  .chat-edit {
    position: relative;
    padding: 15px;
    border-top: 1px solid #e0e0e0;
    div {
      height: 20px;
    }
    .tool-bar {
      a {
        display: inline-block;
        width: 22px;
        height: 22px;
        font-size: 20px;
        margin-right: 20px;
        line-height: 22px;
        text-align: center;
      }
    }
    .msg-input {
      display: block;
      resize: none;
      height: 80px;
      width: 100%;
      box-sizing: border-box;
      margin: 10px 0;
      padding: 5px 5px;
    }
    .post-msg {
      // display: inline-block;
      text-align: center;
      padding: 5px 0 6px;
      width: 60px;
      color: #fff;
      font-size: 14px;
      border-radius: 3px;
      border: none 0;
      cursor: pointer;
      line-height: normal;
      outline: 0;
      white-space: nowrap;
      background: #25bb9b;
      float: right;
    }
  }
}
</style>
<style lang="less">
.oprt-popover {
  width: 80px !important;
  .oprt-item {
    text-align: center;
    height: 20px;
    border-radius: 5px;
    &:hover {
      background: #e4e4f3;
      color: #7171fc;
    }
  }
}
.el-popover {
  min-width: 80px;
}
</style>