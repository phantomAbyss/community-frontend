<template>
  <el-dialog
    title="提示"
    :visible.sync="value"
    width="30%"
    :before-close="handleClose"
    class="log-dialog"
  >
    <!-- 提示框 -->
    <p class="warn_tip" v-if="show">若发现异常登录，请尽快修改密码</p>
    <!-- <span>这是登录日志的查看框</span> -->
    <el-table :data="logList" style="width: 120%" border v-if="logList.length">
      <el-table-column prop="loginTime" label="登录时间" width="140">
      </el-table-column>
      <el-table-column prop="loginPlace" label="登录位置" width="150">
      </el-table-column>
      <el-table-column prop="loginIp" label="登录IP" width="130">
      </el-table-column>
    </el-table>
    <!-- 分页功能 -->
    <nav style="text-align: center">
      <!-- nav标签是为了使分页插件居中 -->
      <div class="pagination" v-if="logCount > pageSize">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="logCount"
          :page-size="pageSize"
          :current-page.sync="currentPage"
          @current-change="changePage"
        >
        </el-pagination>
      </div>
    </nav>
    <!-- 空白显示栏 -->
    <div class="log_list" v-if="!show">
      <!-- <img :src="defaultImg"> -->
      <div class="blank_tips">空空如也</div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="offDialog">取 消</el-button>
      <!-- <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
    </span>
  </el-dialog>
</template>

<script>
import accountApi from "@/common/service/user/account";

export default {
  name: "log",
  props: {
    /* 收集编辑对话框是否显示 */
    value: {
      default: true,
    },
  },
  data() {
    return {
      /* 总的记录数 */
      logCount: 0,
      /* 页的大小 */
      pageSize: 5,
      /* 当前页码 */
      currentPage: 1,
      /* 日志记录集合 */
      logList: [],
      show: true,
    };
  },
  created() {
    this.getLogList(this.currentPage, this.pageSize);
  },
  methods: {
    /* 分页变化后 */
    changePage(val) {
      this.currentPage = val;
      //获取新的数据
      this.getLogList(this.currentPage, this.pageSize);
    },
    /* 获取日志记录 */
    getLogList(page, size) {
      accountApi
        .getLogList(page, size)
        .then((res) => {
          /* 登录的总数 */
          this.logCount = Number(res.data.countNum) || 0;
          if (this.logCount === 0) {
            this.show = false;
            return false;
          }
          /* 登录的数据 */
          this.logList = res.data.items || [];
          if (this.logList.length) {
            this.logList = this.logList.map((item, index) => {
              item.index = index;
              return item;
            });
          }
        })
        .catch((err) => {
          this.$message({
            message: err.message || "接口异常",
            type: "error",
            center: true,
            customClass: "common_tip",
          });
        });
    },
    /* 关闭收集编辑框 */
    offDialog() {
      setTimeout(() => {
        this.$emit("input", false);
      }, 200);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          this.offDialog();
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style lang="less" scoped>
/* 登录记录样式开始 */
.log-dialog {
  /* 警告部分的样式 */
  .warn_tip {
    position: relative;
    left: 2px;
    top: -15px;
  }
  /* 对话框内容样式 */
  /deep/ .el-dialog__body {
    padding: 20px 20px 0px;
  }
  /* 表格样式开始 */
  /deep/ .el-table {
    .cell {
      text-align: center;
    }
  }
  /* 表格样式结束 */
  /* 分页样式开始 */
  .pagination {
    position: relative;
    /deep/ .el-pagination {
      margin-top: 18px;
    }
  }
  /* 分页样式结束 */
}
/* 消息提示框的样式开始 */
.common_tip {
  background: rgba(15, 15, 15, 0.8) !important;
  border-radius: 4px !important;
  min-width: 0 !important;
  // width 136px
  height: 32px !important;
  .el-message__content {
    font-size: 12px !important;
    color: #ffffff !important;
  }
  .el-message__icon {
    display: none !important;
  }
}
/* 消息提示框的样式结束 */
/* 登录记录样式结束 */
</style>