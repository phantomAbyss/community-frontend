<template>
    <!-- 账户设置的头部开始 -->
    <div class="account-head">
      <span class="account-shield">40</span>
      <span class="account-desc mid-risk">中风险</span>
      <p class="account-suggest">
        账号综合评分状况有风险，请继续完善, 建议：
        <span>设置密码</span>
      </p>
    </div>
    <!-- 账户设置的头部结束 -->
</template>

<script>
export default {
  name: 'accountHeader'
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
  background: url(https://img-home.csdnimg.cn/images/20201223055552.png)
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
  background: url(https://img-home.csdnimg.cn/images/20201223055657.png)
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