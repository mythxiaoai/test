/*工具类*/
/**
 * 判断非空
 * 
 * @param val
 * @returns {Boolean}
 */
function isEmpty(val) {
	val = $.trim(val);
	if (val == null)
		return true;
	if (val == undefined || val == 'undefined')
		return true;
	if (val == "")
		return true;
	if (val.length == 0)
		return true;
	if (!/[^(^\s*)|(\s*$)]/.test(val))
		return true;
	return false;
}

/*非空判断*/
function isNotEmpty(val) {
	return !isEmpty(val);
}
/*对页面元素的操作*/
var dom={
	//元素居中  js对象
	center:function(dom,str){
		dom.style.left=document.documentElement.clientWidth/2-dom.offsetWidth/2+"px";
		if(str!="top"){
			dom.style.top=document.documentElement.clientHeight/2-dom.offsetHeight/2+"px";
		}else{
			dom.style.top=(document.documentElement.clientHeight-dom.offsetHeight)/3+"px";
		}
	}
};
/*对象拓展*/
/**
 * 对Date的扩展，将 Date 转化为指定格式的String 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
 * 可以用 1-2 个占位符 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) eg: (new
 * Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 (new
 * Date()).format("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04 (new
 * Date()).format("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04 (new
 * Date()).format("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04 (new
 * Date()).format("yyyy-M-d h:m:s.S q ") ==> 2006-7-2 8:9:4.18
 */
Date.prototype.format = function(fmt) {
	var o = {
		"Y+" : this.getFullYear(),
		"M+" : this.getMonth() + 1,
		// 月份
		"d+" : this.getDate(),
		// 日
		"h+" : this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
		// 小时
		"H+" : this.getHours(),
		// 小时
		"m+" : this.getMinutes(),
		// 分
		"s+" : this.getSeconds(),
		// 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3),
		// 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	var week = {
		"0" : "日",
		"1" : "一",
		"2" : "二",
		"3" : "三",
		"4" : "四",
		"5" : "五",
		"6" : "六"
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	}
	if (/(E+)/.test(fmt)) {
		fmt = fmt
				.replace(
						RegExp.$1,
						((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f"
								: "/u5468")
								: "")
								+ week[this.getDay() + ""]);
	}
	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
};
//生成uuid
function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; 
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); 
                                                        
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid.replace(new RegExp("-","igm"),"");
}


//在元素中光标处插入内容
function insertText(obj,str) {
	if (document.selection) {
		var sel = document.selection.createRange();
		sel.text = str;
	} else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
		var startPos = obj.selectionStart,
			endPos = obj.selectionEnd,
			cursorPos = startPos,
			tmpStr = obj.value;
		obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
		cursorPos += str.length;
		obj.selectionStart = obj.selectionEnd = cursorPos;
	} else {
		obj.value += str;
	}
};
//移动光标至某个元素最后
function moveEnd(obj){
	obj.focus();
	var len = obj.value.length;
	if (document.selection) {
		var sel = obj.createTextRange();
		sel.moveStart('character',len);
		sel.collapse();
		sel.select();
	} else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
		obj.selectionStart = obj.selectionEnd = len;
	}
};

//图片的等比例缩放
function resizeImg(img,iwidth,iheight){ 
    var image= img;  
    var boxWH = {};
    if(image.width>0 && image.height>0){
     	boxWH.width=image.width;
     	boxWH.height=image.height;	    
        if(boxWH.width>iwidth){    
          	boxWH.height = (boxWH.height*iwidth)/boxWH.width;  
            boxWH.width = iwidth;   
        }

        if(boxWH.height>iheight){    
          	boxWH.width = (boxWH.width*iheight)/boxWH.height;;   
            boxWH.height = iheight;	             	 
         }    	           
    }   
    return boxWH;
} ;
