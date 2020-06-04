import md5 from 'js-md5';
/**
 * ajax请求参数加密
 * @param { Object } signParamStr request请求参数 
 */
const signParams = (params={}, key='5aSn6LGh5Yy755Sf') => {
    const SIGN_KEY = {key: key};
    var str = `key=${SIGN_KEY.key}`
    var signParamArr = Object.keys(params).filter(v=>params[v]).sort().map(v=>`${v}=${params[v]}`)
    signParamArr.push(str)
    var signParamStr = signParamArr.join('&')
    // console.log('加密前', signParamStr)
    // console.log('加密后', md5(signParamStr))
    return md5(signParamStr)
};
export default {
    install: (vue)=>{
        Vue.prototype.$dxSign = signParams
    }
}
export {
    signParams 
}