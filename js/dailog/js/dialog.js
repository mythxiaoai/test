/*组件*/
/*
	时间：2016-10-12
	版本：1.0
	作者：小艾
	弹窗组件
	调用:
	win.xalert("cont");//警告框
	win.xconfirm("cont","点击确认的回调函数--function");//确认框
*/
(function(win){
		var xaDialog = {
			//图标数据
			//默认参数
			defaults:{
				width:320,
				height:175,
				overclose:false,//是否开启点击弹出层阴影部分淡出
				title:"提示",
				content:"调用的时候没写内容哦 ~",
				callback:function(){},
				stext:"确定",
				ctext:"取消"
			},
			init:function(options){
				var opts = xaDialog.methods._mix(xaDialog.methods,xaDialog.defaults,options);
				var dialogDom = opts.template(opts);
				opts._center(dialogDom);
				opts._resize(dialogDom);
				opts._events(dialogDom,opts);
				opts._drag(dialogDom);
				return dialogDom;
			},
			alert:function(options){
				var dialogDom = xaDialog.init(options);
				var cbtnDom = dialogDom.getElementsByClassName("dcancle")[0];
				cbtnDom.parentElement.removeChild(cbtnDom);
			},
			confirm:function(options){
				this.init(options);
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
				/*删除盒子关闭阴影层*/
				document.body.removeChild(dialogwin.nextElementSibling);
				document.body.removeChild(dialogwin);
			}else{
				dialogwin = document.createElement("div");
				dialogDom = document.createElement("div");
			}
		var html="<div id='xa_dialog' style='background:linear-gradient( to bottom,#30363F 0%,#1F2329 100%); min-width: 320px; min-height: 175px;border-radius: 5px;position:fixed;z-index:1002;'>"+
			"  			<div class='tittle' style='height:35px;line-height: 35px;padding-left: 5px;color:#fff;border-bottom:1px solid #222;cursor:move'>"+opts.title+
			"				<a class='xa_close' href='javascript:;' title='关闭' style='display:inline-block;width:30px;float:right;text-align: center;' onmouseover='this.style.opacity='.8';' onmouseout='this.style.opacity='1';'>"+
			"					<span style='display:inline-block;height: 10px;width: 10px;background: #FF2531;border-radius: 50%;'></span>"+
			"				</a>"+
			"			</div>"+
			"			<div class='cont' style='padding:10px 15px 50px 15px;color:#fff;text-align: justify;font-size: 14px;letter-spacing:1px;'>"+opts.content+
			"			</div>"+
			"			<div class='btns'  style='position: absolute;bottom: 0;height: 40px;line-height:35px;width: 100%;border-radius: 0 0 5px 5px;'>"+
			"				<div class='btn-group-xs' style='text-align: center;'>"+
			"					<button class='btn btn-danger dsure' style='border-radius: 15px;padding:2px 15px;'>"+opts.stext+"</button>"+
			"					<button class='btn btn-danger dcancle' style='border-radius: 15px;padding:2px 15px;margin-left: 10px;'>"+opts.ctext+"</button>"+
			"				</div>"+
			"			</div>"+
			"		</div>";
			dialogwin.id = "xa_dialogbox";
			dialogwin.style.cssText="position:fixed;height:100%;width:100%;top:0px;left:0;background:rgba(0,0,0,0.5);z-index:1001;";
			dialogDom = document.createElement("div");
			dialogDom.innerHTML = html;
			dialogDom = dialogDom.children[0];
			dialogDom.style.width = opts.width+"px";
			dialogDom.style.height = opts.height+"px";
			document.body.appendChild(dialogwin);
			document.body.appendChild(dialogDom);
			return dialogDom;
		},
		/*居中dialog*/
		_center:function(dialogDom){
			var nl = (window.innerWidth - dialogDom.offsetWidth)/2;
			var nt = (window.innerHeight - dialogDom.offsetHeight)/3;
			dialogDom.style.top = nt+"px";
			dialogDom.style.left = nl+"px";
		},
		_resize :function(dialogDom){
			var obj = this;
			window.onresize = function(){
				obj._center(dialogDom);
			};
		},
		/*按钮事件*/
		_events:function(dialogDom,opts){
			/*找到三个按钮对象*/
			var sureDom = this.domClass(dialogDom,"dsure")[0];
			var cancleDom = this.domClass(dialogDom,"dcancle")[0];
			var closeDom = this.domClass(dialogDom,"close")[0];
			var overDom = dialogDom.previousElementSibling;
			/*确定按钮事件*/
			sureDom.onclick = function(e){
				var e = e||window.event;
				$(dialogDom).animate({opacity:0,top:-400},function(){
					document.body.removeChild(dialogDom);
					document.body.removeChild(overDom);
					if(opts.callback)opts.callback();
				});
			};
			
			/*取消按钮事件*/
			cancleDom.onclick = function(e){
				var e = e||window.event;
				$(dialogDom).animate({opacity:0,top:-400},function(){
					document.body.removeChild(dialogDom);
					document.body.removeChild(overDom);
				});
			};
			/*关闭按钮事件*/
			closeDom.onclick = function(e){
				var e = e||window.event;
				$(dialogDom).animate({opacity:0,left:-400},function(){
						document.body.removeChild(dialogDom);
						document.body.removeChild(overDom);
					});
			};
			
			if(opts.overclose){
				/*点击阴影层关闭按钮事件*/
				overDom.onclick = function(){
					$(overDom).animate({opacity:0},function(){
						document.body.removeChild(dialogDom);
						document.body.removeChild(overDom);
					});
				};
			}
		},
		_drag:function(dialogDom){
			$this=this;
			var tittle=dialogDom.querySelectorAll(".tittle")[0];
			tittle.onmousedown = function(e){
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
					//防止与光标选中事件冲突
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
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
				/*拿到scrollTop 和scrollLeft*/
				var sleft = 0,stop = 0;
				/*ie678---*/
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
		xaDialog.alert({content:src});
	}
	win.xconfirm=function(src,callback){
		xaDialog.confirm({content:src,callback:callback});
	}
	win.xerror=function(str){
		xaDialog.alert({content:str,width:800,height:500,title:"系统错误",stext:"知道了"});
	}
})(window);