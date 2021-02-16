<template>
  <div class="test">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off">
          <template slot="append">
            <el-button type="primary"
              >获取验证码</el-button
            >
          </template></el-input
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-form
      :model="form"
      status-icon
      :rules="formRules"
      ref="form"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" autocomplete="off">
          <template slot="append">
            <el-button type="primary"
              >获取验证码</el-button
            >
          </template></el-input
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
 
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
      },
      form: {
        username: ''
      },
      rules: {
        username: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ]
      },
      formRules: {
        username: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="less" scoped>
.test {
  margin-top: 100px;
  .el-form {
    width: 30%;
    margin: 0 auto;
  }
}
</style>