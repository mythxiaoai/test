// https://vb.wting.info/youshengxiaoshuo/wuxiaxianxia/frxxc5/lridir0ck1s.mp3?token=rgSRi8GkjMJuj8Sm5DapaY2QwU8-txmdiXWxaIT3iNxBvrdOhc4Vzw**&e=1669439170897&t=2&res=5427482000000064&source=web&sign=b6a3d1750501d35ba70f10f0bd44c9c8


const axios = require("axios");
const fs = require("fs");
const { random } = require("lodash");
const path = require("path");
const data = require("./data.json");
async function fetch(url, opts = {}) {
  return (await axios.request(url, opts)).data
}

function getMp3(url){
  return fetch(url, {
    responseType: 'stream',
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "range": "bytes=0-",
      "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "audio",
      "sec-fetch-mode": "no-cors",
      "sec-fetch-site": "cross-site",
      "Referer": "https://www.lrts.me/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });
}

function geturl(id){
  return fetch(`https://www.lrts.me/ajax/path/4/54274820/${id}`, {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://www.lrts.me/playlist",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
}

(async ()=>{
  // for (const v of data) {
  //   let res = await getMp3(v.resId);
  //   let fullPath =path.resolve(__dirname,`./mp3/${getName(v.resName)}.mp3`); 
  //   saveMusicToLocal(fullPath,res)
  // }

  //test
  let v = data[65];
  let res1 = await geturl(v.resId);
  console.log(res1.data);
  let res2 = await getMp3(res1.data);
  let fullPath =path.resolve(__dirname,`./mp3/${getName(v.resName)}.mp3`); 
  // saveMusicToLocal(fullPath,res2)

})();

function getName(res){
  if(res.match(/\d+&/)){
    return res.match(/\d+&/)[0].match(/\d+/)[0];
  }
 return Math.random().toString().slice(2);
}



// 储存音乐
async function saveMusicToLocal(musicName,data){
  let writeStream = fs.createWriteStream(musicName,{ encoding: "binary" })
  data.pipe(writeStream);
  data.on("close", function () {
      writeStream.close()
  })
}
