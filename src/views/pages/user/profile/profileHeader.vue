<template>
  <!-- 用户的基础信息开始 -->
  <div class="profile-header">
      <!-- 用户头像部分信息 -->
      <user-avatar :generalInfo="generalInfo" :userId="userId"></user-avatar>
      <!-- 用户基础信息内容 -->
      <base-info :baseInfo="baseInfo" ref="baseInfo" :userId="userId"></base-info>
  </div>
  <!-- 用户的基础信息结束 -->
</template>

<script>
import userAvatar from './userAvatar';
import baseInfo from './baseInfo';

import profileService from '@/common/service/user/profile'
export default {
  name: "profileHeader",
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  components: {
      userAvatar,
      baseInfo
  },
  data () {
    return {
      /* baseInfo: {
        id: '',
        nickname: '',
        realName: '',
        gender: 1,
        introduce: '',
        province: {
          id: '',
          name: ''
        },
        city: {
          id: '',
          name: ''
        },
        birthday: '',
        startWork: '',
        modifiedTime: '',
        nameModify: true
      },
      generalInfo: {
        userId: '',
        username: '',
        avatar: '',
        codeAge: 0,
      } */
      baseInfo: {},
      generalInfo: {}
    }
  },
  created () {
    this.getBaseInfo();
    this.generalInfo.userId = this.userId;
  },
  methods: {
    getBaseInfo() {
      profileService.getBaseInfo().then(res => {
        if (res.code === 200) {
          let data = res.data;
          this.baseInfo = data.baseInfo;
          this.generalInfo = data.generalInfo;
          this.$nextTick(() => {
            this.$refs.baseInfo.setUpdateBaseInfoData();
          })
        } else {
          this.$message({
            message: res.message || '获取用户的基本信息失败，请稍后重试',
            type: 'error',
            center: true
          })
        }
      }).catch(err => {
        this.$message({
          message: err.message || '接口异常，请稍后重试',
          type: 'error',
          center: true
        })
      })
    }
  }
};
</script>

<style lang="less" scoped>
/* 用户的基础信息样式开始 */
/* 用户的基础信息样式结束 */
</style>