/*动画执行开始*/
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
                                  window.mozRequestAnimationFrame ||
                                  window.msRequestAnimationFrame ||
                                  window.oRequestAnimationFrame ||
                                  function (callback) {
                                    return window.setTimeout(callback, 17 /*~ 1000/60*/);
                                  });
};

/*取消动画*/
if (!window.cancelRequestAnimationFrame) {
  window.cancelRequestAnimationFrame = (window.cancelAnimationFrame ||
                                        window.webkitCancelRequestAnimationFrame ||
                                        window.mozCancelRequestAnimationFrame ||
                                        window.msCancelRequestAnimationFrame ||
                                        window.oCancelRequestAnimationFrame ||
                                        window.clearTimeout);
};

/*
	时间：2016-01-08
	作者：keke
	动画移动函数
	dom---dom对象
	json===={width:100,height:100}
	callback:回调函数
*/
function move(dom,json,callback){
	//让每一次动画都是全新的
	if(dom.timer)clearInterval(dom.timer);
	dom.timer = setInterval(function(){
		//所有元素执行完毕以后的状态
		var mark = true;
		//循环所有动画的属性
		for(var attr in json){
			var cur = null;
			//如果是opacity的透明的动画
			if(attr=="opacity"){
				//获取已经产生的透明度
				cur = getStyle(dom,attr) * 100;
			}else{
				//获取已经执行的距离
				cur = parseInt(getStyle(dom,attr)) || 0;
			}
			//获取目标终止值
			var target = json[attr];
			//速度，*0.2是增加摩擦力
			var speed = (target - cur)/8;
			//如果cur在执行过程中因为已经除去了小数部分。而速度可能会产生小数位 
			//所有说当cur执行的递增，那么可能cur到达不了目标,当速度是大于0的上取整，然后整数+speed==目标
			//199 +1 200 反之向下取整
			speed = (speed>0 ? Math.ceil(speed): Math.floor(speed));
			if(cur != target){
				mark = false;
				if(attr=="opacity"){
					dom.style.opacity= (cur+speed)/100;
					dom.style.filter = "alpha(opacity="+((cur+speed))+")";
				}else{
					dom.style[attr]= cur+speed+"px";
				}
			}
		}
		//如果执行完毕，
		if(mark){
			//清楚动画
			clearInterval(dom.timer);
			//回调函数，一定要放在下面。要不然你动画没有关闭。
			if(callback)callback.call(dom);
		}
	},30);
};

function dom(id){
	return document.getElementById(id);
};

/*通过className获取dom元素进行过滤*/
function domClass(pidDom,sClass){
	var aEle = typeof pidDom=="string"?dom(pidDom):pidDom.getElementsByTagName('*');
	var arrs = [];
	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className.indexOf(sClass)!=-1){
			arrs.push(aEle[i]);
		}
	}
	return arrs;
}


//获取css中的样式的值，跟浏览器兼容无关
function getStyle(dom,attr){
	return window.getComputedStyle ? window.getComputedStyle(dom,false)[attr]:dom.currentStyle[attr];
};

//简单混入
function mixin(obj,obj2){
	for(var k in obj2){
		if(obj2.hasOwnProperty(k)){
			obj[k] = obj2[k];
		}
	}
	return obj;
};

//多对象混入
function mix(target,source){
	var arr = [];
	var args = arr.slice.call(arguments);
	
	var i = 1;
	if(args.length==1){
		return target;
	};

	while((source = args[i++])){
		for(var key in source){
			if(source.hasOwnProperty(key)){
				target[key] = source[key];
			}
		}
	}
	return target;
};

//获取鼠标的位置。兼容ie678
function getXY(e){
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
};


//范围随机数
function randomRange(start,end){
	return Math.floor(Math.random()*(end-start+1))+start;
};

