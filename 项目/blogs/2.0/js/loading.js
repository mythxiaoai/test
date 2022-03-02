/**
 * loading.js  暂时写在这个文件夹  获取 与xloding写在一起
 * */
(function($) {
	$.loading = function(a) {
		var b = $.extend({}, $.loading.template, $.loading.defaults, a);
		if (!b.mark) b.mark = Math.floor(Math.random() * 10);
		var c = $(b["t" + b.mark]);
		c.width(b.width).height(b.height);
		b.target.html(c)
	};
	$.loading.defaults = {
		width: 36,
		height: 36,
		mark: 1
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

var loading =function(a, b) {
	$.loading({
		target: $(a),
		mark: b
	})
};

/**
 *时间:2016-12-5
	版本：1.0
	作者：小艾
	延迟遮罩层
	调用:
	xloading.init(dom);带个元素父box   一个页面只能存在一个!   可以是jQery对象  可以是js的dom
	xloading.destroy();
 *加载组件  依赖于loading.js文件  这个是多封装了个遮罩层
 */
var xloading={
	id:"",
	dom:null,
	init:function(dom){//初始化
		if($(dom).css("position")=="static")$(dom).css("position","relative");
		this.id="xa"+new Date().getTime();
		this.dom=dom;
		this.html();
		this.bind();
	},
	html:function(){//模板
		/*background:rgba(170,170,170,0.5)*/
		var html="<div style='position: absolute;z-index:9999;height:100%;width:100%;left: 0;top: 0;'><div id="+this.id+" style='position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;'></div></div>";
		$(this.dom).append(html);
	},
	bind:function(){//绑定
		var id = this.id;
		loading("#"+id,Math.floor(Math.random()*11)+1);
		$("#"+id).children().eq(0).css({"width": "45","height": "45","position": "absolute","left": "0","right": "0","top":"-30%","bottom":"0","margin":"auto"});
	},
	destroy:function(){//销毁
		if(this&&this.id){
			var id = this.id;
			$("#"+id).parent().remove();
		}
	}
};
