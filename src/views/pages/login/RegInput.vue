<template>
  <!-- 注册 -->
  <el-form
    :model="registerForm"
    status-icon
    :rules="rules"
    ref="registerForm"
    label-width="100px"
    class="registerform"
  >
    <el-form-item class="form-item" label="手机号码">
      <el-select
        v-model="registerForm.phoneprefix"
        filterable
        placeholder="请选择"
        class="phone-prefix"
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
          placeholder="请输入手机号码"
          v-model="registerForm.phonenum"
          autocomplete="off"
          clearable
          class="phonenum"
        >
        </el-input>
      </el-form-item>
    </el-form-item>
    <el-form-item class="form-item" label="验证码" prop="checkCode">
      <el-input
        placeholder="请输入验证码"
        v-model="verifyCode"
        autocomplete="off"
      >
        <template slot="append">
          <el-button type="primary" @click="getCheckCode">获取验证码</el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item class="form-item" label="密码" prop="regPass">
      <el-input
        placeholder="请输入密码"
        type="password"
        v-model="registerForm.regPass"
        autocomplete="off"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item class="form-item" label="确认密码" prop="checkPass">
      <el-input
        placeholder="请再次输入密码"
        type="password"
        v-model="registerForm.checkPass"
        autocomplete="off"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item class="form-item">
      <el-button
        class="reg-btn"
        type="primary"
        @click="submitForm('registerForm')"
        >立即注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import userApi from "@/common/service/user/index";
export default {
  name: "RegInput",
  data() {
    return {
      /* 验证码 */
      verifyCode: "",
      /* 注册表单的值 */
      registerForm: {
        phoneprefix: "",
        phonenum: "",
        regPass: "",
        checkPass: ""
      },
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
      /* 注册表单的自定义规则 */
      rules: {
        phonenum: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入手机号码"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            min: 8,
            max: 11,
            message: "手机号长度在8-11个字符之间",
            trigger: "blur",
          },
        ],
        regPass: [
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
        ],
        checkPass: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次输入密码"));
              } else if (value !== this.registerForm.regPass) {
                // console.log(value + ", " + this.registerForm.regPass)
                callback(new Error("两次输入的密码不一致"));
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
    /* 获取验证码 */
    getCheckCode() {
      userApi.sendCheckCode(this.registerForm.phonenum).then((response) => {
        this.codeVal = "验证码已发送";
        this.$message({
          message: response.data.message,
          type: response.data.flag ? "success" : "error",
          /* 窗口偏移量 */
          offset: 300,
          //悬停时间
          duration: 2000,
          /* 是否显示关闭按钮 */
          showClose: true,
          /* 文本是否居中 */
          center: true
        });
      });
    },
    /* 用户注册 */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //表单校验通过,发送注册请求
          userApi.register(this.verifyCode, this.registerForm).then((res) => {
            if (res.data.flag) {
              this.$message({
                message: res.data.message,
                type: "success",
              });
              /* 注册成功后应该自动登录，然后跳转到首页或者跳转到登录页后进行登录操作 */
            } else {
              this.$message({
                message: res.data.message,
                type: "error",
              });
              return false;
            }
          });
        } else {
          this.$message({
            message: "表单校验不通过,请再次检查表单",
            type: "error",
          });
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
/* 注册表单样式开始 */
.form-item {
  margin-bottom: 20px;
}
.phone-prefix {
  width: 100px;
}
.el-input input {
  font-size: 20px;
}
.inline {
  display: inline-block;
}
.phonenum {
  margin-left: 10px;
  width: 178px;
}
.reg-btn {
  margin-left: 10px;
  width: 258px;
}
/* 注册表单样式结束 */
</style>