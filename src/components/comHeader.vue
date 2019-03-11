<template>
  <div class="comHeader">
    <div class="appTopOther"></div>
    <x-header :left-options="{showBack: false}" class="header">
      <div slot="left" @click="goback()" class="fs-backBox">
        <img src="../assets/images/back.png" class="fs-backICon" alt>
      </div>
      <span>{{headerTittle}}</span>
      <div slot="right" class="fs-EmailBox">
        <img src="../assets/images/Email.png" class="fs-Email" alt>
      </div>
    </x-header>
  </div>
</template>

<script>
import { XHeader } from "vux";
export default {
  data() {return{}},
  props: {
    headerTittle: String
  },
  components: {
    XHeader
  },
  method: {}
};
</script>

<style lang="scss" scoped>
@import "src/assets/sass/mixin";

.comHeader {
  background-color: #3F4FA6;
}
</style>
