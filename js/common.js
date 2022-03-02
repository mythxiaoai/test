
/*bootstrap close*/
$("a[data-dismiss='panel']").click(function(){
	$(this).closest(".panel").fadeOut(function(){
		$(this).remove();
	});
});
/*bootstrap close*/
if($.fn.iCheck){
	$('input').iCheck({
		checkboxClass: 'icheckbox_square-green',
		radioClass: 'iradio_square-green',
	});
}
/*tip tittle*/
if($.fn.tooltip){
	 $('body').tooltip({
	  selector: '.js_tooltip',
	  placement:"auto",
	});
}
/*ztree   下拉的显示和隐藏 */
function treeSelect(dom){
	$("html,body").on("click",hideTree);
	var ztree_showdom=$(dom).parent().find(".ztree-down:not(.hide)");
	ztree_showdom.css({left:$(dom).position().left, top:$(dom).outerHeight()-1,width:$(dom).outerWidth()}).slideDown("fast");
	function hideTree(event) {
		if (!(event.target == dom || $(event.target).closest(".ztree").length>0)) {
			ztree_showdom.hide();
			$("html,body").unbind("click", hideTree);
		}
	}
}

/**
 * layer
 */
(function(win){
	/**
	 * @param {Object} url 请求的页面   也可以是对象  属性可以设置layer弹层属性
	 * @param {Object} title 标题名称
	 * @param {Object} callback 成功请求后的回调函数
	 */
	win.openWin=function(url,title,callback){
		//参数处理
		var parm={};
		if(url instanceof Object){
			$.extend(true, parm, url);
		}else{
			parm.content=url;
			parm.title=title;
			parm.callback=callback;
		}
		//open
		var index=layer.open({
			title:parm.title || undefined,
			type: 2,
			//area:[$(window).width()*.5+"px",$(window).height()*.625+"px"],
			area: parm.area || ['768px', '450px'],
			fixed: false, //不固定
			maxmin: true,//显示最大化窗口
			shadeClose:true,//点击窗外关闭
			content: parm.content,
			moveOut:true,//可拖拽到视口外
			zIndex:999,
			scrollbar:false,
			success: function(layero, index){
				var bodyDom = layer.getChildFrame('body', index);
				$(bodyDom).on("click",".js_close",function(){
					layer.close(index);
				});
				if(parm.callback)parm.callback(bodyDom);
	  		}
		});
	}
})(window);

/*sweelAlert*/
/**
 * content   提示标题内容
 * describe  标题下面的描述性文字    可以没有描述   传null或者""都可以
 * type   类型   分别有四种    四个图标项   success	error	warning		info
 * fn   回调函数
 * @param {Object} win
 */
(function(win){
	win.xalert=function(content,describe,type,fn){
		swal({
			title: content,
		    text: describe||undefined,
		    type: type||"info",
		    confirmButtonText:"确认",
		    html: true
		},function(){
		  if(fn!=null)fn();
		});
	}
	win.xconfirm=function(content,describe,fn,type){
			swal({
			title: content || "没填消息哦",
		  	showCancelButton: true,
	 		cancelButtonText: "取消",
	 		confirmButtonText:"确认",
		    text: describe,
		    type: type || "warning",
		    closeOnConfirm: false,
	  		showLoaderOnConfirm: true,
	  		html: true
		},function(){
			setTimeout(function(){
				if(fn!=null)fn();
			},200);
		});
	}
	win.xprompt=function(content,describe,fn,closeOnConfirm){
		swal({
		  title:content || "没填消息哦",
		  text: describe||undefined,
		  type: "input",
		  showCancelButton: true,
		  closeOnConfirm: closeOnConfirm||false,
		  cancelButtonText: "取消",
 		confirmButtonText:"确认",
		  animation: "slide-from-top",
		  inputPlaceholder: "请输入"
		},
		function(inputValue){
		  if (inputValue === ""||inputValue == null) {
		    swal.showInputError("不能输入空值哦~");
		    return false;
		  }
		  setTimeout(function(){
				if(fn!=null)fn(inputValue);
				swal.close();
			},200);
		});
	}
	
})(window);
/**
 *时间:2017-07-21
	版本：1.0
	作者：小艾
	插件名称：自定义ajax
	调用:
		xa_ajax({
			id:"#cont",  //可选
			msg:"none"  //根据业务是否需要返回消息弹框
		    type:"post",//默认get
		    url:"test1.do",
		    data:{userName:"1"},
		    success:fuction(data){
		    	//请求成功的代码..
		    }
		    error   //可选  建议不写
		})
		参数说明：
			id:该id是调用loading层的选择器  不需要loading可以不写
			msg：请求成功后是否弹出消息框，， 默认是有返回的     如果是查询或者其他不需要请求反馈的业务 则可设置成 none
			dataType:别写，特别强调   没写，，传参也没用  哈哈   默认是json
			success：返回data必须包含  msg status!
				{	msg:"操作成功自定义",
					status:(0:正常||1：出错),
					describe：选填,//就是sweetAlert下面描述的文字
				}
				特别提示：
				成功后会自动关闭loading和弹出sweetAlert成功操作，，自己可以看源码
			error:正常执行   建议省略，，依次返回页面在sweetAlert提示正常展示  不信  你测试个404呗
	依赖：
		sweetalert.css
		loading.css
		jqery.js
		loading.js
		sweetAlert.js
	特点：
		1.融合插件  loading.js和sweetAlert.js  在ajax请求过程中和请求介绍后都有可以设置很好的返回信息,
		2.支持promise  调用ajax1().then(ajax2).then(ajax3)   控制ajax请求的顺序!详情请看js  es6 Promise承诺
		3.支持时间坑，，但是考虑到业务场景不一样  注释掉了。
	更新时间2017-08-11 09:52:31
 *
 */
