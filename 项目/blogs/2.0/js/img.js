/*组件*/

/*
	时间：2017年1月16日
	版本：1.0
	作者：小艾
	依赖：bootstrap的XX按钮一枚。
	描述：图片预览插件
	用法     调用   ximgshow();  后整个body类的img标签 有data-view='true'属性  都可以点击预览。作用格式：
	<img src="img/login.jpg" data-view='true' alt="" class="img-responsive" />
 * */
(function(win){
	var preview={
		init:function(){
			var $this = this;
			$("body").on("click","img[data-view='true']",function(){
				$this.getmain(this);
			});
		},
		getmain:function(dom){
			var imgbox = $("<div>");
			var img = $("<img>").attr("src",$(dom).attr("src"));
			var closebtn=$("<div>");
			imgbox[0].style.cssText="display:none;position: fixed;width: 100%; height: 100%; left:0;top:0;background: rgba(0,0,0,0.5); z-index: 999;";
			closebtn[0].style.cssText="position: absolute;right:5px;top:8px;cursor:pointer;width: 36px;height:36px;background-color:#393A3C;transition:background-color 0.3s linear;border-radius: 50%;font-size: 22px;line-height: 36px;color: #fff;text-align: center;";
			closebtn.addClass("fa fa-remove").attr("title","关闭");
			img[0].style.cssText="position: absolute;left:0;top:0;cursor:pointer;max-height:100%;max-width:100%;";
			closebtn.hover(function(){
				$(this).css("background-color","#D43F27");
			},function(){
				$(this).css("background-color","#393A3C");
			})
			imgbox.append(img);
			imgbox.append(closebtn);
			$("body").append(imgbox);
			imgbox.fadeIn();
			//居中
			this._center(img[0],"top");
			//移动窗口居中
			this._reize(img[0]);
			//点击关闭
			this._close(imgbox);
		},
		_center:function(dom,str){
			dom.style.left=document.documentElement.clientWidth/2-dom.offsetWidth/2+"px";
			if(str!="top"){
				dom.style.top=document.documentElement.clientHeight/2-dom.offsetHeight/2+"px";
			}else{
				dom.style.top=(document.documentElement.clientHeight-dom.offsetHeight)/3+"px";
			}
		},
		_reize:function(dom){
			var $this = this;
			$(window).resize(function(){
				$this._center(dom);
			});
		},
		_close:function(dom){
			dom.click(function(e){
				console.log(e.target.tagName)
				if(e.target.tagName!="IMG"){
					$(this).fadeOut(function(){
						$(this).remove();
					});
				}
			});
		}
	}
	/*window.ximgshow=function(){
		preview.init();
	};*/
	preview.init();
})(window);