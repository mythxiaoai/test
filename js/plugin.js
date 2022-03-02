(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    $.jsonToKV = function(json){
    	str = "";
    	result = [];
    	for(var p in json){
    		str = p + "=" + json[p];
    		result.push(str);
    	}
    	return result.join("&");
    }
})(jQuery);