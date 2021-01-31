<template>
  <!-- 个人资料页开始 -->
  <div class="user-profile">
    <!-- 用户的基础信息开始 -->
    <div class="profile-header">
      <!-- 头像部分信息 -->
      <div class="user-info">
        <div class="user-info-main">
          <div class="user-info-avatar">
            <img src="@/assets/img/avatar.jpg" alt="用户头像" />
            <div class="avatar-hover">
              <img src="@/assets/img/logo.png" alt="" />
            </div>
          </div>
          <div class="user-info-content">
            <div class="user-info-username">
              <div class="username">phantom</div>
              <div
                class="web-age"
                style="
                  background-color: rgb(209, 221, 241);
                  color: rgb(69, 81, 101);
                "
              >
                <img
                  src="https://img-home.csdnimg.cn/images/20210108035944.gif"
                  alt=""
                />
                <span>户龄3年</span>
              </div>
            </div>
            <div class="user-info-vip no-vip">
              此处为VIP功能，后期如果不做则删除
            </div>
          </div>
        </div>
        <div class="user-info-other">
          <div class="coin">此处为网站的币，如果不做则删除</div>
          <i class="user-info-split"></i>
          <div class="user-btn">
            <a href="#" target="_blank">
              个人主页
              <i class="el-icon-arrow-right"></i>
            </a>
          </div>
          <i class="user-info-split"></i>
          <div class="user-btn user-medal">
            我的勋章
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <!-- 基础信息 -->
      <div class="base-info">
        <div class="base-info-head">基本信息</div>
        <div class="base-info-content">
          <div class="info-content">
            <!-- 用户的基础个人信息 -->
            <ul>
              <li>
                <div class="content-left">用户昵称</div>
                <div class="content-right">phantom</div>
              </li>
              <li>
                <div class="content-left">
                  <span>用</span>
                  <span>户</span>
                  <span>ID</span>
                </div>
                <div class="content-right">phantom</div>
              </li>
              <li>
                <div class="content-left">真实姓名</div>
                <div class="content-right">phantom</div>
              </li>
              <li>
                <div class="content-left"><span>性</span><span>别</span></div>
                <div class="content-right">
                  <svg
                    t="1611579389594"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3563"
                    width="22"
                    height="22"
                  >
                    <path
                      d="M509.452736 514.547264m-509.452736 0a509.452736 509.452736 0 1 0 1018.905473 0 509.452736 509.452736 0 1 0-1018.905473 0Z"
                      fill="#4A94FF"
                      p-id="3564"
                    ></path>
                    <path
                      d="M727.498507 321.974129l-118.702487 118.702488c30.057711 35.661692 46.360199 81.002985 46.360199 127.872637 0 110.041791-89.663682 199.705473-199.705473 199.705472s-199.705473-89.663682-199.705472-199.705472 89.663682-199.705473 199.705472-199.705473c48.39801 0 93.229851 17.321393 127.872637 46.360199l118.702488-118.702487h-119.721393c-10.189055 0-18.340299-8.151244-18.340299-18.340299s8.151244-18.340299 18.340299-18.340298h163.534328c10.189055 0 18.340299 8.151244 18.340298 18.340298v163.534328c0 10.189055-8.151244 18.340299-18.340298 18.340299s-18.340299-8.151244-18.340299-18.340299V321.974129z m-272.047761 410.109453c90.173134 0 163.534328-73.361194 163.534329-163.534328s-73.361194-163.534328-163.534329-163.534329-163.534328 73.361194-163.534328 163.534329 72.851741 163.534328 163.534328 163.534328z"
                      fill="#FFFFFF"
                      p-id="3565"
                    ></path>
                  </svg>
                  <svg
                    t="1611579411355"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3765"
                    width="22"
                    height="22"
                  >
                    <path
                      d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                      fill="#FF7BE0"
                      p-id="3766"
                    ></path>
                    <path
                      d="M438.784 610.816l-46.08 46.08 59.904 59.392c7.168 7.168 6.656 18.432-0.512 25.6-7.168 6.656-17.92 6.656-25.088 0l-59.904-59.392-77.824 77.824c-7.168 7.168-18.432 7.168-25.6 0.512-7.168-7.168-7.168-18.432-0.512-25.6l0.512-0.512 77.824-77.824-59.392-59.392c-7.168-7.168-6.656-18.432 0.512-25.6 7.168-6.656 17.92-6.656 25.088 0l59.392 59.392 46.08-46.08c-29.696-35.84-46.08-80.896-46.08-127.488 0-110.08 89.088-199.168 199.168-199.168s199.168 89.088 199.168 199.168-89.088 199.168-199.168 199.168c-48.64 0-92.672-17.408-127.488-46.08z m127.488 9.728c90.112 0 162.816-72.704 162.816-162.816s-72.704-162.816-162.816-162.816-162.816 72.704-162.816 162.816 72.704 162.816 162.816 162.816z"
                      fill="#FFFEFD"
                      p-id="3767"
                    ></path>
                  </svg>
                </div>
              </li>
              <li>
                <div class="content-left">个人简介</div>
                <div class="content-right">未填写</div>
              </li>
              <li>
                <div class="content-left">所在地区</div>
                <div class="content-right">未填写</div>
              </li>
              <li>
                <div class="content-left">出生日期</div>
                <div class="content-right">未填写</div>
              </li>
            </ul>
            <!-- 用户基础个人信息编辑按钮 -->
            <div class="edit-icon"><i class="el-icon-edit"></i>编辑</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 用户的基础信息结束 -->
    <!-- 用户的工作信息开始 -->
    <div class="job-info">
      <header>
        <span class="job-info-title">工作信息</span>
        <span class="job-info-cert">此处为工作认证，如果不做则删除</span>
      </header>
      <div class="job-info-content">
        <div class="job-content">
          <div class="edit-btn"><i class="el-icon-edit"></i>编辑</div>
          <ul>
            <li>
              <div class="content-title">公司名称</div>
              <div class="content-text">未填写</div>
            </li>
            <li>
              <div class="content-title">职位名称</div>
              <div class="content-text">Java工程师</div>
            </li>
            <li>
              <div class="content-title">所属行业</div>
              <div class="content-text">未选择</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 用户的工作信息结束 -->
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
              <div class="no-data">您还没有添加兴趣标签</div>
              <ul class="followed-tag-list">
                <li>
                  <el-tag
                    closable
                  >
                    DBA
                  </el-tag>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="tag-content-left">选择标签</div>
            <div class="tag-content-right">
              <ul class="tag-list">
                <li class="active">数据库管理</li>
                <li>算法</li>
                <li>后端开发</li>
              </ul>
              <ul class="tag-sub-list">
                <li class="followed">数据库开发</li>
                <li class>数据库架构</li>
                <li class>数据仓库</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 用户的兴趣信息结束 -->
  </div>
  <!-- 个人资料页结束 -->
