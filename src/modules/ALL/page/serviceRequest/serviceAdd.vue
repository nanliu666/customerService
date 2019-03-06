<template>
  <section>
    <comHeader/>
  </section>
</template>

<script>
export default {
  components: {
    comHeader: function(resolve) {
      require(["../../../../components/comHeader.vue"], resolve);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
