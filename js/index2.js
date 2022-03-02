$(function(){
/**
	 * tabs
	 * 1.支持多页面切换
	 * 2.横向滚动条
	 * 3.左右Tabs点击滚动居中
	 * 4.支持右键
	 * 5.支持自适应
	 * 6.刷新子页面 F5同样有效
	 * */
	var tabs={
		menus:"#js_menuBox",//所有菜单项盒子
		menu:".js_menu",//所有菜单项
		navs:$("#js_nav"),//tabs
		navl:$("#js_navl"),//左切换tab
		navr:$("#js_navr"),//右切换tab
		iframes:$("#js_iframe"),
		refdom:$("#js_reflush"),
		contmenu:$("#js_contmenu"),
		prevLeft:0,//位移上一次的距离
		init:function(){
			//1.点击加载ifeame和nav
			this.addtab();
			//2.nav-click  单击事件-1.关闭 2.focurs和切换
			this.clicktab();
			this.clickclose();
			//3.nav-contextmenu  右键选项卡
			this.contextmenu();
			//4.nav-left/right 定位移动   选项卡移动
			this.navRight();
			this.navLeft();
			//5.刷新
			this.reflush();
		},
		addtab:function(){
			var $this =this;
			var htmlDom=null;
			$($this.menus).on("click",$this.menu,function(e){
				e.preventDefault();
				var $menu =this;
				var boo=false;
				$this.navs.children().each(function(){
					if($(this).data("id")==$($menu).data("id")){
						boo=true;
						$(this).trigger("click");
						return false;
					}
				});
				//添加a和iframe
				if(!boo){//不存在重复的才添加
					htmlDom=$("<a href='javascript:;' class='nav_item action' data-text='"+$(this).text().trim()+"' data-src='"+$(this).attr("href")+"' data-id='"+$(this).data("id")+"'>"+$(this).text().trim()+"<i class='fa fa-close nav_close' title='关闭'></i></a>");
					$this.navs.append(htmlDom);
					$this.iframes.append($("<iframe name='iframe"+$(this).data("id")+"'frameborder='0' seamless width='100%' height='100%' src="+$(this).attr("href")+"></iframe>"));
					htmlDom.trigger("click");
				}
				//处理相同菜单名称
				var arrTemp =[];
				var text = $(htmlDom).data("text");
				$this.navs.children().each(function(){
					if($(this).data("text")==text){
						arrTemp.push($(this));
					}
				});
				if(arrTemp.length>1){
					for(var index in arrTemp){
						$($this.menu).each(function(){
							if($(this).data("id")==$(arrTemp[index]).data("id")){
								var parentText = $(this).closest(".sub-menu").siblings("a").text().trim();
								$(arrTemp[index]).html(parentText+" | "+text+$(arrTemp[index]).find("i").prop("outerHTML"));
							}
						});
					}
				}
				
			});
		},
		clicktab:function(){
			var $this =this;
			this.navs.on("click",".nav_item",function(e){
				e.preventDefault();
				var $nav =this;
				//添加样式
				$(this).addClass("action").siblings().removeClass("action");
				//显示对应的iframe
				$this.iframes.children().each(function(){
					if($(this).attr("src")==$($nav).data("src")){
						$(this).show().siblings().hide();
						return false;
					}
				});
				//调整actionTab的位置
				$this._showTabByAction();
			})
		},
		clickclose:function(){
			var $this =this;
			this.navs.on("click",".nav_close",function(e){
				e.stopPropagation();
				var $nav =this.parentElement;
				//改变样式
				if($($nav).hasClass("action")){
					$($nav).prev().addClass("action").end().remove();
				}else{
					//删除当前
					$(this).parent().remove();
				}
				//删除对应的iframe
				$this.iframes.children().each(function(){
					if($(this).attr("src")==$($nav).data("src")){
						if($(this).css("display")!="none"){
							$(this).prev().show();
							$(this).remove();
						}else{
							$(this).remove();
						}
						return false;
					}
				});
				//处理相同菜单名称
				var arrTemp =[];
				var text = $($nav).data("text");
				$this.navs.children().each(function(){
					if($(this).data("text")==text){
						arrTemp.push($(this));
					}
				});
				if(arrTemp.length==1){
					$(arrTemp[0]).html($(arrTemp[0]).data("text")+$(arrTemp[0]).find("i").prop("outerHTML"));
				}
				//调整actionTab的位置
				$this._showTabByAction();
			})
		},
		contextmenu:function(){
			var $this=this;
			this.navs.on("contextmenu",".nav_item",function(e){
				e.preventDefault();
				var $event=e;
				$this.contmenu.fadeIn();
				$this.contmenu.css({"left":e.clientX,"top":e.clientY});
				//关闭当前
				$this.contmenu.on("click",".js_remove",function(){
					$($event.target).find(".nav_close").trigger("click");
				});
				//关闭其他
				$this.contmenu.on("click",".js_other",function(){
					$($event.target).siblings().find(".nav_close").trigger("click");
					//调整actionTab的位置
				$this.prevLeft=0;
				$this._showTabByAction();
				});
				//关闭右侧
				$this.contmenu.on("click",".js_moveright",function(){
					$($event.target).nextAll().find(".nav_close").trigger("click");
				});
			});
			$("body").click(function(e){
				//if($(e.target).parents("body").length>0){
					$this.contmenu.fadeOut().unbind("click");
				//}
			});
			
			/*var currIframedom=$("iframe").filter(function(index,val) {
			  return this.display!="block";
			});*/
		},
		navLeft:function(){
			var $this =this;
			this.navl.on("click",function(e){
				e.preventDefault();
				var winPosition=$this.navr.position().left-40;
				if($this.prevLeft<winPosition){
					$this.prevLeft=0;
					$this.navs.css("left",0);
					return false;
				}
				$this.navs.children().each(function(index,val){
					if($(val).position().left>=($this.prevLeft-winPosition)){
						var left=$(val).position().left;
						$this.navs.css("left",-left);
						$this.prevLeft=left;
						return false;
					}
				});
			})
		},
		navRight:function(){
			var $this =this;
			this.navr.on("click",function(e){
				e.preventDefault();
				var winPosition=$this.navr.position().left-40;
				//最后一个页面tab的结束位置
				var maxLeft =$this.navs.children().last().position().left+$this.navs.children().last().outerWidth();
				if((maxLeft-$this.prevLeft)<winPosition){
					return false;
				}
				$this.navs.children().each(function(index,val){
					if($(val).position().left>=(winPosition+$this.prevLeft)){
						var left=$(val).prev().prev().position().left;
						$this.navs.css("left",-left);
						$this.prevLeft=left;
						return false;
					}
				});
			})
		},
		reflush:function(){
			var $this = this;
			this.refdom.on("click",reflushIfram);
			function  reflushIfram(){
				$this.iframes.children().each(function(){
					if($(this).css("display")!="none"){
						this.contentWindow.location.reload(true);
						return false;
					}
				});
			}
		},
		_showTabByAction:function(){
			var $this =this;
			var actionDom =$this.navs.find(".action");
			var winPosition=$this.navr.position().left-40;
			var actionLeft=actionDom.position().left;
			var maxLeft =$this.navs.children().last().position().left+$this.navs.children().last().outerWidth();//最后一个页面tab的结束位置
			var prevDom =null;
			var lastDom =null;
			//拿到第一个到最左边的距离
			$this.navs.children().each(function(index,val){
				var left=$(val).position().left;
				if(left>=$this.prevLeft){
					prevDom=$(val);
					return false;
				}
			});
			//拿到最后一个到左边的距离	
			$this.navs.children().each(function(index,val){
				var left=$(val).position().left+$(val).outerWidth();
				if(left>($this.prevLeft+winPosition)){
					lastDom=$(val).prev().prev();
					return false;
				}
			});
			//如果是最后一页所做的事
			if((maxLeft-$this.prevLeft)<winPosition){
				if(prevDom.next().length>0&&actionLeft<=prevDom.next().position().left){
					$this.navs.children().each(function(index,val){
						if($(val).position().left>=(actionLeft-winPosition/2)){
							var left=$(val).position().left;
							$this.navs.css("left",-left);
							$this.prevLeft=left;
							return false;
						}
					});	
				}else{
					return false;
				}
			}
			//不是最后一页  点击 不是最左边两个或者最右边两个就不执行  写在上面一个if后面是防止lastDom不报错，因为最后一页拿不到最后的两个dom
			if(actionLeft>prevDom.next().position().left&&actionLeft<lastDom.position().left){
				return false;
			}
			//点击左边两个 或右边两个做的事情 action居中
			$this.navs.children().each(function(index,val){
				if($(val).position().left>=(actionLeft-winPosition/2)){
					var left=$(val).position().left;
					$this.navs.css("left",-left);
					$this.prevLeft=left;
					return false;
				}
			});	
				
		}
	}
	tabs.init();
	
	var menuClick={
		menus:"#js_menuBox",//所有菜单项盒子
		menu:".menu_item",//所有菜单项
		init:function(){
			this.click();//子菜单点击事件绑定
			this.minmenu();//
		},
		click:function(){
			var $this = this;
			$(this.menus).on("click",this.menu,function(e){
				if($(this).next().length>0){//如果当前有UL
					/*css*/
					//1.改变图标		同辈还原
					//2.左侧action   同辈还原
					//action
					$(this).closest("li").toggleClass("action").siblings().removeClass("action");
					//icon
					$(this).find("i").last().toggleClass("fa-angle-left").toggleClass("fa-angle-down");
					//slideToggle 顺带把其它还原
					$(this).next().stop(true,true).slideToggle("fast").closest("li").siblings().find(".menu_items").stop(true,true).slideUp("fast").prev().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-left");
					if($("body").hasClass("min-side-menu")){
						$("body").removeClass("min-side-menu");
					}
				}
			});
		},
		minmenu:function(){
			$(window).resize(this.autoMin);
		},
		autoMin:function(){
			if($("body").outerWidth()<768){
				if(!$("body").hasClass("min-side-menu")){
					$("#js_menuBox").stop(true,true).fadeOut("show",function(){
						$("body").addClass("min-side-menu");
						if($(".menu_items >li.action").length>0){
							$(".menu_items >li.action >a").trigger("click");
						}
						$("#js_menuBox").stop(true,true).fadeIn("show");
					});
				}
			}
		}
	};
	menuClick.init();
});