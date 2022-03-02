/**
 * loading.js  暂时写在这个文件夹  获取 与xloding写在一起
 * */
(function($) {
	$.loading = function(a) {
		var b = $.extend({}, $.loading.template, $.loading.defaults, a);
		if (!b.mark) b.mark = Math.ceil(Math.random() * 11);
		var c = $(b["t" + b.mark]);
		c.width(b.width).height(b.height);
		b.target.html(c)
	};
	$.loading.defaults = {
		/*width: 46,
		height: 46,
		mark: 1*/
	};
	$.loading.template = {
		t1: "<div class='sk-cube-grid kcube'>" + "      <div class='sk-cube sk-cube1'></div>" + "      <div class='sk-cube sk-cube2'></div>" + "      <div class='sk-cube sk-cube3'></div>" + "      <div class='sk-cube sk-cube4'></div>" + "      <div class='sk-cube sk-cube5'></div>" + "      <div class='sk-cube sk-cube6'></div>" + "      <div class='sk-cube sk-cube7'></div>" + "      <div class='sk-cube sk-cube8'></div>" + "      <div class='sk-cube sk-cube9'></div>" + "    </div>",
		t2: " <div class='sk-rotating-plane kcube'></div>",
		t3: "<div class='sk-folding-cube kcube'>" + "      <div class='sk-cube1 sk-cube'></div>" + "      <div class='sk-cube2 sk-cube'></div>" + "      <div class='sk-cube4 sk-cube'></div>" + "      <div class='sk-cube3 sk-cube'></div>" + "    </div>",
		t4: "<div class='sk-spinner sk-spinner-pulse kcube'></div>",
		t5: "<div class='sk-wandering-cubes kcube'>" + "   <div class='sk-cube sk-cube1'></div>" + "   <div class='sk-cube sk-cube2'></div>" + "</div>",
		t6: "<div class='sk-wave kcube'>" + "   <div class='sk-rect sk-rect1'></div>" + "   <div class='sk-rect sk-rect2'></div>" + "   <div class='sk-rect sk-rect3'></div>" + "   <div class='sk-rect sk-rect4'></div>" + "   <div class='sk-rect sk-rect5'></div>" + "</div>",
		t7: "<div class='sk-circle kcube'>" + "   <div class='sk-circle1 sk-child'></div>" + "   <div class='sk-circle2 sk-child'></div>" + "   <div class='sk-circle3 sk-child'></div>" + "   <div class='sk-circle4 sk-child'></div>" + "   <div class='sk-circle5 sk-child'></div>" + "   <div class='sk-circle6 sk-child'></div>" + "   <div class='sk-circle7 sk-child'></div>" + "   <div class='sk-circle8 sk-child'></div>" + "   <div class='sk-circle9 sk-child'></div>" + "   <div class='sk-circle10 sk-child'></div>" + "   <div class='sk-circle11 sk-child'></div>" + "   <div class='sk-circle12 sk-child'></div>" + "</div>",
		t8: "<div class='sk-double-bounce kcube'>" + "   <div class='sk-child sk-double-bounce1'></div>" + "   <div class='sk-child sk-double-bounce2'></div>" + " </div>",
		t9: "<div class='sk-chasing-dots kcube'>" + "   <div class='sk-child sk-dot1'></div>" + "   <div class='sk-child sk-dot2'></div>" + "</div>",
		t10: "<div class='sk-three-bounce kcube'>" + "  <div class='sk-child sk-bounce1'></div>" + "  <div class='sk-child sk-bounce2'></div>" + "  <div class='sk-child sk-bounce3'></div>" + "</div>",
		t11: "<div class='sk-fading-circle kcube'>" + "	<div class='sk-circle1 sk-circle'></div>" + "	<div class='sk-circle2 sk-circle'></div>" + "	<div class='sk-circle3 sk-circle'></div>" + "	<div class='sk-circle4 sk-circle'></div>" + "	<div class='sk-circle5 sk-circle'></div>" + "	<div class='sk-circle6 sk-circle'></div>" + "	<div class='sk-circle7 sk-circle'></div>" + "	<div class='sk-circle8 sk-circle'></div>" + "	<div class='sk-circle9 sk-circle'></div>" + "	<div class='sk-circle10 sk-circle'></div>" + "	<div class='sk-circle11 sk-circle'></div>" + "	<div class='sk-circle12 sk-circle'></div>" + "</div>"
	}
})(jQuery);


/**
 *时间:2017-07-21
	版本：1.1
	作者：小艾
	插件名称：loading+延迟遮罩层
	调用:
	var xloading = new Xloading($(".box1")[0]);//初始化  
		参数可以是以下三种任何一种：
		参数1 Xloading(".box1")   //选择器
		参数2 Xloading($(".box1")) //jQuery选择器对象
		参数3 Xloading($(".box1")[0])//dom对象
	xloading.destroy(); //销毁
	依赖：jqery.js
		loading.js
	特点：
		多个ajax同时调用依旧生效，这个是面向对象版本  1.0是普通js版本
		依赖于loading.js文件  这个是多封装了个遮罩层
	更新时间：2017-08-11 09:18:39
	更新内容：修复一个dom元素下触发多个ajax产生多个loading的bug
	详细内容：一个盒子多次请求只显示一个loading  当然需要调用多次销毁，最后请求结束则结束，即最后一次调用销毁才能销毁 销毁方法没变
	2018-01-09
	更新类容  新增可以加文本提示
	 Xloading(selector,content,type)
	 selector：容器选择器
	 content：加载显示的文本信息
	 type：动画类型
 *
 */
(function(win){
	function Xloading(dom,content="",type=0){
		//this.id="xa"+new Date().getTime();
		this.id="xa_xloading";
		this.type=type;
		this.content=content;
		this.dom=dom;
		//初始化
		this.init();
	}
	Xloading.prototype={
		init:function(){
			var dom = this.dom;
			if($(dom).css("position")=="static")$(dom).css("position","relative");
			//防止出现滚动条
			$(this.dom).css("overflow","hidden");
			this._bind();
		},
		//模板
		_html:function(){
			return "<div class='js_xaLoading' style='position:fixed;z-index:1040;height:100%;width:100%;left: 0;top:0;background-color:rgba(255,255,255,0.7)'></div>";
		},
		//绑定
		_bind:function(){
			//模板层选择
			if($(this.dom).find(".js_xaLoading").length==0){
				$(this.dom).append(this._html());
				var winDom=$(this.dom).find(".js_xaLoading");
				//在dom元素上添加属性用来判断该元素是否已经存在loading
				$(this.dom)[0].loadingNum=1;
				$.loading({target:winDom,mark:this.type})
				winDom.children().eq(0).css({"position": "absolute","left": "0","right": "0","top":"-30%","bottom":"0","margin":"auto"});
				//加上文字
				if(this.content){
					winDom.append("<div>"+this.content+"</div>");
					//文本的样式
					winDom.children().eq(1)[0].style.cssText = `position:absolute;top:calc(-30% + 80px);bottom:0;margin:auto;height:0;width:100%;text-align:center;font-size:14px;color:#797979`;
				}
			}else{
				$(this.dom)[0].loadingNum+=1;
			}
		},
		//销毁
		destroy:function(){
			if(this){
				if($(this.dom)[0].loadingNum==1){
					$(this.dom).find(".js_xaLoading").remove();
					//样式还原
					$(this.dom).css("overflow","auto");
					$(this.dom)[0].loadingNum=0;
				}else{
					$(this.dom)[0].loadingNum-=1;
				}
			}
		}
	}
	win.Xloading=Xloading;
})(window);
