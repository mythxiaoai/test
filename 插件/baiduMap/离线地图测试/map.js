var offmapcfg = {
  'imgext'      : '.jpg',
  'tiles_dir'   : '',
  'tiles_hybrid': '',
  'tiles_self'  : '',
  "home":"http://10.174.228.214:8080/emphaseScence/js/baiduMap/"
};

//////////////////下面的保持不动///////////////////////////////////
//   var scripts = document.getElementsByTagName("script");
//   var JS__FILE__ = scripts[scripts.length - 1].getAttribute("src");
//   console.log(JS__FILE__);
//   offmapcfg.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf("/")+1); //地图API主目录
(function(){
  window.BMap_loadScriptTime = (new Date).getTime();
  //加载地图API主文件
  document.write('<script type="text/javascript" src="'+offmapcfg.home+'map.js?v=2.1"></script>');
  //加载扩展函数
  document.write('<script type="text/javascript" src="'+offmapcfg.home+'map_plus.js?v=2.1"></script>');
  //加载城市坐标
  document.write('<script type="text/javascript" src="'+offmapcfg.home+'map_city.js?v=2.1"></script>');
})();