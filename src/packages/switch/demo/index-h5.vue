<template>
<div>
    <header>Switch 按钮</header>
    <div class="dx-doc-demo-block">
        <h2 class="dx-doc-demo__title">按钮类型</h2>
        <div class="demo-button-row">
            <dx-switch :value="true" style="margin-right:5px"></dx-switch>
            <dx-switch :value="true" style="margin-right:5px"></dx-switch>
            <Switch>线框按钮</Switch>
        </div>
    </div>
</div>
</template>
<script>
import DxSwitch from '../index'
export default{
    name : 'SwitchH5',
    components: { DxSwitch },
    data:function(){
        return {}
    },
    mounted(){

    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
header{
        display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 56px;
    background-color: #fff;
    font-weight: 600;
    font-size: 17px;
    text-transform: capitalize;
}
.dx-doc-demo-block{
    padding: 0 16px;
}
.dx-doc-demo__title{
    margin: 0;
    padding: 32px 16px 16px 0;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
}
.demo-button-row{
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
}
</style>