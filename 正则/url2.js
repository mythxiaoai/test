let str = "https://cdn.myshopline.cn/t/cf/4a3338bb07f408794663a51ec7d38750/x6fqdzsjjgf0hr14/js/vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_rc-align_es_index_js-nod-a1a315.067bb6.chunk.js"


let regepx = /^https:\/\/cdn.myshopline.cn\/t\/cf\/4a3338bb07f408794663a51ec7d38750\/.*?\/(.*)$/;

regepx.test(str)
console.log(RegExp.$1);

//wss://xiaoai.myshoplinestg.com:8989/ws
let str2 = "wss://xiaoai.myshoplinestg.com:8989/ws"


let regepx2 = /.*?\.myshopline.*?\.com:(.*?)\/ws/;
regepx2.test(str2)
console.log(`ws://127.0.0.1:${RegExp.$1}/ws`);


//https://xiaoai.myshoplinestg.com/admin/theme/codeEditor/64c9fcf7a31a0d077a5ac5dd
let str3 = "https://xiaoai.myshoplinestg.com/admin/theme/codeEditor/static/js/Home.2db2ed7a.chunk.js"


let regepx3 = /(.*):.*myshopline.*?(\/admin\/theme\/codeEditor\/)(.*\/)(.*?\.).*?\.(.*)/;
regepx3.test(str3)
console.log(RegExp.$1);
console.log(RegExp.$2);
console.log(RegExp.$3);
console.log(RegExp.$4);
console.log(RegExp.$5);
console.log(RegExp.$1+RegExp.$2+RegExp.$3+RegExp.$4+RegExp.$5);