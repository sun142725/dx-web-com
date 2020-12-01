<template>
  <button 
    :disabled="disabled"
    :class="`dx-button ${type ? 'dx-button--'+type : ''} ${size ? 'dx-button--'+size : ''} ${plain ? 'dx-button--plain' : ''}`"
    :style="getStyle()"
    @touchstart="handleTouchStart"
    @click="handleClick">{{text}}<slot v-if="!text"></slot></button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      type: {
        type: String,
        default: 'default' //  primary warning danger default
      },
      size: {
        type: String,
        default: 'normal' // large small mini
      },
      plain: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
      }
    },
    mounted(){
      console.log(this)
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e)
      },
      handleTouchStart(e){
        this.$emit('touchstart', e)
      },
      getStyle(){
        const { color, plain } = this.$props
        if(color){
          const style = {};
          style.color = plain ? color : "#fff";
          if(!plain){
             style.background = color;
          }
          if (color.indexOf('gradient') !== -1) {
            style.border = 0;
          } else {
            style.borderColor = color;
          }
          return style
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dx-button{
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
    padding: 0 24px;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
    -webkit-appearance: none;
    &[disabled='disabled']{
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
  // 类型
  .dx-button--primary{
    color: #fff;
    background-color:#3E87FF;
    border: 1px solid #3E87FF;
  }
  .dx-button--warning{
    color: #fff;
    background-color:#FD9439;
    border: 1px solid #FD9439;
  }
  .dx-button--danger{
    color: #fff;
    background-color:#FF5B5B;
    border: 1px solid #FF5B5B;
  }
  .dx-button--default{
    color: #666;
    background-color:#fff;
    border: 1px solid #666;
  }
  .dx-button--large{
    height: 40px;
    font-size: 16px;
    border-radius: 40px;
  }
  .dx-button--normal{
    height: 30px;
    font-size: 14px;
    border-radius: 30px;
  }
  .dx-button--mini{
    height: 22px;
    font-size: 12px;
    border-radius: 22px;
  }
  .dx-button--plain{
    background-color: #fff;
  }
  .dx-button--plain.dx-button--primary{
    color: #3E87FF;
  }
  .dx-button--plain.dx-button--warning{
    color:#FD9439;
  }
  .dx-button--plain.dx-button--danger{
    color:#FF5B5B;
  }
  

</style>
