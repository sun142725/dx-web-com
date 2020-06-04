import Vue from 'vue'
import App from './App.vue'
import './util/rem'
import './style/common.scss'
import 'vant/lib/button/style';
import router from './router/index'
window.Vue = Vue;

// /* 支持使用标签的方式引入 */
// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue);
//   }
 
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
 