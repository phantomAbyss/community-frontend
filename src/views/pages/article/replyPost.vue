<template>
    <!-- 回帖 -->
      <div class="content-box reply-post">
        <div class="publish-comment focus">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2}"
            placeholder="请输入你想要回帖的内容"
            v-model="commentContent"
          >
          </el-input>
          <div class="publish-tool-bar">
            <div class="publish-tool-item">
              <i class="el-icon-picture"></i>图片
            </div>
            <div class="publish-tool-item">
              <i class="el-icon-chat-line-round"></i>话题
            </div>
            <div class="publish-tool-item">
              <svg
                t="1611544061407"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2566"
                width="20"
                height="20"
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
                ></path>
              </svg>
              表情
            </div>
          </div>
          <div class="publish">
            <el-button type="primary">回帖</el-button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'replyPost'
}
</script>

<style lang="less" scoped>
/* 回帖样式开始 */
.content-box {
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  margin-bottom: 10px;
  background: #fff;
}
/* 帖子评论样式开始 */
.content-box:last-child {
  margin-bottom: 0;
}
.reply-post {
  background-color: rgb(255, 255, 255);
}
.publish-comment {
  padding: 15px;
  position: relative;
}
.publish-comment.focus textarea {
  color: inherit;
}
.publish-comment textarea {
  width: 98%;
  padding: 1%;
  height: 40px;
  color: #7f7f7f;
  border: none;
  resize: none;
}
.publish-tool-bar {
  margin-top: 10px;
  font-size: 14px;
  padding: 0;
}
.publish-tool-bar .publish-tool-item {
  color: #7f7f7f;
  margin-right: 15px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
}
.publish-tool-bar .publish-tool-item > i {
  font-size: 22px;
  height: 22px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: bottom;
  color: #7171fc;
}
.publish-tool-item svg {
  position: relative;
  top: 3px;
}
.publish-comment.focus .publish {
  display: block;
}
.publish {
  position: absolute;
  display: none;
  right: 15px;
  bottom: 5px;
}
/* 帖子评论样式结束 */
/* 回帖样式结束 */
</style>