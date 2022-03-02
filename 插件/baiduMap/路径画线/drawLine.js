/*
 时间：2019-06-26
  版本：1.0
  作者：小艾
 画线   因为原本百度地图画线查询  只支持10个点
  调用:
  arr:带有lng lat的key的   默认会渲染第一个作为起点  最后一个为终点   
  map:地图实例
  color:画线的颜色
  let arr = [
      {
          lng:116.301934,
          lat:39.977552,
      },{
          lng:116.365942,
          lat:39.996165,
      },{
          lng:116.408757,
          lat:39.995704,
      },{
          lng:116.508328,
          lat:39.919141,
      }
  ]
 let line = new drawLine({
            arr: arr,
            map: map,
            color:
        });
 */
class drawLine {
    constructor(opts) {
        let defaults = {
            arr: [], //电路点  默认第一个起点,最后一个终点  需要有两个才能够画
            color: "#000"
        }
        let option = Object.assign({}, defaults, opts);

        for (let key in option) {
            this[key] = option[key];
        }
        //点
        this.points = this.arr.map(v => new BMap.Point(v.lng, v.lat))

        //windowinfo
        this.infoWindow = new BMap.InfoWindow("");
        //装搜索
        this.drivings = [];
        //路径
        this.polylines = [];
        //锚点
        this.marks = [];

        this.main();
        return this;
    }

    main() {
        let $this = this;
        if (this.points.length < 2) {
            throw new Error("路径点必须有起点和终点，必须超过2个");
        }
        let pre = null;
        for (let i = 0, len = this.points.length; i < len; i++) {
            let val = this.points[i];
            //index赋值
            this.arr[i].index = i;
            //画起点mark
            this.addMark(i);

            //起点
            if (i == 0) {
                pre = val;
                continue;
            }
            //画线
            this.searchBetweenLine(pre, val);
        }

        this.map.setViewport([...this.points]);

    }
    /**
     * @param {Object} s起点
     * @param {Object} e终点
     */
    searchBetweenLine(s, e) {
        let $this = this;
        var driving = new BMap.DrivingRoute(this.map, {
            renderOptions: {
                map: this.map
            },
            onMarkersSet: function(arr) {
                for (let a of arr) {
                    $this.map.removeOverlay(a.marker);
                }
            },
            onPolylinesSet: $this.resetColor.bind($this)
        });
        $this.drivings.push(driving)
        driving.search(s, e);
    }

    addMark(i) {
        let mark = null,
            url,
            label;
        if (i === 0) {
            url = "./start.png";
        } else if (i === (this.points.length - 1)) {
            url = "./end.png";
        } else {
            url = "./road.png";
            label = new BMap.Label(i, {
                offset: new BMap.Size(0, 18 - 12 / 2)
            });
            label.setStyle({
                display: "inline-block",
                width: 28,
                textAlign: "center",
                backgroundColor: "transparent",
                "border": "none",
                color: "#fff",
                fontSize: 12,
                padding: 0,
            });
        }
        mark = new BMap.Marker(this.points[i], {
            icon: new BMap.Icon(url, new BMap.Size(28, 35), {
                imageSize: new BMap.Size(28, 35)
            }),
            offset: new BMap.Size(0, -18)
        })
        if (label) {
            mark.setLabel(label);
        }
        mark.data = this.arr[i];
        // mark.addEventListener("click",this.markclick.bind(this));
        this.map.addOverlay(mark);
    }

    markclick(e) {
        let data = e.target.data;
        console.log(data)
        let html = ``;

        html =
            `
                <div>${data.name}</div>
                <div style="display:flex;">
                    <div style="flex:1 1 auto;text-align:center">上一步</div>
                    <div style="flex:1 1 auto;text-align:center">下一步</div>
                </div>
                `;

        this.infoWindow.setContent(html)
        this.map.openInfoWindow(this.infoWindow, e.point);
    }

    //重置路径颜色
    resetColor(lines) {
        for (var line in lines) {
            var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
                scale: 0.6, //图标缩放大小
                strokeColor: '#fff', //设置矢量图标的线填充颜色
                strokeWeight: '1', //设置线宽
            });
            var icons = new BMap.IconSequence(sy, "100%", '2%', false);
            var polyline = new BMap.Polyline(lines[line].Ti.ia, {
                enableEditing: false, //是否启用线编辑，默认为false
                enableClicking: true, //是否响应点击事件，默认为true
                strokeWeight: '8', //折线的宽度，以像素为单位
                //icons:[icons],
                strokeOpacity: 0.6, //折线的透明度，取值范围0 - 1
                strokeColor: this.color //折线颜色
            });
            this.polylines.push(polyline)
            this.map.addOverlay(polyline); //增加折线
        }
    }

}
