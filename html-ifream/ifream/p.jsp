
<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
	<body>
		我是父
		<a href="javascript:;" id="p" >父的事件</a>
		<span id="p2">p2的点击事件</span>
		<select id="p3" onchange="dom2()">
			<option>1</option>
			<option>2</option>
			<option>3</option>
		</select>
		<iframe id="iframe" src="s.jsp"></iframe>
		<iframe id="iframe2" src="s2.jsp"></iframe>
	</body>
	<script src="../../js/jquery.js"></script>
	<script src="../../js-插件/xmodal/xmodal.js"></script>
	<script>
		var pvar = "P变量"
		/*$("body").on("click","#p",()=>{
			alert(1);
		});*/
		function dom2(){
			alert("p3");
		}
		/*$("body").on("click","#p2",()=>{
			alert("p2");
		});
		$("body").on("change","#p3",()=>{
			alert("p3");
		});
		/*window.onload = function(){
			$("#p3").trigger("change")
		}*/
		
		
		//本次父子窗口调用测试总结
		/**
		 * 注意点：
		 *1. 在使用iframe框架的时候  注意  所以的父子操作 需要注意框架之间是同时加载的  需要加上$(document).ready()事件
		 *2.事件代理--模拟点击   因为jquery的trigger模拟点击是基于当前window的  所以模拟点击无效，，亲测原生的js有效  
		 * 只限于模拟点击  jsdom.click()  当然下拉框没有 jsdom.change()方法的
		 *3.dom3级事件绑定的形式  on  或者 $dom.click(),同上所述  不能在子trigger(eventName)触发  需要用原生jsdom.click()方法
		 *4.dom2级事件绑定的形式 (是指在标签上的onclick="clickFn()"事件)  是可以在子trigger(eventName)触发  change等事件亲测有效
		 * 
		 * 解决方案：
		 * 1.事件绑定都由当前界面去完成，模拟点击都不可信,可以通过调用子window对象调用当前的业务方法去执行模拟点击
		 * 2.通过URL带参数去刷新界面解析url的参数去判断
		 */
	</script>
</html>