//元素居中
function centerElement(id){
	var boxDom = dom(id);
	var sw = boxDom.offsetWidth;
	var sh = boxDom.offsetHeight;
	var dw = window.innerWidth;
	var dh = window.innerHeight;
	var cleft = (dw - sw)/2;
	var ctop = (dh - sh)/2;
	boxDom.style.left = cleft+"px";
	boxDom.style.top = ctop+"px";
	window.onresize = function(){
		centerElement("box");
	};
};

function keach(doms,callback){
	var domArr = Array.prototype.slice.call(doms);
	domArr.forEach(function(obj,index){
		if(callback)callback.call(obj,index);
	});
};

function getIndex(doms,dom){
	var index = -1;
	var domArr = Array.prototype.slice.call(doms);
	domArr.forEach(function(obj,i){
		if(obj==dom){
			index = i;
			return false;
		}
	});
	return index;
};


/*时间运动版本动画*/
(function(win){
	//t:时间变量
	//b:起始值
	//c:要变化的总量 target - b;
	//d:总时长

	var Tween = {
		linear: function (t, b, c, d) {
			return c * t / d + b;
		},
		quadIn: function (t, b, c, d) {

			return c * (t /= d) * t + b;
		},
		quadOut: function (t, b, c, d) {

			return -c * (t /= d) * (t - 2) + b;
		},
		quadInOut: function (t, b, c, d) {

			if ((t /= d / 2) < 1) {

				return c / 2 * t * t + b;
			}

			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		},
		cubicIn: function (t, b, c, d) {

			return c * (t /= d) * t * t + b;
		},
		cubicOut: function (t, b, c, d) {

			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		cubicInOut: function (t, b, c, d) {

			if ((t /= d / 2) < 1) {

				return c / 2 * t * t * t + b;
			}

			return c / 2 * ((t -= 2) * t * t + 2) + b;
		},

		// Copy of cubic
		easeIn: function (t, b, c, d) {

			return c * (t /= d) * t * t + b;
		},
		easeOut: function (t, b, c, d) {

			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		easeInOut: function (t, b, c, d) {

			if ((t /= d / 2) < 1) {

				return c / 2 * t * t * t + b;
			}

			return c / 2 * ((t -= 2) * t * t + 2) + b;
		},
		// End copy
		quartIn: function (t, b, c, d) {

			return c * (t /= d) * t * t * t + b;
		},
		quartOut: function (t, b, c, d) {

			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
		quartInOut: function (t, b, c, d) {

			if ((t /= d / 2) < 1) {

				return c / 2 * t * t * t * t + b;
			}

			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
		quintIn: function (t, b, c, d) {

			return c * (t /= d) * t * t * t * t + b;
		},
		quintOut: function (t, b, c, d) {

			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
		quintInOut: function (t, b, c, d) {

			if ((t /= d / 2) < 1) {
				return c / 2 * t * t * t * t * t + b;
			}

			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		},
		sineIn: function (t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
		sineOut: function (t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
		sineInOut: function (t, b, c, d) {

			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
		expoIn: function (t, b, c, d) {

			return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		},
		expoOut: function (t, b, c, d) {

			return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		},
		expoInOut: function (t, b, c, d) {

			if (t === 0) { return b; }
			if (t === d) { return b + c; }

			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}

			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		circIn: function (t, b, c, d) {

			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
		circOut: function (t, b, c, d) {

			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
		circInOut: function (t, b, c, d) {

			if ((t /= d / 2) < 1) {

				return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			}

			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		},
		bounceIn: function (t, b, c, d) {
			return c - this.bounceOut(d - t, 0, c, d) + b;
		},
		bounceOut: function (t, b, c, d) {

			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else

			if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
			} else

			if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
			} else {
				return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
			}
		},
		bounceInOut: function (t, b, c, d) {

			if (t < d / 2) {
				return this.bounceIn(t * 2, 0, c, d) * 0.5 + b;
			}

			return this.bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
		},
		elasticIn: function (t, b, c, d, a, p) {

			if (t === 0) { return b; }

			if ((t /= d) === 1) {
				return b + c;
			}

			if (!p) {
				p = d * 0.3;
			}

			if (!a) {
				a = 1;
			}
			var s = 0;

			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(c / a);
			}

			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		},
		elasticOut: function (t, b, c, d, a, p) {

			if (t === 0) {
				return b;
			}

			if ((t /= d) === 1) {
				return b + c;
			}

			if (!p) {
				p = d * 0.3;
			}

			if (!a) {
				a = 1;
			}
			var s = 0;

			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(c / a);
			}

			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		},
		elasticInOut: function (t, b, c, d, a, p) {

			if (t === 0) {
				return b;
			}

			if ((t /= d / 2) === 2) {
				return b + c;
			}

			if (!p) {
				p = d * (0.3 * 1.5);
			}

			if (!a) {
				a = 1;
			}
			var s = 0;

			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(c / a);
			}

			if (t < 1) {

				return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			}

			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
		}
	};
	//时间版本
	function animate(dom,json){
		var args = arguments;
		var times = typeof args[2]!="number"?400:args[2];
		var fx = typeof args[2]=="string"?args[2]:(typeof args[3]!="string" ?"linear":args[3]);
		var fn = typeof args[args.length-1]!="function"?null:args[args.length-1];
		//目标初始值 
		var target = {};
		for(var attr in json){
			if(attr.toLowerCase()=="opacity"){
				target[attr] = Math.round(getStyle(dom,attr))||1;//获取初始值
			}else{
				target[attr] = parseInt(getStyle(dom,attr)) || 0;//获取初始值
			}
		};
		var btime = new Date;
		if(dom.timer)clearInterval(dom.timer);	
		dom.timer = setInterval(function(){
			var t = (new Date - btime)/times;
			if(t>=1){
				if(dom.timer)clearInterval(dom.timer);
				for(var attr in json){
					if(attr.toLowerCase()=="opacity"){
						dom.style.opacity = json[attr];
						dom.style.filter = "alpha(opacity="+(json[attr]*100)+")";
					}else{
						dom.style[attr] = json[attr]+"px";
					}
				}
				if(fn)fn.call(dom,json);
			}else{
				for(var attr in json){
					var b = target[attr];//起始值
					var c = json[attr]-b;
					var d = times;
					var value = Tween[fx](t*times,b,c,d);
					if(attr.toLowerCase()=="opacity"){
						dom.style.opacity = (value / 100)*100;//0.666678
						dom.style.filter = "alpha(opacity="+value+")";
					}else{
						dom.style[attr] = value+"px";
					}
				}
			}
		},17);
	};
		
	win.kekeAnimate = animate; 
})(window);

/*
Linear：无缓动效果
Quadratic：二次方的缓动（t^2）
Cubic：三次方的缓动（t^3）
Quartic：四次方的缓动（t^4）
Quintic：五次方的缓动（t^5）
Sinusoidal：正弦曲线的缓动（sin(t)）
Exponential：指数曲线的缓动（2^t）
Circular：圆形曲线的缓动（sqrt(1-t^2)）
Elastic：指数衰减的正弦曲线缓动
超过范围的三次方缓动（(s+1)*t^3 – s*t^2）
指数衰减的反弹缓动
每个效果都分三个缓动方式，分别是（可采用后面的邪恶记忆法帮助记忆）：
easeIn：从0开始加速的缓动，想象OOXX进去，探路要花时间，因此肯定是先慢后快的；
easeOut：减速到0的缓动，想象OOXX出来，肯定定先快后慢的，以防掉出来；
easeInOut：前半段从0开始加速，后半段减速到0的缓动，想象OOXX进进出出，先慢后快然后再慢。
*/


/*事件绑定*/
var kekeDom = function(id){
	var dom = document.getElementById(id);
	return {
		on:function(type,callback){
			if(document.addEventListener){
				dom.addEventListener(type,callback,false);
			}else if(document.attachEvent){
				dom.attachEvent("on"+type,callback);
			}else{
				dom["on"+type]=callback;
			}
		},
		off:function(type,callback){
			if(document.removeEventListener){
				dom.removeEventListener(type,callback);
			}else if(document.attachEvent){
				dom.detachEvent("on"+type,callback);
			}else{
				dom["on"+type] = null;
			}
		},
		mouse:function(){
			var cmouse = {x: 0, y: 0, event: null},
			  body_scrollLeft = document.body.scrollLeft,
			  element_scrollLeft = document.documentElement.scrollLeft,
			  body_scrollTop = document.body.scrollTop,
			  element_scrollTop = document.documentElement.scrollTop,
			  offsetLeft = dom.offsetLeft,
			  offsetTop = dom.offsetTop;
			  dom.addEventListener('mousemove', function (event) {
				var x, y;
				if (event.pageX || event.pageY) {
				  x = event.pageX;
				  y = event.pageY;
				} else {
				  x = event.clientX + body_scrollLeft + element_scrollLeft;
				  y = event.clientY + body_scrollTop + element_scrollTop;
				}
				x -= offsetLeft;
				y -= offsetTop;
				cmouse.x = x;
				cmouse.y = y;
				cmouse.event = event;
			}, false);
			return cmouse;
		},

		keyboard:function(callback){
			window.addEventListener("keydown",function(event){
				switch(event.keyCode){
					case 38 : callback.call(event,1);break;
					case 39 : callback.call(event,2);break;
					case 40 : callback.call(event,3);break;
					case 37 : callback.call(event,4);break;
					default:callback.call(event,5);break;
				}
			},false);
			window.addEventListener("keyup",function(event){
				switch(event.keyCode){
					case 38 : callback.call(event,1);break;
					case 39 : callback.call(event,2);break;
					case 40 : callback.call(event,3);break;
					case 37 : callback.call(event,4);break;
					default:callback.call(event,5);break;
				}
			},false);
		},

		parseColor : function (color, flag) {//用法:parseColor("#111111",true) ==1118481  alert(kekeDom().parseColor(1118481,false)) ==#111111
		  if (flag === true) {
			if (typeof color === 'number') {
			  return (color | 0); //chop off decimal
			}
			if (typeof color === 'string' && color[0] === '#') {
			  color = color.slice(1);
			}
			return window.parseInt(color, 16);
		  } else {
			if (typeof color === 'number') {
			  color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad
			}
			return color;
		  }
		},

		colorToRGB : function (color, alpha) {//用法:colorToRGB("#111111",0.5)==rgba(0,1,17,0.5)
		  //number in octal format or string prefixed with #
		  if (typeof color === 'string' && color[0] === '#') {
			color = window.parseInt(color.slice(1), 16);
		  }
		  alpha = (alpha === undefined) ? 1 : alpha;
		  //parse hex values
		  var r = color >> 16 & 0xff,
			  g = color >> 8 & 0xff,
			  b = color & 0xff,
			  a = (alpha < 0) ? 0 : ((alpha > 1) ? 1 : alpha);
		  //only use 'rgba' if needed
		  if (a === 1) {
			return "rgb("+ r +","+ g +","+ b +")";
		  } else {
			return "rgba("+ r +","+ g +","+ b +","+ a +")";
		  }
		},

		randomColor:function(){
			var r = Math.floor(Math.random()*256);
			var g = Math.floor(Math.random()*256);
			var b = Math.floor(Math.random()*256);
			return "rgb("+r+","+g+","+b+")";//IE7不支出rgb
		},

		randomColor16:function(){
			//0-255	
			var r = this.random(255).toString(16);
			var g = this.random(255).toString(16);
			var b = this.random(255).toString(16);
			//255的数字转换成十六进制
			if(r.length<2)r = "0"+r;
			if(g.length<2)g = "0"+g;
			if(b.length<2)b = "0"+b;
			return "#"+r+g+b;
		},

		random:function(num){
			return Math.floor(Math.random()*(num+1));
		},

		randomRange:function(start,end){
			return Math.floor(Math.random()*(end-start+1))+start;
		}
	};
};