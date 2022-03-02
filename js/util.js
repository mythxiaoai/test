/*工具类*/
/**
 * 将form里的表单元素序列化成{"username":"小艾","hobby":"2,3"}格式
 * @param {Object} formDom
 */
function getFromJson(formDom) {
  var formElements = formDom.elements;
  var json = {};
  for (var i = 0, len = formElements.length; i < len; i++) {
    var type = formElements[i].type.toLowerCase();
    if (type != "button" && type != "submit" && type != "reset") {
      if (type == "checkbox" && formElements[i].checked) {
        var value = json[formElements[i].name] || formElements[i].value;
        if (formElements[i].name in json) {
          value += "," + formElements[i].value;
        }
        json[formElements[i].name] = value;
      } else if (type == "radio" && formElements[i].checked) {
        json[formElements[i].name] = formElements[i].value;
      }

      if (type != "radio" && type != "checkbox") {
        json[formElements[i].name] = formElements[i].value;
      }
    }
  }
  return json;
}

/**
 * 放在传参脚本攻击
 * @param {Object} str
 */
function pre(str) {
  return str.replace(/[<>"&]/g, function (val, index, allText) {
    switch (val) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "\"":
        return "&quot;";
      case "&":
        return "&amp;";
    }
  });
}
/**
 * 判断非空
 * 
 * @param val
 * @returns {Boolean}
 */
function isEmpty(val) {
  val = $.trim(val);
  if (typeof val == "number" && val === 0)//这个判断web专用，，
    return false;
  if (val == null)
    return true;
  if (val == undefined || val == 'undefined')
    return true;
  if (val == "")
    return true;
  if (val.length == 0)
    return true;
  if (!/[^(^\s*)|(\s*$)]/.test(val)) {
    return true;
  }
  return false;
}


/*非空判断*/
function isNotEmpty(val) {
  return !isEmpty(val);
}

/**
 * 获取URL的参数
 * addOrUpdate.html?opt=update    ==>GetQueryString("opt")  ==>update
 * @param {Object} name
 */
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

//json转url？
function getUrlByJson(params) {
  let tempParam = [];
  for (let key in params) {
    //url中文转义
    tempParam.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
  }
  return tempParam.join("&")
}

/*对象拓展*/
/**
 * 对Date的扩展，将 Date 转化为指定格式的String 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
 * 可以用 1-2 个占位符 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) eg: (new
 * Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 (new
 * Date()).format("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04 (new
 * Date()).format("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04 (new
 * Date()).format("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04 (new
 * Date()).format("yyyy-M-d h:m:s.S q ") ==> 2006-7-2 8:9:4.18
 */
function formaTime(data, fmt) {
  Date.prototype.format = function (fmt) {
    var o = {
      "Y+": this.getFullYear(),
      "M+": this.getMonth() + 1,
      // 月份
      "d+": this.getDate(),
      // 日
      "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
      // 小时
      "H+": this.getHours(),
      // 小时
      "m+": this.getMinutes(),
      // 分
      "s+": this.getSeconds(),
      // 秒
      "q+": Math.floor((this.getMonth() + 3) / 3),
      // 季度
      "S": this.getMilliseconds()
      // 毫秒
    };
    var week = {
      "0": "日",
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六"
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
        .substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
      fmt = fmt
        .replace(
          RegExp.$1,
          ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f"
            : "/u5468")
            : "")
          + week[this.getDay() + ""]);
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
          : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  };

  return new Date(data).format(fmt);
}

//生成uuid
function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);

  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid.replace(new RegExp("-", "igm"), "");
}
//获取网络安全色
function getRandomSafeColor() {
  var base = ['00', '33', '66', '99', 'CC', 'FF'];     //基础色代码
  var len = base.length;                         //基础色长度
  var bg = new Array();                         //返回的结果
  var random = Math.ceil(Math.random() * 215 + 1);    //获取1-216之间的随机数
  var res;
  for (var r = 0; r < len; r++) {
    for (var g = 0; g < len; g++) {
      for (var b = 0; b < len; b++) {
        bg.push('#' + base[r].toString() + base[g].toString() + base[b].toString());
      }
    }
  }
  for (var i = 0; i < bg.length; i++) {
    res = bg[random];
  }
  return res;
}

//简单数据变成父子结构数据  忽略大小写
function simpleToPS(data, optObj) {
  let opts = {
    idKey: "id",
    pIdKey: "pid",
    rootPId: ""
  }
  opts = Object.assign({}, opts, optObj);
  for (let i in opts) {
    opts[i] = opts[i].toLowerCase();
  }
  data = JSON.parse(JSON.stringify(data));
  for (let i in data) {
    data[i].children = [];
  }
  let index = 0, result = [];
  while (data.length > 0) {
    index = index % data.length;
    if (data[index][opts.pIdKey] == opts.rootPId) {
      data[index].level = 1;
      result.push(data[index]);
      data.splice(index, 1);
      index--;
    } else {
      arrpush(result, 2);
    }
    index++;
  }
  function arrpush(arr, level) {
    let markinto = true;
    for (let i = 0; i < data.length; i++) {
      for (let k = 0; k < arr.length; k++) {
        if (data.length > 0) {
          if (arr[k][opts.idKey] == data[i][opts.pIdKey]) {
            data[i].level = level;
            arr[k].children.push(data[i]);
            data.splice(i, 1);
            i--;
            markinto = false;
            break;
          }
        }
        if (arr[k].children.length > 0 && markinto) {
          arrpush(arr[k].children, ++level);
          level--;
        }
      }
    }

  }
  return result;
}

