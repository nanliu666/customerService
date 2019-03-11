<template>
  <section class="decorationDetail">
    <comHeader :headerTittle="headerTittle"/>
    <section class="detailTittle">
      <div class="titleBox">
        <div class="titleContent">
          <span>[室内]</span>
          <span class="titleMain">电路维修</span>
        </div>
        <div class="Tittleflag">待受理</div>
      </div>
    </section>
    <section class="detailContent">
      <li class="contentLi">
        <span class="placeholderClass">单元信息:</span>
        <span class="cellValueClass">广州万达番禺广场>A栋>1座</span>
      </li>
      <li class="contentLi">
        <span class="placeholderClass">服务类型:</span>
        <span class="cellValueClass">广播申请>商铺开业</span>
      </li>
      <li class="contentLi">
        <span class="placeholderClass">预约时间:</span>
        <span class="cellValueClass">2019-02-11 15:20</span>
      </li>
      <li>
        <span class="placeholderClass">问题描述:</span>
        <span
          class="cellValueClass"
        >电路跳闸，需要尽快修复电路跳闸，需要尽快修复电路跳闸，需要尽快修复电路跳闸，需要尽快修复电路跳闸，需要尽快修复电路跳闸，需要尽快修复</span>
      </li>
    </section>
    <section class="detailImage">
      <div class="cellValueClass">上传图片:</div>
      <div class="imgBox">
        <li class="imgBoxLi">
          <img src="./images/jinkesi.jpg" alt>
        </li>
      </div>
    </section>
    <section class="splitBox">
      <div class="split-line"></div>
    </section>
    <section class="flow">
      <div class="cellValueClass">受理进度:</div>
      <ul class="flowMain">
        <li>
          <div class="flowLeft">
            <div class="flowFlag">
              <img src="../../../../src/assets/images/agree.png" alt>
            </div>
            <span class="iconTittle">申请</span>
            <div class="shuxianBox">
              <div class="shuxian"></div>
            </div>
          </div>
          <div class="flowRight">
            <div class="flowRightImgBox">
              <img src="./images/MC.jpg" alt>
            </div>
            <div class>
              <div class="cellValueClass">Anna(麦当劳): 新建工单</div>
              <div class="flowTime">2019-02-11 14:22</div>
            </div>
          </div>
        </li>
        <li>
          <div class="flowLeft">
            <div class="flowFlag">
              <img src="../../../../src/assets/images/agree.png" alt>
            </div>
            <span class="iconTittle">申请</span>
            <div class="shuxianBox">
              <div class="shuxian"></div>
            </div>
          </div>
          <div class="flowRight">
            <div class="flowRightImgBox">
              <img src="./images/MC.jpg" alt>
            </div>
            <div class>
              <div class="cellValueClass">Anna(麦当劳): 新建工单</div>
              <div class="flowTime">2019-02-11 14:22</div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="twoButton">
      <button class="buttonSave">撤回</button>
      <button class="buttonSubmit">关闭</button>
    </section>
  </section>
</template>

<script>
export default {
  name: "decorationDetail",
  data() {
    return {
      headerTittle: "详情"
    };
  },
  components: {
    comHeader: function(resolve) {
      require(["../../../components/comHeader.vue"], resolve);
    }
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "src/assets/sass/mixin";
.decorationDetail {
  .detailTittle {
    padding: 0 40px;
    height: 118px;
    background-color: #3f4fa6;
    .titleBox {
      position: relative;
      overflow: hidden;
      height: 100%;
      border-radius: 10px 10px 0 0;
      background: #ffffff;
      @include flexHCenter;
      .titleContent {
        padding-left: 30px;
        font-family: $fm;
        @include sc(36px, #637eed);
        .titleMain {
          color: #1e1e1e;
          padding-left: 14px;
        }
      }
    }
  }
  .detailContent {
    background-color: #fff;
    margin: 0 40px;
    padding: 40px 28px;
    border-bottom: 4px dashed #f1f3f7;
    border-top: 4px dashed #f1f3f7;

    .contentLi {
      height: 42px;
      line-height: 42px;
      margin-bottom: 20px;
    }
  }
  .detailImage {
    background-color: #fff;
    margin: 0 40px;
    padding: 40px 28px;
    .imgBox {
      @include fd;
      flex-wrap: wrap;
      margin-top: 14px;
      .imgBoxLi {
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