(function(win){
	//var time=null;
	var xa_ajax =function(options){
		/*if(time)clearTimeout(time);//时间坑，，bug就是页面初始加载3个ajax只执行一个   按钮式的正常
		time=setTimeout(function(){*/
			//Promise兼容
			if(Promise){
				return new Promise(function(resolve,reject){
					ajax(resolve,reject);
		   		});
			}else{
				ajax();
			}
			function ajax(resolve,reject){
				//参数处理
			    options = options || {};
				//loading
				if(options.id!=undefined&&options.id!=null&&options.id!=""&&options.id!=0){
					if(Xloading){
						var xloading = new Xloading(options.id)
					}
				}
				//beforeSend
				if(options.beforeSend)beforeSend();
				//type
			    options.type = (options.type || "GET").toUpperCase();
			    var params = formatParams(options.data);
			
			    //创建 - 非IE6 - 第一步
			    if (window.XMLHttpRequest) {
			        var xhr = new XMLHttpRequest();
			    } else { //IE6及其以下版本浏览器
			        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
			    }
				//连接 和 发送 - 第二步
			    if (options.type == "GET") {
			        xhr.open("GET", options.url + "?" + params, true);
			        xhr.send(null);
			    } else if (options.type == "POST") {
			        xhr.open("POST", options.url, true);
			        //设置表单提交时的内容类型
			        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			        xhr.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
			        xhr.send(params);
			    }
			    //接收 - 第三步
			    xhr.onreadystatechange = function () {
			        if (xhr.readyState == 4) {
			            var status = xhr.status;
			            if (status >= 200 && status < 300) {
			            	if(window.Promise)resolve();
			            	//关loading
			            	if(xloading)xloading.destroy();
			            	//检测是否是登陆超时 直接跳转
			            	if(xhr.responseText.indexOf("71754E4154114EF882C92FCFDC7DE0E1")!=-1){
			            		window.top.xalert("登陆超时~","请重新登陆...","warning",function(){
			            			 window.top.location.href=window.location.origin+"/interior/login.jsp";
			            		})
			            	}
			            	//返回结果格式化成json
			            	var data = JSON.parse(xhr.responseText)
			            	//回调
			                options.success && options.success(data);
			                //弹窗
			                if(options.msg!="none"){
			                	xalert(data.msg ||"哎呀，后台没给{msg:消息}参数",data.describe||null,data.status==0?"success":"error");
			            	}
		                } else {
		                	if(window.Promise)reject();
		                	if(xloading)xloading.destroy();
		                	if(xhr.responseText.indexOf("3292b1da35a94a3b8b4c4964f8e48c05")!=-1){
		            			// window.location.href="index.jsp";
		            			document.write(xhr.responseText);
			            	}else{
			            		options.fail && options.fail(status);
			            		xalert("出错啦~",xhr.responseText,"error");
			            	}
			            }
			        }
			    }
			    
			    //格式化参数
			    function formatParams(data) {
			        var arr = [];
			        for (var name in data) {
			            arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
			        }
			        arr.push(("v=" + Math.random()).replace(".",""));
			        return arr.join("&");
			    }
			}
		/*},2000);*/
	}
	win.xa_ajax=xa_ajax;
})(window);

/**
 * 
 * bootstrapTable的组件封装   参数统一调配
 * @param {Object} win  Window
 */
(function(win){
	win.xtable ={
		init:function(opts){
			return $(opts.id).bootstrapTable($.extend({},$.fn.bootstrapTable.defaults,{
		        //url请求后台的URL（*）
		        //sortName排序的字段
		        //undefinedText当字段为空的时候用 - 替换
		        //queryParams 传递参数（*）limit, offset, search, sort, order
		        //搜索框中的文字 formatSearch:function(){return:"用户名、姓名、电话"}
		        //showColumns是否显示所有的列  默认false
		        //height：$(window).height()-200行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
		        //uniqueId每一行的唯一标识，一般为主键列
	            contentType : "application/x-www-form-urlencoded",
	            method:'post',						//请求方式（*）
	            toolbar:'#toolbar',                //工具按钮用哪个容器
	            striped:true,                      //是否显示行间隔色
	            cache:false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
	            pagination:true,                   //是否显示分页（*）
	            sortable:true,                     //是否启用排序
    			sortOrder:"desc",					//排序方式
	            sidePagination:"server",           //分页方式：client客户端分页，server服务端分页（*）
	            pageNumber:1,                       //初始化加载第一页，默认第一页
	            pageSize:10,                       //每页的记录行数（*）
	            pageList:[10, 25, 50, 100],        //可供选择的每页的行数（*）
	            search:false,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
	           	searchOnEnterKey:true,				//按回车键才触发搜索
	            showRefresh:false,                  //是否显示刷新按钮
	            clickToSelect: true,                //是否启用点击选中行
	            detailView:false, 					//是否显示父子表
			}, opts));
	    }
	};
})(window);
/**
 * 重写bootstrapTable的表格加载菊花图片loading
 */
