/**
 * version:1.0
 * author:myth
 * finishTime:2018-04-12
 * methods:mapRulerTool
 * parm:
 * 		mapObj:地图实例
 * 		rulerUrl:光标文件路径
 * 		callBack:右键取消后的回调函数
 * 
 * */
;(function(win){
	function mapRulerTool(mapObj,rulerUrl,callback){
		//设置鼠标光标
		let defaultCursor=mapObj.getDefaultCursor();
		mapObj.setDefaultCursor("url("+rulerUrl+"), auto");
		//参数
		let isStart =true;
		let isLine =false;
		let content="";
		let labelStyle = {
			 fontSize : "10px",
			 lineHeight : "18px",
			 fontFamily:"微软雅黑",
			 backgroundColor:"#1ab394",
			 border:"none",
			 color:"#fff",
			 maxWidth:"none",
			 padding:"1px 3px",
			 marginBottom:"0",
			 borderRadius:".25em",
			 display:"inline-block",
		};
		let lineArr=[];//起始点和结束点
		let polylineArr = [];
		let labelArr = [];
		let markerArr = [];
		
		let polyline=null;
		let labelmove=null;
		let distanceToal=0;
		let distanceCurr=0;
		mapObj.addEventListener("click",mpClick);
		function mpClick(e){
				//标注
				let marker = new BMap.Marker(e.point,{enableClicking:false,icon:new BMap.Icon(rulerUrl,new BMap.Size(6,6),{imageOffset:new BMap.Size(0,-3)})});
				mapObj.addOverlay(marker);
				markerArr.push(marker);
				//描述
				if(isStart){
					lineArr[0]=e.point;
					let startlabel = new BMap.Label("起点",{position:e.point,offset:new BMap.Size(5,-10)});  // 创建文本标注对象
					startlabel.setStyle(labelStyle);
 					mapObj.addOverlay(startlabel);
 					labelArr.push(startlabel);
 					isStart=false;
				}else{
					//确定形成线
					isLine=true;
					//记录  取消的时候删除
					labelArr.push(labelmove);
					distanceToal = mapObj.getDistance(lineArr[0],e.point)+distanceToal;
					lineArr[0]=lineArr[1];
					lineArr[1]=e.point;
					labelmove.setOffset(new BMap.Size(5,-10));
					if(distanceToal>1000){
						content = "<span style='font-weight:600;'>"+(distanceToal/1000).toFixed(1)+"</span>公里";
					}else{
						content = "<span style='font-weight:600;'>"+(distanceToal | 0)+"</span>米";
					}
					labelmove.setContent(content);
					mapObj.removeEventListener("mousemove",mpMousemove);
					mapObj.removeEventListener("rightclick",cancelEvent);
				}
				//线
				polyline = new BMap.Polyline([lineArr], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
				mapObj.addOverlay(polyline);
				polylineArr.push(polyline);
				//移动时的信息框
				labelmove = new BMap.Label("",{position:e.point,offset:new BMap.Size(14,15)});  // 创建文本标注对象
				labelmove.setStyle({border:"none",padding:"0"});
				mapObj.addOverlay(labelmove);
				//移动
				mapObj.addEventListener("mousemove",mpMousemove);
				//右键
				mapObj.addEventListener("rightclick",cancelEvent);
		}
		function mpMousemove(e2){
			lineArr[1] = e2.point;
			distanceCurr = mapObj.getDistance(lineArr[0],e2.point)+distanceToal;
			if(distanceCurr>1000){
				content = "<span style='font-weight:600;'>"+(distanceCurr/1000).toFixed(1)+"</span>公里<br><span style='color:#eee'>单击确认地点,右键取消</span>";
			}else{
				content = "<span style='font-weight:600;'>"+(distanceCurr | 0)+"</span>米<br><span style='color:#eee'>单击确认地点,右键取消</span>";
			}
			labelmove.setContent(content);
			labelmove.setPosition(e2.point);
			labelmove.setStyle(labelStyle);
			polyline.setPath(lineArr);
		}
		
		function cancelEvent(e){
			mapObj.removeEventListener("mousemove",mpMousemove);
			mapObj.removeEventListener("click",mpClick);
			mapObj.removeEventListener("rightclick",cancelEvent);
			if(isLine){
				//信息从设置
				if(distanceToal>1000){
					content = "总长:<span style='font-weight:600;font-size:13px'>"+(distanceToal/1000).toFixed(1)+"</span>公里";
				}else{
					content = "总长:<span style='font-weight:600;font-size:13px'>"+(distanceToal | 0)+"</span>米";
				}
				labelArr[labelArr.length-1].setPosition(lineArr[0]);
				labelArr[labelArr.length-1].setContent(content);
				//新增删测量的按钮
				let removeLabel = new BMap.Label("<a href='javascript:;' title='删除该测量记录' style='display:block;width:16px;height:16px;text-align:center;line-height:16px;color:#fff;font-size:16px;'>&times;</a>",{position:lineArr[0],offset:new BMap.Size(-8,8)});
					removeLabel.setStyle({
					 display:"inline-block",
					 backgroundColor:"#1ab394",
					 padding:"0",
					 border:"none",
					 color:"#fff",
					 maxWidth:"none",
					 marginBottom:"0",
					 borderRadius:"50%",
					});
				mapObj.addOverlay(removeLabel);
				//绑定点击事件
				removeLabel.addEventListener("click",removeClick);
				function removeClick(){
					mapObj.removeOverlay(removeLabel);
					removeLabel.removeEventListener("click",removeClick);
					for(let index in markerArr){
						mapObj.removeOverlay(markerArr[index]);
						mapObj.removeOverlay(polylineArr[index]);
						mapObj.removeOverlay(labelArr[index]);
					}
				}
			}else{
				mapObj.removeOverlay(labelArr[0]);
				mapObj.removeOverlay(markerArr[0]);
			}
			//清除
			mapObj.removeOverlay(labelmove);
			mapObj.removeOverlay(polylineArr[polylineArr.length-1]);
			//设置鼠标光标
			mapObj.setDefaultCursor(defaultCursor);
			if(callback)callback();
		}
	}
win.mapRulerTool = mapRulerTool;
})(window);
