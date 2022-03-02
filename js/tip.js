/**
 * 	时间：2016-12-12
	版本：1.0
	作者：小艾
	错误弹出组件
	调用:
	window.xtip("错误信息");   注:只能弹出一个   出现多个默认会覆盖
 */
(function(win){
	var tip = {
		//图标数据
		//默认参数
		defaults:{
			time:"3s",
			content:"哎呀，没传弹出内容  于是我出现了",
			fontSize:12
		},
		amtArray:[
		["animated flipInX","animated flipOutX"],
		["animated flipInY","animated flipOutY"],
		["animated fadeIn","animated fadeOut"],
		["animated fadeInUp","animated fadeOutUp"],
		["animated fadeInDown","animated fadeOutDown"],
		["animated fadeInLeft","animated fadeOutLeft"],
		["animated fadeInRight","animated fadeOutRight"],
		["animated fadeInUpBig","animated fadeOutUpBig"],
		["animated fadeInDownBig","animated fadeOutUpBig"],
		["animated fadeInLeftBig","animated fadeOutLeftBig"],
		["animated fadeInRightBig","animated fadeOutRightBig"],
		["animated bounceIn","animated bounceOut"],
		["animated bounceInUp","animated bounceOutUp"],
		["animated bounceInDown","animated bounceOutDown"],
		["animated bounceInLeft","animated bounceOutLeft"],
		["animated bounceInRight","animated bounceOutRight"],
		["animated rotateIn","animated rotateOut"],
		["animated rotateInUpLeft","animated rotateOutUpLeft"],
		["animated rotateInDownLeft","animated rotateOutDownLeft"],
		["animated rotateInUpRight","animated rotateOutUpRight"],
		["animated rotateInDownRight","animated rotateOutDownRight"],
		["animated rollIn","animated rollOut"]],
		animationCurr:0,
		timeOut:null,
		init:function(options){
			var opts = this.methods._mix(this.methods,this.defaults,options);
			this.animationCurr=Math.floor(Math.random()*this.amtArray.length);
			var tipDom = opts.template(opts);
			opts._center(tipDom);
			opts._resize(tipDom);
			opts._onclick(tipDom);
			opts._onhover(opts,tipDom);
			opts._timeClear(opts,tipDom);
		},
		tip:function(options){
			this.init(options);
		}
	};
	//扩展事件	
	tip.methods = {
		//模板可拓展
		template:function(opts){
			var tipDom = document.getElementById("xatip");
			if(tipDom){
				document.body.removeChild(tipDom)
			}else{
				tipDom = document.createElement("div");
			}
			var html="<div id='xatip' style='cursor: pointer;padding:12px 19.5px;background:#111;color:#fff;display:inline-block;position:fixed;z-index:9999;border-radius:4px;box-shadow: 1px 1px 1em #111;'>"+opts.content+"</div>";
			tipDom.innerHTML=html;
			tipDom=tipDom.children[0];
			tipDom.className=tip.amtArray[tip.animationCurr][0];
			if(opts.fontSize){
				tipDom.style.fontSize=opts.fontSize+"px"
				tipDom.style.padding=opts.fontSize+"px "+opts.fontSize*1.625+"px"
			}
			document.body.appendChild(tipDom);
			return tipDom;
		},
		_center:function(tipDom){//居中dialog
			var nl = (window.innerWidth - tipDom.offsetWidth)/2;
			var nt = (window.innerHeight - tipDom.offsetHeight)/3;
			tipDom.style.top = nt+"px";
			tipDom.style.left = nl+"px";
		},
		_resize :function(tipDom){
			var obj = this;
			window.onresize = function(){
				obj._center(tipDom);
			};
		},
		_onclick:function(tipDom){
			$(tipDom).click(function(){
				$(this).removeClass(tip.amtArray[tip.animationCurr][0]).addClass(tip.amtArray[tip.animationCurr][1]).animate({"class":null},1000,function(){
					$(this).remove();
				});
				clearTimeout(tip.timeOut);
			});
		},
		_onhover:function(opts,tipDom){
			$(tipDom).mouseover(function(){
				clearTimeout(tip.timeOut)
			});
			$(tipDom).mouseout(function(){
				$(this).removeClass(tip.amtArray[tip.animationCurr][0]).addClass(tip.amtArray[tip.animationCurr][1]).animate({"class":null},1000,function(){
					$(this).remove();
				});
			});
		},
		_timeClear:function(opts,tipDom){
			tip.timeOut&&clearTimeout(tip.timeOut);
			tip.timeOut=setTimeout(function(){
				$(tipDom).trigger("click");
			},opts._getTime(opts.time));
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
		/*一个接地气的方法   5s 5秒的意思   代表返回5000毫秒*/
		_getTime:function(time){
			if(time<=0)return time;
			var str1=time.substring(0,time.length-1)*1;
			var str2=time.charAt(time.length-1);
			if (str2=="s"){
			    return str1*1000;
			}else if (str2=="m"){
				return str1*60*1000;
			}else if (str2=="h"){
				return str1*60*60*1000;
			}else if (str2=="d"){
			    return str1*24*60*60*1000;
			}else{
				alert("格式错误,调用格式为1s 2m 2h 返回单位为毫秒");
			}
		}
	};
	win.xtip=function(str){
		if(str=="selectOnlyOne"){
			tip.init({content:"请勾选单个选项做操作"});
		}if(str=="selectLeastOne"){
			tip.init({content:"请勾选至少一条记录"});
		}else{
			tip.init({content:str});
		}
	}
})(window);
