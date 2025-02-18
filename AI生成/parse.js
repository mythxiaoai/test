const fs = require('fs');
const cheerio = require('cheerio');
const https = require('https');
const path = require('path');

// 读取HTML文件
const html = fs.readFileSync('news.html', 'utf8');
const $ = cheerio.load(html);

const newsData = {};

// 创建files文件夹
if (!fs.existsSync('./files')) {
  fs.mkdirSync('./files');
}

// 遍历所有新闻项
$('.col.medium-4.small-12.large-4').each((index, element) => {
  const itemKey = `img_item_${index + 1}`;
  
  // 获取图片URL - 从style标签中提取
  const styleContent = $(element).find('style').text();
  const bgImageMatch = styleContent.match(/background-image: url\((.*?)\)/);
  let imageUrl = bgImageMatch ? bgImageMatch[1] : null;
  //将jpeg=>jpg
  if (imageUrl.endsWith('.jpeg')) {
    imageUrl = imageUrl.replace('.jpeg', '.jpg');
  }

  // 获取标题和链接
  const titleElement = $(element).find('.thin-font a');
  const title = titleElement.text().trim();
  const link = titleElement.attr('href');

  // 获取时间
  const timeText = $(element).find('p:not(.thin-font)').first().text().trim();

  if (imageUrl && title && timeText) {
    newsData[itemKey] = {
      type: "Img_item",
      settings: {
        image: imageUrl,
        title: title,
        time_text: timeText,
        button_text: "View More",
        button_link: link
      }
    };
  }
});

// 创建shopify版本的数据
const shopifyData = JSON.parse(JSON.stringify(newsData));

// 下载图片并更新shopify数据
async function processData() {
  for (const key in newsData) {
    const imageUrl = newsData[key].settings.image;
    const fileName = path.basename(imageUrl);
    
    // 更新shopify数据中的图片路径
    shopifyData[key].settings.image = `shopify://shop_images/${fileName}`;
    
    // 下载图片
    //await downloadImage(imageUrl, fileName);
  }

  // 保存JSON文件
  fs.writeFileSync('json1.json', JSON.stringify(newsData, null, 2));
  fs.writeFileSync('json2.json', JSON.stringify(shopifyData, null, 2));
  console.log('Data has been saved to json1.json and json2.json');
}

// 下载图片函数
function downloadImage(url, fileName) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const filePath = path.join('./files', fileName);
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