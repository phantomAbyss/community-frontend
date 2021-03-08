<template>
<!-- 当前页面已被弃用，新的消息菜单menu的详细信息见@/views/pages/message/menu文件 -->
  <div class="left-box">
    <!-- 左侧头部部分 -->
    <div class="menu-head">
      <h1>消息中心</h1>
      <div class="msg-read">
        <a href="javascript:void(0);" class="read-link">全部标记已读</a>
      </div>
      <router-link to="/msg/system/notice">
        <div class="msg-title">
          <svg
            t="1613469387387"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6274"
            width="30"
            height="30"
          >
            <path
              d="M510.4 10.2c-276 0-499.8 223.8-499.8 500S234.4 1010 510.4 1010s499.8-223.8 499.8-499.8-223.6-500-499.8-500zM539.2 733c0 55.2-42.4 26.8-42.4 26.8L313.4 605.4H285c-17.6 0-31.8-14.4-31.8-32.4V443.6c0-17.8 14.2-32.4 31.8-32.4h33.8l177.8-151s42.4-28.8 42.4 27V733z m63.4-165.2c49.4-45.8 0-107.8 0-107.8s12.4-38.6 31.8-27c49.4 36.8 53 118.6 0 161.6-23 11.8-41.4-14.2-31.8-26.8zM660.8 681c-15.8 6.2-37-22.4-21.2-37.8 106.8-91.6 105-175.2 0-264-20.2-20.6 14.2-44 21.2-37.8 139.6 62.8 145.6 272.2 0 339.6z"
              p-id="6275"
              fill="#7171fc"
            ></path>
          </svg>
          系统消息
        </div>
      </router-link>
      <div class="search-input">
        <el-autocomplete
          class="inline-input"
          v-model="state"
          :fetch-suggestions="querySearch"
          placeholder="查找想要私聊的朋友"
          @select="handleSelect"
        >
          <i slot="prefix"
            ><svg
              t="1613469099383"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3388"
              width="25"
              height="25"
            >
              <path
                d="M858.474 858.464c-13.422 13.402-31.009 20.11-48.615 20.11-17.609 0-35.196-6.7-48.596-20.102l-127.752-123.84 31.903-32.892 128.003 124.089c9.17 9.187 23.737 9.156 32.639 0.245 4.323-4.314 6.691-10.086 6.691-16.236 0-6.133-2.369-11.882-6.691-16.194l-124.309-128.24 32.892-31.877L858.7 761.49c12.731 12.695 19.868 29.965 19.868 48.347 0 18.368-7.137 35.656-20.094 48.627zM443.269 741.103c-164.222 0-297.836-133.605-297.836-297.836 0-164.239 133.614-297.842 297.836-297.842s297.839 133.603 297.839 297.842c0 164.231-133.617 297.836-297.839 297.836z m0-549.854c-138.963 0-252.015 113.055-252.015 252.018s113.052 252.01 252.015 252.01 252.015-113.047 252.015-252.01-113.052-252.018-252.015-252.018zM313.772 572.812c-71.464-71.433-71.464-187.697 0-259.18l32.396 32.399c-53.584 53.601-53.584 140.804 0 194.379l-32.396 32.402z"
                p-id="3389"
                fill="#7171fc"
              ></path></svg
          ></i>
          <template slot-scope="{ item }">
            <div class="msg-item">
              <!-- 用户头像 -->
              <div class="item-avatar">
                <img class="item-img" :src="item.targetUserHead" />
              </div>
              <!-- 用户用户名 -->
              <div class="item-username">
                {{ item.targetUserName }}
              </div>
            </div>
          </template>
        </el-autocomplete>
      </div>
    </div>
    <!-- 左侧内容部分的好友栏 -->
    <div class="menu-content">
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
        <router-link
          tag="li"
          v-for="(item, index) in conversations"
          :key="index"
          class="infinite-list-item"
          active-class="item-active"
          :to="{name: 'chat', params: {conversationId: item.conversationId}}"
        >
          <a>
            <div class="msg-head">
              <img :src="item.targetUserHead" />
            </div>
            <div class="msg-info">
              <div>
                <a class="username">{{
                  item.targetUserName
                }}</a>
              </div>
              <p>{{item.content}}</p>
            </div>
          </a>
        </router-link>
        <!-- <li
          v-for="(item, index) in friends"
          class="infinite-list-item"
          :key="index"
        >
          <div class="msg-head">
            <img :src="item.avatar" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">{{
                item.username
              }}</a>
            </div>
            <p>不好意思，我的问题</p>
          </div>
        </li> -->
      </ul>
      <!-- <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p> -->
    </div>
  </div>
