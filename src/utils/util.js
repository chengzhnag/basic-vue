export function getUrlKey(name){
　　var reg = new RegExp('(^|&)'+name+'=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if (r != null){
        return decodeURI(r[2]);
    }
    return "";
}
// 时间格式化
export function formatDate(date, fmt='yyyy/MM/dd') {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}
// 按中文拼音排序
export function sortCN(arr,key) {
    key= key ||'name'
    if(arr && arr.length > 0){
        arr.sort(function(a,b){
            return a[key].localeCompare(b[key])
        })
    }
    return arr;
}