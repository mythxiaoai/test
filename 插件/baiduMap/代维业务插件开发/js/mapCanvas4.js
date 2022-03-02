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

;
(function(win) {
    if (!document.createElement('canvas').getContext) {
        if (window.xtip) {
            xtip('请在chrome、safari、IE8+以上浏览器查看本示例');
        } else {
            alert('请在chrome、safari、IE8+以上浏览器查看本示例');
        }
        return;
    }
    //拓展画扇形方法
    CanvasRenderingContext2D.prototype.sector = function(x, y, r, angle1, angle2) {
        this.save();
        //起始一条路径，或重置当前路径
        this.beginPath();
        //移动到中心点
        this.moveTo(x, y);
        //画股线
        this.arc(x, y, r, angle1 * Math.PI / 180, angle2 * Math.PI / 180, false);
        //创建从当前点回到起始点的路径
        this.closePath();
        //返回之前保存过的路径状态和属性
        this.restore();
        return this;
    }
    // 复杂的自定义覆盖物
    function ComplexCustomOverlay(data, opts = {}) {
        let defaultOpts = {
            showAllZoom: 0,
            showShapeZoom: {
                square: 0,
                sector: 0,
                "sectorS": 0,
                "circle": 0,
                "circleS": 0,
                "circleO": 0,
                "gather": 0,
                "img": 0,
            },
            showTextZoom: 0,
            sectorDeg: 40
        }
        this.data = data;
        this.activep = null; //选中的点
        this.opts = $.extend(true, {}, defaultOpts, opts);
    }
    ComplexCustomOverlay.prototype = $.extend({}, new BMap.Overlay(), {
        initialize: function(map) {
            this._map = map;
            this._canvas = document.createElement("canvas");
            this._canvas.style = "position:absolute;";
            this._map.getPanes().vertexPane.appendChild(this._canvas);
            this.imgs=[];
            this.loadImg();
            return this._canvas;
        },
        loadImg(){
            let $this = this;
              let href = "./img/"
              
              let imgs = [];
              for (let key in img) {
                  imgs.push(...img[key].src);
              }
              imgs = Array.from(new Set(imgs));
              imgs = imgs.map(v => href + v);
              //全部图片加载完才画
              imgs = imgs.map(v => loadImg(v));
              Promise.all(imgs).then(arr => {
                  $this.imgs = arr;
                  $this.draw();
              })
              
              
               function loadImg(src) {
                return new Promise((reslove, reject) => {
                    let img = new Image();
                    img.onload = function() {
                        reslove(img)
                    }
                    img.onerror = function() {
                        reject("图片" + src + "加载失败")
                    }
                    img.src = src;
                });
            }
            
        },
        draw: function(eventp, activep, callback) {
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
                mark = 1,
                showarr = {
                    data: []
                },
                activepx,
                $this = this,
                zoom = this._map.getZoom();
            this._canvas.width = this._map.getSize().width;
            this._canvas.height = this._map.getSize().height;
            this._canvas.style.top = $(".BMap_mask").css("top");
            this._canvas.style.left = $(".BMap_mask").css("left");
            //控制渲染层级  opts.showAllZoom
            if (zoom < this.opts.showAllZoom) {
                return false;
            };
            //保存选中点
            if (activep) {
                this.activep = $.extend({}, this.activep, activep);
            }
            activepx = $this._map.pointToPixel(this.activep);
            //获取当前视口
            viewBound = this._map.getBounds();
            context = $this._canvas.getContext("2d"); //画布上下文
            step1px = $this._1pxToM($this._map); //1px是多少米
            for (let index = 0, len = $this.data.length; index < len; index++) {
                let val = $this.data[index];
                //只渲染当前屏幕上的点
                point = new BMap.Point(val.lng, val.lat);
                //开始绘画路径
                if (viewBound.containsPoint(point)) {
                    context.beginPath();
                    xyCanvas = $this._map.pointToPixel(point); //获取点在画布的位置
                    //distance处理
                    if (val.distance) {
                        distance = val.distance / step1px; //转成px
                    }
                    if (val.minDistance && distance < val.minDistance) distance = val.minDistance
                    //size处理
                    if (val.px) {
                        distance = val.px
                    }
                    //画文字
                    $this.drawText(context, val, distance, xyCanvas, zoom)
                    //square
                    if (val.shape == "square" && zoom >= $this.opts.showShapeZoom.square) {
                        $this.drawSquare(context, val, distance, xyCanvas)
                    }
                    //sector
                    if (val.shape == "sector" && zoom >= $this.opts.showShapeZoom.sector) {
                        $this.drawSector(context, val, distance, xyCanvas)
                    }
                    //sectorS
                    if (val.shape == "sectorS" && zoom >= $this.opts.showShapeZoom.sectorS) {
                        $this.drawSectorS(context, val, distance, xyCanvas)
                    }
                    //circle
                    if (val.shape == "circle" && zoom >= $this.opts.showShapeZoom.circle) {
                        $this.drawCircle(context, val, distance, xyCanvas)
                    }
                    //circleS
                    if (val.shape == "circleS" && zoom >= $this.opts.showShapeZoom.circleS) {
                        $this.drawCircleS(context, val, distance, xyCanvas)
                    }
                    //circleO
                    if (val.shape == "circleO" && zoom >= $this.opts.showShapeZoom.circleO) {
                        $this.drawCircleO(context, val, distance, xyCanvas)
                    }
                    //gather
                    if (val.shape == "gather" && zoom >= $this.opts.showShapeZoom.gather) {
                        $this.drawGather(context, val, distance, xyCanvas,zoom);
                    }
                    //img
                    if (val.shape == "img" && zoom >= $this.opts.showShapeZoom.img) {
                        $this.drawImg(context, val, distance, xyCanvas);
                    }
                    //事件判定
                    if (eventp && context.isPointInPath(eventp.x, eventp.y)) {
                        if (mark) {
                            //更改选中元素
                            activepx = {
                                x: eventp.x,
                                y: eventp.y
                            };
                            $this.activep = $this._map.pixelToPoint(eventp);
                            showarr.x = eventp.x;
                            showarr.y = eventp.y;
                            mark--;
                        }
                        showarr.data.push(val);
                    }
                    //判定选中
                    if (activepx && context.isPointInPath(activepx.x, activepx.y)) {
                        //颜色处理
                        if (val.borderColor) {
                            context.strokeStyle = val.borderColor;
                            context.lineWidth = 3;
                            context.stroke();
                        }
                    }
                }
            }
            //事件生效
            if (showarr.data != null && showarr.data.length > 0) {
                if (callback) callback(showarr);
            }
        },
        drawBorder(context, borderColor) {
            context.strokeStyle = borderColor;
            context.lineWidth = 2;
            context.stroke();
        },
        drawText(context, val, distance, xyCanvas, zoom) {
            let textTop, textLeft
            if (val.showTextArr && val.showTextArr.length > 0 && zoom >= this.opts.showTextZoom) {
                //方向
                if (val.dir) {
                    val.dir = val.dir * 1;
                } else {
                    val.dir = 0;
                }
                //扇形文字特殊处理  因为扇形的distance是整个的长  而其他的形状是半径
                if (!(val.shape == "sector" || val.shape == "sectorS")) {
                    distance = distance / 2
                }
                //文本
                context.save();
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "#333";
                textTop = Math.sin(Math.PI / 180 * (val.dir - 90)) * distance;
                textLeft = Math.cos(Math.PI / 180 * (val.dir - 90)) * distance;
                context.translate(xyCanvas.x + textLeft, xyCanvas.y + textTop);
                if (!((val.dir - 90) < 180 && (val.dir - 90) >= 0)) { //如果方向角在X轴上方文字向上
                    context.rotate(Math.PI / 180 * val.dir);
                    context.translate(0, -3);
                    $.each(val.showTextArr, function(index, text) {
                        context.save();
                        context.beginPath();
                        if (val.shape == "square") {
                            context.translate(-distance, -15 * index);
                        } else {
                            context.translate(-distance * .6 / 2, -15 * index);
                        }
                        context.fillText(text, 0, 0);
                        context.restore();
                    });
                } else { //如果方向角在X轴下方
                    context.rotate(Math.PI / 180 * (val.dir + 180));
                    context.translate(0, 12);
                    $.each(val.showTextArr, function(index, text) {
                        context.save();
                        context.beginPath();
                        context.translate(-distance * .6 / 2, 15 * index);
                        context.fillText(text, 0, 0);
                        context.restore();
                    });
                }
                //返回之前保存过的路径状态和属性
                context.restore();
            }
        },
        drawSquare: function(context, val, distance, xyCanvas) { //distance px
            context.rect(xyCanvas.x - distance / 2, xyCanvas.y - distance / 2, distance, distance);
            context.fillStyle = val.color;
            context.fill();
            if (val.borderColor) {
                this.drawBorder(context, val.borderColor);
            }
        },
        drawDot: function(context, val, distance, xyCanvas) {
            //起始一条路径，或重置当前路径
            context.arc(xyCanvas.x, xyCanvas.y, distance, 0, 2 * Math.PI, false);
            context.fillStyle = val.color;
            //填充当前绘图（路径）
            context.fill();
            context.strokeStyle = val.borderColor;
            context.lineWidth = 2;
            context.stroke();
        },
        drawCircle: function(context, val, distance, xyCanvas, zoom) {
            //起始一条路径，或重置当前路径
            context.arc(xyCanvas.x, xyCanvas.y, distance / 2, 0, 2 * Math.PI, false);
            context.fillStyle = val.color;
            //填充当前绘图（路径）
            context.fill();
            if (val.borderColor) {
                this.drawBorder(context, val.borderColor);
            }
        },
        drawCircleS: function(context, val, distance, xyCanvas, zoom) {
            //起始一条路径，或重置当前路径
            context.arc(xyCanvas.x, xyCanvas.y, distance / 2, 0, 2 * Math.PI, false);
            grd1 = context.createRadialGradient(xyCanvas.x, xyCanvas.y, 0, xyCanvas.x, xyCanvas.y,
                distance * .5);
            grd1.addColorStop(0, val.color);
            grd1.addColorStop(0.3, val.color);
            grd1.addColorStop(0.3, 'rgba(255, 255, 255, 0)');
            if (val.outColor) {
                grd1.addColorStop(1, val.outColor);
            } else {
                grd1.addColorStop(1, val.color);
            }
            //填充为黄色
            context.fillStyle = grd1;
            //填充当前绘图（路径）
            context.fill();
            if (val.borderColor) {
                this.drawBorder(context, val.borderColor);
            }
        },
        drawCircleO: function(context, val, distance, xyCanvas, zoom) {
            //起始一条路径，或重置当前路径
            context.arc(xyCanvas.x, xyCanvas.y, distance / 2, 0, 2 * Math.PI, false);
            grd1 = context.createRadialGradient(xyCanvas.x, xyCanvas.y, 0, xyCanvas.x, xyCanvas.y,
                distance * .5);
            grd1.addColorStop(0, 'rgba(255, 255, 255, 0)');
            grd1.addColorStop(0.3, 'rgba(255, 255, 255, 0)');
            grd1.addColorStop(1, val.color);
            //填充为黄色
            context.fillStyle = grd1;
            //填充当前绘图（路径）
            context.fill();
            if (val.borderColor) {
                this.drawBorder(context, val.borderColor);
            }
        },
        drawSector: function(context, val, distance, xyCanvas) {
            let grd1
            //扇形
            context.sector(xyCanvas.x, xyCanvas.y, distance, val.dir - 90 - (this.opts.sectorDeg / 2),
                val.dir - 90 + (this.opts.sectorDeg / 2))
            grd1 = context.createRadialGradient(xyCanvas.x, xyCanvas.y, 0, xyCanvas.x, xyCanvas.y,
                distance);
            grd1.addColorStop(0, val.color);
            grd1.addColorStop(0.6, val.color);
            grd1.addColorStop(1, val.color);
            context.fillStyle = grd1;
            context.fill();
            if (val.borderColor) {
                this.drawBorder(context, val.borderColor);
            }
        },
        drawSectorS: function(context, val, distance, xyCanvas) {
            let grd1, grd2;
            //圈圈
            context.arc(xyCanvas.x, xyCanvas.y, distance * 0.15, 0, 2 * Math.PI, false);
            grd2 = context.createRadialGradient(xyCanvas.x, xyCanvas.y, 0, xyCanvas.x, xyCanvas.y,
                distance * 0.15);
            grd2.addColorStop(0, val.color);
            grd2.addColorStop(0.3, val.color);
            grd2.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
            grd2.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
            grd2.addColorStop(1, val.color);
            context.fillStyle = grd2;
            context.fill();
            //扇形
            grd1 = context.createRadialGradient(xyCanvas.x, xyCanvas.y, 0, xyCanvas.x, xyCanvas.y,
                distance);
            grd1.addColorStop(0, 'rgba(255, 255, 255, 0)');
            grd1.addColorStop(0.2, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(0.2, val.color);
            grd1.addColorStop(0.23, val.color);
            grd1.addColorStop(0.3, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(0.3, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(0.4, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(0.4, val.color);
            grd1.addColorStop(0.43, val.color);
            grd1.addColorStop(0.5, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(0.5, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(0.6, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(0.6, val.color);
            grd1.addColorStop(0.63, val.color);
            grd1.addColorStop(0.7, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(0.7, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(0.8, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(0.8, val.color);
            grd1.addColorStop(0.83, val.color);
            grd1.addColorStop(0.9, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(0.9, "rgba(255, 255, 255, 0)");
            grd1.addColorStop(1, "rgba(255, 255, 255, 0)");
            context.sector(xyCanvas.x, xyCanvas.y, distance, val.dir - 90 - (this.opts.sectorDeg / 2),
                val.dir - 90 + (this.opts.sectorDeg / 2))
            context.fillStyle = grd1;
            context.fill();
            if (val.borderColor) {
                this.drawBorder(context, val.borderColor);
            }
        },
        drawGather: function(context, val, distance, xyCanvas,zoom) {
            let scale = distance / 400;
            let x = xyCanvas.x;
            let y = xyCanvas.y;
            let w = 400 * scale;
            let h = 400 * scale;
            let imgs =[];
            if(this.imgs.length>0){
                imgs = this.imgs;
                draw();
            }
            function draw() {
                let index;
                //铁塔 vindicate_type
                let vindicate_type = getImgObj("vindicate_type");
                vindicate_type && drawImg(vindicate_type, x, y, scale);

                //警告fsu_alarm  transmit_alarm  entrance_guard_alarm
                let fsu_alarm = getImgObj("fsu_alarm");
                let transmit_alarm = getImgObj("transmit_alarm");
                let entrance_guard_alarm = getImgObj("entrance_guard_alarm");
                let temparr = [fsu_alarm, transmit_alarm, entrance_guard_alarm];
                temparr = temparr.filter(v => v != null);
                if (temparr.length == 1) {
                    drawImg(temparr[0], x, (y - h / 2 + 42 * scale), scale);
                } else if (temparr.length == 2) {
                   drawImg(temparr[0],(x-(32+15)*scale),(y-h/2+42*scale),scale);
                   drawImg(temparr[1],(x+(32+15)*scale),(y-h/2+42*scale),scale);
                } else if (temparr.length == 3) {
                    drawImg(temparr[0], x, (y - h / 2 + 42 * scale), scale);
                    drawImg(temparr[1], (x - (64 + 30) * scale), (y - h / 2 + 42 * scale), scale);
                    drawImg(temparr[2], (x + (64 + 30) * scale), (y - h / 2 + 42 * scale), scale);
                }
                //发电 self_starting_oil_machine  portable_oil_machine oil_machine_state
                let self_starting_oil_machine = getImgObj("self_starting_oil_machine");
                let portable_oil_machine = getImgObj("portable_oil_machine");
                let oil_machine_state = getImgObj("oil_machine_state");
                if (self_starting_oil_machine || self_starting_oil_machine) {
                    drawImg(oil_machine_state, (x - (88 + oil_machine_state.width / 2 + 10)) / scale, (
                        y + h / 2 - oil_machine_state.height / 2 * scale - 2 * scale), scale);
                }

                //等级 comprehensive_protection_level
                let comprehensive_protection_level = getImgObj("comprehensive_protection_level");
                drawImg(comprehensive_protection_level, (x + (comprehensive_protection_level.width / 2 +
                        15 - 88) * scale),
                    (y + h / 2 - comprehensive_protection_level.height / 2 * scale - 2 * scale),
                    scale);

                //电池 battery_state  "value": ["正常", "退服", 75, 50, 25, 0],
                let battery_state;
                if (val.battery_state == "正常" || val.battery_state == "退服") {
                    battery_state = getImgObj("battery_state");
                } else {
                    if (val.battery_state > 75) {
                        battery_state = findImg(img.battery_state.src[2]);
                    } else if (val.battery_state > 50) {
                        battery_state = findImg(img.battery_state.src[3]);
                    } else if (val.battery_state > 25) {
                        battery_state = findImg(img.battery_state.src[4]);
                    } else if (val.battery_state > 0) {
                        battery_state = findImg(img.battery_state.src[5]);
                    }
                }
                drawImg(battery_state,
                    (x + (battery_state.width / 2 + 15 + 88) * scale),
                    (y + h / 2 - battery_state.height / 2 * scale - 2 * scale), scale);
                
                if(zoom>=16){
                    context.font = "12px Arial";
                   context.fillStyle = "#333";
                   let wtext = val.machine_room_name.length*12;
                   context.fillText(val.machine_room_name, 
                   x-h/2+wtext/2*scale,
                    y+h/2+40*scale); 
                }
               


                //通过key的值返回img对象 没有返回null则表示不显示图标！
                function getImgObj(key) {
                    let index = img[key].value.indexOf(val[key]);
                    if (index != -1) {
                        return findImg(img[key].src[index]);
                    } else {
                        return null
                    }
                }


            }

            function findImg(str) {
                for (let img of imgs) {
                    let src = decodeURIComponent(img.src);
                    let houz = src.slice(src.lastIndexOf("/") + 1);
                    if (houz == str) {
                        return img;
                    }
                }
            }

            function drawImg(img, x, y, scale = 1) {
                let w = img.width;
                let h = img.height;
                context.save();
                //context.scale(scale,scale);
                context.translate(x, y);
                //为了能做点击效果，加个矩形路径  因为是400大部分只有中间有图标 缩小一半
                context.rect( -w * scale / 2+w * scale/2/2, -h * scale / 2, w * scale/2, h * scale);
              /*  context.fillStyle="red";
                context.fill(); */
                context.drawImage(img, 0, 0, w, h, -w * scale / 2, -h * scale / 2, w * scale, h * scale);
                context.restore()
            }

            function loadImg(src) {
                return new Promise((reslove, reject) => {
                    let img = new Image();
                    img.onload = function() {
                        reslove(img)
                    }
                    img.onerror = function() {
                        reject("图片" + src + "加载失败")
                    }
                    img.src = src;
                });
            }
            

        },
        drawImg(context, val, distance, xyCanvas){
            if(this.imgs.length==0)return;
            
            let imgs = this.imgs;
            let houzui = val.imgSrc.slice(val.imgSrc.lastIndexOf("/") + 1);
            let imgObj = findImg(houzui);
            let scale = distance /imgObj.width;
            let x = xyCanvas.x;
            let y = xyCanvas.y;
            
            if(val.offset){
                x+=val.offset.x;
                y+=val.offset.y;
            }
            drawImg(imgObj,x,y,scale);
            
            function drawImg(img, x, y, scale = 1) {
                let w = img.width;
                let h = img.height;
                context.save();
                //context.scale(scale,scale);
                context.translate(x, y);
                 //为了能做点击效果，加个矩形路径
                context.rect( -w * scale / 2, -h * scale / 2, w * scale, h * scale);
                context.drawImage(img, 0, 0, w, h, -w * scale / 2, -h * scale / 2, w * scale, h * scale);
                context.restore()
            }
            function findImg(str) {
                for (let img of imgs) {
                    let src = decodeURIComponent(img.src);
                    let houz = src.slice(src.lastIndexOf("/") + 1);
                    if (houz == str) {
                        return img;
                    }
                }
            }
            
        },
        _1pxToM: function(map) {
            return Math.pow(2, (18 - map.getZoom()));
        },
        addEventListener: function(type, callback) {
            let $this = this;
            if ($this._canvas) {
                $($this._canvas).on(type, function(e) {
                    $this.draw({
                        x: e.pageX - $($this._map.Va).offset().left,
                        y: e.pageY - $($this._map.Va).offset().top
                    }, null, callback);
                });
            }
        },
        removeEventListener: function(type) {
            let $this = this;
            if ($this._canvas) {
                $($this._canvas).unbind(type);
            }
        },
        movePoint: function(activep, zoom, callback) {
            let $this = this;
            if ($this._canvas) {
                $this._map.centerAndZoom(activep, zoom);
                $this.draw(null, activep);
                if (callback) callback.call($this);
            }
        }
    });
    win.ComplexCustomOverlay = ComplexCustomOverlay;
})(window)
