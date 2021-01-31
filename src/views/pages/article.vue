<template>
  <!-- 文章详情页面 -->
  <div class="main fill-bg">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">文章列表</el-breadcrumb-item>
      <el-breadcrumb-item>华为消费者管培求战友</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 文章主题内容开始 -->
    <div class="content">
      <!-- 文章内容 -->
      <div class="content-box">
        <div class="article-head fill-bg">
          <!-- 帖子标题 -->
          <h1 class="article-title">
            <svg
              t="1611475678291"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4703"
              width="22"
              height="22"
            >
              <path
                d="M705.402873 888.315415H384.330982a33.048604 33.048604 0 0 1-7.861637 13.064191l-112.606387 112.606386a34.138663 34.138663 0 0 1-48.276396 0c-7.547832-7.547832-10.355559-17.639135-9.348081-27.515729a21.949822 21.949822 0 0 1-1.420379-7.151447v-91.019917H91.039076A91.003401 91.003401 0 0 1 0.002643 797.278982V319.420287a91.036433 91.036433 0 0 1 91.036433-91.019917h614.380313a91.036433 91.036433 0 0 1 91.036433 91.019917v477.858695a91.069465 91.069465 0 0 1-91.052949 91.036433z m-102.399472-455.116102h-409.597886a34.138663 34.138663 0 0 0 0 68.260808h409.597886a34.138663 34.138663 0 0 0 0-68.260808z m0 159.280726h-409.597886a34.138663 34.138663 0 0 0 0 68.260809h409.597886a34.138663 34.138663 0 0 0 0-68.260809z"
                fill="#7171fc"
                p-id="4704"
              ></path>
              <path
                d="M807.835376 125.175096h-614.396829a91.003401 91.003401 0 0 0-90.474887 81.209387h615.189599a103.621659 103.621659 0 0 1 103.621658 103.621659v473.894844a91.003401 91.003401 0 0 0 77.080377-89.847278V216.195013a91.003401 91.003401 0 0 0-91.019918-91.019917z"
                fill="#7171fc"
                p-id="4705"
              ></path>
            </svg>
            <span>华为消费者管培求战友</span>
          </h1>
          <!-- 帖子的作者信息 -->
          <div class="article-author">
            <a href="#" class="article-author-avatar">
              <img src="@/assets/img/avatar.jpg" alt="帖子作者头像" />
            </a>
            <div class="article-detail">
              <span>
                <a href="#" class="article-author-name"> phantom </a>
              </span>
              <div class="article-other">
                <span class="article-time"> 编辑于 今天 11:26:04 </span>
                <span class="article-eq">
                  来自<a href="#" class="link-green">iOS客户端</a>
                </span>
                <div class="article-info">
                  <span style="cursor: pointer" class="article-like">
                    赞 0
                  </span>
                  <span class="article-pipe">|</span>
                  <span style="cursor: pointer" class="artcle-follow"
                    >收藏 0</span
                  >
                  <span class="article-pipe">|</span>
                  <span style="cursor: pointer" class="article-reply">
                    回复
                    <span class="article-num">5</span>
                  </span>
                  <span class="article-pipe">|</span>
                  <span>
                    浏览
                    <span class="article-num">345</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="article-main">
          <!-- article-content的内容由编辑器生成 -->
          <div class="article-content">
            英国渣硕一枚。1月7日接到华为电话改志愿消费者管培。1月11日收到测评链接。1月13日收到面试通知。1月15日通过3场面试。1月19日收到语言测试链接并完成。1月21号官网状态更新6个绿灯。
            状态码 Showstatus 6；Tnext 1 求同批次同学交流交流
          </div>
          <!-- 文章的赞、转发、评论 -->
          <div class="article-content-other fill-bg">
            <!-- 文章的标签列表 -->
            <ul class="article-content-tags"></ul>
            <!-- 文章的点赞、评论等 -->
            <ul class="article-content-tool">
              <li>
                <div class="content-tool-common">
                  <a href="#" class="content-tool-item">
                    <svg
                      t="1611483944540"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5580"
                      width="22"
                      height="22"
                    >
                      <path
                        d="M909.74094222 417.21742222h-253.76654222c98.33244445-363.16273778-67.75125333-381.70965333-67.75125333-381.70965333-70.39089778 0-55.79889778 55.65781333-61.11687112 64.93980444 0 177.60256-188.63900445 316.76529778-188.63900444 316.76529778v503.64984889c0 49.7152 67.75125333 67.62154667 94.33088 67.62154667h381.28184889c35.88209778 0 65.10478222-94.10446222 65.10478222-94.10446222 94.32519111-320.75207111 94.32519111-416.18659555 94.32519111-416.18659556 0.00113778-66.27214222-63.76789333-60.97464889-63.76789333-60.97464889v0 0zM909.74094222 417.21742222z"
                        fill="#1196db"
                        p-id="5581"
                      ></path>
                      <path
                        d="M234.31736889 417.38353778h-151.95363556c-31.38104889 0-31.86460445 30.8224-31.86460444 30.8224l31.38104889 507.95064889c0 32.33109333 32.38570667 32.33109333 32.38570667 32.33109333h131.51914666c27.39882667 0 27.15306667-21.38794667 27.15306667-21.38794667v-511.19900444c0-39.01098667-38.62186667-38.51832889-38.62186667-38.51832889v0 0zM234.31736889 417.38353778z"
                        fill="#1196db"
                        p-id="5582"
                      ></path>
                    </svg>
                    (0)
                  </a>
                </div>
              </li>
              <li>
                <div class="content-tool-common">
                  <a href="#" class="content-tool-item">
                    <svg
                      t="1611484956952"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="7061"
                      width="22"
                      height="22"
                    >
                      <path
                        d="M785.06666667 998.05866667c-10.92266667 0-23.66577778-3.64088889-34.58844445-9.10222222l-236.65777777-118.3288889-238.47822223 118.3288889c-23.66577778 12.74311111-54.61333333 10.92266667-76.45866667-5.46133334-21.84533333-16.384-34.58844445-45.51111111-29.1271111-72.81777778l49.152-254.86222222L31.40266667 481.05244445C11.37777778 461.02755555 4.096 430.08 11.37777778 404.59377778c9.10222222-27.30666667 30.94755555-47.33155555 60.07466667-50.97244445l260.32355555-47.33155555 116.50844445-236.65777778c12.74311111-25.48622222 38.22933333-41.87022222 65.536-41.87022222s54.61333333 16.384 65.536 41.87022222l116.50844444 236.65777778 260.32355556 45.51111111c27.30666667 3.64088889 50.97244445 23.66577778 58.25422222 50.97244444 9.10222222 27.30666667 1.82044445 56.43377778-18.20444445 76.45866667L808.73244445 655.81511111l47.33155555 254.86222222c5.46133333 29.12711111-7.28177778 56.43377778-29.12711111 72.81777778-10.92266667 9.10222222-25.48622222 14.56355555-41.87022222 14.56355556z"
                        fill="#7171fc"
                        p-id="7062"
                      ></path>
                    </svg>
                    (0)
                  </a>
                </div>
              </li>
              <li class="article-content-share">
                <div>
                  <a href="#" class="content-tool-item">
                    <svg
                      t="1611485401732"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3540"
                      width="22"
                      height="22"
                    >
                      <path
                        d="M752.91357235 342.02712494C429.0200968 351.86561581 157.29651358 568.7007763 65.3842963 864.76167902c157.2864-154.43841581 406.09665581-255.9302163 687.52927605-261.10836939V342.02712494z"
                        fill="#7171fc"
                        p-id="3541"
                      ></path>
                      <path
                        d="M939.19762963 542.16274173c16.05227457-16.18172839 16.05227457-42.59030914 0-58.77203754L586.8243121 129.46394075c-16.05227457-16.18172839-29.25656494-10.74466765-29.25656493 12.03920592V884.82702222c0 22.78387358 13.07483653 28.22093431 29.25656493 12.03920593l352.37331753-354.70348642z"
                        fill="#7171fc"
                        p-id="3542"
                      ></path>
                    </svg>
                    分享
                  </a>
                </div>
              </li>
              <li>
                <div style="width: 90px">
                  <a href="#" class="content-tool-item">
                    <svg
                      t="1611485686272"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4442"
                      width="22"
                      height="22"
                    >
                      <path
                        d="M835.9 98.2H190.2c-51 0-92.2 42.5-92.2 94.9V668c0 52.4 41.2 95 92.2 95h96.3l0.2 141.4c0 14.1 11.3 23.8 23.2 23.8 4.8 0 9.7-1.6 14.1-5.1L522.8 763h313.1c50.9 0 92.2-42.6 92.2-95V193.1c-0.1-52.5-41.3-94.9-92.2-94.9z m-80.8 484.1H270.9c-19 0-34.6-15.6-34.6-34.6 0-19.1 15.6-34.6 34.6-34.6h484.3c19 0 34.6 15.5 34.6 34.6-0.1 19-15.6 34.6-34.7 34.6z m0-207.4H270.9c-19 0-34.6-15.6-34.6-34.7 0-19 15.6-34.6 34.6-34.6h484.3c19 0 34.6 15.6 34.6 34.6 0 19.1-15.6 34.7-34.7 34.7z"
                        p-id="4443"
                        fill="#7171fc"
                      ></path>
                    </svg>
                    回复(5)
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 评论列表 -->
      <div class="content-box">
        <!-- 评论列表的头部 -->
        <div class="comment-head fill-bg">
          <h1><i class="el-icon-s-promotion" style="color: #7171fc"></i>
            4条回帖</h1>
          <!-- 回帖的排序方式 -->
          <div class="comment-list-sort">回帖的排序方式选择</div>
          <div class="comment-reply float-right">
            <el-button type="primary" icon="el-icon-edit">回帖</el-button>
          </div>
        </div>
        <!-- 评论列表的内容 -->
        <div class="comment-main fill-bg">
          <div class="comment-list">
            <!-- 评论列表的每一项 -->
            <div class="comment-list-item fill-bg">
              <div class="comment-content">
                <!-- 回帖者的头像 -->
                <a href="#" target="_blank" class="comment-user-avatar">
                  <img src="@/assets/img/avatar.jpg" alt="评论者头像" />
                </a>
                <div class="comment-detail">
                  <!-- 回帖者的用户名和楼层 -->
                  <p>
                    <a href="#" target="_blank" class="comment-username">phantom</a>
                    <span class="comment-floor">1#</span>
                  </p>
                  <!-- 回帖内容 -->
                  <div class="comment-detail-content">
                    不可以把单链表里面的数取出来变成arraylist然后快排吗？
                  </div>
                  <!-- 回帖时间、设备、以及回复、赞 -->
                  <div class="comment-eq">
                    <span class="comment-item-time">发表于 昨天 19:49:42</span>
                    <span
                      >来自<a href="#" class="link-green">iOS客户端</a></span
                    >
                    <a href="#">回复(1)</a>
                    <a href="#">赞(0)</a>
                    <a href="#">分享</a>
                  </div>
                  <!-- 针对于该条评论的回复 -->
                  <div class="comment-reply-list">
                    <!-- 该条评论的回复列表 -->
                    <div class="reply-list fill-bg">
                      <!-- 该条评论的回复列表的每一项 -->
                      <div class="reply-list-item">
                        <div class="reply-item-main">
                          <!-- 用户名 -->
                          <div
                            class="reply-item-user"
                            style="margin-right: 5px"
                          >
                            <a href="#">phantom</a>：
                          </div>
                          <!-- 回复内容 -->
                          <div class="reply-item-content">
                            字节不是9月份还在招嘛，我回来第一个就裸面的字节，给面试官都面笑了。。
                          </div>
                        </div>
                        <!-- 回复的时间  回复、赞 -->
                        <div class="comment-eq reply-item-info">
                          <span class="comment-item-time">昨天 22:53:38</span>
                          <a href="#">回复(0)</a>
                          <a href="#">赞(0)</a>
                        </div>
                        <!-- 点击回复后显示输入框 -->
                        <div style="display: block">
                          <div class="reply-edit">
                            <div class="reply-write">
                              <el-input
                                type="textarea"
                                autosize
                                placeholder="元芳，请问你怎么看呢"
                                v-model="replyContent"
                              >
                              </el-input>
                            </div>
                            <div class="reply-action">
                              <a href="#">
                                <svg
                                  t="1611544061407"
                                  class="icon"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  p-id="2566"
                                  width="25"
                                  height="25"
                                >
                                  <path
                                    d="M510.839571 4.351098c-277.514501 0-506.468007 228.952482-506.468007 508.780679 0 279.82922 228.952482 506.468007 506.468007 506.468006 279.828196 0 508.780679-226.637764 508.780678-506.468006 0.001023-279.828196-228.952482-508.780679-508.780678-508.780679z m0.060375 942.733115c-238.924601 0-434.007695-192.896288-434.007695-434.012811S271.976368 76.872808 510.899946 76.872808s436.205756 195.08207 436.205756 436.199617S749.824547 947.084213 510.899946 947.084213z"
                                    p-id="2567"
                                    fill="#7171fc"
                                  ></path>
                                  <path
                                    d="M314.266543 513.131777c27.751041 0 50.875714-39.312354 50.875715-85.567841 0-48.567135-23.124673-87.881536-50.875715-87.881537-27.752064 0-50.876738 37.005822-50.876737 85.567841v2.313696c0 46.255487 23.12365 85.567841 50.876737 85.567841zM510.839571 866.966501c134.134976 0 242.827491-108.692514 242.827491-242.827491H268.011057c0 134.134976 108.698654 242.827491 242.828514 242.827491zM707.413622 339.682399c-27.751041 0-50.875714 37.005822-50.875715 85.567841v2.313696c0 46.255487 23.124673 85.567841 50.875715 85.567841s50.881854-39.312354 50.881854-85.567841c0-48.567135-23.130813-87.881536-50.881854-87.881537z"
                                    p-id="2568"
                                    fill="#7171fc"
                                  ></path></svg
                              ></a>
                              <el-button
                                type="primary"
                                class="comment-reply reply-btn"
                                >回复</el-button
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="reply-list-item">
                        <div class="reply-item-main">
                          <div
                            class="reply-item-user"
                            style="margin-right: 5px"
                          >
                            <a href="#">phantom</a>
                            回复
                            <a href="#">phantom</a>：
                          </div>
                          <div class="reply-item-content">
                            字节不是9月份还在招嘛，我回来第一个就裸面的字节，给面试官都面笑了。。
                          </div>
                        </div>
                        <div class="comment-eq reply-item-info">
                          <span class="comment-item-time">昨天 22:53:38</span>
                          <a href="#">回复(0)</a>
                          <a href="#">赞(0)</a>
                        </div>
                        <div style="display: none">
                          <div class="reply-edit">
                            <div class="reply-write">
                              <el-input
                                type="textarea"
                                autosize
                                placeholder="元芳，请问你怎么看呢"
                                v-model="replyContent"
                              >
                              </el-input>
                            </div>
                            <div class="reply-action">
                              <a href="#">
                                <svg
                                  t="1611544061407"
                                  class="icon"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  p-id="2566"
                                  width="25"
                                  height="25"
                                >
                                  <path
                                    d="M510.839571 4.351098c-277.514501 0-506.468007 228.952482-506.468007 508.780679 0 279.82922 228.952482 506.468007 506.468007 506.468006 279.828196 0 508.780679-226.637764 508.780678-506.468006 0.001023-279.828196-228.952482-508.780679-508.780678-508.780679z m0.060375 942.733115c-238.924601 0-434.007695-192.896288-434.007695-434.012811S271.976368 76.872808 510.899946 76.872808s436.205756 195.08207 436.205756 436.199617S749.824547 947.084213 510.899946 947.084213z"
                                    p-id="2567"
                                    fill="#7171fc"
                                  ></path>
                                  <path
                                    d="M314.266543 513.131777c27.751041 0 50.875714-39.312354 50.875715-85.567841 0-48.567135-23.124673-87.881536-50.875715-87.881537-27.752064 0-50.876738 37.005822-50.876737 85.567841v2.313696c0 46.255487 23.12365 85.567841 50.876737 85.567841zM510.839571 866.966501c134.134976 0 242.827491-108.692514 242.827491-242.827491H268.011057c0 134.134976 108.698654 242.827491 242.828514 242.827491zM707.413622 339.682399c-27.751041 0-50.875714 37.005822-50.875715 85.567841v2.313696c0 46.255487 23.124673 85.567841 50.875715 85.567841s50.881854-39.312354 50.881854-85.567841c0-48.567135-23.130813-87.881536-50.881854-87.881537z"
                                    p-id="2568"
                                    fill="#7171fc"
                                  ></path></svg
                              ></a>
                              <el-button
                                type="primary"
                                class="comment-reply reply-btn"
                                >回复</el-button
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="reply-comment">
                      <div class="reply-edit">
                        <div class="reply-write">
                          <el-input
                            type="textarea"
                            autosize
                            placeholder="元芳，请问你怎么看呢"
                            v-model="replyContent"
                          >
                          </el-input>
                        </div>
                        <div class="reply-action">
                          <a href="#">
                            <svg
                              t="1611544061407"
                              class="icon"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              p-id="2566"
                              width="25"
                              height="25"
                            >
                              <path
                                d="M510.839571 4.351098c-277.514501 0-506.468007 228.952482-506.468007 508.780679 0 279.82922 228.952482 506.468007 506.468007 506.468006 279.828196 0 508.780679-226.637764 508.780678-506.468006 0.001023-279.828196-228.952482-508.780679-508.780678-508.780679z m0.060375 942.733115c-238.924601 0-434.007695-192.896288-434.007695-434.012811S271.976368 76.872808 510.899946 76.872808s436.205756 195.08207 436.205756 436.199617S749.824547 947.084213 510.899946 947.084213z"
                                p-id="2567"
                                fill="#7171fc"
                              ></path>
                              <path
                                d="M314.266543 513.131777c27.751041 0 50.875714-39.312354 50.875715-85.567841 0-48.567135-23.124673-87.881536-50.875715-87.881537-27.752064 0-50.876738 37.005822-50.876737 85.567841v2.313696c0 46.255487 23.12365 85.567841 50.876737 85.567841zM510.839571 866.966501c134.134976 0 242.827491-108.692514 242.827491-242.827491H268.011057c0 134.134976 108.698654 242.827491 242.828514 242.827491zM707.413622 339.682399c-27.751041 0-50.875714 37.005822-50.875715 85.567841v2.313696c0 46.255487 23.124673 85.567841 50.875715 85.567841s50.881854-39.312354 50.881854-85.567841c0-48.567135-23.130813-87.881536-50.881854-87.881537z"
                                p-id="2568"
                                fill="#7171fc"
                              ></path></svg
                          ></a>
                          <el-button
                            type="primary"
                            class="comment-reply reply-btn"
                            >回复</el-button
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-list-item fill-bg">
              <div class="comment-content">
                <!-- 回帖者的头像 -->
                <a href="#" target="_blank" class="comment-user-avatar">
                  <img src="@/assets/img/avatar.jpg" alt="评论者头像" />
                </a>
                <div class="comment-detail">
                  <!-- 回帖者的用户名和楼层 -->
                  <p>
                    <a href="#" target="_blank" class="comment-username">phantom</a>
                    <span class="comment-floor">1#</span>
                  </p>
                  <!-- 回帖内容 -->
                  <div class="comment-detail-content">
                    不可以把单链表里面的数取出来变成arraylist然后快排吗？
                  </div>
                  <!-- 回帖时间、设备、以及回复、赞 -->
                  <div class="comment-eq">
                    <span class="comment-item-time">发表于 昨天 19:49:42</span>
                    <span
                      >来自<a href="#" class="link-green">iOS客户端</a></span
                    >
                    <a href="#">回复(1)</a>
                    <a href="#">赞(0)</a>
                    <a href="#">分享</a>
                  </div>
                  <!-- 针对于该条评论的回复 -->
                  <div class="comment-reply-list">
                    <!-- 该条评论的回复列表 -->
                    <div class="reply-list fill-bg">
                      <!-- 该条评论的回复列表的每一项 -->
                      <div class="reply-list-item">
                        <div class="reply-item-main">
                          <!-- 用户名 -->
                          <div
                            class="reply-item-user"
                            style="margin-right: 5px"
                          >
                            <a href="#">phantom</a>：
                          </div>
                          <!-- 回复内容 -->
                          <div class="reply-item-content">
                            字节不是9月份还在招嘛，我回来第一个就裸面的字节，给面试官都面笑了。。
                          </div>
                        </div>
                        <!-- 回复的时间  回复、赞 -->
                        <div class="comment-eq reply-item-info">
                          <span class="comment-item-time">昨天 22:53:38</span>
                          <a href="#">回复(0)</a>
                          <a href="#">赞(0)</a>
                        </div>
                        <!-- 点击回复后显示输入框 -->
                        <div style="display: block">
                          <div class="reply-edit">
                            <div class="reply-write">
                              <el-input
                                type="textarea"
                                autosize
                                placeholder="元芳，请问你怎么看呢"
                                v-model="replyContent"
                              >
                              </el-input>
                            </div>
                            <div class="reply-action">
                              <a href="#">
                                <svg
                                  t="1611544061407"
                                  class="icon"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  p-id="2566"
                                  width="25"
                                  height="25"
                                >
                                  <path
                                    d="M510.839571 4.351098c-277.514501 0-506.468007 228.952482-506.468007 508.780679 0 279.82922 228.952482 506.468007 506.468007 506.468006 279.828196 0 508.780679-226.637764 508.780678-506.468006 0.001023-279.828196-228.952482-508.780679-508.780678-508.780679z m0.060375 942.733115c-238.924601 0-434.007695-192.896288-434.007695-434.012811S271.976368 76.872808 510.899946 76.872808s436.205756 195.08207 436.205756 436.199617S749.824547 947.084213 510.899946 947.084213z"
                                    p-id="2567"
                                    fill="#7171fc"
                                  ></path>
                                  <path
                                    d="M314.266543 513.131777c27.751041 0 50.875714-39.312354 50.875715-85.567841 0-48.567135-23.124673-87.881536-50.875715-87.881537-27.752064 0-50.876738 37.005822-50.876737 85.567841v2.313696c0 46.255487 23.12365 85.567841 50.876737 85.567841zM510.839571 866.966501c134.134976 0 242.827491-108.692514 242.827491-242.827491H268.011057c0 134.134976 108.698654 242.827491 242.828514 242.827491zM707.413622 339.682399c-27.751041 0-50.875714 37.005822-50.875715 85.567841v2.313696c0 46.255487 23.124673 85.567841 50.875715 85.567841s50.881854-39.312354 50.881854-85.567841c0-48.567135-23.130813-87.881536-50.881854-87.881537z"
                                    p-id="2568"
                                    fill="#7171fc"
                                  ></path></svg
                              ></a>
                              <el-button
                                type="primary"
                                class="comment-reply reply-btn"
                                >回复</el-button
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="reply-list-item">
                        <div class="reply-item-main">
                          <div
                            class="reply-item-user"
                            style="margin-right: 5px"
                          >
                            <a href="#">phantom</a>
                            回复
                            <a href="#">phantom</a>：
                          </div>
                          <div class="reply-item-content">
                            字节不是9月份还在招嘛，我回来第一个就裸面的字节，给面试官都面笑了。。
                          </div>
                        </div>
                        <div class="comment-eq reply-item-info">
                          <span class="comment-item-time">昨天 22:53:38</span>
                          <a href="#">回复(0)</a>
                          <a href="#">赞(0)</a>
                        </div>
                        <div style="display: none">
                          <div class="reply-edit">
                            <div class="reply-write">
                              <el-input
                                type="textarea"
                                autosize
                                placeholder="元芳，请问你怎么看呢"
                                v-model="replyContent"
                              >
                              </el-input>
                            </div>
                            <div class="reply-action">
                              <a href="#">
                                <svg
                                  t="1611544061407"
                                  class="icon"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  p-id="2566"
                                  width="25"
                                  height="25"
                                >
                                  <path
                                    d="M510.839571 4.351098c-277.514501 0-506.468007 228.952482-506.468007 508.780679 0 279.82922 228.952482 506.468007 506.468007 506.468006 279.828196 0 508.780679-226.637764 508.780678-506.468006 0.001023-279.828196-228.952482-508.780679-508.780678-508.780679z m0.060375 942.733115c-238.924601 0-434.007695-192.896288-434.007695-434.012811S271.976368 76.872808 510.899946 76.872808s436.205756 195.08207 436.205756 436.199617S749.824547 947.084213 510.899946 947.084213z"
                                    p-id="2567"
                                    fill="#7171fc"
                                  ></path>
                                  <path
                                    d="M314.266543 513.131777c27.751041 0 50.875714-39.312354 50.875715-85.567841 0-48.567135-23.124673-87.881536-50.875715-87.881537-27.752064 0-50.876738 37.005822-50.876737 85.567841v2.313696c0 46.255487 23.12365 85.567841 50.876737 85.567841zM510.839571 866.966501c134.134976 0 242.827491-108.692514 242.827491-242.827491H268.011057c0 134.134976 108.698654 242.827491 242.828514 242.827491zM707.413622 339.682399c-27.751041 0-50.875714 37.005822-50.875715 85.567841v2.313696c0 46.255487 23.124673 85.567841 50.875715 85.567841s50.881854-39.312354 50.881854-85.567841c0-48.567135-23.130813-87.881536-50.881854-87.881537z"
                                    p-id="2568"
                                    fill="#7171fc"
                                  ></path></svg
                              ></a>
                              <el-button
                                type="primary"
                                class="comment-reply reply-btn"
                                >回复</el-button
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="reply-comment">
                      <div class="reply-edit">
                        <div class="reply-write">
                          <el-input
                            type="textarea"
                            autosize
                            placeholder="元芳，请问你怎么看呢"
                            v-model="replyContent"
                          >
                          </el-input>
                        </div>
                        <div class="reply-action">
                          <a href="#">
                            <svg
                              t="1611544061407"
                              class="icon"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              p-id="2566"
                              width="25"
                              height="25"
                            >
                              <path
                                d="M510.839571 4.351098c-277.514501 0-506.468007 228.952482-506.468007 508.780679 0 279.82922 228.952482 506.468007 506.468007 506.468006 279.828196 0 508.780679-226.637764 508.780678-506.468006 0.001023-279.828196-228.952482-508.780679-508.780678-508.780679z m0.060375 942.733115c-238.924601 0-434.007695-192.896288-434.007695-434.012811S271.976368 76.872808 510.899946 76.872808s436.205756 195.08207 436.205756 436.199617S749.824547 947.084213 510.899946 947.084213z"
                                p-id="2567"
                                fill="#7171fc"
                              ></path>
                              <path
                                d="M314.266543 513.131777c27.751041 0 50.875714-39.312354 50.875715-85.567841 0-48.567135-23.124673-87.881536-50.875715-87.881537-27.752064 0-50.876738 37.005822-50.876737 85.567841v2.313696c0 46.255487 23.12365 85.567841 50.876737 85.567841zM510.839571 866.966501c134.134976 0 242.827491-108.692514 242.827491-242.827491H268.011057c0 134.134976 108.698654 242.827491 242.828514 242.827491zM707.413622 339.682399c-27.751041 0-50.875714 37.005822-50.875715 85.567841v2.313696c0 46.255487 23.124673 85.567841 50.875715 85.567841s50.881854-39.312354 50.881854-85.567841c0-48.567135-23.130813-87.881536-50.881854-87.881537z"
                                p-id="2568"
                                fill="#7171fc"
                              ></path></svg
                          ></a>
                          <el-button
                            type="primary"
                            class="comment-reply reply-btn"
                            >回复</el-button
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 回帖 -->
      <div class="content-box reply-post">
        <div class="publish-comment focus">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2}"
            placeholder="请输入你想要回帖的内容"
            v-model="commentContent"
          >
          </el-input>
          <div class="publish-tool-bar">
            <div class="publish-tool-item">
              <i class="el-icon-picture"></i>图片
            </div>
            <div class="publish-tool-item">
              <i class="el-icon-chat-line-round"></i>话题
            </div>
            <div class="publish-tool-item">
              <svg
                t="1611544061407"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2566"
                width="20"
                height="20"
              >
                <path
                  d="M510.839571 4.351098c-277.514501 0-506.468007 228.952482-506.468007 508.780679 0 279.82922 228.952482 506.468007 506.468007 506.468006 279.828196 0 508.780679-226.637764 508.780678-506.468006 0.001023-279.828196-228.952482-508.780679-508.780678-508.780679z m0.060375 942.733115c-238.924601 0-434.007695-192.896288-434.007695-434.012811S271.976368 76.872808 510.899946 76.872808s436.205756 195.08207 436.205756 436.199617S749.824547 947.084213 510.899946 947.084213z"
                  p-id="2567"
                  fill="#7171fc"
                ></path>
                <path
                  d="M314.266543 513.131777c27.751041 0 50.875714-39.312354 50.875715-85.567841 0-48.567135-23.124673-87.881536-50.875715-87.881537-27.752064 0-50.876738 37.005822-50.876737 85.567841v2.313696c0 46.255487 23.12365 85.567841 50.876737 85.567841zM510.839571 866.966501c134.134976 0 242.827491-108.692514 242.827491-242.827491H268.011057c0 134.134976 108.698654 242.827491 242.828514 242.827491zM707.413622 339.682399c-27.751041 0-50.875714 37.005822-50.875715 85.567841v2.313696c0 46.255487 23.124673 85.567841 50.875715 85.567841s50.881854-39.312354 50.881854-85.567841c0-48.567135-23.130813-87.881536-50.881854-87.881537z"
                  p-id="2568"
                  fill="#7171fc"
                ></path>
              </svg>
              表情
            </div>
          </div>
          <div class="publish">
            <el-button type="primary">回帖</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 文章主题内容结束 -->
  </div>