//根据文件类型和文件名获取文件类型
function getFileType(vType, vName) {
  let fileTypeSettings = {
    image: function (vType, vName) {
      return (compare(vType, 'image.*') && !compare(vType, /(tiff?|wmf)$/i) ||
        compare(vName, /\.(gif|png|jpe?g)$/i));
    },
    html: function (vType, vName) {
      return compare(vType, 'text/html') || compare(vName, /\.(htm|html)$/i);
    },
    doc: function (vType, vName) {
      return compare(vType, /(word|office)$/i) ||
        compare(vName, /\.(docx?)$/i);
    },
    xls: function (vType, vName) {
      return compare(vType, /(excel|office)$/i) ||
        compare(vName, /\.(xlsx?)$/i);
    },
    ppt: function (vType, vName) {
      return compare(vType, /(powerpoint|office)$/i) ||
        compare(vName, /\.(pptx?|potx?)$/i);
    },
    zip: function (vType, vName) {
      return compare(vName, /(zip|rar|tar|gzip|gz|7z)$/i);
    },
    gdocs: function (vType, vName) {
      return compare(vType, /(word|excel|powerpoint|office|iwork-pages|tiff?)$/i) ||
        compare(vName, /\.(docx?|xlsx?|pptx?|pps|potx?|rtf|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i);
    },
    text: function (vType, vName) {
      return compare(vType, 'text.*') || compare(vName, /\.(xml|javascript)$/i) ||
        compare(vName, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i);
    },
    video: function (vType, vName) {
      return (compare(vType, /(ogg|mp4|mp?g|mov|webm|3gp)$/i) ||
        compare(vName, /\.(og?|mp4|webm|mp?g|mov|3gp|avi|rmvb)$/i));
    },
    audio: function (vType, vName) {
      return (compare(vName, /(ogg|mp3|mp?g|wav)$/i) ||
        compare(vName, /\.(og?|mp3|mp?g|wav)$/i));
    },
    flash: function (vType, vName) {
      return compare(vType, 'application/x-shockwave-flash', true) || compare(vName, /\.(swf)$/i);
    },
    pdf: function (vType, vName) {
      return compare(vType, 'application/pdf', true) || compare(vName, /\.(pdf)$/i);
    },
    obj: function () {
      return true;
    },
    other: function () {
      return true;
    }
  }

  function compare(input, str, exact) {
    return input !== undefined && (exact ? input === str : input.match(str));
  }

  for (let key in fileTypeSettings) {
    let result = fileTypeSettings[key](vType, vName);
    if (result) return key
  }
}

//根据文件类型和文件名获取对应图标
function getIconByfile(vType, vName) {
  var icon = {
    'doc': '<i class="fa fa-file-word-o text-primary"></i>',
    'xls': '<i class="fa fa-file-excel-o text-success"></i>',
    'ppt': '<i class="fa fa-file-powerpoint-o text-danger"></i>',
    'pdf': '<i class="fa fa-file-pdf-o text-danger"></i>',
    'zip': '<i class="fa fa-file-archive-o text-muted"></i>',
    'html': '<i class="fa fa-file-code-o text-info"></i>',
    'text': '<i class="fa fa-file-text-o text-info"></i>',
    'video': '<i class="fa fa-file-video-o text-warning"></i>',
    'audio': '<i class="fa fa-file-audio-o text-warning"></i>',
    'image': '<i class="fa fa-file-photo-o text-danger"></i>',
    'gif': '<i class="fa fa-file-photo-o text-muted"></i>',
    'png': '<i class="fa fa-file-photo-o text-primary"></i>',
    "obj": '<i class="fa fa-file-o"></i>',
    "other": '<i class="fa fa-file-o"></i>'
  }
  return icon[getFileType(vType, vName)];
}





//深度克隆
function mix(target, datajson) {
  var args = Array.prototype.slice.call(arguments);
  if (args.length == 1) return args[0];
  var i = 1;
  while (args[i]) {//这里做为判断条件 取不到就返回false
    var temp = args[i];
    for (var j in temp) {
      if (temp.hasOwnProperty(j)) {
        if (typeof temp[j] == "object") {
          target[j] = mix({}, temp[j]);
        } else {
          target[j] = temp[j];
        }
      }
    }
    i++;
  }
  return target;
}

/*dom操作*/
function dom_findParentbyClass(dom, className) {
  for (; ;) {
    if (dom.nodeName == 'BODY') break
    if (dom.className.split(' ').includes(className)) return dom
    dom = dom.parentElement
  }
  return false
}




