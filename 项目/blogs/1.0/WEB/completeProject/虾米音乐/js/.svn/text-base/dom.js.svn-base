(function(win){
	var dom={
	
			//返回定位元素的Top距离 不管套多少层
			getTop:function (obj){
				var top = 0;
				while(obj){
					top+=obj.offsetTop;
					obj = obj.offsetParent;
				}
				return top;
			},
			//返回定位元素的Left距离 不管套多少层
			getLeft:function (obj){
				var left = 0;
				while(obj){
					left+=obj.offsetLeft;
					obj = obj.offsetParent;
				}
				return left;
			},
			//检验两个元素是否碰撞
			pengZhuang:function (dom1,dom2){
				var T1=dom1.offsetTop;
				var R1=dom1.offsetLeft+dom1.offsetWidth;
				var B1=dom1.offsetTop+dom1.offsetHeight;
				var L1=dom1.offsetLeft;

				var T2=dom2.offsetTop;
				var R2=dom2.offsetLeft+dom1.offsetWidth;
				var B2=dom2.offsetTop+dom1.offsetHeight;
				var L2=dom2.offsetLeft;
				if(T2>=B1||R2<=L1||B2<=T1||L2>=R1){
					return false;
				}else{
					return true;
				}
			},
			//获取碰撞数组中距离最近的dom
			_getMixPDom:function getMixPDom(dom,arr){
					//var mixDom=[dom,index,distance]
					var mixDom=[];
					for(var i in arr){
						var left=arr[i].offsetLeft-dom.offsetLeft;
						var top=arr[i].offsetTop-dom.offsetTop;
						var temp=Math.sqrt(left*left+top*top);
						mixDom.push({dom:arr[i],index:i,distance:temp});
					}
					//排序
					mixDom.sort(function(a,b){
						return a.distance-b.distance;
					});
					//想要其他值可以方便改
					return mixDom[0];
			},
			//对象混入
			/*
				target：目标，
				datajson：数据
				讲后面对象全部导入目标对象中
			*/
			mix:function(target,datajson){
				var args = Array.prototype.slice.call(arguments);
				if(args.length==1)return args[0];
				var i = 1 ;
				while(args[i]){//这里做为判断条件 取不到就返回false
					var temp =args[i];
					for(var j in temp){
						if(temp.hasOwnProperty(j)){
						target[j]=temp[j];
						}
					}
					i++;
				}
					return target;
			},
			/*
			//获取坐标位置  兼容IE678写法
			json.pageX  
			json.pageY  元素到页面顶端的距离
			json.scrollTop  滚动条的距离  当然不包括元素本身的clientHeight
			json.scrollLeft
			json.scrollHeight  滚动条的高度
			json.scrollWidth
			*/
			getXY:function(e){
				var json ={};
				if(e.pageX){
					json.pageX=parseInt(e.pageX);
					json.pageY=parseInt(e.pageY);
				}else{
					//scrollTop和scrollLeft
					if(document.body){
						json.scrollTop=document.body.scrollTop;
						json.scrollLeft=document.body.scrollLeft;
						json.scrollHeight=document.body.scrollHeight;
						json.scrollWidth=document.body.scrollWidth;
					}else{
						json.scrollTop=document.documentElement.scrollTop;
						json.scrollLeft=document.documentElement.scrollLeft;
						json.scrollHeight=document.documentElement.scrollHeight;
						json.scrollWidth=document.documentElement.scrollWidth;
					}
					json.pageX=parseInt(e.clinetX+json.scrollLeft);
					json.pageY=parseInt(e.clinetY+json.scrollTop);
				}
				return json;
			},
			//在元素中光标处插入内容
			insertText:function (obj,str) {
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
			},
			//移动光标至某个元素最后
			moveEnd:function(obj){
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
			}
		};
	return win.dom=dom;
})(window)