<template>
  <div class="chat-left">
    <!-- 聊天的title -->
    <div class="chat-title">
      <span>近期消息</span>
    </div>
    <!-- 好友的搜索框 -->
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
    <!-- 消息界面的用户列表 -->
    <div class="user-list">
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
        <!-- <router-link
          tag="li"
          v-for="(item, index) in conversations"
          :key="index"
          class="infinite-list-item"
          active-class="item-active"
          :to="{
            name: 'chat',
            params: { conversationId: item.conversationId },
          }"
        >
          <a>
            <div class="msg-head">
              <img :src="item.targetUserHead" />
            </div>
            <div class="msg-info">
              <div>
                <a class="username">{{ item.targetUserName }}</a>
              </div>
              <p>{{ item.content }}</p>
            </div>
          </a>
        </router-link> -->
        <li class="infinite-list-item">
          <!-- 每一个用户项 -->
          <div class="list-item">
            <div
              class="user-avatar"
              style="
                background-image: url(https://i1.hdslb.com/bfs/face/fa6bd4292ccb3b3f7d21c957aeec8f878d56f77e.jpg@42w_42h_1c.webp);
              "
            ></div>
            <div class="verify-box"></div>
            <div class="username-box">
              <div class="username">哔哩哔哩大会员</div>
              <div class="last-msg">
                大贺新春！大会员限时首年108元，玩游戏最高再赠366天，立即购买>https://b23.tv/Aak2TH
              </div>
            </div>
            <div class="close-box">
              <svg viewBox="0 0 40 40" class="close-svg">
                <path
                  d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- <div class="msg-head">
            <img src="http://localhost:8080/img/avatar.89779596.jpg" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">phantom</a>
            </div>
            <p>不好意思，我的问题</p>
          </div> -->
        </li>
        <li class="infinite-list-item">
          <!-- 每一个用户项 -->
          <div class="list-item">
            <div
              class="user-avatar"
              style="
                background-image: url(https://i1.hdslb.com/bfs/face/fa6bd4292ccb3b3f7d21c957aeec8f878d56f77e.jpg@42w_42h_1c.webp);
              "
            ></div>
            <div class="verify-box"></div>
            <div class="username-box">
              <div class="username">哔哩哔哩大会员</div>
              <div class="last-msg">
                大贺新春！大会员限时首年108元，玩游戏最高再赠366天，立即购买>https://b23.tv/Aak2TH
              </div>
            </div>
            <div class="close-box">
              <svg viewBox="0 0 40 40" class="close-svg">
                <path
                  d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- <div class="msg-head">
            <img src="http://localhost:8080/img/avatar.89779596.jpg" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">phantom</a>
            </div>
            <p>不好意思，我的问题</p>
          </div> -->
        </li>
        <li class="infinite-list-item">
          <!-- 每一个用户项 -->
          <div class="list-item">
            <div
              class="user-avatar"
              style="
                background-image: url(https://i1.hdslb.com/bfs/face/fa6bd4292ccb3b3f7d21c957aeec8f878d56f77e.jpg@42w_42h_1c.webp);
              "
            ></div>
            <div class="verify-box"></div>
            <div class="username-box">
              <div class="username">哔哩哔哩大会员</div>
              <div class="last-msg">
                大贺新春！大会员限时首年108元，玩游戏最高再赠366天，立即购买>https://b23.tv/Aak2TH
              </div>
            </div>
            <div class="close-box">
              <svg viewBox="0 0 40 40" class="close-svg">
                <path
                  d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- <div class="msg-head">
            <img src="http://localhost:8080/img/avatar.89779596.jpg" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">phantom</a>
            </div>
            <p>不好意思，我的问题</p>
          </div> -->
        </li>
        <li class="infinite-list-item">
          <!-- 每一个用户项 -->
          <div class="list-item">
            <div
              class="user-avatar"
              style="
                background-image: url(https://i1.hdslb.com/bfs/face/fa6bd4292ccb3b3f7d21c957aeec8f878d56f77e.jpg@42w_42h_1c.webp);
              "
            ></div>
            <div class="verify-box"></div>
            <div class="username-box">
              <div class="username">哔哩哔哩大会员</div>
              <div class="last-msg">
                大贺新春！大会员限时首年108元，玩游戏最高再赠366天，立即购买>https://b23.tv/Aak2TH
              </div>
            </div>
            <div class="close-box">
              <svg viewBox="0 0 40 40" class="close-svg">
                <path
                  d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- <div class="msg-head">
            <img src="http://localhost:8080/img/avatar.89779596.jpg" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">phantom</a>
            </div>
            <p>不好意思，我的问题</p>
          </div> -->
        </li>
        <li class="infinite-list-item">
          <!-- 每一个用户项 -->
          <div class="list-item">
            <div
              class="user-avatar"
              style="
                background-image: url(https://i1.hdslb.com/bfs/face/fa6bd4292ccb3b3f7d21c957aeec8f878d56f77e.jpg@42w_42h_1c.webp);
              "
            ></div>
            <div class="verify-box"></div>
            <div class="username-box">
              <div class="username">哔哩哔哩大会员</div>
              <div class="last-msg">
                大贺新春！大会员限时首年108元，玩游戏最高再赠366天，立即购买>https://b23.tv/Aak2TH
              </div>
            </div>
            <div class="close-box">
              <svg viewBox="0 0 40 40" class="close-svg">
                <path
                  d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- <div class="msg-head">
            <img src="http://localhost:8080/img/avatar.89779596.jpg" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">phantom</a>
            </div>
            <p>不好意思，我的问题</p>
          </div> -->
        </li>
        <li class="infinite-list-item">
          <!-- 每一个用户项 -->
          <div class="list-item">
            <div
              class="user-avatar"
              style="
                background-image: url(https://i1.hdslb.com/bfs/face/fa6bd4292ccb3b3f7d21c957aeec8f878d56f77e.jpg@42w_42h_1c.webp);
              "
            ></div>
            <div class="verify-box"></div>
            <div class="username-box">
              <div class="username">哔哩哔哩大会员</div>
              <div class="last-msg">
                大贺新春！大会员限时首年108元，玩游戏最高再赠366天，立即购买>https://b23.tv/Aak2TH
              </div>
            </div>
            <div class="close-box">
              <svg viewBox="0 0 40 40" class="close-svg">
                <path
                  d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- <div class="msg-head">
            <img src="http://localhost:8080/img/avatar.89779596.jpg" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">phantom</a>
            </div>
            <p>不好意思，我的问题</p>
          </div> -->
        </li>
        <li class="infinite-list-item">
          <!-- 每一个用户项 -->
          <div class="list-item">
            <div
              class="user-avatar"
              style="
                background-image: url(https://i1.hdslb.com/bfs/face/fa6bd4292ccb3b3f7d21c957aeec8f878d56f77e.jpg@42w_42h_1c.webp);
              "
            ></div>
            <div class="verify-box"></div>
            <div class="username-box">
              <div class="username">哔哩哔哩大会员</div>
              <div class="last-msg">
                大贺新春！大会员限时首年108元，玩游戏最高再赠366天，立即购买>https://b23.tv/Aak2TH
              </div>
            </div>
            <div class="close-box">
              <svg viewBox="0 0 40 40" class="close-svg">
                <path
                  d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- <div class="msg-head">
            <img src="http://localhost:8080/img/avatar.89779596.jpg" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">phantom</a>
            </div>
            <p>不好意思，我的问题</p>
          </div> -->
        </li>
        <li class="infinite-list-item">
          <!-- 每一个用户项 -->
          <div class="list-item">
            <div
              class="user-avatar"
              style="
                background-image: url(https://i1.hdslb.com/bfs/face/fa6bd4292ccb3b3f7d21c957aeec8f878d56f77e.jpg@42w_42h_1c.webp);
              "
            ></div>
            <div class="verify-box"></div>
            <div class="username-box">
              <div class="username">哔哩哔哩大会员</div>
              <div class="last-msg">
                大贺新春！大会员限时首年108元，玩游戏最高再赠366天，立即购买>https://b23.tv/Aak2TH
              </div>
            </div>
            <div class="close-box">
              <svg viewBox="0 0 40 40" class="close-svg">
                <path
                  d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- <div class="msg-head">
            <img src="http://localhost:8080/img/avatar.89779596.jpg" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">phantom</a>
            </div>
            <p>不好意思，我的问题</p>
          </div> -->
        </li>
        <li class="infinite-list-item">
          <!-- 每一个用户项 -->
          <div class="list-item">
            <div
              class="user-avatar"
              style="
                background-image: url(https://i1.hdslb.com/bfs/face/fa6bd4292ccb3b3f7d21c957aeec8f878d56f77e.jpg@42w_42h_1c.webp);
              "
            ></div>
            <div class="verify-box"></div>
            <div class="username-box">
              <div class="username">哔哩哔哩大会员</div>
              <div class="last-msg">
                大贺新春！大会员限时首年108元，玩游戏最高再赠366天，立即购买>https://b23.tv/Aak2TH
              </div>
            </div>
            <div class="close-box">
              <svg viewBox="0 0 40 40" class="close-svg">
                <path
                  d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- <div class="msg-head">
            <img src="http://localhost:8080/img/avatar.89779596.jpg" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">phantom</a>
            </div>
            <p>不好意思，我的问题</p>
          </div> -->
        </li>
        <li class="infinite-list-item">
          <!-- 每一个用户项 -->
          <div class="list-item">
            <div
              class="user-avatar"
              style="
                background-image: url(https://i1.hdslb.com/bfs/face/fa6bd4292ccb3b3f7d21c957aeec8f878d56f77e.jpg@42w_42h_1c.webp);
              "
            ></div>
            <div class="verify-box"></div>
            <div class="username-box">
              <div class="username">哔哩哔哩大会员</div>
              <div class="last-msg">
                大贺新春！大会员限时首年108元，玩游戏最高再赠366天，立即购买>https://b23.tv/Aak2TH
              </div>
            </div>
            <div class="close-box">
              <svg viewBox="0 0 40 40" class="close-svg">
                <path
                  d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- <div class="msg-head">
            <img src="http://localhost:8080/img/avatar.89779596.jpg" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">phantom</a>
            </div>
            <p>不好意思，我的问题</p>
          </div> -->
        </li>
        <li class="infinite-list-item">
          <!-- 每一个用户项 -->
          <div class="list-item">
            <div
              class="user-avatar"
              style="
                background-image: url(https://i1.hdslb.com/bfs/face/fa6bd4292ccb3b3f7d21c957aeec8f878d56f77e.jpg@42w_42h_1c.webp);
              "
            ></div>
            <div class="verify-box"></div>
            <div class="username-box">
              <div class="username">哔哩哔哩大会员</div>
              <div class="last-msg">
                大贺新春！大会员限时首年108元，玩游戏最高再赠366天，立即购买>https://b23.tv/Aak2TH
              </div>
            </div>
            <div class="close-box">
              <svg viewBox="0 0 40 40" class="close-svg">
                <path
                  d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- <div class="msg-head">
            <img src="http://localhost:8080/img/avatar.89779596.jpg" />
          </div>
          <div class="msg-info">
            <div>
              <a href="javascript:void(0);" class="username">phantom</a>
            </div>
            <p>不好意思，我的问题</p>
          </div> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "userMenu",
};
</script>

<style lang="less" scoped>
/* 聊天左部的样式开始 */
.chat-left {
  width: 240px;
  border-right: 1px solid #e9eaec;
  .chat-title {
    padding-left: 15px;
    line-height: 35px;
    height: 43px;
    border-bottom: 1px solid #e9eaec;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    span {
      margin: 0;
      padding: 0;
      font-size: 16px;
    }
  }
  .search-input {
    border-radius: 3px;
    width: 100%;
    height: 38px;
    line-height: 38px;
    position: relative;
    text-align: center;
    top: 10px;
    .inline-input {
      svg {
        position: relative;
        top: 6px;
      }
    }
  }
  .user-list {
    // height: calc(100% - 43px);
    height: 532px;
    position: relative;
    // overflow: hidden !important;
    // overflow-anchor: none;
    // touch-action: auto;
    top: 20px;
    flex: 1;
    overflow-y: auto;
    .infinite-list {
      .item-active {
        background: #ededf8;
      }
      .infinite-list-item {
        .list-item {
          // width: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          padding: 19px 24px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          &:hover {
            background-color: #e4e5e6;
            .close-box {
              -webkit-transform: none;
              transform: none;
              opacity: 1;
            }
          }
          .user-avatar {
            display: block;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(//static.hdslb.com/images/member/noface.gif);
            margin-right: 8px;
            position: relative;
          }
          .verify-box {
            width: 12px;
            height: 12px;
            position: absolute;
            bottom: 18px;
            left: 56px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
          .username-box {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            .username {
              color: #333;
              font-size: 14px;
              min-height: 16px;
              line-height: 1;
              overflow: hidden;
              width: 155px;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .last-msg {
              color: #999;
              padding: 8px 0;
              margin-bottom: -6px;
              overflow: hidden;
              width: 155px;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .close-box {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 24px;
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
            opacity: 0;
            -webkit-transition: 300ms;
            transition: 300ms;
            font: 12px;
            color: #999;
            .close-svg {
              fill: currentcolor;
              width: 1em;
              height: 1em;
            }
          }
        }
      }
    }
  }
}
/* 聊天左部的样式结束 */
</style>