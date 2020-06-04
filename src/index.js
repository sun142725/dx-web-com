import Vue from 'vue'

import './util/rem'
import './style/common.scss'
import CustomSwitch from '../packages/switch/index'
import signParams from '../packages/dx-sign/dx-sign'
import DoctorList from '../packages/doctor-list/doctor-list'

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
export{
  install,
  CustomSwitch,
  signParams,
  DoctorList
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

 