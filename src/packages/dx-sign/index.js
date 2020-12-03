import md5 from 'js-md5';
import urlUtils from '@/packages/url-utils/' 


/**
 * 对象参数加密
 * @param { Object } params 加密对象 
 * @param { String } key 密钥，默认 => 5aSn6LGh5Yy755Sf
 */
const signParams = (params={}, key='5aSn6LGh5Yy755Sf') => {
    const SIGN_KEY = {key: key};
    var str = `key=${SIGN_KEY.key}`
    var signParamArr = Object.keys(params).filter(v=>(params[v] || params[v]===0)).sort().map(v=>`${v}=${params[v]}`)
    signParamArr.push(str)
    var signParamStr = signParamArr.join('&')
    // console.log('加密前', signParamStr)
    // console.log('加密后', md5(signParamStr))
    return md5(signParamStr)
};

/**
 * 临时使用，兼容现有版本 get参数通过url直传 TODO，修改后
 * @param { string } method POST/GET 
 * @param { Object } params 
 * @param { string } url 请求url地址
 */
const tempSignParams = (method, params, url = '') => {
    const key = '5aSn6LGh5Yy755Sf';
    let obj = {}
    if(method == 'POST'){
        obj = {...params}; 
    } else if (method == 'GET'){
        const str = urlUtils.parseQueryString(url);
        obj = {...params, ...str };
    }
    signParams(obj, key)
}

export default {
    install: (vue)=>{
        Vue.prototype.$signParams = signParams
        Vue.prototype.$tempSignParams = tempSignParams
    }
}
export {
    signParams,
    tempSignParams
}