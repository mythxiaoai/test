//如果true进入的是localStorage否则不写或者false都是进入sessionStorage
		function setCache(key,value){
			var args = arguments;
			if(window.localStorage){
				var mark = args[2]?true:args[2];
				var storage = mark?localStorage:sessionStorage;
				storage.setItem("KK_"+key,value);
			}else{
				var period = args[3]?true:args[3];
				tzCookie.setCookie("KK_"+key,value,period);
			}
		};
	
		function getCache(key){
			if(window.localStorage){
				var args = arguments;
				var mark = args[1]?true:args[1];
				var storage = mark?localStorage:sessionStorage;
				return storage.getItem("KK_"+key);
			}else{
				return tzCookie.getCookie("KK_"+key);
			}
		}

		function removeCache(key){
			if(window.localStorage){
				var args = arguments;
				var mark = args[1]?true:args[1];
				var storage = mark?localStorage:sessionStorage;
				storage.removeItem("KK_"+key);
			}else{
				tzCookie.delCookie("KK_"+key);
			}
		}

		//设置cookie添加，修改，删除
		var tzCookie = {
			setCookie : function(name, value,time,option){
			    var str=name+'='+escape(value); 
			    var date = new Date();
			    date.setTime(date.getTime()+this.getCookieTime(time)); 
			    str += "; expires=" + date.toGMTString();
			    if(option){ 
			        if(option.path) str+='; path='+option.path; 
			        if(option.domain) str+='; domain='+option.domain; 
			        if(option.secure) str+='; true'; 
			    } 
			    document.cookie=str; 
			},
			getCookie : function(name){
				var arr = document.cookie.split('; '); 
			    if(arr.length==0) return ''; 
			    for(var i=0; i <arr.length; i++){ 
			        tmp = arr[i].split('='); 
			        if(tmp[0]==name) return unescape(tmp[1]); 
			    } 
			    return ''; 
			},
			delCookie : function(name){
				tzCookie.setCookie(name,'',-1); 
				var date=new Date();
		        date.setTime(date.getTime()-10000);
				document.cookie=name+"=; expires="+date.toGMTString()+"; path=/";
			},
			
			getCookieTime : function(time){
			   if(time<=0)return time;
			   var str1=time.substring(1,time.length)*1;
			   var str2=time.substring(0,1);
			   if (str2=="s"){
			        return str1*1000;
			   }
			   else if (str2=="m"){
			       return str1*60*1000;
			   }
			   else if (str2=="h"){
				   return str1*60*60*1000;
			   }
			   else if (str2=="d"){
			       return str1*24*60*60*1000;
			   }
			}
		};