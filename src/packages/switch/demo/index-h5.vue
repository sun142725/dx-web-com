<template>
<div>
    <header>Button 按钮</header>
    <div class="dx-doc-demo-block">
        <h2 class="dx-doc-demo__title">按钮类型</h2>
        <div class="demo-button-row">
            <Button type="primary" style="margin-right:5px">填充按钮</Button>
            <Button type="default" style="margin-right:5px">default</Button>
            <Button type="warning">线框按钮</Button>
        </div>
        <Button type="danger" style="width:106px">线框按钮</Button>
    </div>
    <div class="dx-doc-demo-block">
        <h2 class="dx-doc-demo__title">描边模式</h2>
        <div class="demo-button-row">
            <Button plain type="primary" style="margin-right:5px">填充按钮</Button>
            <Button plain type="default" style="margin-right:5px">default</Button>
            <Button plain type="warning">线框按钮</Button>
        </div>
        <Button plain type="danger" style="width:106px">线框按钮</Button>
    </div>
    <div class="dx-doc-demo-block">
        <h2 class="dx-doc-demo__title">按钮尺寸</h2>
        <div class="demo-button-row" style="width: 70vw">
            <Button type="primary" size="large">大按钮</Button>
        </div>
        <div class="demo-button-row" style="width: 50vw">
            <Button type="primary" size="normal">普通按钮</Button>
        </div>
        <div class="demo-button-row" style="width: 30vw">
            <Button type="primary" size="mini">小按钮</Button>
        </div>
    </div>
    <div class="dx-doc-demo-block">
        <h2 class="dx-doc-demo__title">禁用状态</h2>
        <div class="demo-button-row">
            <Button type="primary" disabled style="margin-right:5px">填充按钮</Button>
            <Button type="default" disabled style="margin-right:5px">default</Button>
            <Button type="danger" disabled>线框按钮</Button>
        </div>
    </div>
    <div class="dx-doc-demo-block">
        <h2 class="dx-doc-demo__title">自定义颜色</h2>
        <div class="demo-button-row">
            <Button type="primary" color="#f65a41" style="margin-right:5px">填充按钮</Button>
            <Button type="default" color="#f65a41" plain disabled style="margin-right:5px">default</Button>
            <Button type="danger" color="linear-gradient(to right, #ff6034, #ee0a24)" disabled>线框按钮</Button>
        </div>
    </div>
</div>
</template>
<script>
import Button from '../index'
export default{
    name : 'ButtonH5',
    components: { Button },
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