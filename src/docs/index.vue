<template>
  <div class="app">
    <div class="dx-web-doc">
      <div class="dx-web-doc-header">欢迎来到大象前端组件库</div>
      <div class="dx-web-doc-container">
        <div class="dx-doc-nav__group">
          <div class="dx-doc-nav__title">开发指南</div>
          <div class="dx-doc-nav__item"><router-link to="/docs/introduce">介绍</router-link></div>
          <div class="dx-doc-nav__item"><router-link to="/docs/standard">Web 规范</router-link></div>
          <div class="dx-doc-nav__title">基础组件</div>
          <div class="dx-doc-nav__item"><router-link to="/docs/button">Button 按钮</router-link></div>
          <div class="dx-doc-nav__item"><router-link to="/docs/switch">Switch 开关</router-link></div>
          <div class="dx-doc-nav__title">工具</div>
          <div class="dx-doc-nav__item"><router-link to="/docs/url-utils">url 参数获取</router-link></div>
          <div class="dx-doc-nav__item"><router-link to="/docs/dx-sign">sign 加密</router-link></div>
        </div>
        <div class="dx-doc-main">
          <div class="h5-preview">
            <iframe style="height:640px; width:100%;" :src="iframeUrl" frameborder="0"></iframe>
          </div>
          <router-view></router-view>
        </div>
        
      </div>
    </div>
        
  </div>
</template>

<script>
import { NavBar, ActionSheet } from 'vant'
  export default {
    name: 'app',
    components: { NavBar, ActionSheet },
    data() {
      return {
        iframeUrl: window.location.origin + window.location.pathname + "#/h5/button"
      }
    },
    mounted: function(){
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .dx-web-doc{
    height: 100%;
  }
  .dx-web-doc-header{
    width: 100%;
    height: 60px;
    background-color: #001938;
    user-select: none;
    color: #fff;
    font-size: 30px;
    line-height: 60px;
    text-align: center;
  }
  .dx-web-doc-container{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: calc(100% - 60px);
    margin: 0 auto;
    padding-left: 30px;
  }
  .dx-doc-nav__group{
    width: 220px;
    height: 100%;
    background-color: #fff;
    padding: 24px 0px 72px 30px;
    overflow-y: auto;
    box-shadow: 0 8px 12px #ebedf0;
  }
  .dx-doc-main{
    flex: 1;
    padding: 30px;
    height: 100%;
    overflow-y: auto;
    position: relative;
    padding-right: 420px;
  }
  .h5-preview{
    width: 360px;
    min-width: 360px;
    overflow: hidden;
    background: #fafafa;
    border-radius: 12px;
    box-shadow: #ebedf0 0 4px 12px;
    position: fixed;
    top: 110px;
    right: 30px;
  }
// -----------------------  nav ---------------
.dx-doc-nav__title{
    padding: 8px 0 8px;
    color: #455a64;
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
}
.dx-doc-nav__item a{
    display: block;
    margin: 0;
    padding: 8px 0 8px;
    color: #455a64;
    font-size: 14px;
    line-height: 28px;
    -webkit-transition: color 0.2s;
    transition: color 0.2s;
}
.dx-doc-nav__item a:hover, .dx-doc-nav__item a.router-link-active {
    color: #4fc08d;
}
</style>
