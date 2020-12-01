<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
html,body{
  width:100%;
  height: 100%;
}
  body{
    margin: 0 auto;
    background-color: #f7f8fa; 
  }

  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  
</style>
