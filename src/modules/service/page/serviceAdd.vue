<template>
  <section class="serviceAdd">
    <comHeader :headerTittle="headerTittle"/>
    <section class="tab">
      <div class="tabItem" @click="toggleIndoor">
        <span :class="[hasIndoor ? 'tabActive' : '']">室内</span>
      </div>
      <div class="tabItem" @click="toggleOutdoor">
        <span :class="[!hasIndoor ? 'tabActive' : '']">公区</span>
      </div>
    </section>
    <section class="content">
      <div class="group">
        <li class="groupLi" @click="getUintNumber">
          <div class="liLeft">
            <span class="placeholderClass">单元编号:</span>
            <span class="cellValueClass">广州万达广场>A栋>1座</span>
          </div>
          <div class="liRight">
            <img src="../../../assets/images/next.png" class="fs-goaheadICon" alt>
          </div>
        </li>
        <li class="groupLi" @click="getServiceType">
          <div class="liLeft">
            <span class="placeholderClass">服务类型:</span>
            <span class="cellValueClass">广播申请>商铺开业</span>
          </div>
          <div class="liRight">
            <img src="../../../assets/images/next.png" class="fs-goaheadICon" alt>
          </div>
        </li>
        <li class="groupLi" v-if="hasIndoor" @click="getOrderTime">
          <div class="liLeft">
            <span class="placeholderClass">预约时间:</span>
            <span class="cellValueClass">{{formData.orderTime}}</span>
          </div>
          <div class="liRight">
            <img src="../../../assets/images/next.png" class="fs-goaheadICon" alt>
          </div>
        </li>
        <group class="group">
          <x-textarea placeholder="请详细描述您的申请问题" class="textarea" :max="200"></x-textarea>
        </group>
        <li class="upload">
          <div class="uploadTittle">上传图片</div>
          <div class="upLoadBox">
            <ul ref="imgUl" class="imgBox">
              <li class="imgBoxLi">
                <img src="./images/jinkesi.jpg" alt>
              </li>
              <li class="imgBoxLi">
                <img src="./images/jinkesi.jpg" alt>
              </li>
            </ul>
            <div class="uploadBox" @click="getUpload">
              <i class="iconfont icon-picture-o"></i>
            </div>
          </div>
        </li>
      </div>
    </section>
    <section class="twoButton">
      <button class="buttonSave">保存</button>
      <button class="buttonSubmit">提交</button>
    </section>
    <!-- <actionsheet @on-click-menu="getMenu" :menus="menus" v-model="showMenus" show-cancel></actionsheet> -->
  </section>
</template>

<script>
import { XTextarea, Group } from "vux";
export default {
  name: "serviceAdd",
  data() {
    return {
      showMenus: false,
      headerTittle: "服务申请",
      nextDate: "",
      nowDate: "",
      formData: {
        //表格所有数据都在这
        orderTime: ""
      },
      hasIndoor: true
    };
  },
  components: {
    comHeader: function(resolve) {
      require(["../../../components/comHeader.vue"], resolve);
    },
    XTextarea,
    Group
  },
  created() {
    this.nowDate = moment(new Date()).format("YYYY-MM-DD HH:mm");
    this.formData.orderTime = this.nowDate;
  },
  methods: {
    getUpload() {
      if (process.env.NODE_ENV === "production") {
        cordova.exec(
          this.successCallBack,
          this.errorCallBack,
          "ifcaPlugIns",
          "callCameraFunc",
          [
            {
              enabledcamera: true,
              enabledphoto: true,
              imageEdit: true,
              waterMark: true,
              waterMarkText: "项目部"
            }
          ]
        );
      }
    },
    getMenu(val) {},
    successCallBack(data) {
      console.log(1);
      for (var i = 0; i < data; i++) {
        // 打印图片路径
        console.log(data[i]["imageUrl"]);

        // 打印图片标识
        console.log(data[i]["imageId"]);
      }
    },
    errorCallBack(data) {
      console.log("失败");
      console.log(data);
    },
    toggleIndoor() {
      this.hasIndoor = true;
    },
    toggleOutdoor() {
      this.hasIndoor = false;
    },
    getUintNumber() {},
    getServiceType() {},
    getOrderTime() {
      this.$vux.datetime.show({
        cancelText: "取消",
        confirmText: "确定",
        format: "YYYY-MM-DD HH:mm",
        value: this.nowDate,
        startDate: this.nowDate,
        onConfirm: val => {
          this.formData.orderTime = val;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/sass/mixin";
.serviceAdd {
  .tab {
    @include fj(space-around);
    @include wh(100%, 96px);
    line-height: 96px;
    background-color: #fff;
    margin-bottom: 20px;
    .tabItem {
      width: 50%;
      @include flexWCenter;
      position: relative;
      @include sc(30px, #888888);
      &:first-child {
        &::before {
          @include division();
        }
      }
    }
  }
  .upload {
    margin: 40px 0;
    padding: 10px 40px 30px;
    background-color: #fff;
    .uploadTittle {
      @include sc(30px, #1e1e1e);
      margin: 10px 0 20px;
    }
    .upLoadBox {
      @include fd;
      flex-wrap: wrap;
    }
    .uploadBox {
      @include wh(136px, 136px);
      border: 1px dashed #dbdbdb;
      @include flexCenter;
    }
    .imgBox {
      @include fd;
      flex-wrap: wrap;
      .imgBoxLi {
        border: 1px dashed #dbdbdb;
        @include wh(136px, 136px);
        @include flexCenter;
        margin-right: 20px;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}
</style>
