<template>
  <!-- 账户设置的内容开始 -->
  <div class="account-main">
    <span class="account-main-title fill-bg">账号设置</span>
    <ul>
      <li class="account-item" v-if="flag">
        <span>
          <span>密</span>
          <span>码</span>
        </span>
        <p>
          <span class="account-warning" v-if="!securityInfo.password.hasInfo"
            >存在风险请设置密码</span
          >
          <a href="javacript:void(0);" @click="change"
            >{{ securityInfo.password.hasInfo ? "修改" : "设置" }}密码</a
          >
        </p>
      </li>
      <li class="account-item password-edit" v-if="!flag">
        <el-form
          :model="updatePassword"
          :rules="rules"
          ref="updateForm"
          hide-required-asterisk
          label-position="top"
          class="edit-password"
        >
          <el-form-item prop="oldPassword">
            <el-input
              type="password"
              placeholder="请输入原密码"
              v-model="updatePassword.oldPassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="newPassword">
            <el-input
              type="password"
              placeholder="请输入新密码(8到16位)"
              v-model="updatePassword.newPassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="confirmPassword">
            <el-input
              type="password"
              placeholder="请再次输入新密码(8到16位)"
              v-model="updatePassword.confirmPassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              round
              size="small"
              class="edit-btn-cancel"
              @click="cancelEdit"
              >取消</el-button
            >
            <el-button
              round
              type="primary"
              size="small"
              class="edit-btn-save"
              @click="editJobList('updateForm')"
              >保存</el-button
            >
          </el-form-item>
        </el-form>
      </li>
      <li class="account-item">
        <span>
          <span>手</span>
          <span>机</span>
        </span>
        <p>
          <span>153****9549</span>
          <a href="#" class>修改手机</a>
        </p>
      </li>
      <li class="account-item">
        <span>
          <span>邮</span>
          <span>箱</span>
        </span>
        <p>
          <span>11***@qq.com</span>
          <a href="#" class>修改邮箱</a>
        </p>
      </li>
      <li class="account-item">
        <span>三方账号</span>
        <p>
          <span></span>
          <a href="#" class>立即设置</a>
        </p>
      </li>
      <li class="account-item">
        <span>登录记录</span>
        <p>
          <span></span>
          <a href="#" class>查看记录</a>
        </p>
      </li>
    </ul>
  </div>
  <!-- 账户设置的内容结束 -->
</template>

<script>
export default {
  name: "accountSetting",
  props: ["securityInfo"],
  data() {
    return {
      flag: true,
      updatePassword: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      rules: {}
    };
  },
  methods: {
    change() {
      this.flag = false;
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
  padding: 24px 16px 0;
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
}
.account-main .account-item {
  padding: 32px 0 30px;
  // margin-bottom: 20px;
  color: #555666;
}
.account-main .account-item + .account-item {
  border-top: 1px solid #e0dbdb;
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