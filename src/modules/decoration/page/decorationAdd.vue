<template>
  <section class="decorationAdd">
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
        <li class="groupLi" @click="getStartTime">
          <div class="liLeft">
            <span class="placeholderClass">开始时间:</span>
            <span class="cellValueClass">{{formData.orderTime}}</span>
          </div>
          <div class="liRight">
            <img src="../../../assets/images/next.png" class="fs-goaheadICon" alt>
          </div>
        </li>
        <li class="groupLi" @click="getEndTime">
          <div class="liLeft">
            <span class="placeholderClass">结束时间:</span>
            <span class="cellValueClass">{{formData.orderTime}}</span>
          </div>
          <div class="liRight">
            <img src="../../../assets/images/next.png" class="fs-goaheadICon" alt>
          </div>
        </li>
        <group class="group">
          <x-textarea placeholder="请填写审批意见" class="textarea" :max="200"></x-textarea>
        </group>
        <li class="upload">
          <div class="uploadTittle">上传图片</div>
          <div class="uploadBox" @click="getUpload">
            <i class="iconfont icon-picture-o"></i>
          </div>
        </li>
      </div>
    </section>
    <section class="twoButton">
      <button class="buttonSave">保存</button>
      <button class="buttonSubmit">提交</button>
    </section>
    <actionsheet @on-click-menu="getMenu" :menus="menus" v-model="showMenus" show-cancel></actionsheet>
  </section>
</template>

<script>
import { XTextarea, Group, Actionsheet } from "vux";
export default {
  name: "decorationAdd",
  data() {
    return {
      nextDate: '',
      showMenus: false,
      menus: {
        menu1: "拍照",
        menu2: "相册"
      },
      headerTittle: "装修申请",
      nextDate: "",
      nowDate: "",
      formData: {
        //表格所有数据都在这
        orderTime: "",
        nextDate: ''
      },
      hasIndoor: true
    };
  },
  components: {
    comHeader: function(resolve) {
      require(["../../../components/comHeader.vue"], resolve);
    },
    XTextarea,
    Actionsheet,
    Group
  },
  created() {
    this.nowDate = moment(new Date()).format("YYYY-MM-DD");
    this.nextDate = moment(new Date())
      .add(1, "months")
      .format("YYYY-MM-DD");
    this.formData.orderTime = this.nowDate;
  },
  methods: {
    getUpload() {
      this.showMenus = !this.showMenus;
    },
    getMenu() {},
    toggleIndoor() {
      this.hasIndoor = true;
    },
    toggleOutdoor() {
      this.hasIndoor = false;
    },
    getServiceType() {},
    getEndTime() {
      this.$vux.datetime.show({
        cancelText: "取消",
        confirmText: "确定",
        format: "YYYY-MM-DD",
        value: this.nextDate,
        startDate: this.nextDate,
        onConfirm: val => {
          this.formData.orderTime = val;
        }
      });
    },
    getStartTime() {
      this.$vux.datetime.show({
        cancelText: "取消",
        confirmText: "确定",
        format: "YYYY-MM-DD",
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
.decorationAdd {
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
    .uploadBox {
      @include wh(136px, 136px);
      border: 1px dashed #dbdbdb;
      @include flexCenter;
    }
  }
}
</style>
