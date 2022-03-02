

function ajax(str,boo, time) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      boo?reslove(str + "返回结果成功"):reject(str + "返回结果失败")
    }, time || 1000);
  });
}

(async ()=>{
  //结论:promise如果报错被处理则不会向上抛
  await ajax("ajax",false).catch(v=>{})
  console.log("正常运行1");
  //Promise.all一样
  await Promise.all([ajax("ajax",false),ajax("ajax",true)]).catch(v=>{})
  console.log("正常运行2");
  //如果里层捕获也不会向上抛
  await Promise.all([ajax("ajax",false).catch(v=>{}),ajax("ajax",true)])
  console.log("正常运行3");
  //如果里层捕获也不会向上抛
  let any = await Promise.any([ajax("ajax",false),ajax("A",true),ajax("B",true)])
  console.log("正常运行4",any);
})()
