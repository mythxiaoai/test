async function captcha() { 
  const { driver } = global.rpaContext;
  log("开始模拟手动拖动");
  let dom2 = await driver.wait(until.elementLocated(By.css('#nc_1_n1z')), 10000, '执行超时', 1000);
  await driver.sleep(1000);
  let actions = driver.actions({ async: true })
  //把鼠标移动到滑块上, 然后点击
  await actions.move({
    origin: dom2,
    duration: 1000
  }).pause(100).press().move({
    origin: dom2,
    x: 1,
    duration: 10
  }).pause(300).perform();
  var arr = getTrack(279);
  await moveTrack(driver, arr);
}

async function moveTrack(driver, arr) {
  let actions = driver.actions({ bridge: true })

  for (let i = 0; i < arr.length; i++) {
    var random = Math.floor(Math.random() * 16 )
    await actions.move({
      origin: "pointer",
      x: arr[i],
      duration: random
    })
  }
  await actions.release().perform()
}

//取模拟拖动滑块的数据
//用等差数列代替了匀加速运动
//因为匀加速运动取得的小数经过四舍五入会出现不精确，导致拖动的距离出差错
function getTrack(distance) {
  var track = [], d = 2, n = 0, s = 0, S = 0
  while (S < distance) {
    s = 1 + n;
    n = n + d;
    S += s;
    track.push(s)
  }

  var diff = (S - distance);
  track.splice(-1, 1, Math.round(Number(track.slice(-1)) - diff))

  return track;
}
