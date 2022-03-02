(function(win){
	var xaDialog = {
		//图标数据
		icon:{tip:"8",confirm:"1",success:"5",error:"12"},
		//默认参数
		defaults:{
			width:320,
			height:175,
			drag:true,
			overclose:true,//是否开启点击弹出层阴影部分淡出
			title:"提示",
			content:"请输入你的内容",
			icon:"tip",
			iconbg:"green",
			background:"#fff",
			callback:function(){},
			stext:"确定",
			ctext:"取消"
		},
		init:function(options){
			var opts = xaDialog.methods._mix(xaDialog.methods,xaDialog.defaults,xaDialog.icon,options);
			var dialogDom = opts.template(opts);
			opts._center(dialogDom);
			opts._resize(dialogDom);
			opts._events(dialogDom,opts);
			if(opts.drag)opts._drag(dialogDom);
			return dialogDom;
		},
		alert:function(options){
			var dialogDom = xaDialog.init(options);
			var cbtnDom = dialogDom.querySelectorAll(".dcancle")[0];
			cbtnDom.parentElement.removeChild(cbtnDom);
		},
		
		confirm:function(options){
			xaDialog.init(options);
		},

		
		prompt:function(options){
			//最好写好静态页面 
		},

		
		iframe:function(options){
			//嵌入页面 iframe
		}
	
	};

	//扩展事件	
	xaDialog.methods = {
		//模板可拓展
		template:function(opts){
			var dialogwin = document.getElementById("xa_dialog");
			if(dialogwin){
				document.body.removeChild(dialogwin.nextElementSibling);//删除盒子
				document.body.removeChild(dialogwin);关闭阴影层
			}else{
				dialogwin = document.createElement("div");
				dialogDom = document.createElement("div");
			}
			var html="<div class='tittle'>"+opts.title+"<i class='iconfont icon-cancel-font close fr'></i></div>"+
			"				<div class='content'>"+
			"					<i class='iconfont icon-"+opts[opts.icon]+" tip fl'></i>"+
			"					<div class='fl c_content'>"+opts.content+"</div>"+
			"				</div>"+
			"				<div class='btn'>"+
			"				<a href='javascript:;' class='dsure' draggable='false'><i class='iconfont icon-sure1'></i>"+opts.stext+"</a>"+
			"				<a href='javascript:;' class='dcancle' draggable='false'><i class='iconfont icon-cancel'></i>"+opts.ctext+"</a>"+
			"				</div>";
			dialogwin.id = "xa_dialogbox";
			dialogDom.id="xa_dialog";
			dialogDom.innerHTML = html;
			dialogDom.style.background = opts.background;
			dialogDom.querySelectorAll(".icon-"+opts[opts.icon]+"")[0].style.color=opts.iconbg;
			if(opts.width<320)opts.width = 320;
			if(opts.height<175)opts.height = 175;
			dialogDom.style.width = opts.width+"px";
			dialogDom.style.height = opts.height+"px";
			document.body.appendChild(dialogwin);
			document.body.appendChild(dialogDom);
			return dialogDom;
		},
		
		_center:function(dialogDom){//居中dialog
			var nl = (window.innerWidth - dialogDom.offsetWidth)/2;
			var nt = (window.innerHeight - dialogDom.offsetHeight)/2;
			dialogDom.style.top = nt+"px";
			dialogDom.style.left = nl+"px";
		},
		_resize :function(dialogDom){
			var obj = this;
			window.onresize = function(){
				obj._center(dialogDom);
			};
		},
		_events:function(dialogDom,opts){//按钮事件
			//找到三个按钮对象
			var sureDom = this.domClass(dialogDom,"dsure")[0];
			var cancleDom = this.domClass(dialogDom,"dcancle")[0];
			var closeDom = this.domClass(dialogDom,"close")[0];
			var overDom = dialogDom.previousElementSibling;
			
			//确定按钮事件
			sureDom.onclick = function(e){
				var e = e||window.event;
				$(dialogDom).animate({opacity:0,top:-400},function(){
					document.body.removeChild(dialogDom);//关闭盒子
					document.body.removeChild(overDom);//关闭阴影层
					if(opts.callback)opts.callback(true);
				});
			};
			
			//取消按钮事件
			cancleDom.onclick = function(e){
				var e = e||window.event;
				$(dialogDom).animate({opacity:0,top:-400},function(){
					document.body.removeChild(dialogDom);//关闭盒子
					document.body.removeChild(overDom);//关闭阴影层
					if(opts.callback)opts.callback(false);
				});
			};
			//关闭按钮事件
			closeDom.onclick = function(e){
				var e = e||window.event;
				$(dialogDom).animate({opacity:0,left:-400},function(){
						document.body.removeChild(dialogDom);//关闭盒子
						document.body.removeChild(overDom);//关闭阴影层
						if(opts.callback)opts.callback(false);
					});
			};
			
			if(opts.overclose){
				//点击阴影层关闭按钮事件
				overDom.onclick = function(){
					$(overDom).animate({opacity:0},function(){
						document.body.removeChild(dialogDom);//关闭盒子
						document.body.removeChild(overDom);//关闭阴影层
						if(opts.callback)opts.callback(false);
					});
				};
			}
		},
		_drag:function(dialogDom){
			$this=this;
			dialogDom.onmousedown = function(e){
				var ev = e || window.event;
				var pos = $this.getXY(ev);
				var nx =pos.x - dialogDom.offsetLeft;
				var ny =pos.y - dialogDom.offsetTop;
				var maxW = window.innerWidth - dialogDom.offsetWidth;
				var maxH = window.innerHeight - dialogDom.offsetHeight;
				document.onmousemove = function(e){
					var ev = e || window.event;
					var pos = $this.getXY(ev);
					var nleft = pos.x - nx;
					var ntop = pos.y - ny;
					if(nleft<=0)nleft= 0;
					if(ntop<=0)ntop= 0;
					if(nleft>=maxW)nleft = maxW;
					if(ntop>=maxH)ntop =maxH;
					dialogDom.style.left = nleft+"px";
					dialogDom.style.top = ntop+"px";
				};

				document.onmouseup = function(e){
					document.onmouseup = null;
					document.onmousemove  = null;
				};
			};
		},
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
		domClass:function (domPid,sClass){
			var aEle = (typeof domPid ==="string"?dom(domPid):domPid).getElementsByTagName('*');
			var arrs = [];
			for(var i=0;i<aEle.length;i++){
				if(aEle[i].className.indexOf(sClass)!=-1){
					arrs.push(aEle[i]);
				}
			}
			return arrs;
		},
		getXY:function(e){
			var ev = e || window.event;
			var x=0,y=0;
			if(ev.pageX){
				x = ev.pageX;
				y = ev.pageY;
			}else{
				//拿到scrollTop 和scrollLeft
				var sleft = 0,stop = 0;
				//ie678---
				if(document.documentElement){
					stop =document.documentElement.scrollTop;
					sleft = document.documentElement.scrollLeft;
				}else{
				//ie9+ 谷歌 
					stop = document.body.scrollTop;
					sleft = document.body.scrollLeft;
				}	
				x = ev.clientX + sleft;
				y = ev.clientY + stop;
			}
			return {x:x,y:y};
		}
	};
	win.xalertx = xaDialog.alert;
	win.xconfirmx = xaDialog.confirm;
	//win.xprompt = xaDialog.prompt;
	//win.xiframe = xaDialog.iframe;
	win.xalert=function(src){
		xaDialog.alert({content:src,
			icon:"tip",});
	}
	win.xconfirm=function(src,callback){
		xaDialog.confirm({content:src,
			icon:"confirm",callback:callback});
	}
	win.xsuccess=function(src,callback){
		xaDialog.alert({content:src,
			icon:"success"});
	}
	win.xerror=function(src,callback){
		xaDialog.alert({content:src,
			icon:"error",iconbg:"#f60"});
	}
})(window);