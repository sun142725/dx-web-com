<template>
  <div>
    <div class="image-text-u-d">
        <div class="doctor-info-pic">
            <img :src="doctorPic" />
        </div>
        <div class="doctor-info-content">
            1211221
        </div>
    </div>
  </div>
</template>

<script>
import { Tag, Button } from 'vant'
  export default {
    name: "ImageTextUD",
    components: { Tag, Button },
    props: {
      doctorPic: {
        type: String,
        default: 'https://img.yzcdn.cn/vant/logo.png'
      },
      title: {
        type: String,
        default: '大象医生'
      },
      subTitle: {
        type: String,
        default: '大象医生互联网医院'
      },
      doctorTags: {
        type: Array,
        default: (value)=>{
          console.log('value', value)
          return ['宝中堂']
        }
      },
      remark: {
        type: String,
        default: '医生没有填写信息'
      },
      price: {
        type: [String, Number],
        default: '0.00'
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
      btnClick(item) {
        this.$emit('btnClick', item)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .doctor-info{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
      background-color: #fff;
      padding-top: .3rem;
    .doctor-info-pic{
      width: 1.02rem;
      height: 1.02rem;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #f6f6f6;
      img{
        width: 100%;
      }
    }
    .doctor-info-content{
      width: 100px; // 默认宽度
      flex: 1;
        text-align: left;
        padding-left: .3rem;
        line-height: 1.5;
      .title{
        color:#333;
        font-size: .36rem;
      }
      .sub-title{
        color: #333;
        font-size: .28rem;
        padding: .05rem 0 .1rem;
      }
      .remark{
        color: #666;
        font-size: .24rem;
        padding: .1rem 0;
      }
      .control-container{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem 0;
        border-top: 1px solid #E9E9E9;
        .left{
          font-size: .28rem;
          color:#222;
        }
      }
    }
  }
</style>
<style lang="scss">
  .doctor-info{
    .van-button{
      height: .6rem;
    }
  }
</style>
