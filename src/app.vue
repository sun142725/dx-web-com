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
    <action-sheet
            :close-on-popstate="true"
            close-icon=""
            v-model="switchRouteFlag"
            >
            <div class="action-sheet-content">
                <div v-for="(v, i) in routes" :key="i" @click="switchRoute(v)">{{v.title}}</div>
            </div>
        </action-sheet>
    <router-view style="height: calc(100vh - 44px)"></router-view>
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .action-sheet-content{
    height: 300px;
    text-align: center;
    overflow-y: auto;
    line-height: 50px;
    font-size: 14px;
    >div{
        text-align: center;
        border-bottom: 1px solid #e9e9e9;
        
    }
}

</style>
