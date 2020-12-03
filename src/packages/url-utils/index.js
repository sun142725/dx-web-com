import md5 from 'js-md5';
function parseQueryString (url) {
    
}
const urlUtils = {
    // 指定url参数转json对象
    parseQueryString: function(url){
        var reg_url = /^[^\?]+\?([\w\W]+)$/,
        reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
        arr_url = reg_url.exec(url),
        ret = {};
        if (arr_url && arr_url[1]) {
            var str_para = arr_url[1], result;
            while ((result = reg_para.exec(str_para)) != null) {
                ret[result[1]] = result[2];
            }
        }
        return ret;
    },
    // 获取页面地址url的指定参数
    getQueryString: function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    // 
    stringify: function(){

    }
}

export default {
    install: (vue)=>{
        Vue.prototype.$urlUtils = signParams
    }
}
export {
    urlUtils 
}