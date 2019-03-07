<template>
  <section class="serviceAdd">
    <comHeader :headerTittle="headerTittle"/>
    <section class="tab">
      <div class="tabItem">
        <span class="tabActive">室内</span>
      </div>
      <div class="tabItem">
        <span>公区</span>
      </div>
    </section>
    <section class="content">
      <div class="group">
        <li class="groupLi">
          <div class="liLeft">
            <span class="placeholderClass">单元编号:</span>
            <span class="cellValueClass">广州万达广场>A栋>1座</span>
          </div>
          <div class="liRight">
            <img src="../../../../assets/images/next.png" class="fs-goaheadICon" alt>
          </div>
        </li>
        <li class="groupLi">
          <div class="liLeft">
            <span class="placeholderClass">服务类型:</span>
            <span class="cellValueClass">广播申请>商铺开业</span>
          </div>
          <div class="liRight">
            <img src="../../../../assets/images/next.png" class="fs-goaheadICon" alt>
          </div>
        </li>
        <li class="groupLi">
          <div class="liLeft">
            <span class="placeholderClass">预约时间:</span>
            <span class="cellValueClass">2019-2-28 11:50</span>
          </div>
          <div class="liRight">
            <img src="../../../../assets/images/next.png" class="fs-goaheadICon" alt>
          </div>
        </li>
        <group class="group">
          <x-textarea placeholder="请填写审批意见" class="textarea" :max="200"></x-textarea>
        </group>
        <li class="upload">
          <div>上传图片</div>
          <div>
            <i class="iconfont icon-picture-o"></i>
          </div>
        </li>
      </div>
    </section>
    <section>
      <button>保存</button>
      <button>提交</button>
    </section>
  </section>
</template>

<script>
import { XTextarea, Group } from "vux";
export default {
  name: "serviceAdd",

  data() {
    return {
      headerTittle: "服务申请"
    };
  },
  components: {
    comHeader: function(resolve) {
      require(["../../../../components/comHeader.vue"], resolve);
    },
    XTextarea,
    Group
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
    margin-top: 40px;
    padding: 10px 40px;
    background-color: #fff;
  }
}
</style>
