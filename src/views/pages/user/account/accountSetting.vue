<template>
  <!-- 账户设置的内容开始 -->
  <div class="account-main">
    <span class="account-main-title fill-bg">账号设置</span>
    <ul>
      <li class="account-item">
        <span>
          <span>密</span>
          <span>码</span>
        </span>
        <p>
          <span class="account-warning" v-if="!securityInfo.password.hasInfo"
            >存在风险请设置密码</span
          >
          <a href="javascript:void(0);" @click="openPasswordDialog"
            >{{ securityInfo.password.hasInfo ? "修改" : "设置" }}密码</a
          >
        </p>
        <!-- 密码修改编辑框 -->
        <div v-if="uploadPasswordDialog">
          <password v-model="uploadPasswordDialog"></password>
        </div>
      </li>
      <li class="account-item">
        <span>
          <span>手</span>
          <span>机</span>
        </span>
        <p>
          <span>153****9549</span>
          <a href="javascript:void(0);" @click="openMobileDialog">修改手机</a>
        </p>
        <!-- 手机修改编辑框 -->
        <div v-if="uploadMobileDialog">
          <mobile v-model="uploadMobileDialog"></mobile>
        </div>
      </li>
      <li class="account-item">
        <span>
          <span>邮</span>
          <span>箱</span>
        </span>
        <p>
          <span>11***@qq.com</span>
          <a href="javascript:void(0);" @click="openEmailDialog">修改邮箱</a>
        </p>
        <!-- 邮箱修改编辑框 -->
        <div v-if="uploadEmailDialog">
          <email v-model="uploadEmailDialog"></email>
        </div>
      </li>
      <li class="account-item">
        <span>三方账号</span>
        <p>
          <span class="blinded-icon" v-html="item" v-for="(item, index) in blindedIcon" :key="index">
            {{item}}
          </span>
          <a href="javascript:void(0);" @click="openBlindDialog">立即设置</a>
        </p>
        <!-- 三方绑定设置修改编辑框 -->
        <div v-if="uploadBlindDialog">
          <blind v-model="uploadBlindDialog"></blind>
        </div>
      </li>
      <li class="account-item">
        <span>登录日志</span>
        <p>
          <span></span>
          <a href="javascript:void(0);" @click="openLogDialog">查看记录</a>
        </p>
        <!-- 登录日志查看对话框 -->
        <div v-if="logViewDialog">
          <log v-model="logViewDialog"></log>
        </div>
      </li>
    </ul>
  </div>
  <!-- 账户设置的内容结束 -->
</template>

<script>
import password from './setting/password';
import mobile from './setting/mobile';
import email from './setting/email';
import blind from './setting/blind';
import log from './setting/log';

import accountApi from "@/common/service/user/account";

export default {
  components: { password, mobile, email, blind, log },
  name: "accountSetting",
  props: ["securityInfo"],
  data() {
    return {
      /* 是否打开密码修改编辑框 */
      uploadPasswordDialog: false,
      /* 是否打开手机修改编辑框 */
      uploadMobileDialog: false,
      /* 是否打开邮箱修改编辑框 */
      uploadEmailDialog: false,
      /* 是否打开三方账号修改编辑框 */
      uploadBlindDialog: false,
      /* 是否打开登录日志查看框 */
      logViewDialog: false,
      /* 密码更新的数据对象 */
      updatePassword: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      blindedIcon: [],
      rules: {}
    };
  },
  created () {
    this.getBlindList(1);
  },
  methods: {
    /* 获取已经绑定的账号类型 */
    getBlindList(type) {
      accountApi.getBlindListByType(type).then(res => {
        if (res.code === 200) {
          this.blindedIcon = res.data || [];
        } else {
          this.$message({
            message: res.message || "数据获取失败",
            type: 'error',
            center: true
          });
        }
      })
    },
    /* 打开密码编辑框 */
    openPasswordDialog() {
      this.uploadPasswordDialog = true;
    },
    /* 打开手机编辑框 */
    openMobileDialog() {
      this.uploadMobileDialog = true;
    },
    /* 打开邮箱编辑框 */
    openEmailDialog() {
      this.uploadEmailDialog = true;
    },
    /* 打开三方绑定编辑框 */
    openBlindDialog() {
      this.uploadBlindDialog = true;
    },
    /* 打开登录日志查看框 */
    openLogDialog() {
      this.logViewDialog = true;
    },
    /* 取消编辑 */
    cancelEdit () {
      this.flag = true;
    }
  },
};
</script>

<style lang="less" scoped>
/* 账户设置的内容样式开始 */
.account-main {
  width: 100%;
  padding: 24px 0;
  min-height: 200px;
  background: #fff;
  font-size: 14px;
}
.account-main .account-main-title {
  min-width: 72px;
  height: 24px;
  font-size: 18px;
  font-weight: 600;
  color: #2e2e2e;
  line-height: 24px;
  margin-left: 20px;
}
.account-main .account-item {
  width: 85%;
  margin-left: 40px;
  padding: 20px 0 30px;
  // margin-bottom: 20px;
  color: #555666;
  border-bottom: 1px solid #e0dbdb;
}
.account-item > span {
  float: left;
  width: 56px;
  height: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-left: 16px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.account-item > p {
  float: left;
  text-align: right;
  width: calc(100% - 72px);
  color: #222226;
  margin-top: -20px;
  margin-right: 10px;
}
.account-item .blinded-icon {
  position: relative;
  top: 2px;
  margin-left: 10px;
}
.account-item > p a {
  display: inline-block;
  min-width: 56px;
  margin-left: 32px;
  color: #1989fa;
}
/* 账户设置的内容样式结束 */
/* 密码编辑框样式开始 */

/* 密码编辑框样式结束 */
</style>