</template>

<script>
import msgApi from "@/common/service/msg/index";

export default {
  name: "leftMenu",
  data() {
    return {
      system: true,
      curPage: 1,
      totalPage: 1,
      pageSize: 10,
      totalCount: 10,
      type: 0,
      conversations: [],
      state: "",
      count: 0,
    };
  },
  mounted() {
    this.getConversationList(this.curPage, this.pageSize);
  },
  methods: {
    /*  */
    /* 获取好友 */
    load() {
      this.count += 2;
    },
    /* 获取会话信息 */
    getConversationList(curPage, pageSize) {
      msgApi.getConversationList(curPage, pageSize).then((res) => {
        let data = res.data;
        if (res.code === 200) {
          this.curPage = data.curPage;
          this.totalPage = data.totalPage;
          this.totalCount = data.totalCount;
          this.type = data.type;
          this.conversations = data.conversations;
        } else {
          this.$message({
            message: "好友数据请求失败，请重新尝试",
            type: "error",
            center: true,
          });
        }
      });
    },
    /* 根据用户的输入智能显示 */
    querySearch(queryString, cb) {
      let conversations = this.conversations;
      let results = queryString
        ? conversations.filter(this.createFilter(queryString))
        : conversations;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (conversation) => {
        return (
          conversation.targetUserName.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      /* 这里执行选择好友后的操作，即跳转到聊天界面 */
      // location.href = '/msg/chat'
      this.$router.push({ name: 'chat',params: {conversationId: item.conversationId} });
    },
  },
};
</script>

<style lang="less" scoped>
/* 左边侧边栏的样式开始 */
.left-box {
  // position: fixed;
  display: flex;
  flex-direction: column;
  width: 260px;
  float: left;
  font-size: 14px;
  margin: 0 10px 0 0;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  // margin-bottom: 10px;
  background: #fff;
  height: 635px;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  .menu-head {
    padding: 15px 15px 0;
    line-height: normal;
    position: relative;
    text-align: center;
    h1 {
      font-size: 16px;
      line-height: 16px;
      float: left;
      font-weight: 600;
      white-space: nowrap;
      position: relative;
      top: -8px;
    }
    .msg-read {
      font-size: 14px;
      float: right;
      a {
        color: #6e6efa;
      }
    }
    .msg-title {
      cursor: pointer;
      padding: 20px 10px 20px;
      margin: 20px auto;
      border-bottom: 1px solid #ddd;
      color: #25bb9b;
      position: relative;
      font-size: 16px;
      svg {
        position: relative;
        top: 8px;
        left: -10px;
      }
    }
    .search-input {
      border-radius: 3px;
      width: 100%;
      height: 38px;
      line-height: 38px;
      position: relative;
      text-align: center;
      .inline-input {
        svg {
          position: relative;
          top: 6px;
        }
      }
    }
  }
  .menu-content {
    padding: 15px 0;
    height: 361px;
    flex: 1;
    overflow-y: auto;
    .infinite-list {
      .item-active {
        background: #ededf8;
      }
      .infinite-list-item {
        position: relative;
        padding: 10px 10px 0;
        border-bottom: 1px solid #ededed;
        &:hover {
          background: #ededf8;
        }
        .msg-head {
          position: relative;
          width: 40px;
          height: 40px;
          float: left;
          margin-right: 15px;
          overflow: hidden;
          border-radius: 50%;
          // border: 1px solid #ededed;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .msg-info {
          width: 165px;
          font-size: 10px;
          white-space: nowrap;
          .username {
            display: inline-block;
            vertical-align: middle;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            max-width: 7em;
            font-size: 14px;
            color: #fc7123!important;
          }
          p {
            display: inline-block;
            vertical-align: middle;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            max-width: 100%;
            color: black;
          }
        }
      }
    }
  }
}
/* 搜索好友框的提示信息样式开始 */
.msg-item {
  font-size: 0;
  padding: 5px 0px;
  border-bottom: 1px solid #ededed;
  cursor: pointer;
  overflow-x: hidden;
  white-space: nowrap;
  .item-avatar {
    img {
      width: 32px;
      height: 32px;
      border-radius: 32px;
      display: block;
      float: left;
      overflow: hidden;
      border: 1px solid #ededed;
      margin-right: 10px;
    }
  }
  .item-username {
    margin: 0;
    width: 180px;
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
  }
}
/* 搜索好友框的提示信息样式结束 */
/* 左边侧边栏的样式结束 */
</style>