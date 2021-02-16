<template>
  <!-- 用户的工作信息开始 -->
  <div class="job-info">
    <header>
      <span class="job-info-title">工作信息</span>
      <!-- <span class="job-info-cert">此处为工作认证，如果不做则删除</span> -->
    </header>
    <div class="job-info-content">
      <!-- 工作内容展示 -->
      <div class="job-content" v-if="!isEdit" @click="edit">
        <div class="edit-btn"><i class="el-icon-edit"></i>编辑</div>
        <ul>
          <li>
            <div class="content-title">公司名称</div>
            <div class="content-text" :class="{ 'has-val': !!jobForm.company }">
              {{ jobForm.company || "未填写" }}
            </div>
          </li>
          <li>
            <div class="content-title">职位名称</div>
            <div
              class="content-text"
              :class="{ 'has-val': !!jobForm.position }"
            >
              {{ jobForm.position || "未填写" }}
            </div>
          </li>
          <li>
            <div class="content-title">所属行业</div>
            <div class="content-text" :class="{ 'has-val': !!jobForm.company }">
              {{ jobVal || "未填写" }}
            </div>
          </li>
        </ul>
      </div>
      <!-- 工作编辑 -->
      <div class="edit-content" v-else>
        <el-form ref="jobForm" :model="updateJob" :rules="jobRules">
          <el-row class="form-item-row">
            <div>
              <span class="form-item-title">公司名称</span>
              <el-form-item prop="company">
                <el-input
                  v-model="updateJob.company"
                  placeholder="请填写 例如：CSDN"
                ></el-input>
              </el-form-item>
            </div>
            <div>
              <span class="form-item-title">职位名称</span>
              <el-form-item prop="position">
                <el-input
                  v-model="updateJob.position"
                  placeholder="请填写 例如：高级算法工程师"
                ></el-input>
              </el-form-item>
            </div>
            <div>
              <span class="form-item-title">所属行业</span>
              <el-select v-model="updateJob.industry" placeholder="请选择">
                <el-option
                  v-for="item in jobOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </div>
          </el-row>
          <!-- <el-row class="form-edu-row">
            <div>
              <span class="form-item-title">所属行业</span>
              <el-select v-model="updateJob.industry" placeholder="请选择">
                <el-option
                  v-for="item in jobOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </div>
          </el-row> -->
          <el-row class="form-footer">
            <el-button
              round
              size="small"
              class="edit-btn-cancel"
              @click="cancelEdit"
              >取消</el-button
            >
            <el-button
              round
              type="primary"
              size="small"
              class="edit-btn-save"
              @click="update('jobForm')"
              >保存</el-button
            >
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
  <!-- 用户的工作信息结束 -->
</template>

<script>
import profileService from "@/common/service/user/profile";
import { getUser } from "@/common/utils/auth";
export default {
  name: "jobInfo",
  data() {
    return {
      /* 是否处于编辑状态 */
      isEdit: false,
      /* 工作的展示信息 */
      jobForm: {
        company: "",
        position: "",
        industry: "",
        status: "",
      },
      /* 工作的更新信息 */
      updateJob: {
        company: "",
        position: "",
        industry: "",
        status: "",
      },
      /* 工作的种类 */
      jobOptions: [],
      jobRules: {
        company: [
          {
            required: true,
            message: "请填写公司名称（常用名或营业执照名称）",
            trigger: "blur",
          },
          {
            min: 2,
            max: 30,
            message: "公司名称长度为 2-30 个字符",
            trigger: "blur",
          },
        ],
        position: [
          { required: true, message: "请填写职位名称", trigger: "blur" },
          {
            min: 2,
            max: 30,
            message: "职位名称长度为 2- 30 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    jobVal() {
      for (let i = 0; i < this.jobOptions.length; ++i) {
        if (this.jobForm.industry === this.jobOptions[i].id) {
          return this.jobOptions[i].name;
        }
      }
    }
  },
  methods: {
    /* 编辑按钮 */
    edit() {
      this.isEdit = true;
    },
    /* 取消编辑 */
    cancelEdit() {
      this.isEdit = false;
    },
    /* 更新工作信息 */
    update(formName) {
      profileService.updateJobInfo({
        company: this.jobForm.company,
        position: this.jobForm.position,
        industry: this.jobForm.industry
      }).then(res => {
        console.log("修改工作信息：" + res);
        let data = res.data;
        if (data.code == 200) {
          //回显显示框和编辑框的数据
          this.jobForm = data.data;
          this.updateJob = data.data;
          //隐藏编辑框，只显示显示框
          this.isEdit = false;
          this.$message({
                message: "工作信息修改成功",
              });
        } else {
          this.$message("error", data.msg || "接口异常");
        }
      }).catch(error => {
        if (error.data) {
          this.$message.error(error.data.msg);
        }
      })
    },
    /* 获取工作信息 */
    getJobInfo() {
      profileService.getJobInfo(getUser().name).then((res) => {
        let data = res.data;
        if (data.code == 200) {
          this.jobForm = data.data;
          this.updateJob = data.data;
          if (this.jobForm.industry === 0 || this.jobForm.industry === null) {
            this.jobForm.industry = "";
          }
        }
      });
    },
    /* 获取行业信息 */
    getJobList() {
      profileService.getJobList().then(res => {
        let data = res.data;
        if (data.code == 200) {
          this.jobOptions = data.data;
        }
      })
    }
  },
  mounted() {
    this.getJobList();
    this.getJobInfo();
  },
};
</script>

<style lang="less" scoped>
/* 用户的工作信息样式开始 */
.job-info {
  background: #fff;
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
.job-content:hover .edit-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.job-content .edit-btn {
  position: absolute;
  right: 50px;
  top: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #1989fa;
}
.job-content .edit-btn:hover {
  margin-left: 2px;
  color: #409eff;
  font-size: 14px;
  font-weight: 400;
}
.edit-btn .el-icon-edit {
  color: #7171fc;
  margin-right: 5px;
  font-size: 18px;
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
.has-val {
  color: #222226;
}
/* 用户工作信息的编辑框样式开始 */
.edit-content {
  background: #f8f8f8;
  padding: 24px 40px;
  position: relative;
  .el-form {
    .el-input {
      width: 200px;
      height: 40px;
    }
    /deep/ .el-select {
      width: 200px;
      height: 40px;
      .el-input {
        width: 200px;
        height: 40px;
      }
    }
    /deep/ .el-form-item__content {
      display: flex;
      flex-direction: column;
    }
    .form-item-row {
      display: flex;
      div {
        display: flex;
        flex-direction: column;
        .el-input {
          margin-right: 48px;
        }
      }
    }
    /* .form-edu-row {
      display: flex;
      div {
        display: flex;
        flex-direction: column;
      }
    } */
    .form-item-title {
      color: #555666;
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 8px;
    }
    .form-footer {
      margin-top: 24px;
      display: flex;
      justify-content: center;
      /deep/ button {
        padding: 5px 26px;
        span {
          font-size: 14px;
          line-height: 20px;
          display: inline-block;
        }
      }
      .edit-btn-cancel {
        color: #7171fc;
        border: 1px solid #7171fc;
        &:hover {
          background-color: #fff5f2;
        }
      }
      .edit-btn-save {
        background-color: #7171fc;
        border-color: #7171fc;
        &:hover {
          background-color: #8137e2;
        }
      }
    }
  }
}
/* 用户工作信息的编辑框样式结束 */
/* 用户的工作信息样式结束 */
</style>