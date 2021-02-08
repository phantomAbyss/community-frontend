<template>
  <!-- 用户的账户设置开始 -->
  <div class="user-account">
      <!-- 账户设置头部 -->
      <account-header :score="score" :suggest="suggest"></account-header>
      <!-- 账户设置的内容 -->
      <account-setting :securityInfo="securityInfo"></account-setting>
  </div>
  <!-- 用户的账户设置结束 -->
</template>

<script>
import accountHeader from './accountHeader';
import accountSetting from './accountSetting';

import accountApi from '@/common/service/user/account';
export default {
  name: "index",
  components: {
      accountHeader,
      accountSetting
  },
  data () {
    return {
      securityInfo: {
        password: {
          hasInfo: false
        },
        email: {
          hasInfo: false,
          email: ''
        },
        mobile: {
          hasInfo: false,
          mobile: ''
        },
        loginLog: {
          hasInfo: false,
          logRisk: false
        }
      },
      score: 0
    }
  },
  methods: {
    getSecurityInfo () {
      /* 获取账号的安全信息 */
      accountApi.getSecurityInfo().then(res => {
        let info = res.data.data;
        this.score = info && info.score && info.score.score
        this.securityInfo.email = (info && info.email) || {}
        this.securityInfo.mobile = (info && info.mobile) || {}
        this.securityInfo.password = (info && info.password) || {}
        this.securityInfo.loginLog = (info && info.loginLog) || {}
        this.securityInfo.socialBinds = (info && info.socialBinds && info.socialBinds.map(item => item.openSiteName).join(' ')) || ''
      })
    }
  },
  computed: {
    suggest () {
      let suggest = []
      if (this.securityInfo.email && this.securityInfo.email.email === null) {
        suggest.push('绑定安全邮箱')
      }
      if (this.securityInfo.mobile && this.securityInfo.mobile.mobile === null) {
        suggest.push('绑定手机号')
      }
      if (this.securityInfo.password && this.securityInfo.password.hasInfo === false) {
        suggest.push('设置密码')
      }
      return suggest.join('/')
    }
  },
  created () {
    this.getSecurityInfo()
  }
};
</script>

<style lang="less" scoped>
/* 用户的账户设置样式开始 */
.user-account {
  width: 998px;
}
/* 用户的账户设置样式结束 */
</style>