<template>
  <!-- 基础信息内容开始 -->
  <div class="base-info">
    <div class="base-info-head">基本信息</div>
    <div class="base-info-content">
      <!-- 基本信息的展示 -->
      <div class="info-content" v-if="!isEdit" @click="edit">
        <!-- 用户的基础个人信息 -->
        <ul>
          <li>
            <div class="content-left">用户昵称</div>
            <div class="content-right">{{ baseInfo.nickname }}</div>
          </li>
          <li>
            <div class="content-left">
              <span>用</span>
              <span>户</span>
              <span>ID</span>
            </div>
            <div class="content-right">{{ baseInfo.id }}</div>
          </li>
          <li>
            <div class="content-left">真实姓名</div>
            <div
              class="content-right"
              :class="{ 'no-data': !baseInfo.realName }"
            >
              {{ baseInfo.realName || "未填写" }}
            </div>
          </li>
          <li>
            <div class="content-left"><span>性</span><span>别</span></div>
            <div class="content-right">
              <svg
                v-if="baseInfo.gender === 1"
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
                v-else
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
            <div
              class="content-right"
              :class="{ 'no-data': !baseInfo.introduce }"
            >
              {{ baseInfo.introduce || "未填写" }}
            </div>
          </li>
          <li>
            <div class="content-left">所在地区</div>
            <div
              class="content-right"
              :class="{
                'no-data': !baseInfo.province.name && !baseInfo.city.name,
              }"
            >
              {{
                baseInfo.province.name || baseInfo.city.name
                  ? `${baseInfo.province.name}-${baseInfo.city.name}`
                  : "未选择"
              }}
            </div>
          </li>
          <li>
            <div class="content-left">出生日期</div>
            <div
              class="content-right"
              :class="{ 'no-data': !baseInfo.birthday }"
            >
              {{ baseInfo.birthday ? formatTime(baseInfo.birthday) : "未设置" }}
            </div>
          </li>
          <li>
            <div class="content-left">开始工作</div>
            <div
              class="content-right"
              :class="{ 'no-data': !baseInfo.startWork }"
            >
              {{
                baseInfo.startWork
                  ? formatTime(baseInfo.startWork, "YYYY-MM")
                  : "未选择"
              }}
            </div>
          </li>
        </ul>
        <!-- 用户基础个人信息编辑按钮 -->
        <div class="edit-icon"><i class="el-icon-edit"></i>编辑</div>
      </div>
      <!-- 基本信息的修改界面 -->
      <div class="info-content-edit" v-else>
        <el-form
          :model="updatebaseInfo"
          :rules="rules"
          ref="updateForm"
          hide-required-asterisk
          inline
          label-position="top"
          class="info-content-edit-form"
        >
          <el-form-item label="用户昵称" prop="nickname" class="edit-nickname">
            <el-input
              v-model="updatebaseInfo.nickname"
              placeholder="请输入昵称"
              :disabled="!!updatebaseInfo.modifyTime"
            ></el-input>
            <div class="edit-nickname-info">
              <span>每月仅支持修改 1 次</span>
              <span v-if="updatebaseInfo.modifyTime">
                ｜
                {{ formatTime(updatebaseInfo.modifyTime) }} 可再次修改</span
              >
            </div>
          </el-form-item>
          <el-form-item label="用户ID" prop="userId">
            <el-input v-model="updatebaseInfo.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="realName">
            <el-input
              v-model="updatebaseInfo.realName"
              :disabled="!updatebaseInfo.nameModify"
            ></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender" class="edit-gender">
            <el-radio v-model="updatebaseInfo.gender" :label="1" border
              >男</el-radio
            >
            <el-radio v-model="updatebaseInfo.gender" :label="2" border
              >女</el-radio
            >
          </el-form-item>
          <el-form-item label="出生日期" prop="birthday">
            <el-date-picker
              v-model="updatebaseInfo.birthday"
              type="date"
              value-format="timestamp"
              placeholder="请设置您的出生日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="开始工作" prop="startWork">
            <el-date-picker
              v-model="updatebaseInfo.startWork"
              type="month"
              value-format="timestamp"
              placeholder="请选择你开始工作的时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="所在地区" prop="area">
            <el-cascader
              :props="areaProps"
              v-model="updatebaseInfo.area"
              placeholder="请选择地区"
            ></el-cascader>
          </el-form-item>
          <el-form-item
            label="个人简介"
            prop="introduce"
            class="edit-introduce"
          >
            <el-input
              type="textarea"
              v-model="updatebaseInfo.introduce"
              :maxlength="300"
              resize="none"
              placeholder="你很懒，还没有添加简介"
            ></el-input>
          </el-form-item>
          <el-form-item class="edit-btn">
            <el-button
              round
              size="small"
              class="edit-btn-cancel"
              @click="cancelEdit"
              >取消</el-button
            >
            <el-button
              type="primary"
              size="small"
              class="edit-btn-save"
              round
              @click="update"
              >保存</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  <!-- 基础信息内容结束 -->
</template>

<script>
import profileService from "@/common/service/user/profile";
import moment from "moment";

