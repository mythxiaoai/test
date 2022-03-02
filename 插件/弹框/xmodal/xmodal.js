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
		    surebtn:true,//显示确认按钮
		    surebtnText:"确定",//显示确认按钮
		    cancelbtn:true,//显示取消按钮
		    cancelbtnText:"取消",//显示确认按钮
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
			let $this = this;
			this.template();
			this.events();
		},
		template(){
			let $this = this;
			let bgColor = "",btnHtml="";
			if(!this.opts.backdrop){
				//加个背景阴影
				bgColor="style='background:rgba(0,0,0,0.5);'";
			}
			if($this.opts.surebtn&&$this.opts.cancelbtn){
				btnHtml=`
					<button type="button" class="btn btn-default btn-sm m-r-sm" data-dismiss="modal">${$this.opts.cancelbtnText}</button>
					<button type="button" class="btn btn-danger btn-sm js_sure">${$this.opts.surebtnText}</button>
				`;
			}
			if($this.opts.surebtn&&!$this.opts.cancelbtn){
				btnHtml=`
					<button type="button" class="btn btn-danger btn-sm js_sure">${$this.opts.surebtnText}</button>
				`;
			}
			if(!$this.opts.surebtn&&$this.opts.cancelbtn){
				btnHtml=`
					<button type="button" class="btn btn-default btn-sm m-r-sm" data-dismiss="modal">${$this.opts.cancelbtnText}</button>
				`;
			}
			this.htmlBox= `
			<div class="modal fade" id="xa-modal" ${bgColor}>
				<div class="modal-dialog ${this.opts.size}">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
							<h4 class="modal-title" style='font-size: 14px;border-left: 4px solid #09c;padding-left: 12px;'>${this.opts.title}</h4>
						</div>
						<div class="modal-body">
							
						</div>
						<div class="modal-footer" style="text-align:center;">
							${btnHtml}
						</div>
					</div>
				</div>
			</div>`;
		},
		events:function(){
			let $this =this;
			//初始事件  点击显示modal
			this.dom.click(function(){
				$("body").append($this.htmlBox);
				if($this.opts.url){
					$("#xa-modal .modal-body").load($this.opts.url, function(){
						if($this.opts.loadback)$this.opts.loadback();
					 });
					$("#xa-modal .modal-footer").remove();
				}
				if($this.opts.content){
					$("#xa-modal .modal-body").append($this.opts.content);
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
		new Xmodal(this,opts);
		return this;
	};
	$(function(){
		if($("[data-xmodal]").length>0){
			$("[data-xmodal]").click(function(e){
				e.preventDefault();
			});
			$("[data-xmodal]").each(function(index,val){
				new Xmodal($(val),{url:val.href,title:$(val).data("xmodal")});
			});
		}
	});
})(jQuery);