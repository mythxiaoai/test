/* 
        主调函数
        在 Jquery的 .read方法里调用 ReplaceChildChs($(document));
        或者页面的最后调用
        ReplaceChildChs($(document));
    */
    var langPackage = {
    "主题":"Title",
    "下一页":"NextPage",
    "末页":"LastPage",
    "首页":" FirstPage ",
    "上一页":" PreviousPage ",
    "待办工作":"MyTasks",
    "中":"Middle",
    "每页":" EachPage ",
    "条":" Record ",
    "共":" Total ",
    "页":" Page ",
    "第":" Current ",
    "工作主题":" ProcTitle",
    "上传数据":"upload",
    
    };
(()=>{
    function fanyi(){
     if(localStorage.getItem("lang")=="en"){
       ReplaceChildChs($("body"));
     }
    }
    fanyi();
    window.fanyi = fanyi;

    function ReplaceChildChs(nodeObj){
        if (nodeObj.children().length > 0){
            nodeObj.children().each(function(){
             ReplaceChildChs($(this));
              FindChsAndReplaceIt($(this));
            });
        } else {
            FindChsAndReplaceIt(nodeObj);
        }
    }

    function FindChsAndReplaceIt(nodeObj){
        var pat = new RegExp("[\u4e00-\u9fa5]+","g");
        if ((nodeObj.text() || nodeObj.val() || nodeObj.attr("title")) 
            && (pat.exec(nodeObj.text()) || pat.exec(nodeObj.val()) || pat.exec(nodeObj.attr("title")) )){
            var str = ""
            if (nodeObj.text()){
                str = nodeObj.text();
                ReplaceValue(str, nodeObj, "text");
            }
            if (nodeObj.val()){
                str = nodeObj.val();
                ReplaceValue(str, nodeObj, "val");
            }
            if (nodeObj.attr("title")){
                str = nodeObj.attr("title");
                ReplaceValue(str, nodeObj, "title");
            }
        }
    } 

    function ReplaceValue(str, nodeObj, attrType){
      var arr;
      var pat = new RegExp("[\u4e00-\u9fa5]+","g");
      while((arr = pat.exec(str)) != null){
        if (langPackage[arr[0]]){
            str = str.replace(arr[0], langPackage[arr[0]]);
            
            if (attrType == "text"){
                nodeObj.text(str);
            }
            else if (attrType == "val"){
                nodeObj.val(str);
            }
            else if (attrType == "title"){
                nodeObj.attr("title", str);
            }
        }
      }
    }
})();
    