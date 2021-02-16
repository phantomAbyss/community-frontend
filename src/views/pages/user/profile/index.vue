<template>
    <!-- 个人资料页开始 -->
  <div class="user-profile">
      <!-- 个人资料页头部 -->
      <profile-header></profile-header>
      <!-- 用户的工作信息 -->
      <job-info></job-info>
      <!-- 用户的兴趣信息 -->
      <interest-tag></interest-tag>
  </div>
  <!-- 个人资料页结束 -->
</template>

<script>
import profileHeader from './profileHeader';
import jobInfo from './jobInfo';
import interestTag from './interestTag'

export default {
  name: 'index',
  components: {
      profileHeader,
      jobInfo,
      interestTag
  }
}
</script>

<style lang="less" scoped>
.user-profile {
  width: 800px;
}
</style>