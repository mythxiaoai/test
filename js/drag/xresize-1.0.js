;(function($){
	function Xresize(ele,opts){
		this.$element=ele;
		this.oldWH=[];
		this.deault={
			setWidthHeight:[],
			iconColor:"#ccc",
			callbackDur:undefined,
			callbackEnd:undefined,
			hover:true,
		}
		this.opts=$.extend({},this.deault,opts);
		return this;
	}
	Xresize.prototype={
		init:function(){
			//记录初始宽高
			this._saveOld();
			//添加模板
			this._template();
			//绑定事件
			this._bindEvent();
			//设置宽高
			this.setWH();
			//hover
			this._hover();
		},
		destroy:function(){
			this.$element.unbind("mousedown mouseover mouseout");
		},
		setWH:function(wh,fn){
			var $this=this;
			if(wh)this.opts.setWidthHeight=wh
			if(this.opts.setWidthHeight.length>0){
				$this.oldWH=[];
				$.each(this.$element, function(index,dom) {
					var temp={};
					if(!$this.opts.setWidthHeight[index]){
						temp=$this.opts.setWidthHeight[$this.opts.setWidthHeight.length-1];
					}else{
						temp=$this.opts.setWidthHeight[index];
					}
					temp.dom=$(dom);
					$this.oldWH.push(temp);
					$(dom).css(temp);
				});
			}
			if(fn)fn.call($this.oldWH,$this.oldWH);
		},
		//重置宽高
		reset:function(callback){
			var $this =this;
			$.each(this.$element, function(index,dom) {
				$(dom).css({height:$this.oldWH[index].height,width:$this.oldWH[index].width});
			});
			if(callback)callback.call($this.oldWH,$this.oldWH);
		},
		_template: function() {
			//先添加样式问题
			if(this.$element.css("position")=="static"){
				this.$element.css("position","relative")
			}
				var dom = $(
					"<div class='js_xResizeIcon' href='#'" +
					"style='width: 15px;height: 15px;background: inherit;position: absolute;bottom: 0;right: 0;cursor: nw-resize;'>"+
					"<i style='width: 8px;height: 8px;background: inherit;display: inline-block;border-right: 3px solid rgb(204, 204, 204);border-bottom: 3px solid rgb(204, 204, 204);border-radius: 1px;margin: auto;position: absolute;top: 0;right: 0;left: 0;bottom: 0;'></i>"+
					"</a>");
				dom.find("i").css({
			    'border-right-color': this.opts.iconColor,
			    'border-bottom-color': this.opts.iconColor,
			})
			this.$element.append(dom);
		},
		_hover:function(){
			if(this.opts.hover){
				$(this.$element).find(".js_xResizeIcon").hide();
				this.$element.on("mouseover",function(){
					$(this).find(".js_xResizeIcon").show();
				});
				this.$element.on("mouseout",function(){
					$(this).find(".js_xResizeIcon").hide();
				});
			}
		},
		_saveOld:function(){
			var $this=this;
			$.each(this.$element, function(index,dom) {
				$this.oldWH.push({dom:$(dom),height:$(this).outerHeight().toFixed(0),width:$(this).outerWidth().toFixed(0)});
			});
		},
		_bindEvent:function(){
			var $this = this;
			this.$element.on("mousedown",".js_xResizeIcon", function(event) {
				event.stopPropagation();
				var $dom = $(event.delegateTarget);
				var position = $dom.position();
				var l = event.pageX;
				var t = event.pageY;
				var h = $dom.outerHeight();
				var w = $dom.outerWidth();
				var whResult={};
				whResult.dom=$dom;
				$(document).on("mousemove", function(e) {
					var stepL = e.pageX - l;
					var stepT = e.pageY - t;
					//对于width的限制
					if((w+stepL)>=$dom.offsetParent().innerWidth()){
						whResult.width=$dom.offsetParent().innerWidth();
					}else{
						whResult.width=(w+stepL).toFixed(0);
					}
					whResult.height=(h+stepT).toFixed(0);
					
					$dom.css(whResult);
					//回调函数
					if($this.opts.callbackDur)$this.opts.callbackDur.call(whResult,whResult);
					//防止与光标选中事件冲突
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
				})
				$(document).on("mouseup", function(e) {
					//回调函数
					if($this.opts.callbackEnd)$this.opts.callbackEnd.call(whResult,whResult);
					$(document).unbind("mousemove mouseup");
				})
			});
		}
	}
	var xresize;
	$.fn.xresize=function(opts){
		//参数注册
		if(typeof opts =="object"){
			xresize = new Xresize(this,opts);
			xresize.init();
		}else if(typeof opts =="function"){
			xresize = new Xresize(this,{callbackEnd:arguments[0]});
			xresize.init();
		}else if(typeof arguments[0] =="string"&&typeof arguments[1]=="function"){
			xresize[arguments[0]](arguments[1]);
		}else if(typeof arguments[0] =="string"&&typeof arguments[2]=="function"){
			xresize[arguments[0]](arguments[1],arguments[2]);
		}
		return this;
	}
})(jQuery)