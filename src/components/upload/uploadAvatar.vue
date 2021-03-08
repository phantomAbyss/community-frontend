<template>
  <!-- 
    这个是用来上传头像的组件，其中可以实现一些复杂功能
   -->
  <!-- 头像上传对话框 -->
  <el-dialog
    title="上传头像"
    class="upload-dialog"
    :visible.sync="value"
    width="30%"
    :before-close="handleClose"
  >
    <!-- 第一步：头像的图片选择框 -->
    <div class="choose-image" v-show="step == 1">
      <el-upload
        class="choose-avatar"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        :on-change="handleChange"
        :file-list="fileList"
        :multiple="false"
        :show-file-list="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过2M
        </div>
      </el-upload>
    </div>
    <!-- 第二步：头像上传后的编辑框 -->
    <div class="image-edit" v-if="step == 2">
      <div class="avatar-content">
        <div class="avatar">
          <img
            class="avatar-image"
            :src="sourceImgUrl"
            :style="sourceImgStyle"
            draggable="false"
            ref="img"
          />
          <!-- 圆形遮罩样式 -->
          <div class="avatar-shade" :style="sourceImgShadeStyle"></div>
          <!-- <div
            class="avatar-shade avatar-shade-left"
            :style="sourceImgShadeStyle"
          ></div>
          <div
            class="avatar-shade avatar-shade-right"
            :style="sourceImgShadeStyle"
          ></div> -->
        </div>
        <div class="avatar-range">
          <span style="display: inline-flex; align-items: center"
            >​<svg
              class="Zi Zi--Size"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path
                d="M16.296 7h.697A1.01 1.01 0 0 1 18 8.003v10.995c0 .554-.45 1.003-1.007 1.003H4.007A1.01 1.01 0 0 1 3 18.998V8.003C3 7.449 3.45 7 4.007 7h12.289zm-.892 11a.6.6 0 0 0 .597-.601V9.601A.597.597 0 0 0 15.405 9H5.596A.599.599 0 0 0 5 9.602v7.797c0 .335.267.601.596.601h9.808zM7 4h13a1 1 0 0 1 1 1v11a1 1 0 0 1-2 0V6.5c0-.5-.5-.5-.5-.5H7a1 1 0 0 1 0-2z"
                fill-rule="evenodd"
              ></path></svg></span
          ><input
            type="range"
            min="0"
            max="100"
            step="1"
            :value="scale.range"
            @input="changeImageSize($event)"
          /><span style="display: inline-flex; align-items: center"
            >​<svg
              class="Zi Zi--Size"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="22"
              height="22"
            >
              <path
                d="M16.296 7h.697A1.01 1.01 0 0 1 18 8.003v10.995c0 .554-.45 1.003-1.007 1.003H4.007A1.01 1.01 0 0 1 3 18.998V8.003C3 7.449 3.45 7 4.007 7h12.289zm-.892 11a.6.6 0 0 0 .597-.601V9.601A.597.597 0 0 0 15.405 9H5.596A.599.599 0 0 0 5 9.602v7.797c0 .335.267.601.596.601h9.808zM7 4h13a1 1 0 0 1 1 1v11a1 1 0 0 1-2 0V6.5c0-.5-.5-.5-.5-.5H7a1 1 0 0 1 0-2z"
                fill-rule="evenodd"
              ></path></svg
          ></span>
        </div>
      </div>
    </div>
    <!-- 第三步：头像上传到服务器的进度条 -->
    <div class="image-loading" v-if="step == 3">
      <!-- 上传的进度条 -->
      <div class="upload-loading" v-show="loading === 1">
        <el-progress
          v-show="loading === 1"
          :stroke-width="26"
          :text-inside="true"
          :percentage="progressStyle"
        ></el-progress>
      </div>
      <!-- 上传如果发生错误显示在这里 -->
      <!-- <div class="upload-error" v-show="hasError">
        {{errorMsg}}
      </div> -->
      <!-- 上传如果成功显示在这里 -->
      <!-- <div class="upload-success" v-show="loading === 2">
        {{lang.success}}
      </div> -->
    </div>
    <!-- 这里是第二步的画布canvas -->
    <canvas
      v-show="false"
      :width="width"
      :height="height"
      ref="canvas"
    ></canvas>
    <!-- 对话框底部的按钮 -->
    <span slot="footer" class="dialog-footer">
      <el-button v-if="step == 1" type="primary" plain @click="offDialog">{{
        lang.btn.off
      }}</el-button>
      <el-button v-if="step == 2" @click="setStep(1)">{{
        lang.btn.back
      }}</el-button>
      <el-button v-if="step == 2" type="primary" @click="prepareUpload">
        {{ lang.btn.save }}
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
import language from "@/common/utils/language.js";
import mimes from "@/common/utils/mimes.js";
import data2blob from "@/common/utils/data2blob.js";
import effectRipple from "@/common/utils/effectRipple.js";