export default {
  name: "baseInfo",
  props: ["baseInfo"],
  data() {
    return {
      //基本信息编辑框是否开启
      isEdit: false,
      //基本框的编辑数据
      updatebaseInfo: {
        userId: "",
        nickname: "",
        realName: "",
        gender: 1,
        introduce: "",
        area: [],
        birthday: "",
        startWork: "",
        modifyTime: null,
        nameModify: true,
      },
      rules: {
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "昵称长度需在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
        realName: [
          {
            pattern: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
            message: "请输入正确的姓名",
            trigger: "blur",
          },
        ],
        startWork: [
          {
            validator: (rule, value, callback) => {
              if (value && this.updatebaseInfo.birthday) {
                if (value < this.updatebaseInfo.birthday) {
                  callback(new Error("您这是从娘胎里面就开始工作了吗(•ิ_•ิ)?"));
                } else {
                  callback();
                }
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      },
      areaProps: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level, root, value } = node;
          if (root) {
            // 获取省的数据
            profileService.getProvinceList().then((res) => {
              let data = res.data;
              if (data.code === 200) {
                let nodes = data.data.map((item) => {
                  return {
                    value: item.id,
                    label: item.name,
                    leaf: level >= 1,
                  };
                });
                resolve(nodes);
              }
            });
          } else {
            // 获取市数据
            profileService.getCityList(value).then((res) => {
              let data = res.data;
              if (data.code === 200) {
                let nodes = data.data.map((item) => {
                  return {
                    value: item.id,
                    label: item.name,
                    leaf: level >= 1,
                  };
                });
                resolve(nodes);
              }
            });
          }
        },
      },
    };
  },
  methods: {
    /* 提交修改的基础信息 */
    update() {
      this.$refs.updateForm.validate((valid) => {
        if (valid) {
          // 重新拼编辑需要的数据
          let data = Object.assign({}, this.updatebaseInfo);
          data.provinceId = data.area[0];
          data.cityId = data.area[1];
          delete data.id;
          delete data.area;
          delete data.modifyTime;
          delete data.nameModify;
          /* 调用更新函数 */
          profileService.updateBaseInfo(data).then((res) => {
            let data = res.data;
            if (data.code === 200) {
              this.$emit('update', data.data)
              this.isEdit = false;
              this.$message({
                message: "基础信息修改成功",
              });
            } else {
              this.$message.error(data.msg || "接口异常");
            }
          });
        } else {
          return false;
        }
      });
    },
    // 进入到编辑页面
    edit() {
      this.isEdit = true;
    },
    /* 取消编辑 */
    cancelEdit() {
      this.isEdit = false;
    },
    // 设置编辑的baseInfo
    setUpdateBaseInfoData() {
      let result = Object.assign({}, this.baseInfo);
      result.area =
        result.province.name && result.city.name
          ? [result.province.id, result.city.id]
          : [];
      delete result.province;
      delete result.city;
      this.updatebaseInfo = result;
    },
    /* 格式化时间 */
    formatTime(timestamp, format = "YYYY-MM-DD") {
      return moment(timestamp).format(format);
    },
  },
};
</script>

<style lang="less" scoped>
/* 基础信息内容样式开始 */
.base-info {
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
/* 基础信息内容显示样式开始 */
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
.info-content:hover .edit-icon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.info-content .edit-icon {
  display: none;
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
/* 基础信息内容显示样式结束 */
/* 基础信息内容修改样式开始 */
.info-content-edit {
  padding: 24px 40px;
  background: #f8f8f8;
  .info-content-edit-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-form-item {
      width: 200px;
      margin-right: 0;
      margin-bottom: 24px;
      /deep/ .el-form-item__label {
        line-height: 16px;
        padding-bottom: 8px;
      }
      /deep/ .el-form-item__content {
        .el-date-editor.el-input,
        .el-date-editor.el-input__inner,
        .el-cascader {
          width: 100%;
        }
      }
    }
    .edit-nickname {
      width: 100%;
      /deep/ .el-form-item__content {
        display: flex;
        .el-input {
          width: 200px;
        }
        .edit-nickname-info {
          margin-left: 48px;
          color: #fc5531;
        }
      }
    }
    .edit-gender {
      /deep/ .el-form-item__content {
        display: flex;
        .is-checked {
          background: #fff;
        }
        & > label {
          width: 201px;
          text-align: center;
          margin-right: 17px;
          .el-radio__label {
            line-height: 14px !important;
          }
          &:nth-last-child(1) {
            margin-right: 0;
            margin-left: 0;
          }
          span.el-radio__input {
            display: none;
          }
        }
      }
    }
    .edit-introduce {
      width: 100%;
      /deep/ textarea {
        height: 80px;
      }
    }
    .edit-btn {
      width: 100%;
      text-align: center;
      margin-bottom: 0;
      /deep/ .el-form-item__content {
        line-height: 32px;
        display: flex;
        justify-content: center;
        button {
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
          margin-left: 16px;
          &:hover {
            background-color: #8137e2;
          }
        }
      }
    }
  }
}
/* 基础信息内容修改样式结束 */
/* 基础信息内容样式结束 */
</style>