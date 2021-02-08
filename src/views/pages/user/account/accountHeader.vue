<template>
    <!-- 账户设置的头部开始 -->
    <div class="account-head">
      <span class="account-shield">{{score}}</span>
      <span v-if="score >= 0 && score <= 30" class="account-desc">有风险</span>
      <span v-if="score > 30 && score <= 80" class="account-desc middle-risk">中风险</span>
      <span v-if="score > 80" class="account-desc no-risk">无风险</span>
      <p v-if="suggest" class="account-suggest">账号综合评分状况有风险，请继续完善, 建议：<span>{{suggest}}</span></p>
    </div>
    <!-- 账户设置的头部结束 -->
</template>

<script>
export default {
  name: 'accountHeader',
  props: ['score', 'suggest'],
}
</script>

<style lang="less" scoped>
/* 账户设置的头部样式开始 */
.account-head {
  width: 100%;
  height: 208px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-top: 24px;
  margin-bottom: 16px;
  background: #fff
    no-repeat 50%;
  background-size: contain;
  font-size: 12px;
  color: #555666;
  text-align: center;
}
.account-head .account-shield {
  display: block;
  width: 83px;
  height: 100px;
  line-height: 100px;
  margin: auto;
  background: #7171fc
    no-repeat 50%;
  background-size: cover;
  color: #fff;
  font-size: 40px;
}
.account-head .account-desc {
  display: inline-block;
  min-width: 40px;
  padding: 0 8px;
  height: 20px;
  line-height: 20px;
  margin: 8px auto;
  background: #fc1944;
  border-radius: 12px;
  color: #fff;
}
.mid-risk {
  background: #ff991f;
}
.account-head .account-suggest {
  height: 24px;
  line-height: 24px;
}
.account-suggest span {
  color: #222226;
  font-weight: 500;
}
/* 账户设置的头部样式结束 */
</style>