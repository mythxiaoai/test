const puppeteer = require('puppeteer');

(async ()=>{
  
  
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({
        width: 1080,
        height: 768 * 2
    });

let url= "https://b2c.csair.com/B2C40/newTrips/static/main/page/booking/index.html?t=S&c1=CAN&c2=WUH&d1=2019-12-02&at=1&ct=0&it=0";


    //https://b2c.csair.com/B2C40/newTrips/static/main/page/booking/index.html?t=S&c1=CAN&c2=WUH&d1=2019-12-02&at=1&ct=0&it=0
  await page.goto(url,{waitUntil: 'domcontentloaded'});
  //await page.screenshot({path: path + name + '.png'});
  
  <base href="https://b2c.csair.com/B2C40/newTrips/static/main/page/booking/"/>
  
  await sleep(6000);
  let html = await page.content();
  // html = html.replace(/href="..\/..\//gi,"href=\"https://b2c.csair.com/B2C40/newTrips/static/main");
  // html = html.replace(/src=\"\/B2C40\//gi,"src=\"https:\/\/b2c.csair.com\/B2C40\/");

  console.log(html);

  page.on("request",function(request){
  })
  
  page.on("response",function(response){
  // console.log(response.url());
  /* response.text().then(res=>{
     console.log(res)
   }); */
  })
  
   /* const result = await page.evaluate(() => {
        page.click('.searchBtn.searchFlight')
        
    }) */
  
})()


function sleep(time = 0) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve();
      }, time);
  })
}