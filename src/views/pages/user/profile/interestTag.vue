<template>
  <!-- 用户的兴趣信息开始 -->
  <div class="interest-tag">
    <div class="interest-tag-head">兴趣标签</div>
    <div class="interest-tag-content">
      <ul>
        <li>
          <div class="tag-content-left">
            <span>已</span>
            <span>关</span>
            <span>注</span>
          </div>
          <div class="tag-content-right">
            <ul class="followed-tag-list" v-if="followedTagList.length">
              <li v-for="followedTag in followedTagList" :key="followedTag.id">
                <el-tag
                  :closable="isLoginUser()"
                  effect="dark"
                  @close="unFollowTag(followedTag)"
                  >{{ followedTag.name }}</el-tag
                >
              </li>
            </ul>
            <div class="no-data" v-else>您还没有添加兴趣标签</div>
          </div>
        </li>
        <li v-if="isLoginUser()">
          <div class="tag-content-left">选择标签</div>
          <div class="tag-content-right">
            <ul class="tag-list">
              <li
                v-for="(tag, index) in tagList"
                :key="tag.id"
                @click="chooseTag(index)"
                :class="{ active: index === mainIndex }"
              >
                {{ tag.name }}
              </li>
            </ul>
            <ul class="tag-sub-list" v-if="tagList.length">
              <li
                v-for="(subTag, subTagIndex) in tagList[mainIndex].tags"
                :key="subTag.id"
                @click="followTag(subTag, subTagIndex)"
                :class="{ followed: subTag.select }"
              >
                {{ subTag.name }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- 用户的兴趣信息结束 -->
</template>

<script>
import profileService from "@/common/service/user/profile";

import { getUser } from "@/common/utils/auth";

export default {
  name: "interestTag",
  props: {
    userId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      userInfo: {},
      tagList: [],
      mainIndex: 0,
      subIndex: 0,
    };
  },
  created() {
    this.getTagList();
    this.userInfo = getUser();
  },
  methods: {
    /* 判断是否为当前登录用户 */
    isLoginUser() {
      return this.userId === this.userInfo.userId;
    },
    /* 获取标签列表 */
    getTagList() {
      profileService.getTagList().then((res) => {
        if (res.code === 200) {
          this.tagList = res.data;
        }
      });
    },
    /* 选择大标签 */
    chooseTag(index) {
      this.mainIndex = index;
    },
    //关注标签
    followTag(subTag, subIndex) {
      if (subTag.selected) {
        return;
      }
      let data = {
        label: subTag.id,
        parentLabel: this.tagList[this.mainIndex].id,
        followType: 1, //1表示关注成功
      };
      //调用api执行关注
      profileService.followTag(data).then((res) => {
        if (res.code === 200) {
          this.subIndex = subIndex;
          /* 关注某个小标签后修改tagList */
          this.changeTagListAfterFollow();
          this.$message({
            message: "关注成功",
            type: "success",
          });
        }
      });
    },
    //取关
    unFollowTag({ id, parentId }) {
      let data = {
        label: id,
        parentLabel: parentId,
        followType: -1, //-1表示取消关注
      };
      // 调用api取消关注
      profileService.followTag(data).then((res) => {
        if (res.code === 200) {
          /* 取关后修改标签集 */
          this.changeTagListAfterUnFollow(id, parentId);
          this.$message({
            message: "取关成功",
            type: "success",
          });
        }
      });
    },
    // 关注后修改TagList
    changeTagListAfterFollow() {
      let preTagItem = this.tagList[this.mainIndex];
      /* console.log('tagList[0] = ' + this.tagList[0]);
      console.log('len = ' + this.tagList.length)
      console.log('mainIndex = ' + this.mainIndex)
      console.log('pre = ' + preTagItem) */
      preTagItem.select = true;
      preTagItem.tags[this.subIndex].select = true;
      console.log("关注后修改tagList");
      this.$set(this.tagList, this.mainIndex, preTagItem);
    },
    // 取消关注后修改TagList
    changeTagListAfterUnFollow(id, parentId) {
      this.tagList = this.tagList.map((item) => {
        if (item.id === parentId) {
          item.tags.forEach((_item) => {
            if (_item.id === id) {
              _item.select = false;
            }
          });
        }
        return item;
      });
    },
  },
  computed: {
    // 过滤出已关注的
    followedTagList() {
      return this.tagList
        .filter((item) => item.select)
        .reduce((acc, cur) => {
          return acc.concat(
            cur.tags
              .filter((subTagItem) => subTagItem.select)
              .map((followedTagItem) => {
                return {
                  id: followedTagItem.id,
                  name: followedTagItem.name,
                  parentId: cur.id,
                };
              })
          );
        }, []);
    },
  },
};
</script>

<style lang="less" scoped>
/* 用户的兴趣信息开始 */
.interest-tag {
  padding: 24px 16px 16px;
  background: #fff;
  margin-bottom: 32px;
}
.interest-tag .interest-tag-head {
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: #2e2e2e;
  margin-bottom: 24px;
}
.interest-tag .interest-tag-content {
  padding-right: 112px;
}
.interest-tag-content > ul > li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 24px;
  margin-bottom: 16px;
  font-size: 14px;
}
.interest-tag-content > ul > li .tag-content-left {
  width: 56px;
  color: #555666;
  margin-right: 40px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  padding-left: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.tag-content-right .no-data {
  color: #999aaa;
  margin-bottom: 16px;
}
.tag-content-right .followed-tag-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.tag-content-right .followed-tag-list li .el-tag {
  border-radius: 12px;
  height: 24px;
  line-height: 24px;
}
.tag-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.tag-list .active {
  color: #fc5531;
}
.tag-list li {
  cursor: pointer;
  font-weight: 500;
  line-height: 24px;
  color: #222226;
  margin-right: 16px;
  margin-bottom: 8px;
}
.tag-sub-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  border: 1px dashed #e8e8ed;
  border-radius: 4px;
  padding: 16px 16px 0 0;
}
.tag-sub-list li:hover {
  border: 1px solid #222226;
  color: #222226;
}
.tag-sub-list li {
  margin-bottom: 16px;
  padding: 0 10px;
  margin-left: 16px;
  cursor: pointer;
  color: #555666;
  line-height: 22px;
  border-radius: 12px;
  border: 1px solid #555666;
}
.followed {
  border: 1px solid #fc5531 !important;
  color: #fc5531 !important;
  background: #fff5f2 !important;
}
/* 用户的兴趣信息结束 */
</style>