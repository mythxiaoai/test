/*统计字符插件
1.使用方法
	引用后，直接绑定在window对象下的statisFont拓展属性了
	statisFont（str,callback)
参数：	str:统计数据源
	callback：回调函数
		this.allCount	全部文字个数
		this.cnCount	中文汉字个数
		this.enCount	英文字母个数
		this.puCount	字符标点个数
		this.spCount	空格个数
返回值：json，也可以在回调函数中拿值做处理

Demo：//统计
			function statis(obj){
				var strText=$(obj).text();
				statisFont(strText,function(){
					$(".allCount").text(this.allCount);
					$(".cnCount").text(this.cnCount);
					$(".enCount").text(this.enCount);
					$(".numCount").text(this.numCount);
					$(".puCount").text(this.puCount);
					$(".spCount").text(this.spCount);
				});
			}
*/
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