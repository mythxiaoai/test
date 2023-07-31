

function parseURL(str) {

  let url = new URL(str);

  // 获取文件名
  const fileName = url.pathname.split('/').pop();

  // 获取域名
  const domain = url.hostname;

  // 获取路径
  const lastPath = "/"+url.pathname.split('/').pop();

  return {
    fileName,
    domain,
    lastPath
  };
}

let str = 'http://image.uczzd.cn/9819/';


console.log(parseURL(str));