</template>

<script>
export default {
  name: 'profile',
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
/* 个人资料页样式开始 */
.user-profile {
  min-width: 998px;
  -ms-flex-line-pack: justify;
  align-content: space-between;
}
/* 用户的基础信息样式开始 */
.user-info {
  margin-bottom: 16px;
  background: #fff;
}
.user-info .user-info-main {
  padding: 24px 0 40px 24px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.04);
}
.user-info-main .user-info-avatar {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: relative;
  width: 96px;
  height: 96px;
  margin-right: 16px;
  -webkit-box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.06);
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.06);
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
}
.user-info-avatar > img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}
.avatar-hover {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
}
.avatar-hover img {
  width: 32px;
  height: 32px;
}
.user-info-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.user-info-username {
  margin-bottom: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.username {
  color: #222226;
  font-weight: 500;
  line-height: 24px;
  font-size: 20px;
  margin-right: 16px;
}
.web-age {
  height: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
}
.web-age img {
  width: 22px;
  height: 22px;
  display: block;
}
.web-age span {
  padding: 0 6px 0 4px;
  font-size: 12px;
  display: block;
  height: 16px;
  line-height: 16px;
  text-align: center;
}
.user-info-content .user-info-vip.no-vip {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#efefef),
    to(#f9f9f9)
  );
  background: linear-gradient(90deg, #efefef, #f9f9f9);
}
.user-info-content .user-info-vip {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 32px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ffe3b2),
    to(#fff3de)
  );
  background: linear-gradient(90deg, #ffe3b2, #fff3de);
  border-radius: 4px;
  padding: 0 8px;
  font-size: 14px;
}
.user-info .user-info-other {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 48px;
  background: #fdfdfd;
  padding-left: 25px;
  font-size: 14px;
}
.coin {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.user-info-split {
  width: 1px;
  height: 16px;
  background: #ccccd8;
  margin: 0 32px;
}
.user-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #f2f2f2;
  color: #555666;
  height: 28px;
  border-radius: 16px;
  padding: 0 12px;
  cursor: pointer;
}
.user-btn a {
  color: inherit;
}
.base-info {
  width: 998px;
  padding: 24px 16px 16px;
  background: #fff;
  margin-bottom: 16px;
}
.base-info-head {
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: #2e2e2e;
  margin-bottom: 16px;
}
.base-info-content .info-content:hover {
  background: #f8f8f8;
}
.base-info-content .info-content {
  cursor: pointer;
  padding: 16px 112px 16px 0;
  position: relative;
}
.info-content ul li {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 32px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.info-content ul li .content-left {
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
.info-content ul li .content-right {
  color: #222226;
  word-break: break-all;
}
.info-content .edit-icon {
  display: block;
  position: absolute;
  top: 16px;
  right: 50px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #1989fa;
  font-size: 14px;
}
.info-content .edit-icon:hover {
  color: #409eff;
}
.info-content .edit-icon i {
  display: inline-block;
  margin-right: 5px;
  width: 16px;
  height: 16px;
  font-size: 18px;
  background-size: 16px 16px;
}
/* 用户的基础信息样式结束 */
/* 用户的工作信息样式开始 */
.job-info {
  background: #fff;
  width: 998px;
  padding: 0 16px 16px;
  margin-bottom: 16px;
}
.job-info header {
  width: 100%;
  height: 64px;
  padding-top: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.job-info-title {
  font-size: 18px;
  font-weight: 600;
  color: #2e2e2e;
}
.job-info-cert {
  width: 320px;
  height: 24px;
  background: rgba(252, 85, 49, 0.08);
  border-radius: 4px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 13px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fc5531;
  font-weight: 400;
  font-size: 13px;
  margin-left: 40px;
}
.job-content:hover {
  background: #f8f8f8;
}
.job-content {
  height: 168px;
  width: 100%;
  padding-top: 16px;
  cursor: pointer;
  position: relative;
}
.job-content .edit-btn {
  position: absolute;
  right: 50px;
  top: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.edit-btn .el-icon-edit {
  color: #7171fc;
  margin-right: 10px;
}
.job-content ul {
  width: 100%;
  height: 100%;
}
.job-content ul li {
  width: 100%;
  height: 56px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 400;
}
.content-title {
  display: inline-block;
  width: 72px;
  height: 24px;
  color: #555666;
  margin-right: 40px;
  text-align: right;
}
.content-text {
  color: #999aaa;
  height: 24px;
}
/* 用户的工作信息样式结束 */
/* 用户的兴趣信息开始 */
.interest-tag {
  width: 998px;
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
.tab-sublist .followed {
  border: 1px solid #fc5531 !important;
  color: #fc5531 !important;
  background: #fff5f2 !important;
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
/* 用户的兴趣信息结束 */
/* 个人资料页样式结束 */
</style>
