<template>
  <div class="app">
    <div class="left-menu">
      <div>111</div>
    </div>
    <div>
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>
import { NavBar, ActionSheet } from 'vant'
import router from './router/index'
  export default {
    name: 'app',
    components: { NavBar, ActionSheet },
    data() {
      return {
        switchRouteFlag: false,
        routes: []
      }
    },
    mounted: function(){
      this.routes = [...router.options.routes]
    },
    methods: {
      onClickLeft(){
        // this.$router.go(-1)
      },
      onClickRight(){
        this.switchRouteFlag = true
      },
      switchRoute(v){
        this.$router.replace(v.path)
        this.switchRouteFlag = false
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .left-menu{
    width: 220px;
    background: 100%;
  }

</style>
