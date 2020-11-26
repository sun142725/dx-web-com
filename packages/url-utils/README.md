# UrlUtils
### 介绍
针对url的处理，包括获取params全部参数跟指定参数

### 引入

```js
import { urlUtils } from 'dx-web-com'

// 获取微信回调所携带的用户code
// 当前页面地址    https://weixin.com?code=123&redirect_url=/home
urlUtils.getQueryString('code')
// return 123


// 获取指定地址的携带参数集合
urlUtils.parseQueryString(location.href)
// return {code:'123',redirect_url:'/home'}
```



