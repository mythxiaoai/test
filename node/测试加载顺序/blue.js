document.body.style.cssText = "background: blue !important";//body还未生成导致执行失败
// document.body.className = "blue";

// document.onreadystatechange = function () {
//     // 如果用户是在domReady之后绑定的函数，就立马执行
//     if (document.readyState == 'complete') {
//         document.body.style.cssText = "background: blue !important";
//         // document.body.className = "blue";
//     }
// };