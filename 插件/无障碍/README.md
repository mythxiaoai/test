# 网站信息无障碍
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/gemgin/AmblyopiaTool/pulls)
[![GitHub stars](https://img.shields.io/github/stars/gemgin/AmblyopiaTool.svg?style=social&label=Stars)](https://github.com/gemgin/AmblyopiaTool)
[![GitHub forks](https://img.shields.io/github/forks/gemgin/AmblyopiaTool.svg?style=social&label=Fork)](https://github.com/gemgin/AmblyopiaTool)

交流QQ群：26363996

## 前言

　　为了体现政府提供公共服务的公平、公正、均等化的要求，保障弱势群体获得政府公众服务的权利，我国政府近年一直致力于推动信息无障碍技术在各个领域的应用，先后制定《无障碍环境建设条例》、《网站设计无障碍技术要求》、《网站设计无障碍评级测试方法》等相关法规及行业标准。在建设服务型政府的大环境之下，信息无障碍服务成为政府主厅提高公众服务水平、扩大公众服务范围的新亮点。

## 项目介绍

　　TTS技术基于ScanSoft_MeiLing语音库，提供整套网站信息无障碍服务模块：十字光标、纯文本、文字放到专用阅读屏（简体，繁体和拼音）、高对比阅读配色器、文字放大缩小、网页放大缩小、全程语音实时朗读等，支持服务治理、监控和追踪，努力为政府网站无障碍改造解决方案。

## 网站信息无障碍解决方案
   
- 信息无障碍建设咨询解决方案 [https://wenku.baidu.com/view/3704cca6cd22bcd126fff705cc17552706225e46](https://wenku.baidu.com/view/3704cca6cd22bcd126fff705cc17552706225e46 "信息无障碍建设咨询解决方案_20171226")  

### 信息无障碍工具条界面
![信息无障碍工具条界面](doc/%E6%97%A0%E9%9A%9C%E7%A2%8D%E5%B7%A5%E5%85%B7%E6%9D%A1%E7%95%8C%E9%9D%A2.png)

### 信息无障碍核心技术
![信息无障碍核心技术](doc/%E4%BF%A1%E6%81%AF%E6%97%A0%E9%9A%9C%E7%A2%8D%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF.jpg)

### 信息无障碍改造流程
![信息无障碍改造流程](doc/%E6%97%A0%E9%9A%9C%E7%A2%8D%E6%9C%8D%E5%8A%A1%E6%B5%81%E7%A8%8B.jpg)

### 信息无障碍辅助工具部署步骤

> 以海南人民政府网站为例，官网地址：http://www.hi.gov.cn/code/html

- 1.将canyou文件夹放到 ```http://www.hi.gov.cn``` 站点指向的服务器目录下，保证```http://www.hi.gov.cn/canyou/```能够被访问到即可。

- 2.添加js.将下面一段js放在首页模板区间任意位置即可。一般网站头部和尾部都是模版区。建议放在网站每个页面的```</body>```之前
```
     <script type="text/javascript">
        function ShowDetail() {
           if (window.top.document.getElementById("rrbay_toolbar_div")) {
               return false;
           }
           var url = "?url=" + document.location.href;window.scrollTo(0, 0);
           location_href('canyou/default.html'  + url);
        }
        function location_href(url) { location.href = url }
    </script>
```
- 3.在首页位置添加链接，确保红色加粗的不变。可以使用任何html标签。确保该链接放在页面的易发现位置。链接代码如下：
```
   <a title="盲人朋友在线浏览按住shift+1键"  onmousedown="ShowDetail()">信息无障碍通道</a>。
```

> 测试部署是否成功

   在浏览器中输入地址或通过单击原网站头部无障碍操作条中的链接即可完成对网站的信息无障碍化访问。

> 申明:太阳湾信息无障碍公共服务平台工具条免费安装部署，要严格按照上面步骤部署安装修改,请保留太阳湾版权信息。


### 演示站点

- 工具条灰色模版 [http://www.qqqao.com/](http://www.qqqao.com/ "工具条灰色模版")

- 工具条蓝色模版 [http://www.qqqao.com/index2.html](http://www.qqqao.com/index2.html "工具条蓝色模版")

- 工具条纯蓝模版 [http://www.qqqao.com/index3.html](http://www.qqqao.com/index3.html "工具条纯蓝模版")

## 2019-09-20 信息无障碍工具条V1.6版本升级说明
- 修复 URL(/canyou/default.html?url=)存在基于DOM的跨站脚本漏洞
- 修复 URL(/canyou/default.html?url=)存在跳转漏洞

### License

GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
