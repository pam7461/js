let info = navigator.userAgent.toLowerCase();
if(info.indexOf('windows')>=0){
    // windows
    location.href='file:///C:/Users/yh359/Documents/%EC%A1%B0%ED%99%98%EC%A4%80/index.html';
}else{
    // mobile
    location.href='file:///C:/Users/yh359/Documents/%EC%A1%B0%ED%99%98%EC%A4%80/m.index.html';
}