<template>
    <div class="test">
      test01: {{obj.test1}}
      test02: {{obj.test2}}
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      obj: {}
    }
  },
  created () {
    this.obj.test1 = 1;
    this.obj.test2 = 2;
  }
}
</script>

<style lang="less" scoped>
.test {
  margin-top: 100px;
}
</style>