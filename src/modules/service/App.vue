<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    if (process.env.NODE_ENV !== "production") return;
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      script.setAttribute("src", "./static/js/ios_cordova.js");
    } else {
      script.setAttribute("src", "./static/js/android_cordova.js");
    }
    var heads = document.getElementsByTagName("head");
    if (heads.length) {
      heads[0].appendChild(script);
    } else {
      document.documentElement.appendChild(script);
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/sass/common.scss";
@import "@/assets/sass/mixin.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fs-addNew {
  @include wh(18px, 18px);
  margin-left: 10px;
}

#app {
  height: 100%;
}
</style>
