	//获取表单的值 {"username":"小艾","hobby":"2,3"}
		function getFromJson(formDom){
			var formElements = formDom.elements;
			var json = {};
			for(var i=0,len=formElements.length;i<len;i++){
				var type = formElements[i].type.toLowerCase();
				if(type!="button" && type!="submit" && type!="reset"){
					if(type=="checkbox" && formElements[i].checked){
						var value = json[formElements[i].name]||formElements[i].value;
						if(formElements[i].name in json){
							value +=","+formElements[i].value;	
						}
						json[formElements[i].name] = value;
					}else if(type=="radio" && formElements[i].checked){
						json[formElements[i].name] = formElements[i].value;
					}

					if(type!="radio" && type!="checkbox"){
						json[formElements[i].name] = formElements[i].value;
					}
				}
			}
			return json;
		};
	//获取参数值,获取表单的值
	//{"username":{"value":"小艾","ele":{}},"hobby":{"value":"2","ele":{}}}
	function getFromValue(formDom){
		var formElements = formDom.elements;
		var json = {};
		for(var i=0,len=formElements.length;i<len;i++){
			var type = formElements[i].type.toLowerCase();
			if(type!="button" && type!="submit" && type!="reset"){
				if(type=="checkbox" && formElements[i].checked){
					var value = json[formElements[i].name]||formElements[i].value;
					if(formElements[i].name in json){
						value +=","+formElements[i].value;	
					}
					json[formElements[i].name] = {
						value:value,
						ele:formElements[i]
					};
				}else if(type=="radio" && formElements[i].checked){
					json[formElements[i].name] = {
						value:formElements[i].value,
						ele:formElements[i]
					};
				}
				if(type!="radio" && type!="checkbox"){
					json[formElements[i].name] = {
						value:formElements[i].value,
						ele:formElements[i]
					};
				}
			}
		}
		return json;
	};



	//jquery中的serializeArray()的原理 
	//[{"name":"username","value":"小艾"},{"name":"hobby","value":"2"},{"name":"hobby","value":"3"}]
	function xaParams(formDom){
		var formElements = formDom.elements;
		var params = [];
		for(var i=0,len=formElements.length;i<len;i++){
			var type = formElements[i].type.toLowerCase();
			if(type!="button" && type!="submit" && type!="reset"){
				if((type=="radio" || type=="checkbox") && formElements[i].checked){
					params.push({"name":formElements[i].name,"value":encodeURIComponent(formElements[i].value)})
				}else{
					if(type!="radio" && type!="checkbox"){
						params.push({"name":formElements[i].name,"value":encodeURIComponent(formElements[i].value)})
					}
				}
			}
		}
		return params;
	}
	
	//jquery中的serialize()的原理   post参数传递形式
	//username=%E5%B0%8F%E8%89%BE&hobby=2
	function xaParams2(formDom){
		var formElements = formDom.elements;
		var params = "";
		for(var i=0,len=formElements.length;i<len;i++){
			var type = formElements[i].type.toLowerCase();
			if(type!="button" && type!="submit" && type!="reset"){
				if((type=="radio" || type=="checkbox") && formElements[i].checked){
					params+=((i>0)?"&":"")+formElements[i].name+"="+encodeURIComponent(formElements[i].value);
				}else{
					if(type!="radio" && type!="checkbox"){
						params+=((i>0)?"&":"")+formElements[i].name+"="+encodeURIComponent(formElements[i].value);
					}
				}
			}
		}
		return params;
	}
	
	/**
	 * 将json对象转化为URl参数字符串
	 * @param {Object} param
	 * @param {Object} key
	 */
	function parseParam(param, key){
	    var paramStr="";
	    if(param instanceof String||param instanceof Number||param instanceof Boolean){
	        paramStr+="&"+key+"="+encodeURIComponent(param);
	    }else{
	        $.each(param,function(i){
	            var k=key==null?i:key+(param instanceof Array?"["+i+"]":"."+i);
	            paramStr+='&'+parseParam(this, k);
	        });
	    }
	    return paramStr.substr(1);
	};
