<template>
  <el-dialog
    title="邮箱设置"
    :visible.sync="value"
    width="30%"
    :before-close="handleClose"
  >
    <!-- 修改的步骤条 -->
    <el-steps
      :active="step - 1"
      finish-status="success"
      :align-center="true"
      class="step"
    >
      <el-step title="验证身份"></el-step>
      <el-step title="认证新邮箱"></el-step>
    </el-steps>
    <!-- 第一步 -->
    <div v-if="step == 1">
      <el-form
        status-icon
        :rules="checkRules"
        :model="checkForm"
        ref="checkForm"
        class="email-form"
      >
        <!-- 提示语句 -->
        <el-form-item class="item-tip">
          <span>为了您的帐号安全，确认身份成功后进行下一步操作。</span>
        </el-form-item>
        <!-- 通过手机方式修改 -->
        <el-form-item class="form-item" v-if="phoneWay">
          <el-select
            filterable
            placeholder="请选择"
            class="phone-prefix"
            v-model="mobile.phonePrefix"
            disabled
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            >
              <span>{{ item.nation }}{{ item.label }}</span>
            </el-option>
          </el-select>
          <el-form-item label="" prop="phonenum" class="inline">
            <el-input
              v-model="mobile.phonenum"
              placeholder="请输入手机号码"
              autocomplete="off"
              clearable
              class="phonenum"
              disabled
            >
            </el-input>
          </el-form-item>
        </el-form-item>
        <!-- 通过邮箱方式修改 -->
        <el-form-item class="form-item" prop="email" v-else>
          <el-input
            v-model="email"
            placeholder="请输入已绑定的邮箱"
            autocomplete="off"
            clearable
            class="email"
          >
          </el-input>
        </el-form-item>
        <!-- 验证码输入框 -->
        <el-form-item class="form-item" prop="verifyCode">
          <el-input
            placeholder="请输入验证码"
            v-model="checkForm.verifyCode"
            autocomplete="off"
          >
            <template slot="append">
              <el-button type="primary" @click="getVerifyCode"
                >获取验证码</el-button
              >
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="form-item change">
          <el-button
            type="primary"
            round
            plain
            @click="changeWay"
            v-if="phoneWay"
            >通过邮箱验证</el-button
          >
          <el-button type="primary" round plain @click="changeWay" v-else
            >通过手机验证</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!-- 第二步 -->
    <div v-if="step == 2">
      <el-form
        status-icon
        :rules="authRules"
        :model="authForm"
        ref="authForm"
        class="email-auth"
      >
        <!-- 新的手机号码 -->
        <el-form-item class="form-item" prop="email">
          <el-input
            v-model="authForm.email"
            placeholder="请输入新的邮箱"
            autocomplete="off"
            clearable
            class="email"
          >
          </el-input>
        </el-form-item>
        <!-- 验证码输入框 -->
        <el-form-item class="form-item" prop="authCode">
          <el-input
            placeholder="请输入验证码"
            v-model="authForm.authCode"
            autocomplete="off"
          >
            <template slot="append">
              <el-button type="primary" @click="getAuthCode"
                >获取验证码</el-button
              >
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <!-- 按钮部分 -->
    <span slot="footer" class="dialog-footer">
      <!-- 第一步的按钮 -->
      <el-button @click="offDialog" v-if="step == 1">取 消</el-button>
      <el-button
        type="primary"
        @click="checkVerifyCode('checkForm')"
        v-if="step == 1"
        >确 定</el-button
      >
      <!-- 第二步的按钮 -->
      <el-button @click="setStep(1)" v-if="step == 2">上一步</el-button>
      <el-button @click="blindNewEmail('authForm')" v-if="step == 2"
        >绑 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import commonApi from "@/common/service/common";
import accountApi from "@/common/service/user/account";

