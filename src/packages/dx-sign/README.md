# Sign
### 介绍
```
大象的接口加密处理
```
### 引入

```js
import Vue from 'vue';
import { signParams, tempSignParams } from 'dx-web-com'
Vue.use(signParams)
Vue.use(tempSignParams)

// 加密对象
signParams({"channelCode": "10002", "code": "123456"})
// 


// 大象现有加密 根据请求方式区分   get处理链接后面直接带参的情况
tempSignParams("GET", {}, "/getList?code=123")
// 
```






