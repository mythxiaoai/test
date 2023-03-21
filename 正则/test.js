//反向引用
// var str = "2019-5-1";
// //改成2019年05月01日
// var add0 = num=>num<10?num:"0"+num;
// var result = str.replace(/(\d+)-(\d+)-(\d+)/,`$1年${add0('$2')}月${add0('$3')}日`)
// console.log(result);

//前瞻
// var str = "ass5dad4ds1das6saasd";
// //d前面的数字改成X
// var result = str.replace(/\w(?=d)/g,"X")
// console.log(result);

//exec
// var str = "2019-5-1";
// //改成2019年05月01日
// var add0 = num=>num<10?num:"0"+num;
// var arr = /(\d+)-(\d+)-(\d+)/.exec(str)
// console.log(arr);//[ '2019-5-1', '2019', '5', '1', index: 0, input: '2019-5-1' ]
// console.log(`${arr[1]}年${add0(arr[2])}月${add0(arr[3])}日`);//2019年5月1日

//match
// let result = "abca".match(/a/g);
// console.log(result);//[ 'a', 'a' ]

// let result = "abca".match(/a/);
// console.log(result);//[ 'a', index: 0, input: 'abca' ]

//驼峰转下划线
// let name = "userInfoName"
// let result = name.replace(/([A-Z])/g,"_$1")
// console.log(result.toLocaleLowerCase());

//1、将一个字符串 例如：border-left-top转化成驼峰形式
// let str = "border-left-top";
// let toUp = str=>str.toLocaleUpperCase(str);
// let result = str.replace(/-(\w)/g,function(val,group,index,allText){
//     return group.toLocaleUpperCase();
// })
// console.log(result);

//2、匹配01-12的字符
// let str = "sadsa12sad125sa11dasds02"
// let result = str.match(/0[0-9]|1[0-2]/g);
// console.log(result);


//3、匹配长度为6-13位的数字(qq号码)
// let str = "152354412"
// let result = /^[1-9][0-9]{5,12}$/.test(str);
// console.log(result);

//4、去掉字符串中的数字
// let str = 'jklj131hjhks23s';
// let result = str.replace(/\d/g,"");
// console.log(result);

//5、匹配常见的固定电话号码
// 区号的规则大概是：
// 0开头，
// 后面有可能还有1个数字，也有可能是2位数字，
// 但如果是还有两位数字的情况下，第三位肯定是1357其中一位。
// 第四位可能有0-9都有可能。
/*
第一位基本对应大区
　　第二位对应省区，先用奇数，奇数不够再用偶数
　　第三位为1的通常是省会首府，但省会使用2位区号时例外
 */
//  let str = '020-12345689';
//  let result = /0\d{2}\d?-\d{7,8}/.test(str);
//  console.log(result);

//json格式输入  逗号隔开
/*
1.不以:,开头
2.中间有且有一个以上的:
3.最后不能以:,结尾
*/
//  let str = "a35ewtre,adsa:dsafsafd,ddsadsa:dsadsa";
//  let regepx = /^[^:,]:+|[^:]$/;
//  let result = str.match(regepx)
//  console.log(result);//[ 'adsa:dsafsafd', 'ddsadsa:47821568*' ]
 
// console.log( regepx.test(str));

//金钱格式化
// let str = "6654157156145";
//  let result = str.replace(/(\d)(?=(\d{3})+$)/g, '$1,') 
//  console.log(result);//6,654,157,156,145


//  var str = "2019-5-1";
// //改成2019年05月01日
// var add0 = num=>num<10?num:"0"+num;
// /(\d+)-(\d+)-(\d+)/.test(str);
// console.log(RegExp.$1);
// console.log(`${RegExp.$1}年${add0(RegExp.$2)}月${add0(RegExp.$3)}日`);//2019年5月1日

//url匹配文件名和文件后缀
//  let str = "http://image.uczzd.cn/9819/981152196281048560.jpg?id=0&from=export&height=140&width=270";
//  let fileName = str.replace(/.*[/](?=[^/].*)|\..*/img, '')
//  console.log(fileName);
//  str.replace(/.*(?=\.(\w+))/img, '')
//  console.log(RegExp.$1);

// var json = `
// LL21-081A foco led blue spot 12v-80v
// -LL21080A  “          “       “          “           “
// -M011-006A  rodamiento mástil axial
// -MC01-010A  cadena mástil BL634
// -MC01-016A   “                “      BL823
// -A-EK00-023A-0000D
// -A-SR03-054A-0309A
// -A-SR03-055A-0309A
// -A-SR09-057A-0973A
// -A-SR09-056A-0973A
// -A-SR11-052A-0024A
// -A-SK05-024A-0024A                                                      
// -A-SK05-023A-0024`
// console.log(json.match(/[A-Z0-9][A-Z0-9-]{8,}\b/gm,""));

