import Vue from 'vue'
import App from './App.vue'
import CustomSwitch from '../packages/switch/index'
import signParams from '../packages/dx-sign/dx-sign'

const components = [
  CustomSwitch
]

window.Vue = Vue;

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$dxSign = signParams
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

new Vue({
  el: '#app',
  render: h => h(App)
})



