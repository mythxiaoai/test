;(function(win){
	if (!document.createElement('canvas').getContext){
		if(window.xtip){
			 xtip('请在chrome、safari、IE8+以上浏览器查看本示例');
		}else{
			 alert('请在chrome、safari、IE8+以上浏览器查看本示例');
		}
		return;
	}
//拓展画扇形方法
CanvasRenderingContext2D.prototype.sector = function(x,y,r,angle1,angle2){
    this.save();
    //起始一条路径，或重置当前路径
    this.beginPath();
    //移动到中心点
    this.moveTo(x,y);
    //画股线
    this.arc(x,y,r,angle1*Math.PI/180,angle2*Math.PI/180,false);
    //创建从当前点回到起始点的路径
    this.closePath();  
    //返回之前保存过的路径状态和属性
    this.restore();
    return this;
}	
// 复杂的自定义覆盖物
function ComplexCustomOverlay(data){
  this.data = data;
  this.activep = null;//选中的点
}
ComplexCustomOverlay.prototype=$.extend({},new BMap.Overlay(),{
	initialize:function(map){
	    this._map = map;
	    this._canvas = document.createElement("canvas");
	    this._canvas.style="position:absolute;";
    	this._map.getPanes().vertexPane.appendChild(this._canvas);
     	return  this._canvas;
    },
    draw:function(eventp,activep,callback){
    	//viewBound当前屏幕的视口范围 4个坐标点
    	//context 画布上下文
    	//step1px 当前地图层级1像素等于多少米
    	//point 坐标点
    	//xyCanvas 画布的px坐标点
    	//distance 绘画图像的半径 px
    	//textLeft文字X轴的距离
    	//textTop文字Y轴的距离
    	//grd1 渐进变1
    	//grd2 渐进变2
    	//temp 临时变量
    	//mark 标记 当前的事件坐标只添加一次
    	//showarr 当前点击的中的元素
    	//activepx 当前选中的坐标像素
    	//$this 你懂的 避免局部this混淆
    	let viewBound,context,step1px,point,xyCanvas,distance,textLeft,textTop,grd1,grd2,temp,mark=1,showarr={data:[]},activepx,$this=this;
     	this._canvas.width=this._map.getSize().width;
		this._canvas.height=this._map.getSize().height;
		this._canvas.style.top=$(".BMap_mask").css("top");
		this._canvas.style.left=$(".BMap_mask").css("left");
		//保存选中点
		if(activep){
			this.activep=$.extend({},this.activep, activep);
		}
		activepx=$this._map.pointToPixel(this.activep);
		//获取当前视口
		viewBound=this._map.getBounds();
		context =$this._canvas.getContext("2d");//画布上下文
		step1px =$this._1pxToM($this._map);
		$.each(this.data,function(index,val) {
			//只渲染当前屏幕上的点
			//坐标点
			point =new BMap.Point(val.lng,val.lat);
			//开始绘画路径
			context.beginPath();
			if(viewBound.containsPoint(point)){
				xyCanvas=$this._map.pointToPixel(point);//获取点在画布的位置
				//半径  30 50 70 90 110
				distance = val.size/step1px;
				if($this._map.getZoom()<=15){
					distance=20
				}else if($this._map.getZoom()==16){
					distance=25
				}else if($this._map.getZoom()==17){
					distance=35
				}else if($this._map.getZoom()==18){
					distance=55
				}else if($this._map.getZoom()>=19){
					distance=75
				}
				/*if(distance<30)distance=30;
				if(distance>110)distance=110;*/
				//确定形状
				if(val.shape=="sector"){//画扇形
					$this.drawSector(context,val,distance,xyCanvas)
				}else if(val.shape="circle"){//画圆
					$this.drawCircle(context,val,distance,xyCanvas)
				}
				//事件判定
				if(eventp && context.isPointInPath(eventp.x, eventp.y)){
				    if(mark){
				    	//更改选中元素
				    	activepx={x:eventp.x,y:eventp.y};
						  $this.activep=$this._map.pixelToPoint(eventp);
					    showarr.x=eventp.x;
					    showarr.y=eventp.y;
					    mark--;
				    }
				    showarr.data.push(val);
				}
				//判定选中
				if(activepx && context.isPointInPath(activepx.x, activepx.y)){
					temp=val.borderColor.replace(val.borderColor[val.borderColor.lastIndexOf(".")]+val.borderColor[val.borderColor.lastIndexOf(".")+1],".5");
				   	context.strokeStyle=temp;
				    context.lineWidth=4;
				    context.stroke();
				}
			}
		});
		//事件生效
		if(showarr.data!=null&&showarr.data.length>0){
			if(callback)callback(showarr);
		}
	},
	drawCircle:function(context,val,distance,xyCanvas){
		let grd1;
		//文本
		context.save();
		context.beginPath();
	    context.font = "12px Arial";
	    context.fillStyle ="#333";
	    context.translate(xyCanvas.x-distance*.6,xyCanvas.y-distance*.6);
	    if(val.showTextArr!=null){
	   		$.each(val.showTextArr, function(index,val) {
	   			context.translate(0,-15*index);
	    		context.fillText(val,0,0,distance*.6*2);
	   		});
	   	}
		 //返回之前保存过的路径状态和属性
	 	context.restore();
		//起始一条路径，或重置当前路径
		context.arc(xyCanvas.x,xyCanvas.y,distance*.6,0,2*Math.PI,false);
		grd1=context.createRadialGradient(xyCanvas.x,xyCanvas.y,0,xyCanvas.x,xyCanvas.y,distance*.6);
		grd1.addColorStop(0,val.color);
		grd1.addColorStop(0.3,val.color);
		grd1.addColorStop(0.5,'rgba(255, 255, 255, 0)');
		grd1.addColorStop(0.7,'rgba(255, 255, 255, 0)');
		grd1.addColorStop(0.7,val.color);
		grd1.addColorStop(1,'rgba(255, 255, 255, 0)');
		//填充为黄色
		context.fillStyle=grd1;
		//填充当前绘图（路径）
		context.fill();
		context.strokeStyle=val.borderColor;
	    context.lineWidth=2;
	    context.stroke();
	},
	drawSector:function(context,val,distance,xyCanvas){
		let textLeft,textTop,grd1,grd2;
		//文本
		context.save();
		context.beginPath();
	    context.font = "12px Arial";
	    context.fillStyle ="#333";
	    val.dir=val.dir*1;
	    textTop=Math.sin(Math.PI/180*(val.dir-90))*distance;
	    textLeft=Math.cos(Math.PI/180*(val.dir-90))*distance;
	    context.translate(xyCanvas.x+textLeft,xyCanvas.y+textTop);
		if(!((val.dir-90)<180&&(val.dir-90)>=0)){//如果方向角在X轴上方文字向上
		   	context.rotate(Math.PI/180*val.dir);
		   	if(val.showTextArr!=null){
		   		context.translate(-(distance/2),0);
		   		$.each(val.showTextArr, function(index,val) {
		   			context.translate(0,-15*index);
		    		context.fillText(val,0,0,distance);
		   		});
		   	}
	    }else{//如果方向角在X轴下方
    		context.rotate(Math.PI/180*(val.dir+180));
		   	if(val.showTextArr!=null){
		   		context.translate(-(distance/2),0);
		   		$.each(val.showTextArr, function(index,val) {
		   			context.translate(0,15*index);
		    		context.fillText(val,0,0,distance);
		   		});
		   	}
	    }
		 //返回之前保存过的路径状态和属性
	 	context.restore();
		//扇形
		grd1=context.createRadialGradient(xyCanvas.x,xyCanvas.y,0,xyCanvas.x,xyCanvas.y,distance);
		grd1.addColorStop(0,'rgba(255, 255, 255, 0)');
		grd1.addColorStop(0.2,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(0.2,val.color);
		grd1.addColorStop(0.23,val.color);
		grd1.addColorStop(0.3,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(0.3,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(0.4,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(0.4,val.color);
		grd1.addColorStop(0.43,val.color);
		grd1.addColorStop(0.5,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(0.5,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(0.6,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(0.6,val.color);
		grd1.addColorStop(0.63,val.color);
		grd1.addColorStop(0.7,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(0.7,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(0.8,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(0.8,val.color);
		grd1.addColorStop(0.83,val.color);
		grd1.addColorStop(0.9,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(0.9,"rgba(255, 255, 255, 0)");
		grd1.addColorStop(1,"rgba(255, 255, 255, 0)");
		context.fillStyle=grd1;
	    context.sector(xyCanvas.x,xyCanvas.y,distance,val.dir-90-30,val.dir-90+30).fill();
	   	context.strokeStyle=val.borderColor;
	    context.lineWidth=2;
	    context.stroke();
	   //圈圈
		context.arc(xyCanvas.x,xyCanvas.y,distance*0.18,0,2*Math.PI,false);
		grd2=context.createRadialGradient(xyCanvas.x,xyCanvas.y,0,xyCanvas.x,xyCanvas.y,distance*0.18);
		grd2.addColorStop(0,val.color);
		grd2.addColorStop(0.3,val.color);
		grd2.addColorStop(0.5,'rgba(255, 255, 255, 0)');
		grd2.addColorStop(0.7,'rgba(255, 255, 255, 0)');
		grd2.addColorStop(0.7,val.color);
		grd2.addColorStop(0.8,val.color);
		grd2.addColorStop(1,'rgba(255, 255, 255, 0)');
		context.fillStyle=grd2;
		context.fill();
	},
 	_1pxToM:function(map){
 		return Math.pow(2, (18 - map.getZoom()))
		/*let p1=map.pixelToPoint(new BMap.Pixel(0,0));
		let p2=map.pixelToPoint(new BMap.Pixel(0,1));
		return map.getDistance(p1, p2);*/
    },
 	addEventListener:function(type,callback){
     	let $this =this;
     	if($this._canvas){
     		$this._canvas.addEventListener(type, function(e){
			  $this.draw({x:e.pageX-$($this._map.Va).offset().left,y:e.pageY-$($this._map.Va).offset().top},null,callback);
			}, false);
     	}
 	},
 	movePoint:function(activep,zoom,callback){
     	let $this =this;
      if($this._canvas){
        $this._map.centerAndZoom(activep, zoom);
        $this.draw(null,activep);
        if(callback)callback.call($this);
      }
 	}
});
win.ComplexCustomOverlay=ComplexCustomOverlay;
})(window)