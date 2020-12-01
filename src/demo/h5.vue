<template>
  <div class="demo-h5">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "H5",
  data: function () {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.demo-h5{
  height: 100%;
  overflow-y: auto;
}
.demo-h5::-webkit-scrollbar {
  display: none;
}
</style>