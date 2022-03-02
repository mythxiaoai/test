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
}

function dom(id){
	return document.getElementById(id);
};


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
function randomRange(begin,end){
	return Math.floor(Math.random()*(end-begin))+begin;
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
}