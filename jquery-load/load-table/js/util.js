/*工具类*/

/**
 * 将form里的表单元素序列化成{"username":"小艾","hobby":"2,3"}格式
 * @param {Object} formDom
 */
function getFromJson(formDom){
	var formElements = formDom.elements;
	var json = {};
	for(var i=0,len=formElements.length;i<len;i++){
		var type = formElements[i].type.toLowerCase();
		if(type!="button" && type!="submit" && type!="reset"){
			if(type=="checkbox" && formElements[i].checked){
				var value = json[formElements[i].name]||formElements[i].value;
				if(formElements[i].name in json){
					value +=","+formElements[i].value;	
				}
				json[formElements[i].name] = value;
			}else if(type=="radio" && formElements[i].checked){
				json[formElements[i].name] = formElements[i].value;
			}

			if(type!="radio" && type!="checkbox"){
				json[formElements[i].name] = formElements[i].value;
			}
		}
	}
	return json;
};

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

/**
 * 获取URL的参数
 * addOrUpdate.html?opt=update    ==>GetQueryString("opt")  ==>update
 * @param {Object} name
 */
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
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
//数组是否包含
Array.prototype.contains = function ( needle ) {
  for (i in this) {
    if (this[i] == needle) return true;
  }
  return false;
}
//获取网络安全色
function getRandomSafeColor() {
    var base = ['00','33','66','99','CC','FF'];     //基础色代码
    var len = base.length;	                       //基础色长度
    var bg = new Array();                         //返回的结果
    var random = Math.ceil(Math.random()*215+1);    //获取1-216之间的随机数
    var res;
    for(var r = 0; r < len; r++){
        for(var g = 0; g < len; g++){
            for(var b = 0; b < len; b++){
                bg.push('#'+base[r].toString()+base[g].toString()+base[b].toString());
            }  
        };  
    };
    for(var i=0;i<bg.length;i++){
        res =  bg[random];
    }
    return res;
}

//简单数据变成父子
function simpleToPS(arr,leave=1){
  let markinto=true;
  for(let i=0;i<data.length;i++){
    for(let k=0;k<arr.length;k++){
      if(data.length>0){
        if(arr[k].id==data[i].pid){
          arr[k].leave = leave;
          arr[k].children.push(data[i]);
          data.splice(i,1);
          i--;
          markinto = false;
          break;
        }
      }
      if(arr[k].children.length>0&&markinto){
        arrpush(arr[k].children,++leave);
      }
    }
  }
}