/**
 *  时间：2018-10-12
 版本：1.3
 作者：小艾
 自定义百度覆盖物组件
 调用:
 参数说明:
 arrs:[{
  lng:经度,
  lat:维度
  shape:string  形状      square/sector/sector-w/circle/circle-w/circle-o
        square  正方形
        sector  扇形
        sectorS  条纹扇形
        circle  圆形
        circleS  条纹圆形
        circleO  空心条纹圆形
  "dir":number  方向  0-360
  distance:number 大小(米)--随地图缩放变化  与px冲突 只能写一个
  minDistance:number  最小距离维持多少像素  单位是px不是m 因为m是根据地图缩放改变   当distance有值px无时有效
  px:number 像素--不随地图缩放变化 与distance冲突 只能写一个 px优先
  color:string  主体颜色  rgba rgb #Hex
  borderColor:string  边框颜色  同上
  showTextArr:array 显示字体
}]
 opts={
  showAllZoom:number 0-19//显示全部的层级  默认0
  showShapeZoom:{shape:number,shape:number} 0-19//指定形状在大于什么层级时才显示  优先级低于showAllZoom
  showTextZoom:number 0-19//显示文字的层级 默认0
  sectorDeg:number 0-360//扇形的弧度 默认40
}
 调用:
 let myCompOverlay = new ComplexCustomOverlay(arrs,opts);
 myCompOverlay.addEventListener("click",(e)=>{});
 e为点击到的数组  数据为传进去的data属性
 */

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
    function ComplexCustomOverlay(data,opts={}){
        let defaultOpts ={
            showAllZoom:0,
            showShapeZoom:{
                square:0,
                sector:0,
                "sectorS":0,
                circle:0,
                "circleS":0,
                "circleO":0
            },
            showTextZoom:0,
            sectorDeg:40,
            wgs84tobd09:false,
            wgs84tobd09Mark:true,
        }
        this.data = data;
        this.activep = null;//选中的点
        this.opts = $.extend(true,{},defaultOpts,opts);
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
            //borderColorTemp 边框颜色临时变量
            //mark 标记 当前的事件坐标只添加一次
            //showarr 当前点击的中的元素
            //activepx 当前选中的坐标像素
            //$this 你懂的 避免局部this混淆
            let viewBound,
                context,
                step1px,
                point,
                xyCanvas,
                distance = 1,
                textLeft,
                textTop,
                grd1,
                grd2,
                borderColorTemp,
                mark=1,
                showarr={data:[]},
                activepx,
                $this=this,
                zoom=this._map.getZoom();
            this._canvas.width=this._map.getSize().width;
            this._canvas.height=this._map.getSize().height;
            this._canvas.style.top=$(".BMap_mask").css("top");
            this._canvas.style.left=$(".BMap_mask").css("left");
            //控制渲染层级  opts.showAllZoom
            if(zoom<this.opts.showAllZoom){
                return false;
            };
            //保存选中点
            if(activep){
                this.activep=$.extend({},this.activep, activep);
            }
            activepx=$this._map.pointToPixel(this.activep);
            //获取当前视口
            viewBound=this._map.getBounds();
            context =$this._canvas.getContext("2d");//画布上下文
            step1px =$this._1pxToM($this._map);//1px是多少米
            for(let index =0,len = $this.data.length;index<len;index++){
                let val = $this.data[index];
                //只渲染当前屏幕上的点
                point =new BMap.Point(val.lng,val.lat);
                //开始绘画路径
                if(viewBound.containsPoint(point)){
                    context.beginPath();
                    xyCanvas=$this._map.pointToPixel(point);//获取点在画布的位置
                    //distance处理
                    if(val.distance){
                        distance = val.distance/step1px;//转成px
                    }
                    if(val.minDistance&&distance<val.minDistance)distance = val.minDistance
                    //size处理
                    if(val.px){distance = val.px}
                    //画文字
                    $this.drawText(context,val,distance,xyCanvas,zoom)
                    //square
                    if(val.shape=="square"&&zoom>=$this.opts.showShapeZoom.square){
                        $this.drawSquare(context,val,distance,xyCanvas)
                    }
                    //sector
                    if(val.shape=="sector"&&zoom>=$this.opts.showShapeZoom.sector){
                        $this.drawSector(context,val,distance,xyCanvas)
                    }
                    //sectorS
                    if(val.shape=="sectorS"&&zoom>=$this.opts.showShapeZoom.sectorS){
                        $this.drawSectorS(context,val,distance,xyCanvas)
                    }
                    //circle
                    if(val.shape=="circle"&&zoom>=$this.opts.showShapeZoom.circle){
                        $this.drawCircle(context,val,distance,xyCanvas)
                    }
                    //circleS
                    if(val.shape=="circleS"&&zoom>=$this.opts.showShapeZoom.circleS){
                        $this.drawCircleS(context,val,distance,xyCanvas)
                    }
                    //circleO
                    if(val.shape=="circleO"&&zoom>=$this.opts.showShapeZoom.circleO){
                        $this.drawCircleO(context,val,distance,xyCanvas)
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
                        //颜色处理
                        if(val.borderColor){
                            context.strokeStyle=val.borderColor;
                            context.lineWidth=3;
                            context.stroke();
                        }
                    }
                }
            }
            //事件生效
            if(showarr.data!=null&&showarr.data.length>0){
                if(callback)callback(showarr);
            }
        },
        drawBorder(context,borderColor){
            context.strokeStyle=borderColor;
            context.lineWidth=2;
            context.stroke();
        },
        drawText(context,val,distance,xyCanvas,zoom){
            let textTop,textLeft
            if(val.showTextArr&&val.showTextArr.length>0&&zoom>=this.opts.showTextZoom){
                //方向
                if(val.dir){
                    val.dir=val.dir*1;
                }else{
                    val.dir = 0;
                }
                //扇形文字特殊处理  因为扇形的distance是整个的长  而其他的形状是半径
                if(!(val.shape == "sector" || val.shape == "sectorS")){
                    distance = distance/2
                }
                //文本
                context.save();
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle ="#333";
                textTop=Math.sin(Math.PI/180*(val.dir-90))*distance;
                textLeft=Math.cos(Math.PI/180*(val.dir-90))*distance;
                context.translate(xyCanvas.x+textLeft,xyCanvas.y+textTop);
                if(!((val.dir-90)<180&&(val.dir-90)>=0)){//如果方向角在X轴上方文字向上
                    context.rotate(Math.PI/180*val.dir);
                    context.translate(0,-3);
                    $.each(val.showTextArr, function(index,text) {
                        context.save();
                        context.beginPath();
                        if(val.shape == "square"){
                            context.translate(-distance,-15*index);
                        }else{
                            context.translate(-distance*.6/2,-15*index);
                        }
                        context.fillText(text,0,0);
                        context.restore();
                    });
                }else{//如果方向角在X轴下方
                    context.rotate(Math.PI/180*(val.dir+180));
                    context.translate(0,12);
                    $.each(val.showTextArr, function(index,text) {
                        context.save();
                        context.beginPath();
                        context.translate(-distance*.6/2,15*index);
                        context.fillText(text,0,0);
                        context.restore();
                    });
                }
                //返回之前保存过的路径状态和属性
                context.restore();
            }
        },
        drawSquare:function(context,val,distance,xyCanvas){//distance px
            context.rect(xyCanvas.x-distance/2,xyCanvas.y-distance/2,distance,distance);
            context.fillStyle=val.color;
            context.fill();
            if(val.borderColor){
                this.drawBorder(context,val.borderColor);
            }
        },
        drawDot:function(context,val,distance,xyCanvas){
            //起始一条路径，或重置当前路径
            context.arc(xyCanvas.x,xyCanvas.y,distance,0,2*Math.PI,false);
            context.fillStyle=val.color;
            //填充当前绘图（路径）
            context.fill();
            context.strokeStyle=val.borderColor;
            context.lineWidth=2;
            context.stroke();
        },
        drawCircle:function(context,val,distance,xyCanvas,zoom){
            //起始一条路径，或重置当前路径
            context.arc(xyCanvas.x,xyCanvas.y,distance/2,0,2*Math.PI,false);
            context.fillStyle=val.color;
            //填充当前绘图（路径）
            context.fill();
            if(val.borderColor){
                this.drawBorder(context,val.borderColor);
            }
        },
        drawCircleS:function(context,val,distance,xyCanvas,zoom){
            //起始一条路径，或重置当前路径
            context.arc(xyCanvas.x,xyCanvas.y,distance/2,0,2*Math.PI,false);
            grd1=context.createRadialGradient(xyCanvas.x,xyCanvas.y,0,xyCanvas.x,xyCanvas.y,distance*.5);
            grd1.addColorStop(0,val.color);
            grd1.addColorStop(0.3,val.color);
            grd1.addColorStop(0.3,'rgba(255, 255, 255, 0)');
            if(val.outColor){
                grd1.addColorStop(1,val.outColor);
            }else{
                grd1.addColorStop(1,val.color);
            }
            //填充为黄色
            context.fillStyle=grd1;
            //填充当前绘图（路径）
            context.fill();
            if(val.borderColor){
                this.drawBorder(context,val.borderColor);
            }
        },
        drawCircleO:function(context,val,distance,xyCanvas,zoom){
            //起始一条路径，或重置当前路径
            context.arc(xyCanvas.x,xyCanvas.y,distance/2,0,2*Math.PI,false);
            grd1=context.createRadialGradient(xyCanvas.x,xyCanvas.y,0,xyCanvas.x,xyCanvas.y,distance*.5);
            grd1.addColorStop(0,'rgba(255, 255, 255, 0)');
            grd1.addColorStop(0.3,'rgba(255, 255, 255, 0)');
            grd1.addColorStop(1,val.color);
            //填充为黄色
            context.fillStyle=grd1;
            //填充当前绘图（路径）
            context.fill();
            if(val.borderColor){
                this.drawBorder(context,val.borderColor);
            }
        },
        drawSector:function(context,val,distance,xyCanvas){
            let grd1
            //扇形
            context.sector(xyCanvas.x,xyCanvas.y,distance,val.dir-90-(this.opts.sectorDeg/2),val.dir-90+(this.opts.sectorDeg/2))
            grd1=context.createRadialGradient(xyCanvas.x,xyCanvas.y,0,xyCanvas.x,xyCanvas.y,distance);
            grd1.addColorStop(0,val.color);
            grd1.addColorStop(0.6,val.color);
            grd1.addColorStop(1,val.color);
            context.fillStyle=grd1;
            context.fill();
            if(val.borderColor){
                this.drawBorder(context,val.borderColor);
            }
        },
        drawSectorS:function(context,val,distance,xyCanvas){
            let grd1,grd2;
            //圈圈
            context.arc(xyCanvas.x,xyCanvas.y,distance*0.15,0,2*Math.PI,false);
            grd2=context.createRadialGradient(xyCanvas.x,xyCanvas.y,0,xyCanvas.x,xyCanvas.y,distance*0.15);
            grd2.addColorStop(0,val.color);
            grd2.addColorStop(0.3,val.color);
            grd2.addColorStop(0.5,'rgba(255, 255, 255, 0)');
            grd2.addColorStop(0.5,'rgba(255, 255, 255, 0)');
            grd2.addColorStop(1,val.color);
            context.fillStyle=grd2;
            context.fill();
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
            context.sector(xyCanvas.x,xyCanvas.y,distance,val.dir-90-(this.opts.sectorDeg/2),val.dir-90+(this.opts.sectorDeg/2))
            context.fillStyle=grd1;
            context.fill();
            if(val.borderColor){
                this.drawBorder(context,val.borderColor);
            }
        },
        _1pxToM:function(map){
            return Math.pow(2, (18 - map.getZoom()));
        },
        addEventListener:function(type,callback){
            let $this =this;
            if($this._canvas){
                $($this._canvas).on(type,function(e){
                    let left = parseInt($(".BMap_mask").css("left"));
                    let top = parseInt($(".BMap_mask").css("top"));
                    $this.draw({x:e.pageX-left,y:e.pageY-top},null,callback);
                });
            }
        },
        removeEventListener:function(type){
            let $this =this;
            if($this._canvas){
                $($this._canvas).unbind(type);
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