/**
 * 版本：1.3
 * 2019-03-01
 * 新增initPosition,callbackStar和showType属性属性配置
 */

;(function($) {
  function Xdrag(ele, opts) {
    this.$element = ele;
    this.zIndex = 1;
    this.isChange=false;//是否发生交换
    this.oldOrder=[];//是否发生交换
    this.deault = {
      width: undefined,
      height: undefined,
      initPosition:true,//是否需要初始化计算top和left位置排版  默认为true
      space: 15, //元素与元素相隔多大距离
      dir: undefined, //方向 x||y
      proxyChild: undefined, //代理子类的下标  选择器  ".childrenElement"
      ghost: false, //是否开启镜像  true  false 包括拖拽碰撞恢复
      ghostStyle: undefined, //镜像样式  默认border：1px dashed #19ACFF   position","height","width","top","left
      ghostClass: undefined, //镜像class
      hitClass: undefined, //碰撞的class  当元素与另外一个元素发生碰撞的class   不要带.哦
      callbackStar: undefined, //mousedown过程中的回调函数{dom:当前dom元素jQuery对象}
      callbackDur: undefined, //mousemove过程中的回调函数{dom:当前dom元素jQuery对象，l:位移的横坐标,位移的纵坐标,lr/tr,横纵坐标相对于父定位元素的比率}
      callbackEnd: undefined, //mouseup停止拖拽后的回调函数返回参数 {dom:同上,l：同上,t:同上}
      showType: "line", //line/top 两种值  当盒子高度不一致的情况下   line  每行平行   top  向上吸顶
      moveOut: false, //拖动的范围是否允许超过当前元素的相对定位父元素  默认只能在父定位元素盒子中拖拽  true 则不限制
    }
    this.opts = $.extend({}, this.deault, opts);
    return this;
  }
  Xdrag.prototype = {
    init: function() {
      //拖拽
      this.main();
      //位置初始话
      this.initDragPanel();
    },
    destroy:function(){
      this.$element.unbind("mousedown");
    },
    main: function() {
      var $this = this;
      this.$element.on("mousedown", this.opts.proxyChild, function(event) {
        event.stopPropagation();
        var $dom = $(event.delegateTarget);
        var position = $dom.position()
        var l = event.pageX - position.left;
        var t = event.pageY - position.top;
        //回调函数
        $this.opts.callbackStar&&$this.opts.callbackStar.call($dom,$dom);
        //z-index控制
        $dom.css({
          "z-index": $this.zIndex++
        });
        //ghost镜像初始化
        $this.ghost.init($dom, $this);
        $(document).on("mousemove", function(e) {
          var stepL = e.pageX - l;
          var stepT = e.pageY - t;
          //方向
          $this.dir($dom, stepL, stepT);
          //限制
          $this.moveOut($dom, stepL, stepT);
          //镜像 移动
          $this.ghost.move($dom, $this);
          //回调函数
          $this.callbackDur($dom);
          //防止与光标选中事件冲突
          window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        })
        $(document).on("mouseup", function(e) {
          //镜像结束
          $this.ghost.over($dom, $this);
          //回调函数
          $this.callbackEnd($dom,$this);
          $(document).unbind("mousemove mouseup");
        })
      });
    },
    initDragPanel: function() {
      var $this = this;
      //样式赋予
      if(this.$element.css("position")=="static"){
        this.$element.css("position","relative")
      }
      //宽高赋值
      $.each(this.$element, function(index, dom) {
        if($this.opts.height)$(this).css(height,$this.opts.height);
        if($this.opts.width)$(this).css(width,$this.opts.width);
      });
      //记录下顺序
      this.oldOrder=Array.prototype.slice.call(this.$element);
      if(this.opts.initPosition){
        this.resetPosition();
      }
    },
    resetPosition: function(doms) {
      if(doms){
        this.$element=doms;
        this.oldOrder=Array.prototype.slice.call(this.$element);
      }
      var $this = this;
      //这个有点恶心  动画延迟导致无法获取上一个的position().left   所以定个变量缓存
      var rowIndex = 0,
        left = 0,
        top = 0;
      //上一行元素的结束位置   记录上一行的结束位置和高度[{startLeft:其实left值,endLeft:结束left值,top:高度}]
      var prevDomEndPosition = [];
      var prevDomEndPositionCopy = [];
      var $eleDoms = Array.prototype.slice.call(this.$element).sort(function(a, b) {
        return $(a).index() - $(b).index()
      });
      //判断顺序是否有变化
      $.each(this.oldOrder,function(index,dom){
        if(dom!=$eleDoms[index]){
          $this.oldOrder=$eleDoms;
          $this.isChange=true;
          return false;
        }
      });
      //上吸顶
      $.each($eleDoms, function(index, dom) {
        //判断换行
        if((left + $(dom).outerWidth()) > $(dom).offsetParent().outerWidth()) {
          left = 0;
          prevDomEndPositionCopy = prevDomEndPosition;
          prevDomEndPosition = [];
        }
        //top
        if(prevDomEndPositionCopy.length > 0) {
          if($this.opts.showType =="line"){
            top=prevDomEndPositionCopy.sort(function(a,b){return b.top-a.top})[0].top;
          }else{
            var temparr = [];
            var currEndL = left + $(dom).outerWidth() + $this.opts.space;
            //数据处理
            $.each(prevDomEndPositionCopy, function(index, value) {
              if(!(left>=value.endLeft||currEndL<=value.startLeft)){
                temparr.push(value.top);
              }
            });
            top =Math.max.apply(null, temparr);
          }
        }
        $(dom).animate({
          left: left,
          top: top
        }, "400", "swing");
        //高度获取的源数据
        prevDomEndPosition.push({
          'startLeft':left,
          'endLeft':(left+$(dom).outerWidth()+$this.opts.space),
          'top':(top+$(dom).outerHeight()+$this.opts.space)
        });
        //保留left
        left += $(dom).outerWidth() + $this.opts.space;
      });
    },
    ghost: {
      ghostDom: null,
      index: null,
      changeDom: null,
      dir: "after",
      init: function($dom, $this) {
        if($this.opts.ghost) {
          this.index = $dom.index();
          this.ghostDom = $("<div/>");
          //样式
          var defaultStyle = $dom.css(["position", "height", "width", "top", "left"])
          defaultStyle.border = "1px dashed #19ACFF";
          var ghostStyle = $.extend({}, defaultStyle, $this.opts.ghostStyle);
          if($this.opts.ghostClass) {
            if($this.opts.ghostClass.indexOf(".") != -1 || $this.opts.ghostClass.indexOf("#") != -1) {
              $this.opts.ghostClass = $this.opts.ghostClass.slice(1);
            }
            this.ghostDom.addClass($this.opts.ghostClass);
          } //添加
          this.ghostDom.css(ghostStyle).appendTo($dom.offsetParent());
        }
      },
      move: function($dom, $this) {
        if($this.opts.ghost){
          /*
           * 1.获取碰撞的元素
           * 2.比较碰撞元素  选出中心点离另一个元素最近的元素
           * //好难  下面是下个版本的内容
           * 3.这里分两种情况    index<targIndex
           * 3.1 index<targIndex 拖拽元素的左边 当碰撞面积最大产生时   拖拽元素的最左边大于最近目标元素的中间的右边  就放在目标元素的后面
           * 3.2 index>targIndex 拖拽元素的右边   当碰撞面积最大产生时 大于最近目标元素的中间的左边  就放在目标元素的前面
           * //本版本：分前半部分和后半部分
           * 4.上诉逻辑   取材至--手机应用
           */
          var peng = [];
          //1.获取碰撞的元素
          $.each($this.$element, function(index, dom, all) {
            if(Xdrag.pengZhuang($dom, $(dom)) && dom !== $dom[0]) { //排除自己
              peng.push(dom);
            }
          });
          //2.比较碰撞元素  选出中心点离另一个元素最近的元素
          if(peng.length > 0) {
            var dom = Xdrag.getMixPDom($dom[0], peng);
            this.changeDom = dom;
            var minValue1 = dom.position().left;
            var maxValue1 = dom.position().left + (dom.outerWidth() * 2 / 3);
            var right = $dom.position().left + $dom.outerWidth();
            if(right > minValue1 && right < maxValue1) {
              this.dir = "before";
            }
            var minValue2 = dom.position().left + (dom.outerWidth() / 3);
            var maxValue2 = dom.position().left + dom.outerWidth();
            var left = $dom.position().left;
            if(left < maxValue2 && left > minValue2) {
              this.dir = "after";
            }
            //样式
            if($this.opts.hitClass) {
              if($this.opts.hitClass.indexOf(".") != -1 || $this.opts.hitClass.indexOf("#") != -1) {
                $this.opts.hitClass = $this.opts.hitClass.slice(1);
              }
              dom.addClass($this.opts.hitClass).siblings(":not(:last)").removeClass($this.opts.hitClass);
            }
            dom.css("box-shadow", "1px 1px 15px -1px #ccc").siblings(":not(:last)").css("box-shadow", "none");
          } else {
            $this.$element.css("box-shadow", "none");
            $this.$element.removeClass($this.opts.hitClass);
            this.changeDom = null;
          }
        }
      },
      over: function($dom, $this) {
        if(this.ghostDom) {
          if(this.changeDom) {
            if(this.dir == "after") {
              this.changeDom.after($dom);
            } else if(this.dir == "before") {
              this.changeDom.before($dom);
            }
            $this.$element.css("box-shadow", "none");
            $this.$element.removeClass($this.opts.hitClass);
            this.changeDom = null;
          }
          this.ghostDom.remove();
          $this.resetPosition();
        }
      }
    },
    dir: function($dom, stepL, stepT) {
      if(Xdrag.isNotEmpty(this.opts.dir)) {
        this.opts.dir = this.opts.dir.toLowerCase();
        if(this.opts.dir == "y") {
          $dom.css({
            top: stepT
          });
        } else if(this.opts.dir == "x") {
          $dom.css({
            left: stepL
          });
        } else {
          window.console.warn("jQuery.fn.Xdrag.dir: must 'x' or 'y'");
          $dom.css({
            left: stepL,
            top: stepT
          });
        }
      } else {
        $dom.css({
          left: stepL,
          top: stepT
        });
      }
    },
    moveOut: function($dom, stepL, stepT) {
      if(!this.opts.moveOut) {
        if(stepL <= 0) {
          $dom.css({
            left: 0
          });
        }
        var maxwidth = $dom.offsetParent().innerWidth() - $dom.outerWidth();
        if(stepL >= maxwidth) {
          $dom.css({
            left: maxwidth
          });
        }
        if(stepT <= 0) {
          $dom.css({
            top: 0
          });
        }
        var maxHeight = $dom.offsetParent().innerHeight() - $dom.outerHeight();
        if(stepT >= maxHeight) {
          $dom.css({
            top: maxHeight
          });
        }
      }
    },
    callbackDur: function($dom) {
      if(this.opts.callbackDur) {
        var position = $dom.position();
        var maxwidth = $dom.offsetParent().innerWidth() - $dom.outerWidth();
        var maxHeight = $dom.offsetParent().innerHeight() - $dom.outerHeight();
        var json = {
          dom: $dom,
          l: position.left.toFixed(0),
          t: position.top.toFixed(0),
          lr: ((position.left / maxwidth) * 100).toFixed(2),
          tr: ((position.top / maxHeight) * 100).toFixed(2),
        }
        this.opts.callbackDur.call($dom, json);
      }
    },
    callbackEnd: function($dom,$this) {
      if(this.opts.callbackEnd) {
        var json = {
          isChange:$this.isChange,
          dom: $dom,
          changeDom:!$this.opts.ghost||$this.ghost.changeDom,
          dir:!$this.opts.ghost||$this.ghost.dir,
        }
        this.opts.callbackEnd.call($dom, json);
      }
      $this.isChange=false;
    }
  };
  Xdrag.isEmpty = function(val) {
    val = $.trim(val);
    if(val == null)
      return true;
    if(val == undefined || val == 'undefined')
      return true;
    if(val == "")
      return true;
    if(val.length == 0)
      return true;
    if(!/[^(^\s*)|(\s*$)]/.test(val))
      return true;
    return false;
  };
  Xdrag.isNotEmpty = function(val) {
    return !Xdrag.isEmpty(val);
  };
  Xdrag.pengZhuang = function(curr, target) {
    var cP = curr.position();
    var tP = target.position();
    var T1 = cP.top;
    var R1 = cP.left + curr.outerWidth();
    var B1 = cP.top + curr.outerHeight();
    var L1 = cP.left;
    var T2 = tP.top;
    var R2 = tP.left + target.outerWidth();
    var B2 = tP.top + target.outerHeight();
    var L2 = tP.left;
    if(T1 > B2 || R1 < L2 || B1 < T2 || L1 > R2) {
      return false;
    } else {
      return true;
    }
  };
  //算出拖拽元素与碰撞元素最小距离的元素
  //思路  沟谷定理
  Xdrag.getMixPDom = function(dom, arr) {
    //var mixDom=[dom,index,distance]
    var mixDom = [];
    for(var i in arr) {
      var left = arr[i].offsetLeft - dom.offsetLeft;
      var top = arr[i].offsetTop - dom.offsetTop;
      var temp = Math.sqrt(left * left + top * top);
      mixDom.push({
        dom: arr[i],
        distance: temp
      });
    }
    //排序
    mixDom.sort(function(a, b) {
      return a.distance - b.distance;
    });
    //想要其他值可以方便改
    return $(mixDom[0].dom);
  }
  var xdrag;
  $.fn.xdrag = function(opts) {
    if(typeof arguments[0] == "object"){
      //创建Xdrag的实体
      xdrag = new Xdrag(this, opts);
      //初始化
      xdrag.init();
      //让其可以继续连点
    }else if(typeof arguments[0]=="string"&&arguments.length==1){
      //方法注册resetPosition
      xdrag[opts](this);
    }
    return this;
  };
})(jQuery)