//[A-Z0-9][A-Z0-9-]+\d


//匹配空间
//  let str = "/asdsad/asdsadsad/fdfdsc";
//  let fileName = str.replace(/\w+\b(?!\/)/img, '')
//  console.log(fileName);
// let str = "border-left-top";
// let toUp = str=>str.toLocaleUpperCase(str);
// let result = str.replace(/-(\w)/g,function(val,group,index,allText){
    //     return group.toLocaleUpperCase();
    // })
    // console.log(result);
    
    
    //下斜杠转驼峰
    // let arr = ["o-text", "o-password", "o-select-o", "o-select-m", "o-radio", "o-check", "o-date", "o-switch", "o-textarea"]
    // let res = arr.map(v=>v.replace(/-(\w)/g,function(val,group,index,allText){
        //     console.log(arguments);
        //         return group.toLocaleUpperCase();
        //     }))
// console.log(res.join(","));
//驼峰转下斜杠
// let res = ["aA","asdsadsaAsS"]
// console.log(res.join(",").replace(/([A-Z])/g,"-$1").split(","));//[ 'a-A', 'asdsadsa-As-S' ]


//数字格式化
// let str = "11223344";//--->11-22-33-44
//  let result = str.replace(/(\d)(?=(\d{2})+$)/g, '$1-') 
//  console.log(result);//6,654,157,156,145

//驼峰转下斜杠
// let res =  ['ACheckbox','ACheckboxGroup','ARadio','ARadioGroup']
// let result = res.join(",").replace(/([A-Z])/g,function(val,group,index,allText){
//     let pre = allText[index-1];
//     let v = group.toLowerCase();
//     return [undefined,","].includes(pre)?v:"-"+v;
// })
// console.log(result);
// let res =  "ACheckboxGroup"
// let result =res.replace(/([A-Z])/g,function(val,group,index,allText){
    //     let v = group.toLowerCase();
    //     return  index==0?v:"-"+v;
    // })
// console.log(result);

//中文
//[\u4e00-\u9fa5]
// let res = "我是中文"
// // let result =/^[\u4e00-\u9fa5]{0,255}$/.test(res)
// // console.log(result);
// let reg = new RegExp(`^[\u4e00-\u9fa5]{0,${res.length}}$`,"img");

// console.log(reg.test(res));

//首字母大写
// let res = "Atest"
// console.log(/^[A-Z]+/.test(res));
let res = `--------------- MR URL 汇总 start ---------------
--------------- Wink ---------------
Wink: https://git.duowan.com/webs/shopline-static/layout/themes/Wink/-/merge_requests/1071
Flash: https://git.duowan.com/webs/shopline-static/layout/themes/Flash/-/merge_requests/159
Feeling: https://git.duowan.com/webs/shopline-static/layout/themes/Feeling/-/merge_requests/145
Extent: https://git.duowan.com/webs/shopline-static/layout/themes/Extent/-/merge_requests/238
Shine: https://git.duowan.com/webs/shopline-static/layout/themes/Shine/-/merge_requests/225
--------------- Arise ---------------
Arise: https://git.duowan.com/webs/shopline-static/layout/themes/Arise/-/merge_requests/1761
--------------- Expect ---------------
Expect: https://git.duowan.com/webs/shopline-static/layout/themes/Expect/-/merge_requests/2245
Blouse: https://git.duowan.com/webs/shopline-static/layout/themes/Blouse/-/merge_requests/1575
Soo: https://git.duowan.com/webs/shopline-static/layout/themes/Soo/-/merge_requests/1833
Control: https://git.duowan.com/webs/shopline-static/layout/themes/Control/-/merge_requests/1957
--------------- Edges ---------------
Edges: https://git.duowan.com/webs/shopline-static/layout/themes/Edges/-/merge_requests/2169
Barn: https://git.duowan.com/webs/shopline-static/layout/themes/Barn/-/merge_requests/1529
--------------- BrooklynPro ---------------
BrooklynPro: https://git.duowan.com/webs/shopline-static/layout/themes/BrooklynPro/-/merge_requests/1728
--------------- Impress ---------------
Impress: https://git.duowan.com/webs/shopline-static/layout/themes/impress/-/merge_requests/3395
Along: https://git.duowan.com/webs/shopline-static/layout/themes/Along/-/merge_requests/1967
--------------- Solid ---------------
Solid: https://git.duowan.com/webs/shopline-static/layout/themes/Solid/-/merge_requests/1908?a=1
--------------- MR URL 汇总 end ---------------`

let result = res.match(/https:\/\/[A-Za-z0-9.-]+\/[A-Za-z0-9-\/%_.?=]+/g);
console.log(result);//[ 'a', 'a' ]