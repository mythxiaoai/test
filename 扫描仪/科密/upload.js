document.write("<script language=javascript src='jquery-1.4.4.min.js'></script>");


var xmlHttpRequest;
var ot; //
var oloaded;

function createXmlHttpRequest() {
    if (window.ActiveXObject) { 
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) { 
        return new XMLHttpRequest();
    }
}


function dataURLtoFile(dataurl, filename) {

    //var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    //bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    var bstr = atob(dataurl);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    var suffix = filename.substring(filename.length - 3, filename.length);

    if (suffix == "jpg" || suffix == "JPG")
        return new File([u8arr], filename, { type: 'image/jpg' });
    if (suffix == "png" || suffix == "PNG")
        return new File([u8arr], filename, { type: 'image/png' });
    if (suffix == "tif" || suffix == "TIF")
        return new File([u8arr], filename, { type: 'image/tiff' });
    if (suffix == "pdf" || suffix == "PDF")
        new File([u8arr], filename, { type: 'application/pdf' });

    return new File([u8arr], filename, { type: 'application/jpg' });
}



function progressFunction(evt) {

    var progressBar = document.getElementById("progressBar");
    var percentageDiv = document.getElementById("percentage");
    // event.total是需要传输的总字节，event.loaded是已经传输的字节。如果event.lengthComputable不为真，则event.total等于0
    if (evt.lengthComputable) {//
        progressBar.max = evt.total;
        progressBar.value = evt.loaded;
        percentageDiv.innerHTML = Math.round(evt.loaded / evt.total * 100) + "%";
    }

    var time = document.getElementById("time");
    var nt = new Date().getTime(); //获取当前时间
    var pertime = (nt - ot) / 1000; //计算出上次调用该方法时到现在的时间差，单位为s
    ot = new Date().getTime(); //重新赋值时间，用于下次计算

    var perload = evt.loaded - oloaded; //计算该分段上传的文件大小，单位b   
    oloaded = evt.loaded; //重新赋值已上传文件大小，用以下次计算

    //上传速度计算
    var speed = perload / pertime; //b/s
    var bspeed = speed;
    var units = 'b/s'; //单位名称
    if (speed / 1024 > 1) {
        speed = speed / 1024;
        units = 'k/s';
    }
    if (speed / 1024 > 1) {
        speed = speed / 1024;
        units = 'M/s';
    }
    speed = speed.toFixed(1);
    //剩余时间
    var resttime = ((evt.total - evt.loaded) / bspeed).toFixed(1);
    time.innerHTML = '，速度：' + speed + units + '，剩余时间：' + resttime + 's';
    if (bspeed == 0)
        time.innerHTML = '上传已取消';
}



//上传成功响应
function uploadComplete(evt) {
    //    alert(evt.target.responseText);
    alert("上传成功");
}



//上传失败
function uploadFailed(evt) {
    //alert(evt.target.responseText);
    //alert("上传失败");
}



//取消上传
function cancleUploadFile() {
    xhr.abort();
}



//function ResultFun() {
//    if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
//        var iRestStr = xmlHttpRequest.responseText;
//        alert(iRestStr);
//    }
//}



//??????????
function UpladFile(url, base64data, fileName, callback) {

    var fileObj = dataURLtoFile(base64data, fileName); //base64数据转为文件对象
    //var murl = "http://localhost:8080/MyServletTest/upload"; 
    var fm = document.forms[0];
    var form = new FormData(fm); // FormData ?
    form.append("file", fileObj);
    xmlHttpRequest = createXmlHttpRequest();  // XMLHttpRequest 
    xmlHttpRequest.open("post", url, true); //post
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var iRestStr = xmlHttpRequest.responseText;
            callback(iRestStr);
            //alert("ok");
        }
    };
    //    xmlHttpRequest.onload = uploadComplete;
    //    xmlHttpRequest.onerror = uploadFailed; 
    //    xmlHttpRequest.upload.onprogress = progressFunction; 
    //    xmlHttpRequest.upload.onloadstart = function () {
    //        ot = new Date().getTime();   
    //        oloaded = 0; 
    //    };
    xmlHttpRequest.send(form); 
}