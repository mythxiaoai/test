/*
 表单js
 * */
(function(win){
var fjs={
	init:function(){
		this.file.init();
		this.tree();
		this.drag();
		this.center();
		this.close();
	},
	close:function(){
		$(".f_close").click(function(){
			$(".xform").fadeOut();
		});
	},
	center:function(){
		var dom =$(".xform >div")[0];
		var str ="top";
		dom.style.left=document.documentElement.clientWidth/2-dom.offsetWidth/2+"px";
		if(str!="top"){
			dom.style.top=document.documentElement.clientHeight/2-dom.offsetHeight/2+"px";
		}else{
			dom.style.top=(document.documentElement.clientHeight-dom.offsetHeight)/3+"px";
		}
	},
	drag:function(){
			$this=this;
			var tittle=$(".xform .f_haeder")[0];
			var dialogDom=$(".xform >div")[0];
			tittle.onmousedown = function(e){
				var ev = e || window.event;
				var nx =e.pageX - dialogDom.offsetLeft;
				var ny =e.pageY- dialogDom.offsetTop;
				var maxW = window.innerWidth - dialogDom.offsetWidth;
				var maxH = window.innerHeight - dialogDom.offsetHeight;
				document.onmousemove = function(e){
					var ev = e || window.event;
					var nleft = ev.pageX - nx; 
					var ntop = ev.pageY - ny;
					if(nleft<=0)nleft= 0;
					if(ntop<=0)ntop= 0;
					if(nleft>=maxW)nleft = maxW;
					if(ntop>=maxH)ntop =maxH;
					dialogDom.style.left = nleft+"px";
					dialogDom.style.top = ntop+"px";
					//防止与光标选中事件冲突
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
				};
				document.onmouseup = function(e){
					document.onmouseup = null;
					document.onmousemove  = null;
				};
			};
		},
	tree:function(){
		$(".f_cont .tree input").on("click",function(){
			var $this =this;
			$("body").on("click",hideTree);
			$(".xform .f_cont").on("scroll",hideTree);
			var offset = $(this).offset(); 
			$(this).next().css({left:offset.left, top:offset.top + $(this).outerHeight(),width:$(this).outerWidth()}).slideDown("fast");
			function hideTree(event) {
				if (!(event.target == $this || $(event.target).closest(".ztree").length>0)) {
					$($this).next().hide();
					$("body").unbind("click", hideTree);
					$(".xform .f_cont").unbind("scroll",hideTree);
				}
			}
		});
	},
	file:{
		init:function(){
			this.imgclick();
			this.targ();
		},
		targ:function(){
			var $this =this;
			$("body")[0].ondragover=function(e){
				if($(e.target).closest(".js_drag").length>0){
					$(e.target).css("background-color","#E6F5FF");
					e.preventDefault();
				}
			}
			$("body")[0].ondrop=function(e){
				if($(e.target).closest(".js_drag").length>0){
					e.preventDefault();
					$(e.target).css("background-color","#fff");
					var files =Array.prototype.slice.call(e.dataTransfer.files);
					$this._main(files,$(e.target).closest(".js_drag"));
				}
			}
		},
		imgclick:function(){
			var $this = this;
			$("body").on("change",".js_files",function(){
				var files =Array.prototype.slice.call(this.files);
				$this._main(files,this);
			});
		},
		_main:function(files,dom,fileDom){
				//1.filter
				//2.加载模板
				//3.赋予事件
				var $this = this;
				var $dom=dom;
				var maxsize=512000;
				var notImg=[];
				//过滤掉不是img
				var files=files.filter(function(file,index,all){
					if (file.type.indexOf("image")==0&&file.size<=maxsize){
						return true;
					}else{
						notImg.push(file.name);
						return false;
					}
				});
				//提示
				if(notImg.length>0){
					alert("抱歉，以下文件读取失败:<br>"+notImg.join("<br>")+"<br>请选择小于500KB的\"图片文件\"哇~");
				}
				if(files.length>0){
					var parent=$($dom).closest(".files");
					if(parent.find(".f_des")[0]){
						parent.find(".f_des").addClass("hide");
					}
						//加载模板
						//读取图片url
						//加载li
						//绑定事件
					$this._html(files,parent.find(".js_fileList"),function(liDom){
						//file属性赋予
						if($($dom).hasClass("js_files")){
							var inputdom = $dom;
							$(inputdom).removeClass("js_files").addClass("js_reset");
							$(liDom).find(".f_opts label").append(inputdom);
							var $file =$("<input class='hide js_files' accept='image/*' type='file' name='file' multiple disabled/>");
							$(parent).children().first().append($file);
						}else{
							$(liDom).find(".f_opts label").append(fileDom);
						}
						//绑定事件
						$this.bindevent($(liDom));
					});
				}
		},
		/*
		 files:文件
		 targetul:模板添加的目标位置
		 * */
		_html:function(files,targetul,cllBack){
			var $this=this;
			var liDom=$("<li/>");
			var html="";
			$this._getImgURL(files,function(urls){
				$.each(urls,function(index,url) {
						html+="		<div class='f_info'>"+
										"			<span class='f_file'>"+
										"				<img data-view='true' src='"+url+"'/>"+
										"			</span>"+
										"			<span class='f_name'>"+files[index].name +"("+$this._fmtFileSize(files[index].size)+")</span>"+
										"		</div>";
						if(index==urls.length-1){
							html+="		<div class='f_opts'>"+
										"			<label>"+
										"			<span class='text-info cur'>重新选择</span> |"+
										"			</label>"+
										"			<a href='javascript:;' class='text-danger js_close'>删除</a> |"+
										"			<a href='javascript:;' class='text-warning js_add'>再次添加</a>"+
										"		</div>";
							liDom.append(html);
							targetul.append(liDom);
							cllBack&&cllBack(liDom);
						}
				});
			});
		},
		/*
		 targetli绑定li元素下面的三个事件js_reset js_close js_add
		 * */
		bindevent:function(targetli){
		var $this =this;
			//重新选择
			targetli.find(".js_reset").eq(0).change(function(){
				//1.filter
				//2.加载模板
				//3.赋予事件
				var $dom=this;
				var maxsize=512000;
				var notImg=[];
				var files =Array.prototype.slice.call(this.files);
				//过滤掉不是img
				var files=files.filter(function(file,index,all){
					if (file.type.indexOf("image")==0&&file.size<=maxsize){
						return true;
					}else{
						notImg.push(file.name);
						return false;
					}
				});
				
				//提示
				if(notImg.length>0){
					alert("抱歉，以下文件读取失败:<br>"+notImg.join("<br>")+"<br>请选择小于500KB的\"图片文件\"哇~");
				}
				//修改文件
				if(files.length>0){
					var parent=$($dom).closest(".files");
					var liDom=$($dom).closest("li");
					var html="";
					//清除
					liDom.find(".f_info").remove();
					$this._getImgURL(files,function(urls){
						$.each(urls,function(index,url) {
								html+="		<div class='f_info'>"+
												"			<span class='f_file'>"+
												"				<img data-view='true' src='"+url+"'/>"+
												"			</span>"+
												"			<span class='f_name'>"+files[index].name +"("+$this._fmtFileSize(files[index].size)+")</span>"+
												"		</div>";
								if(index==urls.length-1){
									liDom.prepend(html);
								}
						});
					});
				}else{
					var parent=$(targetli).closest(".files");
					var filesList=targetli.parent();
					targetli.remove();
					if(filesList.children().length==0){
						parent.find(".js_files")[0].disabled = false;
						parent.find(".f_des").removeClass("hide");
					}
				}
			});
			//删除
			//如果删除到0条  就让他显示出来出来多个选项框
			targetli.find(".js_close").click(function(){
				var parent=$(targetli).closest(".files");
				var filesList=targetli.parent();
				targetli.remove();
				if(filesList.children().length==0){
					parent.find(".js_files")[0].disabled = false;
					parent.find(".f_des").removeClass("hide");
				}
			});
			//再次添加
			targetli.find(".js_add").click(function(){
				var $dom = this;
				var $filedom =$("<input class='hide js_reset' accept='image/*' type='file' name='file' multiple/>");
				$filedom.trigger("click");
				$filedom.change(function(){
					$(this).unbind("change");//这里好坑，需要取消掉这个事件，这个input的值会塞到"重新选择"功能哪个label标签下
					var files =Array.prototype.slice.call(this.files);
					$this._main(files,$($dom).closest(".files").find(".js_reset")[0],this);
				});
			});
		},
		_getImgURL:function(files,callBack){
			if(window.FileReader){
				var urls=[];
				var i=0;
				geturl();
				function geturl(){
					if(files[i]){
						var fr = new FileReader();
						fr.readAsDataURL(files[i++]);
						fr.onload = function(e){
							urls.push(this.result);
							geturl();
						}
					}else{
						callBack&&callBack(urls);
					}
				}
				
			}else{
				alert("您的浏览器版本过低，操作失败");
			}
		},
		/**
		 * ("B","KB","MB","GB");
		 * 1G=1024MB  1MB=1024KB 1KB=1024字节
		 * */
		_fmtFileSize:function (size){
			var kb=1024,
					MB=1024*1024,
					GB=1024*1024*1024;
			if(size<kb){
				return size+" B";
			}else if((kb <= size) && (size < MB)){
				return (size/kb).toFixed(3)+" KB";
			}else if(MB <= size && (size < GB)){
				return (size/MB).toFixed(2)+" MB";
			}else if(GB <= size){
				return (size/GB).toFixed(1)+" GB";
			}
		}
	}
}
win.fjs=fjs;
})(window)