export default {
  name: "email",
  props: {
    /* 收集编辑对话框是否显示 */
    value: {
      default: true,
    },
    /* 邮箱 */
    email: {
      type: String,
      default: "1824857373@qq.com",
    },
    /* 手机号码 */
    mobile: {
      type: Object,
      default: () => {
        return {
          phonePrefix: "+86",
          phonenum: "15320749549",
        };
      },
    },
  },
  data() {
    return {
      /* 验证表单 */
      checkForm: {
        /* 验证码 */
        verifyCode: "",
      },
      /* 认证表单 */
      authForm: {
        email: "",
        /* 验证码 */
        authCode: "",
      },
      /* 步骤 */
      step: 1,
      /* 修改方式 */
      phoneWay: true,
      /* 手机号码的区域的选择框的值 */
      options: [
        {
          value: "选项0",
          label: "支持动态搜索哟",
          disabled: true,
        },
        {
          value: "选项1",
          label: "+86",
          nation: "中国",
        },
        {
          value: "选项2",
          label: "+86",
          nation: "中国",
        },
        {
          value: "选项3",
          label: "+861",
          nation: "中国",
        },
      ],
      /* 验证手机的自定义规则 */
      checkRules: {
        verifyCode: [
          /* 验证码不为空 */
          { required: true, message: "请输入验证码", trigger: "blur" },
          /* 这里还需要调用api验证用户输入的验证码是否正确 */
          {
            validator: (rule, value, callback) => {
              // console.log("value = " + value);
              /* 检查用户输入的验证码和使用手机号或者邮箱发送的验证码是否正确 */
              if (this.phoneWay) {
                commonApi
                  .checkVerifyCodeByMobile(this.verifyCode)
                  .then((res) => {
                    if (res.code === 200) {
                      /* 输入的验证码正确 */
                      callback();
                    } else {
                      /* 输入的验证码错误 */
                      callback(new Error("您输入的验证码有误，请重新输入"));
                    }
                  });
              } else {
                commonApi
                  .checkVerifyCodeByEmail(this.verifyCode)
                  .then((res) => {
                    if (res.code === 200) {
                      /* 输入的验证码正确 */
                      callback();
                    } else {
                      /* 输入的验证码错误 */
                      callback(new Error("您输入的验证码有误，请重新输入"));
                    }
                  });
              }
            },
            trigger: "blur",
          },
        ],
      },
      /* 认证手机的自定义规则 */
      authRules: {
        /* 邮箱的自定义规则 */
        email: [
          {required: true, message: '请输入新的邮箱', trigger: 'blur'}
          /* 还可以添加使用正则匹配来验证邮箱的格式是否正确 */
        ],
        /* 验证码的自定义规则 */
        authCode: [
          /* 验证码不为空 */
          { required: true, message: "请输入验证码", trigger: "blur" },
          /* 这里还需要调用api验证用户输入的验证码是否正确 */
          {
            validator: (rule, value, callback) => {
              console.log("value = " + value);
              /* 检查用户输入的验证码和使用手机号或者邮箱发送的验证码是否正确 */
              commonApi.checkVerifyCodeByMobile(this.verifyCode).then((res) => {
                if (res.code === 200) {
                  /* 输入的验证码正确 */
                  callback();
                } else {
                  /* 输入的验证码错误 */
                  callback(new Error("您输入的验证码有误，请重新输入"));
                }
              });
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    /* 绑定新的手机号 */
    blindNewEmail(formName) {
      /* 验证表单是否正确 */
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /* 这里调用api绑定手机号，绑定成功后提示用户，然后关闭对话框 */
          accountApi.updateEmail(this.authForm.email).then((res) => {
            this.$message({
              message: res.message || "接口异常，请重新尝试",
              type: res.status ? "success" : "error",
              /* 窗口偏移量 */
              offset: 300,
              //悬停时间
              duration: 800,
              /* 是否显示关闭按钮 */
              showClose: true,
              /* 文本是否居中 */
              center: true,
            });
            if (res.code === 200) {
              /* 手机号码修改成功,关闭修改对话框 */
              this.offDialog();
            }
          });
        } else {
          this.$message({
            message: "表单验证有误，请检查后在提交",
            type: "error",
            /* 窗口偏移量 */
            offset: 300,
            //悬停时间
            duration: 800,
            /* 是否显示关闭按钮 */
            showClose: true,
            /* 文本是否居中 */
            center: true,
          });
          return false;
        }
      });
    },
    /* 设置步骤 */
    setStep(num) {
      setTimeout(() => {
        this.step = num;
      }, 200);
    },
    /* 验证用户输入的验证码是否正确 */
    checkVerifyCode(formName) {
      /* 验证表单是否正确 */
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log("submit!!");
          /* 表单验证通过，跳转到下一步 */
          this.$message({
            message: "验证通过",
            type: "success",
            /* 窗口偏移量 */
            offset: 300,
            //悬停时间
            duration: 800,
            /* 是否显示关闭按钮 */
            showClose: true,
            /* 文本是否居中 */
            center: true,
          });
          this.setStep(2);
        } else {
          return false;
        }
      });
    },
    /* 获取验证码 */
    getVerifyCode() {
      /* 这里可以添加滑块验证，从而避免机器登录 */
      /* 发送验证码 */
      if (this.phoneWay) {
        commonApi.sendCheckCodeByMobile(this.mobile.phonenum).then((res) => {
          if (res.code === 200) {
            this.$message({
              message: res.message,
              type: res.flag ? "success" : "error",
              /* 窗口偏移量 */
              offset: 300,
              //悬停时间
              duration: 800,
              /* 是否显示关闭按钮 */
              showClose: true,
              /* 文本是否居中 */
              center: true,
            });
          } else {
            this.$message({
              message: res.message,
              type: res.flag ? "success" : "error",
              /* 窗口偏移量 */
              offset: 300,
              //悬停时间
              duration: 800,
              /* 是否显示关闭按钮 */
              showClose: true,
              /* 文本是否居中 */
              center: true,
            });
          }
        });
      } else {
        commonApi.sendCheckCodeByEmail(this.email).then((res) => {
          if (res.code === 200) {
            this.$message({
              message: res.message,
              type: res.flag ? "success" : "error",
              /* 窗口偏移量 */
              offset: 300,
              //悬停时间
              duration: 800,
              /* 是否显示关闭按钮 */
              showClose: true,
              /* 文本是否居中 */
              center: true,
            });
          } else {
            this.$message({
              message: res.message,
              type: res.flag ? "success" : "error",
              /* 窗口偏移量 */
              offset: 300,
              //悬停时间
              duration: 800,
              /* 是否显示关闭按钮 */
              showClose: true,
              /* 文本是否居中 */
              center: true,
            });
          }
        });
      }
    },
    /* 选择修改方式 */
    changeWay() {
      this.phoneWay = !this.phoneWay;
    },
    /* 获取认证的验证码 */
    getAuthCode() {
      commonApi.sendCheckCodeByEmail(this.authForm.email).then((res) => {
        if (res.code === 200) {
          this.$message({
            message: res.message,
            type: res.flag ? "success" : "error",
            /* 窗口偏移量 */
            offset: 300,
            //悬停时间
            duration: 800,
            /* 是否显示关闭按钮 */
            showClose: true,
            /* 文本是否居中 */
            center: true,
          });
        } else {
          this.$message({
            message: res.message,
            type: res.flag ? "success" : "error",
            /* 窗口偏移量 */
            offset: 300,
            //悬停时间
            duration: 800,
            /* 是否显示关闭按钮 */
            showClose: true,
            /* 文本是否居中 */
            center: true,
          });
        }
      });
    },
    /* 关闭收集编辑框 */
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
/* 邮箱修改样式开始 */
/* 对话框样式开始 */
.mobile-dialog {
  /deep/ .el-dialog__body {
    padding: 0px 10px 0px;
  }
  /deep/ .el-step__title {
    margin-left: 0px;
  }
}
/* 对话框样式结束 */
.email-form {
  .item-tip {
    position: relative;
    margin-left: 56px;
    bottom: -13px;
  }
  .form-item {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 22px;
    .phone-prefix {
      width: 80px;
    }
    .inline {
      display: inline-block;
    }
    .phonenum {
      margin-left: 10px;
      width: 200px;
    }
  }
  .change {
    margin-left: 150px;
  }
}
.email-auth {
  margin-top: 25px;
  .form-item {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 22px;
    .phone-prefix {
      width: 80px;
    }
    .inline {
      display: inline-block;
    }
    .phonenum {
      margin-left: 10px;
      width: 215px;
    }
  }
}
/* 邮箱修改样式结束 */
</style>