<template>
  <!-- 登录 -->
    <el-form
      :model="loginForm"
      status-icon
      hide-required-asterisk
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="login-form"
    >
      <!-- app扫码登录 -->
      <div class="login-type" style="height: 32px">
        <a href="#">app扫码登录</a>
      </div>
      <!-- 用户名 -->
      <el-form-item label="邮箱/手机" prop="username" class="form-item">
        <el-input autocomplete="off" v-model="loginForm.username"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="密码" prop="password" class="form-item">
        <el-input
          type="password"
          autocomplete="off"
          v-model="loginForm.password"
        ></el-input>
      </el-form-item>
      <!-- 记住密码 -->
      <el-form-item class="form-item login-btn">
        <el-checkbox
          label="下次自动登录"
          name="type"
          class="keep-pwd"
        ></el-checkbox>
        <a href="#" class="forget-pwd">忘记密码</a>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-form-item class="form-item login-btn">
        <el-button
          class="form-item-login login-btn"
          type="primary"
          @click="submitForm('loginForm')"
          >登录</el-button
        >
        <el-button class="form-item-reset" @click="resetForm('loginForm')"
          >重置</el-button
        >
      </el-form-item>
      <!-- 其他方式登录 -->
      <div class="other-login">
        <a href="#" style="float: right">海外手机登录</a>
        <span>
          <a href="#">短信验证登录</a>
        </span>
      </div>
    </el-form>
</template>

<script>
import userApi from '@/common/service/user/index'
import { setUser } from '@/common/utils/auth'
export default {
  name: "loginInput",
  data() {
    return {
      /* 登录表单的值 */
      loginForm: {
        username: "",
        password: "",
      },
      /* 这是服务器端登录通过后返回的用户信息 */
      userInfo: {},
      rules: {
        /* 登录表单的自定义规则 */
        username: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入邮箱或者手机号"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 8, max: 11, message: "长度在 8 到 11 个字符", trigger: "blur" },
        ],
        password: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入密码"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
          { min: 3, max: 10, message: "长度在3-10个字符", trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    /* 用户登录表单提交 */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          userApi.login(this.loginForm).then(res => {
            console.log(res)
            if (res.code === 200) {
              let data = res.data;
              /* 登录成功后，将用户信息存储到Cookie中，然后页面跳转 */
              let token = data.token;
              this.userInfo = data.userInfo;
              setUser(this.userInfo.userId, token, this.userInfo.username, this.userInfo.avatar);
              //跳转到首页
              location.href = "/";
              /* 提示信息 */
              this.$message({
                message: this.userInfo.username,
                type: "success",
              });
            } else {
              this.$message({
                message: res.data.message,
                type: "error",
              });
              return false;
            }
          })
        } else {
          this.$message({
            message: "表单校验不通过,请再次检查表单",
            type: "error",
          });
          return false;
        }
      });
    },
    /* 重置表单 */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
};
</script>

<style lang="less" scoped>
/* 登录表单全局样式开始 */
.form-item {
  margin-bottom: 20px;
}
/* app扫码登录样式开始 */
.login-type {
  text-align: right;
  margin-bottom: 20px;
  position: relative;
  height: 32px;
}
/* app扫码登录样式结束 */
/* 记住密码样式开始 */
.keep-pwd {
  margin-left: -10px;
  float: left;
}
.forget-pwd {
  float: right;
  color: #67cab2 !important;
  font-size: 14px;
}
/* 记住密码样式结束 */
/* 登录按钮样式开始 */
.login-btn {
  margin-bottom: 10px;
}
.form-item-login {
  margin-left: 10px;
  margin-right: 50px;
  width: 100px;
}
.form-item-reset {
  width: 100px;
  background-color: #f2f2f2;
}
/* 登录按钮样式结束 */
/* 其他方式登录样式开始 */
.other-login {
  color: #999;
  font-size: 14px;
  margin-top: -5px;
  margin-left: 90px;
  text-align: left;
}
.other-login a {
  color: #67cab2;
}
/* 其他方式登录样式结束 */
/* 登录表单全局样式结束 */
</style>
