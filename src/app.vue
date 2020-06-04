<template>
  <div >
    <nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <router-view style="height: calc(100vh - 44px)"></router-view>
  </div>
</template>

<script>
import { NavBar } from 'vant'
  export default {
    name: 'app',
    components: { NavBar },
    data() {
      return {
        lightSwitch: true
      }
    },
    mounted: function(){
    },
    methods: {
      onClickLeft(){

      },
      onClickRight(){
        
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
