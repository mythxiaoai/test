const fs = require('fs');
const cheerio = require('cheerio');
const https = require('https');
const path = require('path');

// 读取HTML文件
//变成绝对路径
const html = fs.readFileSync('./index.html', 'utf8');
const $ = cheerio.load(html);

const newsData = {};
const file_dir = 'files5'
// 创建files文件夹
if (!fs.existsSync(`./${file_dir}`)) {
  fs.mkdirSync(`./${file_dir}`);
}

// 遍历所有新闻项
$('img').each((index, element) => {
  let imageUrl =$(element).attr("src")
  if (!imageUrl) {
    return; 
  }
  console.log("imageUrl",imageUrl);
  
  //将jpeg=>jpg
  if (imageUrl.endsWith('.jpeg')) {
    imageUrl = imageUrl.replace('.jpeg', '.jpg');
  }
  newsData[index] = imageUrl;

});

// 创建shopify版本的数据
const shopifyData = JSON.parse(JSON.stringify(newsData));

// 下载图片并更新shopify数据
async function processData() {
  for (const key in newsData) {
    const imageUrl = newsData[key];
    const fileName = path.basename(imageUrl);
    
    // 更新shopify数据中的图片路径
    shopifyData[key] = `https://cdn.shopify.com/s/files/1/0714/7025/2286/files/${fileName}`;
    
    // 下载图片
    await downloadImage(imageUrl, fileName);
  }

  // 保存JSON文件
  fs.writeFileSync('json3.json', JSON.stringify(newsData, null, 2));
  fs.writeFileSync('json4.json', JSON.stringify(shopifyData, null, 2));
  console.log('Data has been saved to json1.json and json2.json');
}

// 下载图片函数
function downloadImage(url, fileName) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const filePath = path.join(`./${file_dir}`, fileName);
      const fileStream = fs.createWriteStream(filePath);
      
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${fileName}`);
        resolve();
      });
      
      fileStream.on('error', (err) => {
        console.error(`Error saving ${fileName}: ${err.message}`);
        reject(err);
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${fileName}: ${err.message}`);
      reject(err);
    });
  });
}

// 执行程序
processData().catch(console.error); 