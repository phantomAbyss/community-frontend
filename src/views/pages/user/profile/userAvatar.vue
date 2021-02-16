<template>
  <!-- 头像部分信息 -->
  <div class="user-info">
    <!-- 头像主要内容部分开始 -->
    <div class="user-info-main">
      <div class="user-info-avatar">
        <img
          :src="generalInfo.avatar || require('@/assets/img/avatar.jpg')"
          alt="用户头像"
        />
        <div class="avatar-hover" @click="uploadAvatar">
          <img src="@/assets/img/logo.png" alt="" />
        </div>
      </div>
      <div class="user-info-content">
        <div class="user-info-username">
          <div class="username">{{ nickName }}</div>
          <div
            class="web-age"
            style="
              background-color: rgb(209, 221, 241);
              color: rgb(69, 81, 101);
            "
          >
            <img
              src="https://img-home.csdnimg.cn/images/20210108035944.gif"
              alt=""
            />
            <span>户龄{{ generalInfo.codeAge }}年</span>
          </div>
        </div>
        <!-- <div class="user-info-vip no-vip">
            此处为VIP功能，后期如果不做则删除
          </div> -->
      </div>
      <!-- 头像上传框 -->
      <div v-if="uploadAvatarDialog">
        <upload-avatar
          field="avatar_file"
          v-model="uploadAvatarDialog"
          @crop-success="cropSuccess"
          @crop-upload-success="cropUploadSuccess"
          @crop-upload-fail="cropUploadFail"
          :uploadUrl="uploadAvatarUrl"
          :params="params"
          :headers="headers"
          :maxSize="2048"
        ></upload-avatar>
        <!-- <my-upload field="avatar_file" 
      @crop-success="cropSuccess" 
      @crop-upload-success="cropUploadSuccess" 
      @crop-upload-fail="cropUploadFail" 
      v-model="uploadAvatarDialogVisible" 
      :width="150" :height="150" 
      :url="urlParam" :params="params" :headers="headers" 
      img-format="png" :noSquare="true" :maxSize="2048">
      </my-upload> -->
      </div>
    </div>
    <!-- 头像主要内容部分结束 -->
    <!-- 个人主页部分开始 -->
    <div class="user-info-other">
      <!-- <div class="coin">此处为网站的币，如果不做则删除</div>
        <i class="user-info-split"></i> -->
      <div class="user-btn">
        <a href="#" target="_blank">
          个人主页
          <i class="el-icon-arrow-right"></i>
        </a>
      </div>
      <!-- <i class="user-info-split"></i>
        <div class="user-btn user-medal">
          我的勋章
          <i class="el-icon-arrow-right"></i>
        </div> -->
    </div>
    <!-- 个人主页部分结束 -->
  </div>
  <!-- 基础信息 -->
</template>

<script>
import uploadAvatar from "@/components/upload/uploadAvatar";

export default {
  name: "userAvatar",
  props: ["generalInfo", "nickName", "userName"],
  components: {
    uploadAvatar,
  },
  data() {
    return {
      /* 头像上传框是否显示 */
      uploadAvatarDialog: false,
      /* 头像上传路径 */
      uploadAvatarUrl: this.Community.API_PROFILE_URL + '/api/profile/upload/avatar',
      params: {
        a: ''
      },
      headers: {
        Accept: 'application/json, text/javascript, */*; q=0.01'
      }
    };
  },
  methods: {
    uploadAvatar() {
      this.uploadAvatarDialog = true;
    },
    cropSuccess(data, field, key) {
			/* if (field == 'avatar1') {
				this.avatarUrl1 = data;
			} else if(field == 'avatar2') {
				this.avatarUrl2 = data;
			} else {
				this.avatarUrl3 = data;
			} */
			console.log('-------- 剪裁成功 --------');
		},
		cropUploadSuccess(json, field, key) {
			console.log('-------- 上传成功 --------');
			console.log(json);
			console.log('field: ' + field);
			console.log('key: ' + key);
      this.$emit('update:generalInfo', Object.assign({}, this.generalInfo, {avatar: json.data.url}))
		},
		cropUploadFail(status, field, key) {
			console.log('-------- 上传失败 --------');
			console.log("status:" + status);
			console.log('field: ' + field);
			console.log('key: ' + key);
		}
  },
};
</script>

<style lang="less" scoped>
/* 用户头部部分信息样式开始 */
/* 头部内容样式开始 */
.user-info {
  position: relative;
  margin-bottom: 16px;
  background: #fff;
}
.user-info .user-info-main {
  padding: 24px 0 40px 24px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.04);
}
.user-info-main .user-info-avatar {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: relative;
  width: 96px;
  height: 96px;
  margin-right: 16px;
  -webkit-box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.06);
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.06);
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
}
.user-info-avatar > img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}
.avatar-hover {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
}
.avatar-hover img {
  width: 32px;
  height: 32px;
}
.user-info-avatar:hover .avatar-hover {
  display: flex;
}
.user-info-content {
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
}
.user-info-username {
  margin-bottom: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.username {
  color: #222226;
  font-weight: 500;
  line-height: 24px;
  font-size: 20px;
  margin-right: 16px;
}
.web-age {
  height: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
}
.web-age img {
  width: 22px;
  height: 22px;
  display: block;
}
.web-age span {
  padding: 0 6px 0 4px;
  font-size: 12px;
  display: block;
  height: 16px;
  line-height: 16px;
  text-align: center;
}
.user-info-content .user-info-vip.no-vip {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#efefef),
    to(#f9f9f9)
  );
  background: linear-gradient(90deg, #efefef, #f9f9f9);
}
.user-info-content .user-info-vip {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 32px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ffe3b2),
    to(#fff3de)
  );
  background: linear-gradient(90deg, #ffe3b2, #fff3de);
  border-radius: 4px;
  padding: 0 8px;
  font-size: 14px;
}
/* 头部内容样式结束 */
/* 底部栏样式开始 */
.user-info .user-info-other {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 48px;
  background: #fdfdfd;
  padding-left: 25px;
  font-size: 14px;
}
.coin {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.user-info-split {
  width: 1px;
  height: 16px;
  background: #ccccd8;
  margin: 0 32px;
}
.user-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #f2f2f2;
  color: #555666;
  height: 28px;
  border-radius: 16px;
  padding: 0 12px;
  cursor: pointer;
}
.user-btn:hover {
  background: #dbd9d9;
}
.user-btn a {
  color: inherit;
}
/* 底部栏样式结束 */
/* 用户头部部分信息样式结束 */
</style>