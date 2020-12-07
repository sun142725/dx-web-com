<template>
  <div>
    <span class="weui-switch" :class="{'weui-switch-on' : me_checked}" :value="value" @click="toggle"></span>
  </div>
</template>

<script>
  export default {
    name: "Switch",
    props: {
      value: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        me_checked: this.value
      }
    },
    watch: {
      me_checked(val) {
        this.$emit('input', val);
      }
    },
    methods: {
      toggle() {
        this.me_checked = !this.me_checked;
      }
    }
  }
</script>

<style lang="scss">
  .weui-switch {
    display: block;
    position: relative;
    width: 45px;
    height: 25px;
    outline: 0;
    border-radius: 16px;
    box-sizing: border-box;
    background-color: #999999;
    transition: background-color 0.1s, border 0.1s;
    cursor: pointer;
  }

  .weui-switch:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 25px;
    border-radius: 15px;
    background-color: #999999;
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  }

  .weui-switch:after {
    content: " ";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 23px;
    height: 23px;
    border-radius: 15px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }

  .weui-switch-on {
    border-color: #3E87FF;
    background-color: #3E87FF;
  }

  .weui-switch-on:before {
    border-color: #3E87FF;
    background-color: #3E87FF;
  }

  .weui-switch-on:after {
    transform: translateX(20px);
  }
</style>
