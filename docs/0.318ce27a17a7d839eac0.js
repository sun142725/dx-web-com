(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(t,e,a){var o=a(0),i=a(40);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var n={insert:"head",singleton:!1};o(i,n);t.exports=i.locals||{}},32:function(t,e,a){var o=a(0),i=a(42);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var n={insert:"head",singleton:!1};o(i,n);t.exports=i.locals||{}},33:function(t,e,a){var o=a(0),i=a(44);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var n={insert:"head",singleton:!1};o(i,n);t.exports=i.locals||{}},39:function(t,e,a){"use strict";var o=a(31);a.n(o).a},40:function(t,e,a){(e=a(1)(!1)).push([t.i,".demo-h5[data-v-138ef000]{height:100%;overflow-y:auto}.demo-h5[data-v-138ef000]::-webkit-scrollbar{display:none}\n",""]),t.exports=e},41:function(t,e,a){"use strict";var o=a(32);a.n(o).a},42:function(t,e,a){(e=a(1)(!1)).push([t.i,".dx-button[data-v-4088ee8f]{position:relative;display:inline-block;box-sizing:border-box;width:100%;height:44px;margin:0;padding:0;font-size:16px;line-height:1.2;text-align:center;padding:0 24px;border-radius:2px;cursor:pointer;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;-webkit-appearance:none}.dx-button[disabled='disabled'][data-v-4088ee8f]{cursor:not-allowed;opacity:0.6}.dx-button--primary[data-v-4088ee8f]{color:#fff;background-color:#3E87FF;border:1px solid #3E87FF}.dx-button--warning[data-v-4088ee8f]{color:#fff;background-color:#FD9439;border:1px solid #FD9439}.dx-button--danger[data-v-4088ee8f]{color:#fff;background-color:#FF5B5B;border:1px solid #FF5B5B}.dx-button--default[data-v-4088ee8f]{color:#666;background-color:#fff;border:1px solid #666}.dx-button--large[data-v-4088ee8f]{height:40px;font-size:16px;border-radius:40px}.dx-button--normal[data-v-4088ee8f]{height:30px;font-size:14px;border-radius:30px}.dx-button--mini[data-v-4088ee8f]{height:22px;font-size:12px;border-radius:22px}.dx-button--plain[data-v-4088ee8f]{background-color:#fff}.dx-button--plain.dx-button--primary[data-v-4088ee8f]{color:#3E87FF}.dx-button--plain.dx-button--warning[data-v-4088ee8f]{color:#FD9439}.dx-button--plain.dx-button--danger[data-v-4088ee8f]{color:#FF5B5B}\n",""]),t.exports=e},43:function(t,e,a){"use strict";var o=a(33);a.n(o).a},44:function(t,e,a){(e=a(1)(!1)).push([t.i,"header[data-v-efc4027e]{display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:56px;background-color:#fff;font-weight:600;font-size:17px;text-transform:capitalize}.dx-doc-demo-block[data-v-efc4027e]{padding:0 16px}.dx-doc-demo__title[data-v-efc4027e]{margin:0;padding:32px 16px 16px 0;color:rgba(69,90,100,0.6);font-weight:normal;font-size:14px;line-height:16px}.demo-button-row[data-v-efc4027e]{margin-bottom:12px;display:flex;justify-content:space-between}\n",""]),t.exports=e},47:function(t,e,a){"use strict";a.r(e);var o={name:"Button",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},plain:{type:Boolean,default:!1},text:{type:String,default:""},color:{type:String,default:""},disabled:{type:Boolean,default:!1}},data:function(){return{}},mounted:function(){},methods:{handleClick:function(t){this.$emit("click",t)},handleTouchStart:function(t){this.$emit("touchstart",t)},getStyle:function(){var t=this.$props,e=t.color,a=t.plain;if(e){var o={};return o.color=a?e:"#fff",a||(o.background=e),-1!==e.indexOf("gradient")?o.border=0:o.borderColor=e,o}}}},i=(a(41),a(5)),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:"dx-button "+(t.type?"dx-button--"+t.type:"")+" "+(t.size?"dx-button--"+t.size:"")+" "+(t.plain?"dx-button--plain":""),style:t.getStyle(),attrs:{disabled:t.disabled},on:{touchstart:t.handleTouchStart,click:t.handleClick}},[t._v(t._s(t.text)),t.text?t._e():t._t("default")],2)}),[],!1,null,"4088ee8f",null).exports;n.install=function(t){t.component("Dx"+n.name,n)};var r={name:"ButtonH5",components:{Button:n},data:function(){return{}},mounted:function(){},methods:{}},d=(a(43),Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[t._v("Button 按钮")]),t._v(" "),a("div",{staticClass:"dx-doc-demo-block"},[a("h2",{staticClass:"dx-doc-demo__title"},[t._v("按钮类型")]),t._v(" "),a("div",{staticClass:"demo-button-row"},[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary"}},[t._v("填充按钮")]),t._v(" "),a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"default"}},[t._v("default")]),t._v(" "),a("Button",{attrs:{type:"warning"}},[t._v("线框按钮")])],1),t._v(" "),a("Button",{staticStyle:{width:"106px"},attrs:{type:"danger"}},[t._v("线框按钮")])],1),t._v(" "),a("div",{staticClass:"dx-doc-demo-block"},[a("h2",{staticClass:"dx-doc-demo__title"},[t._v("描边模式")]),t._v(" "),a("div",{staticClass:"demo-button-row"},[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{plain:"",type:"primary"}},[t._v("填充按钮")]),t._v(" "),a("Button",{staticStyle:{"margin-right":"5px"},attrs:{plain:"",type:"default"}},[t._v("default")]),t._v(" "),a("Button",{attrs:{plain:"",type:"warning"}},[t._v("线框按钮")])],1),t._v(" "),a("Button",{staticStyle:{width:"106px"},attrs:{plain:"",type:"danger"}},[t._v("线框按钮")])],1),t._v(" "),a("div",{staticClass:"dx-doc-demo-block"},[a("h2",{staticClass:"dx-doc-demo__title"},[t._v("按钮尺寸")]),t._v(" "),a("div",{staticClass:"demo-button-row",staticStyle:{width:"70vw"}},[a("Button",{attrs:{type:"primary",size:"large"}},[t._v("大按钮")])],1),t._v(" "),a("div",{staticClass:"demo-button-row",staticStyle:{width:"50vw"}},[a("Button",{attrs:{type:"primary",size:"normal"}},[t._v("普通按钮")])],1),t._v(" "),a("div",{staticClass:"demo-button-row",staticStyle:{width:"30vw"}},[a("Button",{attrs:{type:"primary",size:"mini"}},[t._v("小按钮")])],1)]),t._v(" "),a("div",{staticClass:"dx-doc-demo-block"},[a("h2",{staticClass:"dx-doc-demo__title"},[t._v("禁用状态")]),t._v(" "),a("div",{staticClass:"demo-button-row"},[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",disabled:""}},[t._v("填充按钮")]),t._v(" "),a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"default",disabled:""}},[t._v("default")]),t._v(" "),a("Button",{attrs:{type:"danger",disabled:""}},[t._v("线框按钮")])],1)]),t._v(" "),a("div",{staticClass:"dx-doc-demo-block"},[a("h2",{staticClass:"dx-doc-demo__title"},[t._v("自定义颜色")]),t._v(" "),a("div",{staticClass:"demo-button-row"},[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",color:"#f65a41"}},[t._v("填充按钮")]),t._v(" "),a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"default",color:"#f65a41",plain:"",disabled:""}},[t._v("default")]),t._v(" "),a("Button",{attrs:{type:"danger",color:"linear-gradient(to right, #ff6034, #ee0a24)",disabled:""}},[t._v("线框按钮")])],1)])])}),[],!1,null,"efc4027e",null));e.default=d.exports},55:function(t,e,a){"use strict";a.r(e);var o={name:"H5",data:function(){return{}}},i=(a(39),a(5)),n=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-h5"},[e("router-view")],1)}),[],!1,null,"138ef000",null);e.default=n.exports}}]);