export default {
  name: "uploadAvatar",
  /* props: ["uploadAvatarDialog"],
  model: {
    prop: "uploadAvatarDialog",
    event: "uploadAvatarDialog",
  }, */
  props: {
    // 域，上传文件name，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    field: {
      type: String,
      default: "avatar",
    },
    // 原名key，类似于id，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    ki: {
      default: 0,
    },
    /* 是否显示上传控件 */
    value: {
      default: true,
    },
    /* 上传地址 */
    uploadUrl: {
      type: String,
      default: "",
    },
    /* 上传文件时需要附带的数据 */
    params: {
      type: Object,
      default: null,
    },
    /* 上传的headers */
    headers: {
      type: Object,
      default: null,
    },
    /* 剪裁图片的圆对应的宽 */
    width: {
      type: Number,
      default: 240,
    },
    /* 剪裁图片的圆对应的高 */
    height: {
      type: Number,
      default: 240,
    },
    /* 是否显示图片旋转功能 */
    noRotate: {
      type: Boolean,
      default: true,
    },
    /* 不预览圆形图片 */
    noCircle: {
      type: Boolean,
      default: false,
    },
    /* 不预览方形图片 */
    noSquare: {
      type: Boolean,
      default: false,
    },
    /* 单文件大小限制 */
    maxSize: {
      type: Number,
      default: 10240,
    },
    /* 语言类型 */
    langType: {
      type: String,
      default: "zh",
    },
    /* 语言包 */
    langExt: {
      type: Object,
      default: null,
    },
    /*  图片上传格式 */
    imgFormat: {
      type: String,
      default: "png",
    },
    /* 图片背景 jpg情况下生效 */
    imgBgc: {
      type: String,
      default: "#fff",
    },
    /* 是否支持跨域 */
    withCredentials: {
      type: Boolean,
      default: false,
    },
    /* 图片上传的方法 */
    method: {
      type: String,
      default: "POST",
    },
  },
  data() {
    let that = this,
      { imgFormat, langType, langExt, width, height } = that,
      isSupported = true,
      allowImgFormat = ["jpg", "png"],
      tempImgFormat =
        allowImgFormat.indexOf(imgFormat) === -1 ? "jpg" : imgFormat,
      lang = language[langType] ? language[langType] : language["en"],
      mime = mimes[tempImgFormat];
    // 规范图片格式
    that.imgFormat = tempImgFormat;

    if (langExt) {
      Object.assign(lang, langExt);
    }
    if (typeof FormData != "function") {
      isSupported = false;
    }
    return {
      // 图片的mime
      mime,

      // 语言包
      lang,

      // 浏览器是否支持该控件
      isSupported,
      // 浏览器是否支持触屏事件
      isSupportTouch: document.hasOwnProperty("ontouchstart"),

      // 步骤
      step: 1, //1选择文件 2剪裁 3上传

      // 上传状态及进度
      loading: 0, //0未开始 1正在 2成功 3错误
      progress: 0,

      // 是否有错误及错误信息
      hasError: false,
      errorMsg: "",

      // 需求图宽高比
      ratio: width / height,

      // 原图地址、生成图片地址
      sourceImg: null,
      sourceImgUrl: "",
      createImgUrl: "",

      // 原图片拖动事件初始值
      sourceImgMouseDown: {
        on: false,
        mX: 0, //鼠标按下的坐标
        mY: 0,
        x: 0, //scale原图坐标
        y: 0,
      },

      // 生成图片预览的容器大小
      previewContainer: {
        width: 100,
        height: 100,
      },

      // 原图容器宽高
      sourceImgContainer: {
        // sic
        width: 300,
        height: 180, // 如果生成图比例与此一致会出现bug，先改成特殊的格式吧，哈哈哈
      },

      // 原图展示属性
      scale: {
        zoomAddOn: false, //按钮缩放事件开启
        zoomSubOn: false, //按钮缩放事件开启
        range: 1, //最大100

        x: 0,
        y: 0,
        width: 0,
        height: 0,
        maxWidth: 0,
        maxHeight: 0,
        minWidth: 0, //最宽
        minHeight: 0,
        naturalWidth: 0, //原宽
        naturalHeight: 0,
      },
      fileList: [],
    };
  },
  computed: {
    // 进度条样式
    progressStyle() {
      let { progress } = this;
      console.log("process:" + progress);
      return progress;
    },
    // 原图样式
    sourceImgStyle() {
      let { scale, sourceImgMasking } = this,
        /* top = scale.y + sourceImgMasking.y + 30 + "px",
        left = scale.x + sourceImgMasking.x + "px" */
        /* top = "30px",
        left = "30px", */
        minScale = Math.min(scale.width, scale.height),
        top = (240 - minScale) / 2 + "px",
        left = top;
      /*  console.log(
        "masking = " + sourceImgMasking.x + ", " + sourceImgMasking.y
      );
      console.log(
        "left = " + left + ", top = " + top + ", minScale =" + minScale
      );
      console.log("scale: x = " + scale.x + ", y = " + scale.y); */
      return {
        top,
        left,
        width: minScale + "px",
        height: minScale + "px", // 兼容 Opera
      };
    },
    // 原图蒙版属性
    sourceImgMasking() {
      let { width, height, ratio, sourceImgContainer } = this,
        sic = sourceImgContainer,
        sicRatio = sic.width / sic.height, // 原图容器宽高比
        x = 0,
        y = 0,
        w = sic.width,
        h = sic.height,
        scale = 1;
      if (ratio < sicRatio) {
        scale = sic.height / height;
        w = sic.height * ratio;
        x = (sic.width - w) / 2;
      }
      if (ratio > sicRatio) {
        scale = sic.width / width;
        h = sic.width / ratio;
        y = (sic.height - h) / 2;
      }
      return {
        scale, // 蒙版相对需求宽高的缩放
        x,
        y,
        width: w,
        height: h,
      };
    },
    // 原图遮罩样式
    sourceImgShadeStyle() {
      let { sourceImgMasking, sourceImgContainer } = this,
        sic = sourceImgContainer,
        sim = sourceImgMasking,
        w = sim.width == sic.width ? sim.width : (sic.width - sim.width) / 2,
        h =
          sim.height == sic.height ? sim.height : (sic.height - sim.height) / 2;
      // console.log("h = " + h + ", w = " + w);
      return {
        /* width: w + "px",
        height: h + "px", */
        //h = 180, w = 30
        width: "180px",
        height: "180px",
      };
    },
    previewStyle() {
      let { width, height, ratio, previewContainer } = this,
        pc = previewContainer,
        w = pc.width,
        h = pc.height,
        pcRatio = w / h;
      if (ratio < pcRatio) {
        w = pc.height * ratio;
      }
      if (ratio > pcRatio) {
        h = pc.width / ratio;
      }
      return {
        width: w + "px",
        height: h + "px",
      };
    },
  },
  created() {
    //该定时函数是用来实现上传头像时的放大和缩小功能的。
    /* setTimeout(() => {
      this.drawAvatar();
    }, 0); */
  },
  methods: {
    /* 点击波纹效果 */
    ripple(e) {
      effectRipple(e);
    },
    /* 设置步骤 */
    setStep(num) {
      setTimeout(() => {
        this.step = num;
      }, 200);
    },
    // 头像图片的放大和缩小在这里实现，这是监视范围输入框的。
    changeImageSize(event) {
      // console.log("range = " + event.currentTarget.value);
      let newRange = event.currentTarget.value;
      let that = this,
        { sourceImgMasking, sourceImgMouseDown, scale } = this,
        {
          maxWidth,
          maxHeight,
          minWidth,
          minHeight,
          width,
          height,
          x,
          y,
          range,
        } = scale,
        sim = sourceImgMasking,
        // 蒙版宽高
        sWidth = sim.width,
        sHeight = sim.height,
        // 新宽高
        nWidth = minWidth + ((maxWidth - minWidth) * newRange) / 100,
        nHeight = minHeight + ((maxHeight - minHeight) * newRange) / 100,
        // 新坐标（根据蒙版中心点缩放）
        nX = sWidth / 2 - (nWidth / width) * (sWidth / 2 - x),
        nY = sHeight / 2 - (nHeight / height) * (sHeight / 2 - y);

      // 判断新坐标是否超过蒙版限制
      if (nX > 0) {
        nX = 0;
      }
      if (nY > 0) {
        nY = 0;
      }
      if (nX < sWidth - nWidth) {
        nX = sWidth - nWidth;
      }
      if (nY < sHeight - nHeight) {
        nY = sHeight - nHeight;
      }
      // 赋值处理
      scale.x = nX;
      scale.y = nY;
      scale.width = nWidth;
      scale.height = nHeight;
      scale.range = newRange;
    },

    /* 使用canvas绘制上传的头像框图片 */
    drawAvatar() {
      this.$nextTick(() => {
        let canvas = document.getElementsByTagName("canvas")[0];
        if (!canvas.getContext) {
          console.log("浏览器不兼容canvas,请更新浏览器版本");
          return;
        }
        let context = canvas.getContext("2d");
        context.beginPath();
        context.arc(150, 150, 150, 0, 2 * Math.PI);
        context.fillStyle = "#f8f9fa"; //填充颜色,默认是黑色
        context.fill(); //画实心圆
        context.clip();
        context.closePath();
        /* 绘制头像 */
        let avatarImage = new Image();
        avatarImage.style;
        /* 指定图片的URL */
        avatarImage.src = "http://localhost:8080/img/avatar.89779596.jpg";
        /* 浏览器加载完毕后再加载图片 */
        avatarImage.onload = function () {
          context.beginPath();
          context.arc(150, 150, 100, 0, 2 * Math.PI, false);
          context.clip();
          context.drawImage(avatarImage, 30, 30, 240, 240);
          context.restore();
        };
      });
    },
    /* 上传文件之前 */
    handleChange(file, fileList) {
      console.log(file);
      /* console.log("文件名 = " + file.name)
      console.log("文件类型 = " + file.raw.type)
      console.log("文件类型 = " + file.type) */
      if (this.checkFile(file.raw)) {
        this.setSourceImg(file.raw);
      }
    },
    /* 检查选择的文件是否合适 */
    checkFile(file) {
      let that = this,
        { lang, maxSize } = that;
      // 仅限图片
      if (file.type.indexOf("image") === -1) {
        that.hasError = true;
        that.errorMsg = lang.error.onlyImg;
        return false;
      }

      // 超出大小
      if (file.size / 1024 > maxSize) {
        that.hasError = true;
        that.errorMsg = lang.error.outOfSize + maxSize + "kb";
        return false;
      }
      return true;
    },
    // 重置控件
    reset() {
      let that = this;
      that.loading = 0;
      that.hasError = false;
      that.errorMsg = "";
      that.progress = 0;
    },
    /* 设置图片源 */
    setSourceImg(file) {
      this.$emit("src-file-set", file.name, file.type, file.size);
      let that = this,
        fr = new FileReader();
      fr.onload = function (e) {
        that.sourceImgUrl = fr.result;
        that.startCrop();
      };
      fr.readAsDataURL(file);
    },
    /* 剪裁前的准备工作 */
    startCrop() {
      let that = this,
        {
          width,
          height,
          ratio,
          scale,
          sourceImgUrl,
          sourceImgMasking,
          lang,
        } = that,
        sim = sourceImgMasking,
        img = new Image();
      img.src = sourceImgUrl;
      img.onload = function () {
        let nWidth = img.naturalWidth,
          nHeight = img.naturalHeight,
          nRatio = nWidth / nHeight,
          w = sim.width,
          h = sim.height,
          x = 0,
          y = 0;
        // 图片像素不达标
        if (nWidth < width || nHeight < height) {
          that.hasError = true;
          that.errorMsg = lang.error.lowestPx + width + "*" + height;
          return false;
        }
        if (ratio > nRatio) {
          h = w / nRatio;
          y = (sim.height - h) / 2;
        }
        if (ratio < nRatio) {
          w = h * nRatio;
          x = (sim.width - w) / 2;
        }
        scale.range = 0;
        scale.x = x;
        scale.y = y;
        scale.width = w;
        scale.height = h;
        scale.minWidth = w;
        scale.minHeight = h;
        scale.maxWidth = nWidth * sim.scale;
        scale.maxHeight = nHeight * sim.scale;
        scale.naturalWidth = nWidth;
        scale.naturalHeight = nHeight;
        that.sourceImg = img;
        that.createImg();
        that.setStep(2);
      };
    },
    // 生成需求图片
    createImg(e) {
      let that = this,
        {
          imgFormat,
          imgBgc,
          mime,
          sourceImg,
          scale: { x, y, width, height },
          sourceImgMasking: { scale },
        } = that,
        canvas = that.$refs.canvas,
        ctx = canvas.getContext("2d");
      if (e) {
        // 取消鼠标按下移动状态
        that.sourceImgMouseDown.on = false;
      }
      canvas.width = that.width;
      canvas.height = that.height;
      ctx.clearRect(0, 0, that.width, that.height);

      if (imgFormat == "png") {
        ctx.fillStyle = "rgba(0,0,0,0)";
      } else {
        // 如果jpg 为透明区域设置背景，默认白色
        ctx.fillStyle = imgBgc;
      }
      ctx.fillRect(0, 0, that.width, that.height);

      ctx.drawImage(
        sourceImg,
        x / scale,
        y / scale,
        width / scale,
        height / scale
      );
      that.createImgUrl = canvas.toDataURL(mime);
    },
    /* 准备上传图片 */
    prepareUpload() {
      let { uploadUrl, createImgUrl, field, ki } = this;
      this.$emit("crop-success", createImgUrl, field, ki);
      console.log("uploadUrl = " + uploadUrl);
      if (typeof uploadUrl == "string" && uploadUrl) {
        this.createImg();
        this.uploadAvatar();
      } else {
        this.offDialog();
      }
    },
    /* 上传图片 */
    uploadAvatar() {
      let that = this,
        {
          lang,
          imgFormat,
          mime,
          uploadUrl,
          params,
          headers,
          field,
          ki,
          createImgUrl,
          withCredentials,
          method,
        } = this,
        fmData = new FormData();
      fmData.append(
        field,
        data2blob(createImgUrl, mime),
        field + "." + imgFormat
      );

      // 添加其他参数
      if (typeof params == "object" && params) {
        Object.keys(params).forEach((k) => {
          fmData.append(k, params[k]);
        });
      }

      // 监听进度回调
      const uploadProgress = function (event) {
        if (event.lengthComputable) {
          that.progress = Math.round(
            (100 * Math.round(event.loaded)) / event.total
          );
        }
      };

      // 上传文件
      that.reset();
      that.loading = 1;
      that.setStep(3);
      new Promise(function (resolve, reject) {
        let client = new XMLHttpRequest();
        client.open(method, uploadUrl, true);
        client.withCredentials = withCredentials;
        client.onreadystatechange = function () {
          if (this.readyState !== 4) {
            return;
          }
          if (this.status === 200 || this.status === 201) {
            resolve(JSON.parse(this.responseText));
          } else {
            reject(this.status);
          }
        };
        client.upload.addEventListener("progress", uploadProgress, false); //监听进度
        // 设置header
        if (typeof headers === "object" && headers) {
          Object.keys(headers).forEach((k) => {
            client.setRequestHeader(k, headers[k]);
          });
        }
        client.send(fmData);
      }).then(
        // 上传成功
        function (resData) {
          if (that.value) {
            that.loading = 2;
            that.$emit("crop-upload-success", resData, field, ki);
            /* 上传成功后关闭对话框 */
            that.offDialog();
            /* 提示用户头像已上传完毕 */
            that.openHint(that.lang.success, 'success');
          }
        },
        // 上传失败
        function (sts) {
          if (that.value) {
            that.loading = 3;
            that.hasError = true;
            that.errorMsg = lang.fail;
            that.$emit("crop-upload-fail", sts, field, ki);
          }
        }
      );
    },
    /* 提示用户信息 */
    openHint(content, icon) {
      this.$message({
        message: content,
        type: icon,
        center: true
      });
    },
    /* 关闭上传组件 */
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
/* 头像上传的全局样式开始 */
.upload-dialog {
  /deep/ .el-dialog__body {
    padding: 10px 20px 10px;
  }
  /deep/ .el-dialog__footer {
    padding: 10px 30px 20px;
  }
}
/* 头像上传的选择页面样式开始 */
.choose-avatar {
  /deep/ .el-upload {
    margin-left: 25px;
    .el-upload-dragger {
      background: rgba(0, 0, 0, 0.04);
      &:hover {
        background: rgba(0, 0, 0, 0.08);
      }
    }
  }
  .el-upload__tip {
    margin-left: 25px;
    font-size: 14px;
  }
}
/* 头像上传的选择页面样式结束 */
/* 头像上传后的编辑界面样式开始 */
.image-edit {
  position: relative;
  .avatar-content {
    margin-left: 90px;
    .avatar {
      position: relative;
      display: block;
      width: 240px;
      height: 240px;
      background-color: #e5e5e0;
      overflow: hidden;
      border-radius: 50%;
      .avatar-image {
        position: absolute;
        display: block;
        cursor: move;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-radius: 50%;
      }
      .avatar-shade {
        -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
        position: absolute;
        // background-color: rgba(241, 242, 243, 0.8);
        border: 30px solid rgba(241, 242, 243, 0.8);
        border-radius: 50%;
      }
      /* .avatar-shade-left {
        top: 0;
        left: 0;
      }
      .avatar-shade-right {
        bottom: 0;
        right: 0;
      } */
    }
    .avatar-range {
      position: relative;
      left: -12px;
      input {
        width: 210px;
        height: 12px;
        padding: 0;
        margin: 30px 10px 20px;
      }
      span {
        color: black;
      }
    }
  }
}
/* 头像上传后的编辑界面样式结束 */
/* 头像上传的全局样式结束 */
</style>