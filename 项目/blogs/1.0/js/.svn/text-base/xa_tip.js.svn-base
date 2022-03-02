(function($){
	$.fn.xaTip = function(options){
		//对象混入---mix---$.extend
		return this.each(function(index){
			var opts = $.extend($.fn.xaTip.defaults,$.fn.xaTip.methods,options);
			$(this).data("xaTip",JSON.stringify(opts));
			$(this).on(opts.type,function(){
				var params = JSON.parse($(this).data("xaTip"));
				var op = $.extend(params,$.fn.xaTip.parseJson.call(this));
				opts.init(op,this);
			});

			if(opts.flag){
				$(this).on("mouseleave",function(){
					$(".keui-tip").remove();
				});
			}
		});
	};	


	//方法
	$.fn.xaTip.methods = {
		init:function(opts,targetObj){
			var $tip = this.template(opts);
			//改变风格
			$tip.width(opts.width).height(opts.height);
			$tip.css("background",opts.bgcolor);
			$tip.find(".keui-tip-cron").css("borderTop","10px solid "+opts.bgcolor);
			//改变位置，改变内容
			this._position($tip,targetObj);
			
			if(!opts.flag){
				$tip.on("mouseleave",function(){
					$(this).remove();
				});
			}

			$(window).scroll(function(){
				$tip.remove();
			});
			
		},

		_position:function($tip,targetObj){
			//就处理方向的问题
			var left = $(targetObj).width()/2 + $(targetObj).offset().left - ($tip.width()/2) ;
			if(left<=0)left=2;
			if(top<=0)top=2;
			var top = $(targetObj).offset().top-$tip.outerHeight(true)-10-$(window).scrollTop();
			$tip.css({left:left,top:top});
		},

		template:function(opts){
			var html = "<div id='"+opts.id+"' class='keui-tip'>"+
			"	<span>"+opts.tip+"</span>"+
			"	<span class='keui-tip-cron'></span>"+
			"</div>";
			var $tip = $(html);
			$(".keui-tip").remove();
			$("body").append($tip);
			return $tip;
		}
	};

	//属性解析器
	$.fn.xaTip.parseJson = function(obj){
		var tip = $(this).attr("tip");
		var flag = $(this).attr("flag");
		var title = $(this).attr("title");
		var bgcolor = $(this).attr("bgcolor");

		return {
			tip:tip||title,
			flag:flag?eval(flag):true,
			bgcolor:bgcolor	
		};
	};
	
	//默认参数
	$.fn.xaTip.defaults = {
		type:"mouseover",
		flag:true,
		bgcolor:"#333",
		tip:"我是一个tip框哦!!!"
	};
})(jQuery);