(function ($) {
	if($.fn.bootstrapTable){
	    $.fn.bootstrapTable.locales['zh-CN'] = {
	      	formatLoadingMessage: function () {
	          	return '<i class="fa fa-spinner fa-spin fz30 mColor"></i>';
	        },
	        formatRecordsPerPage: function (pageNumber) {
	            return '每页 ' + pageNumber + ' 条';
	        },
	        formatShowingRows: function (pageFrom, pageTo, totalRows) {
	        	//'显示第 ' + pageFrom + ' 到第 ' + pageTo + ' 条记录，总共 ' + totalRows + ' 条记录';
	        	//显示 1 到 10 项，共 57 项
	            return '显示'+ pageFrom +'到'+ pageTo + '项，共'+totalRows+'项';
	        },
	        formatNoMatches: function () {
	            return '没有找到匹配的记录';
	        }
	    };
	    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
   }
})(jQuery);

//交互相关代码抽取   左右布局的滑动特效  抽取
/*var pos= {};
pos.triggerDom=".js_icon"; --触发的dom元素
pos.targetDom=[".js_leftResearch","js_rightContent"];--要改变的目标的dom元素  可以是多个
//目标元素的方法  有几个目标元素就应该有几组[function(){//第一次点击触发的函数},function(){//第二次点击触发的函数}]//影响的是pos.targetDom[0]
pos.targetToggleFunction=[[function(){},function(){}],[function(){},function(){}]];
pos.triggerToggleClass=["fa-angle-left","fa-angle-right"];--触发函数的class切换
pos.targetToggleClass=[["shake-horizontal-slow shake-constant shake-constant--hover",""],["",""]];--目标元素的class切换
pos.targetToggleAttr=[{"left":["-20%","0"]},{"width":["100%","80%"]}];--目标元素的属性切换
//调用demo
toggleAnimate({
				triggerDom:".js_icon",
				targetDom:[".js_leftResearch",".js_rightContent"],
				triggerToggleClass:["fa-angle-left","fa-angle-right"],
				targetToggleAttr:[{"left":["-20%","0"]},{"width":["100%","80%"]}],
				targetToggleClass:[["shake-horizontal-slow shake-constant shake-constant--hover",""],["",""]],
			});
* 
* */
/**
 * 动画开关  抽取函数
 */
function toggleAnimate(pos){
	$(pos.triggerDom).click(function(){
		var $this = this;
		if(!this.mark){
			$.each(pos.targetDom, function(index,value) {
				//样式
				if(pos.targetToggleClass&&pos.targetToggleClass[index]){
					$(value).addClass(pos.targetToggleClass[index][0]).removeClass(pos.targetToggleClass[index][1]);
				}
				//属性
				if(pos.targetToggleAttr&&pos.targetToggleAttr[index]){
					var Obj ={};
					$.each(pos.targetToggleAttr[index], function(key,val){
						Obj[key]=pos.targetToggleAttr[index][key][0];
					});
					$(value).animate(Obj,"400","swing",function(){
						$this.mark=true;
					});
				}
			});
			//方法
			if(pos.targetToggleFunction)pos.targetToggleFunction[0]();
			//这个自带选择器 只适合本项目公用方法抽取
			$(this).find("i").removeClass(pos.triggerToggleClass[0]).addClass(pos.triggerToggleClass[1])
			
		}else{
			$.each(pos.targetDom, function(index,value) {
				//样式
				if(pos.targetToggleClass&&pos.targetToggleClass[index]){
					$(value).addClass(pos.targetToggleClass[index][1]).removeClass(pos.targetToggleClass[index][0]);
				}
				//属性
				if(pos.targetToggleAttr&&pos.targetToggleAttr[index]){
					var Obj ={};
					$.each(pos.targetToggleAttr[index], function(key,val){
						Obj[key]=pos.targetToggleAttr[index][key][1];
					});
					$(value).animate(Obj,"400","swing",function(){
						$this.mark=false;
					});
				}
			});
			//方法
			if(pos.targetToggleFunction)pos.targetToggleFunction[1]();
			//这个自带选择器 只适合本项目公用方法抽取
			$(this).find("i").removeClass(pos.triggerToggleClass[1]).addClass(pos.triggerToggleClass[0])
		}
	});
}