</template>

<script>
export default {
  name: 'article',
  data () {
    return {
      replyContent: '',
      commentContent: ''
    }
  }
}
</script>

<style lang="less" scoped>
/* 文章详情页面全局样式开始 */
.main {
  margin: 0 auto;
  width: 1000px;
  padding: 90px 0px 250px;
  display: block;
}
/* 文章主题内容样式开始 */
.content {
  float: left;
  width: 690px;
  margin: 20px 10px 0 0;
}
.content-box {
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  margin-bottom: 10px;
  background: #fff;
}
/* 文章内容样式开始 */
.article-head {
  border-bottom: 1px solid #ddd;
  line-height: 1.5;
  padding: 20px;
}
.article-title {
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  padding-left: 0px;
  margin-bottom: 20px;
}
.article-title svg {
  float: left;
  margin-right: 5px;
}
.article-title > a,
.article-title > span {
  vertical-align: text-bottom;
}
.article-author {
  display: block;
  zoom: 1;
}
.article-author-avatar {
  display: block;
  float: left;
  width: 50px;
  height: 50px;
  border: 1px solid #ededed;
  overflow: hidden;
  margin-right: 15px;
  border-radius: 50%;
}
.article-author-avatar img {
  width: 100%;
  display: block;
}
.article-detail .article-author-name {
  // color: #999;
  color: #418ac3 !important;
  display: inline-block;
  vertical-align: text-top;
  margin-bottom: 10px;
  max-width: 13em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.article-other {
  text-align: right;
}
.article-time {
  color: #999;
  font-size: 12px;
  float: left;
}
.article-eq {
  margin-left: 10px;
  float: left;
  color: #a6a6a6;
}
.article-info {
  float: right;
  color: #999;
}
.article-pipe {
  padding: 0 5px;
}
.article-num {
  padding-left: 5px;
}
.article-main {
  padding: 20px;
  font-size: 14px;
}
.article-content {
  margin-bottom: 20px;
  line-height: 1.8;
  font-size: 14px;
  color: black;
}
.article-content-tags {
  font-size: 14px;
}
.article-content-tool {
  width: 100%;
  font-size: 14px;
  margin-top: 10px;
  float: left;
  display: block;
  zoom: 1;
}
.article-content-tool li {
  float: left;
  margin-bottom: 10px;
  line-height: 40px;
}
.article-content-tool .content-tool-common {
  width: 77px;
  background-color: rgba(0, 0, 0, 0.05);
}
.article-content-tool div {
  width: 55px;
  height: 40px;
  border-radius: 6px;
  text-align: center;
}
.article-content-tool a:hover {
  color: #25bb9b;
}
.content-tool-item svg {
  position: relative;
  top: 5px;
}
.content-tool-item {
  width: 100%;
  display: inline-block;
  color: #888;
}
.article-content-tool li + li {
  padding-left: 40px;
}
/* 文章内容样式结束 */
/* 文章评论样式开始 */
.comment-head {
  padding: 15px 20px 0;
  line-height: normal;
  position: relative;
}
.comment-head h1 {
  font-size: 16px;
  line-height: 16px;
  float: left;
  font-weight: 600;
  white-space: nowrap;
}
.comment-head .comment-list-sort {
  position: relative;
  z-index: 2;
  left: 20px;
  top: -8px;
  display: inline-block;
  vertical-align: top;
}
.comment-reply {
  display: inline-block;
  text-align: center;
  padding: 0px;
  width: 110px;
  color: #fff;
  font-size: 14px;
  border-radius: 3px;
  border: none 0;
  cursor: pointer;
  line-height: normal;
  outline: 0;
  white-space: nowrap;
}
.comment-main {
  padding: 20px;
}
.comment-list div.comment-list-item {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  position: relative;
  padding-top: 15px;
}
.comment-list .comment-list-item:last-child {
  border: 0;
}
.comment-content {
  width: 100%;
  float: right;
}
.comment-user-avatar {
  display: block;
  float: left;
  width: 50px;
  height: 50px;
  border: 1px solid #ededed;
  overflow: hidden;
  margin-right: 15px;
  border-radius: 50%;
}
.comment-user-avatar img {
  width: 100%;
  display: block;
  border: 0;
}
.comment-detail {
  margin-left: 65px;
  line-height: 1em;
}
.comment-detail p {
  margin-bottom: 5px;
}
.comment-username {
  color: #f34c54 !important;
}
.comment-floor {
  padding: 1px 12px;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  background: #dcdadc;
  float: right;
}
.comment-detail-content {
  font-size: 14px;
  line-height: 1.8;
}
.comment-eq {
  margin-top: 10px;
  color: #999;
  font-size: 12px;
  line-height: 20px;
}
.comment-eq > a {
  float: right;
  color: #21a88b;
  margin-left: 12px;
}
.comment-reply-list {
  padding: 15px;
  margin: 15px 0 0;
  background: #eff0f2;
  border-radius: 4px;
}
.reply-list {
  margin: 0;
}
.reply-list .reply-list-item {
  line-height: 1.5;
}
.reply-list .reply-list-item + .reply-list-item {
  border-top: 1px solid #e0e0e0;
  padding-top: 10px;
  margin-top: 10px;
}
.reply-item-main {
  margin-bottom: 10px;
}
.reply-item-user {
  margin-right: 15px;
  display: inline;
  white-space: nowrap;
}
.reply-item-user a {
  color: #999;
  max-width: 13em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
}
.reply-item-content {
  color: #666;
  display: inline;
  line-height: 2;
  vertical-align: middle;
}
.reply-comment {
  margin-top: 10px;
}
.reply-comment {
  position: relative;
  padding-top: 15px;
  margin-bottom: 0;
}
.reply-edit {
  position: relative;
  padding-top: 15px;
  margin-bottom: 0;
}
.reply-edit .reply-action {
  margin: 10px 0px 0px 10px;
}
.reply-edit .reply-btn {
  width: 75px;
  height: 30px;
  line-height: 30px;
  padding: 0;
  float: right;
}
/* 文章评论样式结束 */
/* 帖子评论样式开始 */
.content-box:last-child {
  margin-bottom: 0;
}
.reply-post {
  background-color: rgb(255, 255, 255);
}
.publish-comment {
  padding: 15px;
  position: relative;
}
.publish-comment.focus textarea {
  color: inherit;
}
.publish-comment textarea {
  width: 98%;
  padding: 1%;
  height: 40px;
  color: #7f7f7f;
  border: none;
  resize: none;
}
.publish-tool-bar {
  margin-top: 10px;
  font-size: 14px;
  padding: 0;
}
.publish-tool-bar .publish-tool-item {
  color: #7f7f7f;
  margin-right: 15px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
}
.publish-tool-bar .publish-tool-item > i {
  font-size: 22px;
  height: 22px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: bottom;
  color: #7171fc;
}
.publish-tool-item svg {
  position: relative;
  top: 3px;
}
.publish-comment.focus .publish {
  display: block;
}
.publish {
  position: absolute;
  display: none;
  right: 15px;
  bottom: 5px;
}
/* 帖子评论样式结束 */
/* 文章主题内容样式结束 */
/* 文章详情页面全局样式结束 */
</style>
