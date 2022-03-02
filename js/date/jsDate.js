/**
 * 生成指定格式的当前日期
 * 
 * @returns {String}
 * @author dongDelights
 */
function formatDate() {     
	//var now = (new Date()).valueOf();
	//或者var now = new Date().getTime();
	var now = new Date();
	var year = now.getFullYear();     
	var month = now.getMonth()+1;
	if(month>=0 && month<=9) {
		month = "0" + month;
	}
	var date = now.getDate();
	if(date>=0 && date<=9) {
		date = "0" + date;
	}
	var hour = now.getHours();
	if(hour>=0 && hour<=9) {
		hour = "0" + hour;
	}
	var minute = now.getMinutes();
	if(minute>=0 && minute<=9) {
		minute = "0" + minute;
	}
	var second = now.getSeconds();
	if(second>=0 && second<=9) {
		second = "0" + second;
	}
	return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;     
}     
         