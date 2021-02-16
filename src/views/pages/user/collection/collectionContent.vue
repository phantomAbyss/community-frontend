<template>
  <!-- 用户的收藏内容开始 -->
  <div class="collection-content">
    <div class="content-list">
      <div class="content-title">
        <div class="drag-tip">
          <svg
            t="1611631826148"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6523"
            width="22"
            height="22"
          >
            <path
              d="M440 937.2H132.8c-23.2 0-42-18.8-42-42V588c0-23.2 18.8-42 42-42H440c23.2 0 42 18.8 42 42v307.2c0 23.1-18.8 42-42 42z m-289.2-60H422V606H150.8v271.2z"
              p-id="6524"
              fill="#7171fc"
            ></path>
            <path
              d="M213.4 575h60v30h-60zM866.8 811.4h-58.7v-60h58.7v60z m-117.4 0h-58.7v-60h58.7v60z m-117.5 0h-58.7v-60h58.7v60z m307.9-50.8h-60v-58.7h60v58.7z m0-117.5h-60v-58.7h60v58.7z m0-117.4h-60V467h60v58.7z m-666.4-9.4h-60v-58.7h60v58.7z m666.4-108.1h-60v-58.7h60v58.7z m-666.4-9.4h-60v-58.7h60v58.7z m666.4-108h-60v-58.7h60v58.7z m-666.4-9.4h-60v-58.7h60v58.7z m666.4-108.1h-60V127c0 6.3 3.3 12.2 8.7 15.4l31-51.4c12.6 7.6 20.4 21.4 20.4 36v46.3zM273.4 164h-60v-37c0-23.2 18.8-42 42-42h2.9v59.8c8.5-1.4 15.1-8.8 15.1-17.8v37z m572.2-19h-58.7V85h58.7v60z m-117.5 0h-58.7V85h58.7v60z m-117.4 0H552V85h58.7v60z m-117.5 0h-58.7V85h58.7v60z m-117.4 0h-58.7V85h58.7v60zM484.4 751.4h30v60h-30zM480.786 500.822l271.243-271.244 42.426 42.426-271.243 271.244z"
              p-id="6525"
              fill="#7171fc"
            ></path>
            <path
              d="M821.5 404.7h-60V256.5H613.9v-60h207.6z"
              p-id="6526"
              fill="#7171fc"
            ></path>
          </svg>
          <span>可拖拽博文至其他收藏夹进行分类修改</span>
        </div>
        <div class="collection-name">
          <span class="dir-name">
            默认收藏夹
            <i class="el-icon-edit-outline"></i>
          </span>
          <div class="input-edit" style="display: none">
            <el-input v-model="input" placeholder="请输入文件夹名称"
              >默认收藏夹</el-input
            >
            <i class="el-icon-error"></i>
            <i class="el-icon-success"></i>
          </div>
        </div>
        <span class="edit-folder folder-detail">
          <p class="folder-text folder-desc">
            默认收藏夹的描述
            <i class="el-icon-edit-outline"></i>
          </p>
          <p class="folder-edit">
            <em class="cursor">删除收藏夹</em>
            <em class="cursor">批量移动</em>
            <em class="cursor"> 设为私密 </em>
          </p>
        </span>
      </div>
      <ul class="content-tab">
        <li class="tab-active">全部</li>
        <li class>博客</li>
        <li class>下载</li>
      </ul>
      <ul class="content-sublist">
        <li>
          <div class="content-item">
            <span class="item-dir">
              <span class="item-subtitle"> 这是收藏的文章的名字 </span>
            </span>
            <div class="item-right">
              <a href="#" class="like-cancel">
                <i class="el-icon-star-on"></i>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="content-item">
            <span class="item-dir">
              <span class="item-subtitle"> 这是收藏的文章的名字 </span>
            </span>
            <div class="item-right">
              <a href="#" class="like-cancel">
                <i class="el-icon-star-on"></i>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="content-item">
            <span class="item-dir">
              <span class="item-subtitle"> 这是收藏的文章的名字 </span>
            </span>
            <div class="item-right">
              <a href="#" class="like-cancel">
                <i class="el-icon-star-on"></i>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="content-item">
            <span class="item-dir">
              <span class="item-subtitle"> 这是收藏的文章的名字 </span>
            </span>
            <div class="item-right">
              <a href="#" class="like-cancel">
                <i class="el-icon-star-on"></i>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <nav style="text-align: center">
        <!-- nav标签是为了使分页插件居中 -->
        <div class="content-page">
          <el-pagination background layout="prev, pager, next" :total="10">
          </el-pagination>
        </div>
      </nav>
    </div>
  </div>
  <!-- 用户的收藏内容结束 -->
