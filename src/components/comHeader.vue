<template>
  <div class="comHeader">
    <div class="appTopOther"></div>
    <x-header :left-options="{showBack: false}" class="header">
      <div slot="left" @click="goback()" class="fs-backBox">
        <img src="../assets/images/back.png" class="fs-backICon" alt>
      </div>
      <span>服务申请</span>
      <div slot="right" class="fs-EmailBox">
        <img src="../assets/images/Email.png" class="fs-Email" alt>
      </div>
    </x-header>
  </div>
</template>

<script>
import { XHeader } from "vux";
export default {
  components: {
    XHeader
  },
  method: {}
};
</script>

<style lang="scss" scoped>
.comHeader {
  background-color: #3f4fa6;
}
</style>
