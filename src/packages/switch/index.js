import DxSwitch from './index.vue'

/* istanbul ignore next */
DxSwitch.install = function(Vue) {
  Vue.component("Dx" +DxSwitch.name, DxSwitch);
};

export default DxSwitch;

