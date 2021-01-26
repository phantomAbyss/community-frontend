<template>
  <div class="login-input">
    <!-- 登录 -->
    <el-form
      :model="loginForm"
      status-icon
      hide-required-asterisk
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="login-form"
      style="display: block"
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
    <!-- 注册 -->
    <el-form
      :model="registerForm"
      status-icon
      :rules="rules"
      ref="registerForm"
      label-width="100px"
      class="registerform"
      style="display: none"
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
          placeholder="请输入内容"
          v-model="registerForm.checkCode"
          autocomplete="off"
        >
          <template slot="append" >
            <el-button type="primary">主要按钮</el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="form-item" label="密码" prop="regPass">
        <el-input
          type="password"
          v-model="registerForm.regPass"
          autocomplete="off"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item class="form-item" label="确认密码" prop="checkPass">
        <el-input
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
          >立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'loginInput',
  data () {
    /* 登录表单的自定义验证 */
    /* 自定义用户名验证 */
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱或者手机号'))
      } else {
        callback()
      }
    }
    /* 自定义密码验证 */
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    /* 注册表单的自定义验证 */
    /* 验证手机号码 */
    var validateRegPhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else {
        callback()
      }
    }
    /* 验证密码 */
    var validateRegPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    /* 验证确认密码 */
    var validateCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.regPass) {
        // console.log(value + ", " + this.registerForm.regPass)
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }
    return {
      /* 登录表单的值 */
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        phoneprefix: '',
        phonenum: '',
        regPass: '',
        checkPass: '',
        checkCode: ''
      },
      rules: {
        /* 登录表单的自定义规则 */
        username: [
          { validator: validateUsername, trigger: 'blur' },
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
          { min: 3, max: 10, message: '长度在3-10个字符', trigger: 'blur' }
        ],
        /* 注册表单的自定义规则 */
        phonenum: [
          { validator: validateRegPhone, trigger: 'blur' },
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          {
            min: 8,
            max: 11,
            message: '手机号长度在8-11个字符之间',
            trigger: 'blur'
          }
        ],
        regPass: [{ validator: validateRegPass, trigger: 'blur' }],
        checkPass: [{ validator: validateCheckPass, trigger: 'blur' }]
      },
      /* 手机号码的区域的选择框的值 */
      options: [
        {
          value: '选项0',
          label: '支持动态搜索哟',
          disabled: true
        },
        {
          value: '选项1',
          label: '中国+86'
        },
        {
          value: '选项2',
          label: '美国+1'
        },
        {
          value: '选项3',
          label: '俄罗斯+7'
        },
        {
          value: '选项4',
          label: '比利时+32'
        },
        {
          value: '选项5',
          label: '意大利+39'
        }
      ]
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  created () {
    this.registerForm.phoneprefix = this.options[1].value
  }
}
</script>

<style lang="less" scoped>
/* 登录注册表单全局样式开始 */
.login-input {
  float: left;
  width: 450px;
  border-right: 1px solid #ededed;
  padding-right: 60px;
  margin-right: -1px;
  position: relative;
}
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
/* 注册表单样式开始 */
/* 验证码样式开始 */
/* 验证码样式结束 */
.phone-prefix {
  width: 100px;
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
/* 登录注册表单全局样式结束 */
</style>
