const { delete } = require("vue/types/umd")

class Event {
    constructor(){
        this.handlers = {}
    }
    '$on'(type, handle) {
        if(!(type in this.handlers)){
            this.handlers[type] = []
        }
        this.handlers[type].push(handle)
    }
    '$emit'(type, ...params){
        // 若没有注册该事件则抛出错误
        if (!(type in this.handlers)) {
            return new Error('未注册事件,事件类型：' + type)
        }
        this.handlers[type].forEach(handle=>{
            handle(...params)
        })
    }
    '$remove'(type, handle){
        // 若没有注册该事件则抛出错误
        if (!(type in this.handlers)) {
            return new Error('未注册事件,事件类型：' + type)
        }
        if(!handle){
            delete this.handlers[type]
        } else {
            const index = this.handlers[type].findIndex(ele => ele === handler)
            // 抛出异常事件
            if (index === -1) {
                return new Error('无该绑定事件, 事件：', idx)
            }
            // 移除事件
            this.handlers[type].splice(index, 1)
            if (this.handlers[type].length === 0) {
                delete this.handlers[type]
            }
        }
    }
}