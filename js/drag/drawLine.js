;(function(win){
	function DrawLine(oneDom,twoDom,lineType){
			this.default={
				canvasdom:undefined,
				oneDom:oneDom,
				twoDom:twoDom,
				lineType:"soild",
				mark:true,
			}
			this.opts=$.extend({},this.default,{lineType:lineType});
			this.init();
			return this;
		}
		DrawLine.prototype={
			init:function(){
				if(this.opts.mark){
					this.opts.canvasdom=$("<canvas>");
				}else{
					var cxt=this.opts.canvasdom[0].getContext("2d");  
					cxt.clearRect(0,0,this.opts.canvasdom[0].width,this.opts.canvasdom[0].height);
				}
				this.draw();
				if(this.opts.mark){
					this.opts.oneDom.after(this.opts.canvasdom);
					this.opts.mark=false;
				}
			},
			draw:function(){
				var oneDomP = this.opts.oneDom.position();
				var twoDomP = this.opts.twoDom.position();
				//计算出画布的宽高
				var height = Math.abs((oneDomP.top+this.opts.oneDom.outerHeight()/2)-(twoDomP.top+this.opts.twoDom.outerHeight()/2));
				var width = Math.abs((oneDomP.left+this.opts.oneDom.outerWidth())-twoDomP.left);
				//计算出画布的定位  根据上面算出定位点
				var arrH = [oneDomP.top+(this.opts.oneDom.outerHeight()/2),twoDomP.top+(this.opts.twoDom.outerHeight()/2)];
				var arrW = [oneDomP.left+this.opts.oneDom.outerWidth(),twoDomP.left];
				var topP = Math.min(...arrH);
				var leftP = Math.min(...arrW);
				//赋值宽高和样式
				this.opts.canvasdom[0].width=width|0||1;
				this.opts.canvasdom[0].height=height|0||1;
				this.opts.canvasdom.css({position:"absolute",top:topP,left:leftP});
				var context = this.opts.canvasdom[0].getContext("2d");
				context.strokeStyle="#39aef5";
				//1 3   这里的斜线  分从左上往右下斜  和   从左下往右上斜 两种情况
				var one=(oneDomP.left+this.opts.oneDom.outerWidth())<=twoDomP.left&&(oneDomP.top+this.opts.oneDom.outerHeight()/2)>=(twoDomP.top+this.opts.twoDom.outerHeight()/2);
				var three=(oneDomP.left+this.opts.oneDom.outerWidth())>twoDomP.left&&oneDomP.top<twoDomP.top;
				if(one||three){
					//区分画虚线还是画实线
					if(this.opts.lineType=="dashed"){
						this.drawDashLine(context,0,height,width,0,3);
					}else{
						context.moveTo(0,height);
						context.lineTo(width,0);
						context.stroke();
					}
				}else{
					if(this.opts.lineType=="dashed"){
						this.drawDashLine(context,0,0,width,height,3);
					}else{
						context.moveTo(0,0);
						context.lineTo(width,height);
						context.stroke();
					}
				}
			},
			drawDashLine(context,x1,y1,x2,y2,dashLen){  
			    dashLen = dashLen === undefined ? 5 : dashLen;  
			    //得到斜边的总长度  
			    var beveling =Math.sqrt((x2-x1) * (x2-x1) + (y2-y1) * (y2-y1));
			    //计算有多少个线段  
			    var num = Math.floor(beveling/dashLen);  
			      
			    for(var i = 0 ; i < num; i++)  
			    {  
			        context[i%2 == 0 ? 'moveTo' : 'lineTo'](x1+(x2-x1)/num*i,y1+(y2-y1)/num*i);  
			    }  
			    context.stroke();
			}
		}
		win.DrawLine=DrawLine;
})(window)
