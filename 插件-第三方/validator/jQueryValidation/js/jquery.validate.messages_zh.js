/*1	required:true	必须输入的字段。
2	remote:"check.php"	使用 ajax 方法调用 check.php 验证输入值。
3	email:true	必须输入正确格式的电子邮件。
4	url:true	必须输入正确格式的网址。
5	date:true	必须输入正确格式的日期。日期校验 ie6 出错，慎用。
6	dateISO:true	必须输入正确格式的日期（ISO），例如：2009-06-23，1998/01/22。只验证格式，不验证有效性。
7	number:true	必须输入合法的数字（负数，小数）。
8	digits:true	必须输入整数。
9	creditcard:	必须输入合法的信用卡号。
10	equalTo:"#field"	输入值必须和 #field 相同。
11	accept:	输入拥有合法后缀名的字符串（上传文件的后缀）。
12	maxlength:5	输入长度最多是 5 的字符串（汉字算一个字符）。
13	minlength:10	输入长度最小是 10 的字符串（汉字算一个字符）。
14	rangelength:[5,10]	输入长度必须介于 5 和 10 之间的字符串（汉字算一个字符）。
15	range:[5,10]	输入值必须介于 5 和 10 之间。
16	max:5	输入值不能大于 5。
17	min:10	输入值不能小于 10。
Tip：remote  ajax验证说明：后台只能返回Boolean一个值。。  不需要自己写ajax
* */

//验证小图标 加了漂亮  要用的  加载messages字段的消息里面...每个都要加
var  v_icon ="<i class='fa fa-times-circle'></i> ";

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
 */
$.extend($.validator.messages, {
	required: v_icon+"这是必填字段",
	remote: v_icon+"请修正此字段",
	email: v_icon+"请输入有效的电子邮件地址",
	url: v_icon+"请输入有效的网址",
	date: v_icon+"请输入有效的日期",
	dateISO: v_icon+"请输入有效的日期 (YYYY-MM-DD)",
	number: v_icon+"请输入有效的数字",
	digits: v_icon+"只能输入数字",
	creditcard: v_icon+"请输入有效的信用卡号码",
	equalTo: v_icon+"你的输入不相同",
	extension: v_icon+"请输入有效的后缀",
	maxlength: $.validator.format(v_icon+"最多可以输入 {0} 个字符"),
	minlength: $.validator.format(v_icon+"最少要输入 {0} 个字符"),
	rangelength: $.validator.format(v_icon+"请输入长度在 {0} 到 {1} 之间的字符串"),
	range: $.validator.format(v_icon+"请输入范围在 {0} 到 {1} 之间的数值"),
	max: $.validator.format(v_icon+"请输入不大于 {0} 的数值"),
	min: $.validator.format(v_icon+"请输入不小于 {0} 的数值")
});
}));
//统一配置
$.validator.setDefaults({
	errorElement: 'span',
    errorClass: 'help-block m-b-none m-t-none',
    ignore: ".ignore",//忽略验证带有这个class的元素
  	highlight: function (e) {
        $(e).closest(".form-group").removeClass("has-success").addClass("has-error");
        $(e).siblings("span").hide();
    },
    success: function (e) {
        e.closest(".form-group").removeClass("has-error").addClass("has-success");
        $(e).siblings("span").show();
    },
    errorPlacement: function (error, element) {
        element.parent().append(error);
    },
})

//自定义验证方法
// 邮政编码验证   
jQuery.validator.addMethod("isZipCode", function(value, element) {   
   // var tel = /^[0-9]{6}$/;
	var tel =/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    return this.optional(element) || (tel.test(value));
}, v_icon+"请正确填写您的邮政编码");

//密码
jQuery.validator.addMethod("passwd", function(value, element) {   
    var tel = /^(\w){6,20}$/;
    return this.optional(element) || (tel.test(value));
}, v_icon+"只能输入6-20个字母、数字、下划线  ");

//校验普通电话、传真号码：可以“+”开头，除数字外，可含有“-”
jQuery.validator.addMethod("tel", function(value, element) {
   // var tel = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;  
	var tel=/^[1][3,4,5,7,8][0-9]{9}$/;
    return this.optional(element) || (tel.test(value));
}, v_icon+"请输入正确号码~");

