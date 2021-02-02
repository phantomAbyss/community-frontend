<template>
    <!-- 用户的收藏文件夹开始 -->
    <div class="collection-tab">
      <ul class="sub-menu">
        <li class="menu-item item-new">
          <i class="el-icon-folder-add"></i>
          <span>新建收藏夹</span>
        </li>
        <li class="menu-item item-active">
          <div class="item-title">
            <i class="el-icon-folder"></i>
            <span>清色回忆</span>
          </div>
          <div class="like-count">
            <span class="count">
              <i class="el-icon-document"></i>
              <span>0</span>
            </span>
          </div>
        </li>
        <li class="menu-item">
          <div class="item-title">
            <i class="el-icon-folder"></i>
            <span>默认收藏夹</span>
          </div>
          <div class="like-count">
            <span class="count">
              <i class="el-icon-document"></i>
              <span>21</span>
            </span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 用户的收藏文件夹结束 -->
</template>

<script>
export default {
  name: 'collectionContent'
}
</script>

<style lang="less" scoped>
/* 用户的收藏文件夹样式开始 */
.collection-tab {
  min-height: 760px;
  width: 200px;
  border-right: 1px solid #ededed;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
}
.menu-item {
  height: 66px;
  padding-left: 16px;
  border-bottom: 1px solid #ededed;
  position: relative;
  padding-right: 8px;
  padding-top: 15px;
  cursor: pointer;
  font-weight: 400;
}
.menu-item:hover {
  background: #f6f7f8;
  font-weight: 500;
}
.menu-item:hover i {
  background-size: 32px 80px;
  background-position: -16px 0;
}
.menu-item:hover span {
  font-family: PingFangSC-Medium, PingFang SC;
}
.sub-menu .item-new {
  width: 200px;
  line-height: 35px;
  padding-top: 16px !important;
}
.sub-menu .item-active {
  position: relative;
  background: #f6f7f8;
}
.item-active .item-title i {
  background-position: -16px -16px;
}
.menu-item i {
  width: 16px;
  height: 16px;
  display: inline-block;
  background-size: 32px 80px;
  background-position: 0 0;
  position: relative;
  font-size: 18px;
  top: 1px;
  left: 35px;
}
.menu-item .like-count .count i {
  font-size: 13px;
  top: 5px;
}
.menu-item .like-count .count span {
  margin-left: 37px;
}
.menu-item span {
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 14px;
  color: #555666;
  line-height: 16px;
  margin-left: 45px;
}
.menu-item .item-title {
  white-space: nowrap;
}
.menu-item .item-title i {
  background-position: 0 -16px;
}
.menu-item .like-count {
  position: absolute;
  bottom: 12px;
  right: 8px;
}
.menu-item .like-count span {
  position: relative;
  margin-left: 10px;
  top: 6px;
}
.menu-item:hover .like-count .count .el-icon-document {
  background-position: -16px -64px;
}
.item-active .like-count .count .el-icon-document {
  background-position: -16px -64px;
}
.like-count .count .el-icon-document {
  background-position: 0 -64px;
}
/* 用户的收藏文件夹样式结束 */
</style>