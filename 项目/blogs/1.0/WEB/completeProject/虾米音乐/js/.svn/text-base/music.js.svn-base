/*
	时间：2016-8-2
	版本：1.0
	作者：小艾
	面向对象
*/
var XaMusic=(function(){
		function Music(){
			this.index=0;
			this.audioDom=null;
			this.songs=[];//音频源文件存储容器
		}
		Music.prototype={
			constructor:Music,
			init:function(){
				this.audioDom=document.createElement("audio");
				this.audioDom.volume=0.5;//声音0.5
				this.ended("listLoop");
				
			},
			add:function(musicArr){
				//讲音乐放入的音乐容器中
				this.songs=musicArr;
				//默认播放第一首
				if(!this.audioDom.src)this.audioDom.src=this.songs[0].src;
			},
				//播放/暂停音乐
			play:function(callback){
				this.audioDom.play();
				if(callback)callback(this.index);
			},
				//暂停音乐
			stop:function(callback){
				this.audioDom.pause();
				if(callback)callback(this.index);
			},
			//声音控制
			sound:function(val){
				this.audioDom.volume=val;
			},
			//静音
			muted:function(){
				this.audioDom.muted=!this.audioDom.muted;
				
			},
			//进度展示  返回类型说明
			/*
			json.per 播放百分比 2位有效位
			json.rawcur 原始当前播放时间  秒
			json.cur 格式化后的当前播放时间 m:s
			json.rawSTime 原始剩余播放时间  秒
			json.sTime  格式化后的剩余播放时间
			json.rawTot  原始播放总时长   秒
			json.tot  格式化后的播放总时长   m:s
			*/
			progress:function(callback){
				var json={};
				var $this = this;
				$this.audioDom.oncanplaythrough = function(){
					//获取播放器的总时长
					json.rawTot = this.duration;
					//格式化时长
					json.tot =Music.formateTime(json.rawTot);
				if(callback)callback.call(json);
				};
				$this.audioDom.ontimeupdate=function(){
					//计算播放中的时间进度
					json.rawcur=this.currentTime;
					json.per = ((this.currentTime/this.duration)*100).toFixed(2);
					//用总时长减去播放去时长获取剩余的时间
					json.rawSTime = this.duration - this.currentTime;
					//格式化时间
					json.sTime = Music.formateTime(json.rawSTime);
					json.cur = Music.formateTime(this.currentTime);
					//定义返回
				if(callback)callback.call(json);
				}
			},
			//上一首
			pre:function(callback){
				this.index=this.index==0?0:--this.index;
				this.changeplay();
				if(callback)callback(this.index);
			},
			//下一首
			next:function(callback){
				this.index=this.index==this.songs.length-1?this.index:++this.index;
				this.changeplay();
				if(callback)callback(this.index);
			},
			//变更歌曲调用
			changeplay:function(){
				this.audioDom.src=this.songs[this.index].src;
				this.audioDom.play();
			},
			//页面点击播放
			selectplay:function(index,callback){
				this.index=index;
				this.audioDom.src=this.songs[this.index].src;
				this.audioDom.play();
				if(callback)callback(index);
			},
			//控制播放顺序
			//aLoop:单曲循环
			//listLoop:列表循环
			//randomLoop:随机播放
			ended:function(src,callback){
				var $this=this;
				this.audioDom.onended=function(){
				if(src=="aLoop"){
					$this.audioDom.loop=true;
				}else if(src=="listLoop"){
					$this.index=++$this.index;
					if($this.index==$this.songs.length){
						$this.index=0;
					}
					$this.changeplay();
				}if(src=="randomLoop"){
					$this.index=Math.floor(Math.random()*$this.songs.length)
					$this.changeplay();
				}
				if(callback)callback($this.index);
				}
			}
		}
		//格式化时间  静态方法
		Music.formateTime=function(time){
			var m = parseInt(time / 60);
			var s = parseInt(time % 60);
			var time = (m<10?("0"+m):m)+":"+(s<10?("0"+s):s);
			return time;
		}
		return Music;
	})();