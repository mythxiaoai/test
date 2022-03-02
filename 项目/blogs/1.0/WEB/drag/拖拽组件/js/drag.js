(function(win){
		var index=0;//全局用来控制显示层级关系
		var drag={
			default:{
				dir:"",//方向 x  y
				proxyChild:"",//代理子类的下标  从0开始
				ghost:"",//是否开启镜像  true  false
				callbackDur:"",//mousemove过程中的回调函数  
				callbackEnd:""//mouseup停止拖拽后的回调函数
				},
			init:function(json){
				//混入
				var json=this._mix({},this.default,json);
				var $this=this;
				var result={};
				var mainDom=json.dom;
				if(json.proxyChild||json.proxyChild=="0"){
					json.dom=json.dom.children[json.proxyChild]
				}
				json.dom.onmousedown=function(e){
					var e= e || window.event;
					var pos=$this._getXY(e);
					var x=pos.pageX-mainDom.offsetLeft;
					var y=pos.pageY-mainDom.offsetTop;
					//处理层级关系
					mainDom.style.zIndex=++index;
					var ghostDom = null;
					if(json.ghost){
						ghostDom = $this._getGhost(mainDom)
						mainDom.offsetParent.appendChild(ghostDom);
					};
					document.onmousemove=function(e){
						var e= e || window.event;
						pos=$this._getXY(e);
						//边界判断 拖拽点的元素的offsetWidth和offsetHeight
						var l,t;
						var l=pos.pageX-x;
						var t=pos.pageY-y;
						if(l<0)l=0;
						if(t<0)t=0;
						//这里有点特殊   ie的body.clientHeight是等于0的  如果等于0就让它找上一级的html.clientHeight
						if(mainDom.offsetParent.clientHeight){
							if(l>mainDom.offsetParent.clientWidth-mainDom.offsetWidth){
								l=mainDom.offsetParent.clientWidth-mainDom.offsetWidth;
							}
							if(t>mainDom.offsetParent.clientHeight-mainDom.offsetHeight){
								t=mainDom.offsetParent.clientHeight-mainDom.offsetHeight;
							}
						}else{
							if(l>mainDom.offsetParent.parentElement.clientWidth-mainDom.offsetWidth){
								l=mainDom.offsetParent.parentElement.clientWidth-mainDom.offsetWidth;
							}
							if(t>mainDom.offsetParent.parentElement.clientHeight-mainDom.offsetHeight){
								t=mainDom.offsetParent.parentElement.clientHeight-mainDom.offsetHeight;
							}
						}
						if(json.dir=="x"){
							(ghostDom||mainDom).style.left=l+"px";
						}else if(json.dir=="y"){
							(ghostDom||mainDom).style.top=t+"px";
						}else{
							(ghostDom||mainDom).style.left=l+"px";
							(ghostDom||mainDom).style.top=t+"px";
						}
						result.left=l;
						result.top=t;
						result.dom=mainDom;
						if(json.callbackDur)json.callbackDur.call(result);
					}
					document.onmouseup=function(){
						if(json.ghost){
							mainDom.offsetParent.removeChild(ghostDom);
							mainDom.style.left=result.left+"px";
							mainDom.style.top=result.top+"px";
						};
						if(json.callbackEnd)json.callbackEnd.call(result);
						this.onmousemove=null;
						this.onmouseup=null;
					}
				}
			},
			//获取拖拽镜像
			_getGhost:function(mainDom){
				var cloneDom = mainDom.cloneNode(true);
				cloneDom.style.opacity= "0.5";
				return cloneDom;
			},
			//对象混入
			/*
				target：目标，
				datajson：数据
				讲后面对象全部导入目标对象中
			*/
			_mix:function(target,datajson){
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
			//获取坐标位置  兼容性写法
			/*
			json.pageX  
			json.pageY  元素到页面顶端的距离
			json.scrollTop  滚动条的距离  当然不包括元素本身的clientHeight
			json.scrollLeft
			json.scrollHeight  滚动条的高度
			json.scrollWidth
			*/
			_getXY:function(e){
				var e = e || window.event;
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
			//检查是否碰撞
			pengzhuang(dom1,dom2){
				var L = dom1.offsetLeft;
				var T = dom1.offsetTop;
				var B = dom1.offsetTop + dom1.offsetHeight;
				var R = dom1.offsetLeft + dom1.offsetWidth;

				var L2 = dom2.offsetLeft;
				var T2 = dom2.offsetTop;
				var B2 = dom2.offsetTop + dom2.offsetHeight;
				var R2 = dom2.offsetLeft + dom2.offsetWidth;
				//没有碰撞情况
				if(L > R2 || T > B2 || R <L2 || B < T2){
					return true;
				}else{
					return false;
				}
			};
		};
		win.drag=drag;
		})(window)