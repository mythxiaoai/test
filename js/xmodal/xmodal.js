/**
 *开发时间：2018-01-04 
 *作者：myth小艾
 *用途：简化bootstrap弹层并加自定义
 *调用：
 * $("#btn").xmodal(opts);
 *依赖：
 * jquery
 * boostrap.css/js
 */
;(function($){
function Xmodal(dom,opts){
	this.dom = dom;
	this.default={
		backdrop: true,//点击其他地方关闭
	    keyboard: true,//键盘esc关闭
	    show: true,//立即显示
	    size:"",//modal-sm|modal-lg//尺寸大小调整
	    title:"标题",//标题
	    url:null,//加载内容的请求地址
	    buttons:true,//是否显示弹层的按钮
	    content:false,//弹层的内容  可以是html
	    loadback:null,//加载完成或运行的回调
	    sureback:null,//点击确定的回调
	    cancelback:null,//取消运行的回调
	};
	this.opts = $.extend({},this.default,opts);
	this.init();
}
Xmodal.prototype={
	init(){
		var $this = this;
		this.template();
		this.events();
	},
	template(){
		this.htmlBox= `
		<div class="modal fade" id="xa-modal">
			<div class="modal-dialog ${this.opts.size}">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
						<h4 class="modal-title">${this.opts.title}</h4>
					</div>
					<div class="modal-body">
						
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
						<button type="button" class="btn btn-danger js_sure">确定</button>
					</div>
				</div>
			</div>
		</div>`;
	},
	events:function(){
		var $this =this;
		//初始事件  点击显示modal
		this.dom.click(function(){
			//添加在页面
			$("body").append($this.htmlBox);
			if($this.opts.url){
				$("#xa-modal .modal-body").load($this.opts.url, function(){
					if($this.opts.loadback)$this.opts.loadback();
				 });
				$("#xa-modal .modal-footer").remove();
			}
			if($this.opts.content){
				$("#xa-modal .modal-body").append($this.opts.content);
				if(!$this.opts.buttons){
					$("#xa-modal .modal-footer").remove();
				}
			}
			$("#xa-modal").modal($this.opts);
			//确定
			$('#xa-modal').on("click",".js_sure",function(){
				if($this.opts.sureback)$this.opts.sureback();
			})
			//取消
			$('#xa-modal').on('hidden.bs.modal', function (e) {
			  	if($this.opts.cancelback)$this.opts.cancelback();
			  	//解除绑定  释放内存
			  	$('#xa-modal').unbind("click,hidden.bs.modal")
		  		$("#xa-modal").remove();
				})
			});
		}
	}
	$.fn.xmodal=function(opts){
		return new Xmodal(this,opts);
		return this;
	};
})(jQuery);