</template>

<script>
export default {
  name: "collectionContent",
};
</script>

<style lang="less" scoped>
/* 用户的收藏内容样式开始 */
.collection-content {
  min-height: 400px;
  overflow: hidden;
}
.content-list {
  position: relative;
  padding: 16px 0;
  // border-bottom: 1px solid #eaebec;
  line-height: 20px;
  min-height: 760px;
}
.content-list span {
  display: block;
}
.content-list .content-title {
  padding: 0 16px;
  height: 85px;
  border-bottom: 1px solid #ededed;
  position: relative;
}
.drag-tip {
  width: 246px;
  height: 26px;
  border-radius: 8px;
  border: 1px solid #fbe3e4;
  position: absolute;
  right: 16px;
  line-height: 26px;
  font-size: 12px;
  padding-left: 31px;
  color: #7171fc;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.drag-tip svg {
  width: 18px;
  height: 16px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 9px;
}
.drag-tip span {
  display: inline-block;
}
.collection-name {
  height: 32px;
}
.dir-name {
  width: 89%;
  font-size: 14px !important;
  color: #555666;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 10px;
}
.dir-name i {
  position: relative;
  top: 3px;
  left: 5px;
  font-size: 20px;
  cursor: pointer;
  width: 16px;
}
.content-title .input-edit {
  width: 400px;
  height: 32px;
}
.input-edit .el-input {
  width: 300px;
  float: left;
}
.input-edit i {
  display: block;
  float: left;
  margin: 8px 0 0 15px;
  font-size: 24px;
  color: #7171fc;
}
.edit-folder {
  width: 85%;
  font-size: 14px;
  overflow: hidden;
  margin-top: 10px;
}
.folder-detail {
  width: 100% !important;
}
.edit-folder .folder-text {
  width: 85%;
  margin-bottom: 8px;
  color: #6b6b6b;
  font-size: 14px;
  line-height: 1.8;
  text-align: justify;
}
.edit-folder .folder-desc {
  width: 450px !important;
  float: left;
  white-space: nowrap;
}
.edit-folder p i {
  position: relative;
  top: 3px;
  left: 5px;
  font-size: 20px;
  cursor: pointer;
  width: 16px;
}
.edit-folder .folder-edit {
  // position: relative;
  float: right;
  width: 300px;
  text-align: right;
  margin-top: -30px;
}
.edit-folder em {
  color: #108ee9;
  font-style: normal;
  display: inline-block;
  margin-right: 10px;
  font-weight: 400;
  vertical-align: unset;
  font-size: 14px;
}
.content-tab {
  margin-left: 16px;
  width: 440px;
  height: 44px;
  border-bottom: 1px solid #ededed;
}
.content-tab .tab-active {
  color: #222226;
  border-bottom: 2px solid #222226;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC !important;
}
.content-tab li {
  float: left;
  text-align: center;
  font-size: 14px;
  font-family: Helvetica !important;
  color: #555666;
  height: 44px;
  line-height: 44px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  cursor: pointer;
  margin: 0 16px;
  font-family: PingFangSC-Regular, PingFang SC !important;
}
.content-sublist {
  margin-top: 8px;
  margin-bottom: -17px;
  padding: 0 16px;
}
.content-sublist li:hover {
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
}
.content-sublist li {
  padding: 0;
  position: relative;
  margin-top: 0;
  background: #fff;
  border: 1px solid #ededed;
  border-radius: 4px;
  margin-bottom: 8px;
  height: 52px;
  overflow: hidden;
  line-height: 52px;
}
.content-sublist li .content-item {
  position: relative;
  padding: 0 24px;
  background: #fff;
  display: inline-block;
  width: 100%;
  font-size: 14px !important;
  line-height: 52px;
}
.content-item .item-dir {
  width: 89%;
  font-size: 14px !important;
  color: #555666;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.content-sublist li:hover .content-item .item-dir .item-subtitle {
  color: #fc5531;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.content-sublist li .item-subtitle {
  font-family: Helvetica !important;
  color: #555666;
  display: inline;
  cursor: pointer;
}
.content-sublist li .item-right {
  position: absolute;
  right: 0;
  width: 150px;
  height: 100%;
  top: 0;
  text-align: right;
  line-height: 52px;
  padding-right: 18px;
}
.content-sublist li .item-right .like-cancel {
  margin-right: 10px;
}
.item-right a i {
  position: relative;
  top: 3px;
  right: 10px;
  font-size: 25px;
}
.content-page {
  position: relative;
  top: 30px;
}
/* 用户的收藏内容样式结束 */
</style>