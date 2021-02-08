<template>
  <!-- 用户的基础信息开始 -->
  <div class="profile-header">
      <!-- 用户头像部分信息 -->
      <user-avatar :generalInfo="generalInfo" :nickName="nickName" :userName="userName"></user-avatar>
      <!-- 用户基础信息内容 -->
      <base-info :baseInfo="baseInfo" ref="baseInfo"></base-info>
  </div>
  <!-- 用户的基础信息结束 -->
</template>

<script>
import userAvatar from './userAvatar';
import baseInfo from './baseInfo';

import profileService from '@/common/service/user/profile'
export default {
  name: "profileHeader",
  components: {
      userAvatar,
      baseInfo
  },
  data () {
    return {
      baseInfo: {
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
        avatar: '',
        codeAge: 0,
      },
      nickName: '',
      userName: ''
    }
  },
  created () {
    this.getBaseInfo();
  },
  methods: {
    getBaseInfo() {
      profileService.getBaseInfo().then(res => {
        let data = res.data.data;
        if (res.data.code == 200) {
          this.baseInfo = data.baseInfo;
          this.generalInfo = data.generalInfo;
          this.nickName = this.baseInfo.nickname;
          this.userName = this.baseInfo.id;
          this.$nextTick(() => {
            this.$refs.baseInfo.setUpdateBaseInfoData();
          })
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
/* 用户的基础信息样式开始 */
/* 用户的基础信息样式结束 */
</style>