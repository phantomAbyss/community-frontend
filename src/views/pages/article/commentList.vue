<template>
    <!-- 评论列表 -->
      <div class="content-box">
        <!-- 评论列表的头部 -->
        <div class="comment-head fill-bg">
          <h1><i class="el-icon-s-promotion" style="color: #7171fc"></i>
            4条回帖</h1>
          <!-- 回帖的排序方式 -->
          <!-- <div class="comment-list-sort">回帖的排序方式选择</div> -->
          <div class="comment-reply float-right">
            <el-button type="primary" icon="el-icon-edit">回帖</el-button>
          </div>
        </div>
        <!-- 评论列表的内容 -->
        <div class="comment-main fill-bg">
          <div class="comment-list">
            <!-- 评论列表的每一项 -->
            <div class="comment-list-item fill-bg">
              <div class="comment-content">
                <!-- 回帖者的头像 -->
                <a href="#" target="_blank" class="comment-user-avatar">
                  <img src="@/assets/img/avatar.jpg" alt="评论者头像" />
                </a>
                <div class="comment-detail">
                  <!-- 回帖者的用户名和楼层 -->
                  <p>
                    <a href="#" target="_blank" class="comment-username">phantom</a>
                    <span class="comment-floor">1#</span>
                  </p>
                  <!-- 回帖内容 -->
                  <div class="comment-detail-content">
                    不可以把单链表里面的数取出来变成arraylist然后快排吗？
                  </div>
                  <!-- 回帖时间、设备、以及回复、赞 -->
                  <div class="comment-eq">
                    <span class="comment-item-time">发表于 昨天 19:49:42</span>
                    <!-- <span
                      >来自<a href="#" class="link-green">iOS客户端</a></span
                    > -->
                    <a href="javascript:void(0);" @click="openReply">回复(1)</a>
                    <a href="#">赞(0)</a>
                    <a href="#">分享</a>
                  </div>
                  <!-- 针对于该条评论的回复 -->
                  <div class="comment-reply-list"  v-if="isOpen">
                    <!-- 该条评论的回复列表 -->
                    <div class="reply-list fill-bg">
                      <!-- 该条评论的回复列表的每一项 -->
                      <div class="reply-list-item">
                        <div class="reply-item-main">
                          <!-- 用户名 -->
                          <div
                            class="reply-item-user"
                            style="margin-right: 5px"
                          >
                            <a href="#">phantom</a>：
                          </div>
                          <!-- 回复内容 -->
                          <div class="reply-item-content">
                            字节不是9月份还在招嘛，我回来第一个就裸面的字节，给面试官都面笑了。。
                          </div>
                        </div>
                        <!-- 回复的时间  回复、赞 -->
                        <div class="comment-eq reply-item-info">
                          <span class="comment-item-time">昨天 22:53:38</span>
                          <a href="#">回复(0)</a>
                          <a href="#">赞(0)</a>
                        </div>
                        <!-- 点击回复后显示输入框 -->
                        <div style="display: block">
                          <div class="reply-edit">
                            <div class="reply-write">
                              <el-input
                                type="textarea"
                                autosize
                                placeholder="元芳，请问你怎么看呢"
                                v-model="replyContent"
                              >
                              </el-input>
                            </div>
                            <div class="reply-action">
                              <a href="#">
                                <svg
                                  t="1611544061407"
                                  class="icon"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  p-id="2566"
                                  width="25"
                                  height="25"
                                >
                                  <path
                                    d="M510.839571 4.351098c-277.514501 0-506.468007 228.952482-506.468007 508.780679 0 279.82922 228.952482 506.468007 506.468007 506.468006 279.828196 0 508.780679-226.637764 508.780678-506.468006 0.001023-279.828196-228.952482-508.780679-508.780678-508.780679z m0.060375 942.733115c-238.924601 0-434.007695-192.896288-434.007695-434.012811S271.976368 76.872808 510.899946 76.872808s436.205756 195.08207 436.205756 436.199617S749.824547 947.084213 510.899946 947.084213z"
                                    p-id="2567"
                                    fill="#7171fc"
                                  ></path>
                                  <path
                                    d="M314.266543 513.131777c27.751041 0 50.875714-39.312354 50.875715-85.567841 0-48.567135-23.124673-87.881536-50.875715-87.881537-27.752064 0-50.876738 37.005822-50.876737 85.567841v2.313696c0 46.255487 23.12365 85.567841 50.876737 85.567841zM510.839571 866.966501c134.134976 0 242.827491-108.692514 242.827491-242.827491H268.011057c0 134.134976 108.698654 242.827491 242.828514 242.827491zM707.413622 339.682399c-27.751041 0-50.875714 37.005822-50.875715 85.567841v2.313696c0 46.255487 23.124673 85.567841 50.875715 85.567841s50.881854-39.312354 50.881854-85.567841c0-48.567135-23.130813-87.881536-50.881854-87.881537z"
                                    p-id="2568"
                                    fill="#7171fc"
                                  ></path></svg
                              ></a>
                              <el-button
                                type="primary"
                                class="comment-reply reply-btn"
                                >回复</el-button
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="reply-list-item">
                        <div class="reply-item-main">
                          <div
                            class="reply-item-user"
                            style="margin-right: 5px"
                          >
                            <a href="#">phantom</a>
                            回复
                            <a href="#">phantom</a>：
                          </div>
                          <div class="reply-item-content">
                            字节不是9月份还在招嘛，我回来第一个就裸面的字节，给面试官都面笑了。。
                          </div>
                        </div>
                        <div class="comment-eq reply-item-info">
                          <span class="comment-item-time">昨天 22:53:38</span>
                          <a href="#">回复(0)</a>
                          <a href="#">赞(0)</a>
                        </div>
                        <div style="display: none">
                          <div class="reply-edit">
                            <div class="reply-write">
                              <el-input
                                type="textarea"
                                autosize
                                placeholder="元芳，请问你怎么看呢"
                                v-model="replyContent"
                              >
                              </el-input>
                            </div>
                            <div class="reply-action">
                              <a href="#">
                                <svg
                                  t="1611544061407"
                                  class="icon"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  p-id="2566"
                                  width="25"
                                  height="25"
                                >
                                  <path
                                    d="M510.839571 4.351098c-277.514501 0-506.468007 228.952482-506.468007 508.780679 0 279.82922 228.952482 506.468007 506.468007 506.468006 279.828196 0 508.780679-226.637764 508.780678-506.468006 0.001023-279.828196-228.952482-508.780679-508.780678-508.780679z m0.060375 942.733115c-238.924601 0-434.007695-192.896288-434.007695-434.012811S271.976368 76.872808 510.899946 76.872808s436.205756 195.08207 436.205756 436.199617S749.824547 947.084213 510.899946 947.084213z"
                                    p-id="2567"
                                    fill="#7171fc"
                                  ></path>
                                  <path
                                    d="M314.266543 513.131777c27.751041 0 50.875714-39.312354 50.875715-85.567841 0-48.567135-23.124673-87.881536-50.875715-87.881537-27.752064 0-50.876738 37.005822-50.876737 85.567841v2.313696c0 46.255487 23.12365 85.567841 50.876737 85.567841zM510.839571 866.966501c134.134976 0 242.827491-108.692514 242.827491-242.827491H268.011057c0 134.134976 108.698654 242.827491 242.828514 242.827491zM707.413622 339.682399c-27.751041 0-50.875714 37.005822-50.875715 85.567841v2.313696c0 46.255487 23.124673 85.567841 50.875715 85.567841s50.881854-39.312354 50.881854-85.567841c0-48.567135-23.130813-87.881536-50.881854-87.881537z"
                                    p-id="2568"
                                    fill="#7171fc"
                                  ></path></svg
                              ></a>
                              <el-button
                                type="primary"
                                class="comment-reply reply-btn"
                                >回复</el-button
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 评论的回复框 -->
                    <div class="reply-comment">
                      <div class="reply-edit">
                        <div class="reply-write">
                          <el-input
                            type="textarea"
                            autosize
                            placeholder="元芳，请问你怎么看呢"
                            v-model="replyContent"
                          >
                          </el-input>
                        </div>
                        <div class="reply-action">
                          <a href="#">
                            <svg
                              t="1611544061407"
                              class="icon"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              p-id="2566"
                              width="25"
                              height="25"
                            >
                              <path
                                d="M510.839571 4.351098c-277.514501 0-506.468007 228.952482-506.468007 508.780679 0 279.82922 228.952482 506.468007 506.468007 506.468006 279.828196 0 508.780679-226.637764 508.780678-506.468006 0.001023-279.828196-228.952482-508.780679-508.780678-508.780679z m0.060375 942.733115c-238.924601 0-434.007695-192.896288-434.007695-434.012811S271.976368 76.872808 510.899946 76.872808s436.205756 195.08207 436.205756 436.199617S749.824547 947.084213 510.899946 947.084213z"
                                p-id="2567"
                                fill="#7171fc"
                              ></path>
                              <path
                                d="M314.266543 513.131777c27.751041 0 50.875714-39.312354 50.875715-85.567841 0-48.567135-23.124673-87.881536-50.875715-87.881537-27.752064 0-50.876738 37.005822-50.876737 85.567841v2.313696c0 46.255487 23.12365 85.567841 50.876737 85.567841zM510.839571 866.966501c134.134976 0 242.827491-108.692514 242.827491-242.827491H268.011057c0 134.134976 108.698654 242.827491 242.828514 242.827491zM707.413622 339.682399c-27.751041 0-50.875714 37.005822-50.875715 85.567841v2.313696c0 46.255487 23.124673 85.567841 50.875715 85.567841s50.881854-39.312354 50.881854-85.567841c0-48.567135-23.130813-87.881536-50.881854-87.881537z"
                                p-id="2568"
                                fill="#7171fc"
                              ></path></svg
                          ></a>
                          <el-button
                            type="primary"
                            class="comment-reply reply-btn"
                            >回复</el-button
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'commentList',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    /* 打开回复框，
    后期可以考虑形成一个数组，
    然后根据id打开对应的回复框 */
    openReply () {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang="less" scoped>
/* 评论列表的样式开始 */
.content-box {
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  margin-bottom: 10px;
  background: #fff;
}
.comment-head {
  padding: 15px 20px 0;
  line-height: normal;
  position: relative;
}
.comment-head h1 {
  font-size: 16px;
  line-height: 16px;
  float: left;
  font-weight: 600;
  white-space: nowrap;
}
.comment-head .comment-list-sort {
  position: relative;
  z-index: 2;
  left: 20px;
  top: -8px;
  display: inline-block;
  vertical-align: top;
}
.comment-reply {
  display: inline-block;
  text-align: center;
  padding: 0px;
  width: 110px;
  color: #fff;
  font-size: 14px;
  border-radius: 3px;
  border: none 0;
  cursor: pointer;
  line-height: normal;
  outline: 0;
  white-space: nowrap;
}
.comment-main {
  padding: 20px;
}
.comment-list div.comment-list-item {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  position: relative;
  padding-top: 15px;
}
.comment-list .comment-list-item:last-child {
  border: 0;
}
.comment-content {
  width: 100%;
  float: right;
}
.comment-user-avatar {
  display: block;
  float: left;
  width: 50px;
  height: 50px;
  border: 1px solid #ededed;
  overflow: hidden;
  margin-right: 15px;
  border-radius: 50%;
}
.comment-user-avatar img {
  width: 100%;
  display: block;
  border: 0;
}
.comment-detail {
  margin-left: 65px;
  line-height: 1em;
}
.comment-detail p {
  margin-bottom: 5px;
}
.comment-username {
  color: #f34c54 !important;
}
.comment-floor {
  padding: 1px 12px;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  background: #dcdadc;
  float: right;
}
.comment-detail-content {
  font-size: 14px;
  line-height: 1.8;
}
.comment-eq {
  margin-top: 10px;
  color: #999;
  font-size: 12px;
  line-height: 20px;
}
.comment-eq > a {
  float: right;
  color: #21a88b;
  margin-left: 12px;
}
.comment-reply-list {
  padding: 15px;
  margin: 15px 0 0;
  background: #eff0f2;
  border-radius: 4px;
}
.reply-list {
  margin: 0;
}
.reply-list .reply-list-item {
  line-height: 1.5;
}
.reply-list .reply-list-item + .reply-list-item {
  border-top: 1px solid #e0e0e0;
  padding-top: 10px;
  margin-top: 10px;
}
.reply-item-main {
  margin-bottom: 10px;
}
.reply-item-user {
  margin-right: 15px;
  display: inline;
  white-space: nowrap;
}
.reply-item-user a {
  color: #999;
  max-width: 13em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
}
.reply-item-content {
  color: #666;
  display: inline;
  line-height: 2;
  vertical-align: middle;
}
.reply-comment {
  margin-top: 10px;
}
.reply-comment {
  position: relative;
  padding-top: 15px;
  margin-bottom: 0;
}
.reply-edit {
  position: relative;
  padding-top: 15px;
  margin-bottom: 0;
}
.reply-edit .reply-action {
  margin: 10px 0px 0px 10px;
}
.reply-edit .reply-btn {
  width: 75px;
  height: 30px;
  line-height: 30px;
  padding: 0;
  float: right;
}
/* 评论列表的样式结束 */
</style>