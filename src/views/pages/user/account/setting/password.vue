<template>
  <el-dialog
    class="password-dialog"
    title="修改密码"
    :visible.sync="value"
    width="30%"
    :before-close="handleClose"
  >
    <!-- 密码编辑部分 -->
    <div class="password-edit">
      <el-form
        :model="password"
        status-icon
        :rules="rules"
        ref="passwordForm"
        class="password-form"
      >
        <el-form-item prop="oldPassword">
          <!-- 原密码 -->
          <el-input
            class="password-input"
            placeholder="请输入原密码"
            v-model="password.oldPassword"
            show-password
            :disabled="showNewInput"
          >
            <template slot="append" v-if="!showNewInput">
              <el-button type="primary">确定</el-button>
            </template></el-input
          >
        </el-form-item>
        <el-form-item prop="newPassword" v-if="showNewInput">
          <!-- 请输入新密码 -->
          <el-input
            class="password-input"
            placeholder="请输入新密码（8 到 16 位）"
            v-model="password.newPassword"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword" v-if="showNewInput">
          <!-- 请再次输入密码 -->
          <el-input
            class="password-input"
            placeholder="请再次输入新密码（6 到 16 位）"
            v-model="password.confirmPassword"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="offDialog">取 消</el-button>
      <el-button type="primary" @click="updatePassword('passwordForm')"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import accountApi from "@/common/service/user/account";
import { removeUser } from "@/common/utils/auth";

export default {
  name: "password",
  props: {
    /* 密码编辑对话框是否显示 */
    value: {
      default: true,
    },
  },
  data() {
    return {
      /* 密码信息 */
      password: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      /* 是否显示新密码的输入框 */
      showNewInput: false,
      /* 表单的自定义校验规则 */
      rules: {
        oldPassword: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入原密码"));
              } else if (value.length < 8 || value.length > 16) {
                callback(new Error("原密码的长度应为8~16位"));
              } else {
                accountApi.verifyPassword(value).then((data) => {
                  if (data.code === 200) {
                    this.showNewInput = true;
                    callback();
                  } else {
                    callback(new Error("原密码输入错误，请重新输入"));
                  }
                });
              }
            },
            trigger: "blur",
          },
        ],
        newPassword: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入新密码"));
              } else {
                if (this.password.confirmPassword !== "") {
                  this.$refs.passwordForm.validateField("confirmPassword");
                }
                callback();
              }
            },
            trigger: "blur",
          },
        ],
        confirmPassword: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次输入密码"));
              } else if (value !== this.password.newPassword) {
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    /* 提交修改密码的内容 */
    updatePassword(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          accountApi.updatePassword(this.password).then((data) => {
            if (data.code == 200) {
              /* 关闭密码修改的对话框 */
              this.offDialog();
              /* 提示信息 */
              this.$message({
                message: data.message,
                type: "success",
                center: true,
                customClass: "common_tip",
              });
              /* 移除之前的登录信息 */
              removeUser();
              /* 跳转到登录页后重新登录 */
              location.href = "/login";
            } else {
              this.$message({
                message: data.message || "系统繁忙，请稍后再试",
                type: "error",
                center: true,
                customClass: "common_tip",
              });
              return false;
            }
          });
        } else {
          /* 提示信息 */
          this.$message({
            message: '请将数据填写完整后再提交',
            type: "warning",
            center: true,
            customClass: "common_tip",
          });
          return false;
        }
      });
    },
    /* 关闭密码编辑框 */
    offDialog() {
      setTimeout(() => {
        this.$emit("input", false);
      }, 200);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          this.offDialog();
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style lang="less" scoped>
/* 密码编辑部分样式开始 */
/* 对话框的样式开始 */
.password-dialog {
  /deep/ .el-dialog__body {
    padding: 20px 10px 0px;
  }
}
/* 对话框的样式结束 */
/* 表单样式开始 */
.password-edit {
  margin: 0 auto;
  width: 70%;
  // border: 1px red solid;
}
/* 表单样式结束 */
/* 密码编辑部分样式结束 */
</style>