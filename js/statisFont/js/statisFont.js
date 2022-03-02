			(function(win){
				var getcount =function(strText,callback){
						var json={allCount:0,cnCount:0,enCount:0,numCount:0,puCount:0,spCount:0}
							json.allCount=strText.length;
						for(var i=0;i<strText.length;i++){
							var charCode=strText.charCodeAt(i)
							//判断汉子
							//if(charCode>255){
							if(/^[\u2E80-\u9FFF]+$/.test(strText.charAt(i))){
								json.cnCount++;
							}else if((charCode>=65&&charCode<=90)||(charCode>=97&&charCode<=122)){//判断英文a-z  A-Z
								json.enCount++;
							}else if(charCode>=48&&charCode<=57){//数字0-9
								json.numCount++;
							}else{
								json.puCount++;
							}
							if(charCode==32||charCode==160){//判断是空格  \r\t  是由换行符合回车符组成的  因为空格是属于符号
								json.spCount++;
							}
						}
						if(callback){
							return callback.call(json);
						}
						return json;
					}
				win.statisFont=getcount;
			})(window);