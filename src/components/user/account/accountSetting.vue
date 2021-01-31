<template>
    <!-- 账户设置的内容开始 -->
    <div class="account-main">
      <span class="account-main-title">账号设置</span>
      <ul>
        <li class="account-item">
          <span>
            <span>密</span>
            <span>码</span>
          </span>
          <p>
            <span class="account-warning">存在风险请设置密码</span>
            <a href="#" class>设置密码</a>
          </p>
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
  name: 'accountSetting'
}
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
  height: 72px;
  padding: 32px 0 16px;
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
</style>