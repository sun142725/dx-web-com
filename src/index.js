import Vue from 'vue'

import './util/rem'
import './style/common.scss'
import { signParams } from '../packages/dx-sign/dx-sign'

import Button from './packages/button';
import Switch from './packages/switch';

const components = [
  Switch,
  Button
]

window.Vue = Vue;

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$dxSign = signParams
}
export {
  install,
  signParams,
  Button,
  Switch
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

 