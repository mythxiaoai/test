const fs = require('fs');
const cheerio = require('cheerio');
const https = require('https');
const path = require('path');

// 读取HTML文件
const html = fs.readFileSync('./partnership/index.html', 'utf8');
const $ = cheerio.load(html);

// 初始化数据结构
const data = {
  Distributor: {
    Asia: [],
    Europe: [],
    "Latin America": [],
    "Middle East": []
  },
  Retailer: {
    Asia: [],
    Europe: [],
    "Latin America": [],
    "Middle East": []
  }
};

// 创建files文件夹
const file_dir = 'files4';
if (!fs.existsSync(`./${file_dir}`)) {
  fs.mkdirSync(`./${file_dir}`);
}

// 解析函数
function parseSection(type, region) {
  const tabId = region.toLowerCase().replace(/\s+/g, '-');
  const selector = `#tab_${type.toLowerCase()} #tab_${tabId} .col.medium-4.small-12.large-4`;
  
  $(selector).each((_, element) => {
    const $el = $(element);
    
    const imgElement = $el.find('.img-inner img');
    const linkElement = $el.find('.img a');
    const titleElement = $el.find('p[style="text-align: center;"]');

    if(imgElement.length) {
      const item = {
        image: imgElement.attr('src'),
        title: titleElement.text().trim(),
        link: linkElement.attr('href') || ''
      };
      // 只有当图片URL存在时才添加
      if(item.image) {
        data[type][region].push(item);
      }
    }
  });
}

// 解析所有区域
['Distributor', 'Retailer'].forEach(type => {
  ['Asia', 'Europe', 'Latin America', 'Middle East'].forEach(region => {
    parseSection(type, region);
  });
});

// 创建Shopify CDN版本的数据
const shopifyCdnData = JSON.parse(JSON.stringify(data));

// 更新图片URL为Shopify CDN格式
Object.keys(shopifyCdnData).forEach(type => {
  Object.keys(shopifyCdnData[type]).forEach(region => {
    shopifyCdnData[type][region].forEach(item => {
      if(item.image) {
        const fileName = path.basename(item.image);
        item.image = `https://cdn.shopify.com/s/files/1/0714/7025/2286/files/${fileName}`;
      }
    });
  });
});

// 保存原始数据
fs.writeFileSync('./partnership/index.json', JSON.stringify(data, null, 2));
// 保存Shopify CDN版本数据
fs.writeFileSync('./partnership/index2.json', JSON.stringify(shopifyCdnData, null, 2));
console.log('Data has been saved to index.json and index2.json');

// 下载图片函数 
async function downloadImage(url, fileName) {
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

// 下载所有图片并保存数据
async function processData() {
  const downloadPromises = [];
  
  // 收集所有需要下载的图片
  Object.keys(data).forEach(type => {
    Object.keys(data[type]).forEach(region => {
      data[type][region].forEach(item => {
        if(item.image) {
          const fileName = path.basename(item.image);
          const newFileName = fileName.replace('.jpeg', '.jpg');
          downloadPromises.push(downloadImage(item.image, newFileName));
        }
      });
    });
  });

  try {
    // 并行下载所有图片
    await Promise.all(downloadPromises);
    console.log('All images have been downloaded');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

// 执行程序
// processData().catch(console.error);


