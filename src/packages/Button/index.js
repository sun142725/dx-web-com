import DxButton from './index.vue'

/* istanbul ignore next */
DxButton.install = function(Vue) {
  Vue.component("Dx" + DxButton.name, DxButton);
};

export default DxButton;

