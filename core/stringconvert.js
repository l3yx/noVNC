//https://blog.csdn.net/xyzdwf/article/details/82220987

//ArrayBuffer转字符串
export function ab2str(u,f) {
    var b = new Blob([u]);
    var r = new FileReader();
    r.readAsText(b, 'utf-8');
    r.onload = function (){if(f)f.call(null,r.result)}
}

//字符串转字符串ArrayBuffer
export function str2ab(s,f) {
    var b = new Blob([s],{type:'text/plain;charset=utf-8'});
    var r = new FileReader();
    r.readAsArrayBuffer(b);
    r.onload = function (){if(f)f.call(null,r.result)}
}