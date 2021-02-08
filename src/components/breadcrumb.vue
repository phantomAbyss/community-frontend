<template>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">文章列表</el-breadcrumb-item>
      <el-breadcrumb-item>华为消费者管培求战友</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb'
}
</script>

<style lang="less" scoped>

</style>