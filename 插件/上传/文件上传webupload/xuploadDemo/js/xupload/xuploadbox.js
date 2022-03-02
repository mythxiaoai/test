//此js只做盒子的css部分 属于公共模块   通过fileid调用回调函数执行操作
/*
文件上传插件
时间:2019-03-10
作者：myth小艾
版本：v1.0.0
全局暴露对象xuploadbox  多个上传文件实例 对应一个box
调用方法:
autoShow()    自动显示
bigEvent()    放大窗口
closeBox()    关闭窗口
destroy()     销毁，取消事件绑定
getFileType(vType, vName)  根据文件类型和文件名称，获取文件类型
getIconByfile(vType, vName)根据文件类型和文件名称，获取icon的class
getInsByFileId(fileid) 根据文件ID 获取上传实例
init()        初始化--不会重复创建
minBox()      缩小窗口
progress(file)上传进度的回调
push(files)   添加文件数组
reli(id)      根据文件id重置li
relist()      重置整个list
removeFile(id)根据id删除对应文件
 * */
;(()=>{
  let xuploadbox = {
    opts:{
      dom:"",
      data:[],
      status:"close",//close  min nomal
      ins:[],
    },
    init(ins){
      this.opts.ins.push(ins);
      if($(".js_xupload_box").length==0){
          this.html();
          this._event.init.call(this);
      }else{
        return $(".js_xupload_box");
      }
      return this.opts.dom;
    },
    autoShow(){
      if(this.opts.status=="close"){
        this.showBox();
      }else if(this.opts.status=="min"){
        this.bigEvent();
      }else{
        this.showBox();
      }
    },
    showBox(){
      if(this.opts.status != "nomal"){
        this.opts.status = "nomal";
        $(".js_xupload_box").show().removeClass("animated bounceOutDown").addClass("animated bounceInUp");
      }
    },
    minBox(){
      this.opts.status = "min";
      $(".js_xupload_box").stop(true,true).animate({height:44},"fast");
    },
    bigEvent(){
      this.opts.status = "nomal";
      $(".js_xupload_box").stop(true,true).animate({height:429},"fast");
    },
    closeBox(){
      if(this.opts.status != "close"){
        this.opts.status = "close";
        $(".js_xupload_box").removeClass("animated bounceInUp").addClass("animated bounceOutDown");
      }
    },
    push(files){
      this.opts.data.push(...files);
    },
    _fileOptTemple(status){
      /*<em class="operate-pause glyphicon glyphicon-pause js_pause" title="暂停"></em>
      <em class="operate-continue glyphicon glyphicon-play js_play" title="开始"></em>
      <em class="operate-retry glyphicon glyphicon-repeat js_repeat" title="重新上传"></em>
      <em class="operate-remove glyphicon glyphicon-remove js_remove" title="移除"></em>*/
      let temple = {
        inited:`<em class="operate-remove glyphicon glyphicon-remove js_remove" title="移除"></em>`,
        queued:`
        <em class="operate-pause glyphicon glyphicon-pause js_pause" title="暂停"></em>
        <em class="operate-remove glyphicon glyphicon-remove js_remove" title="移除"></em>
        `,
        progress:`
        <em class="operate-pause glyphicon glyphicon-pause js_pause" title="暂停"></em>
        <em class="operate-remove glyphicon glyphicon-remove js_remove" title="移除"></em>
        `,
        complete:``,
        error:`
        <em class="operate-retry glyphicon glyphicon-repeat js_repeat" title="重新上传"></em>
        <em class="operate-remove glyphicon glyphicon-remove js_remove" title="移除"></em>`,
        interrupt:`
        <em class="operate-continue glyphicon glyphicon-play js_play" title="开始"></em>
        <em class="operate-remove glyphicon glyphicon-remove js_remove" title="移除"></em>
        `,
        cancelled:`
        <em class="operate-continue glyphicon glyphicon-play js_play" title="开始"></em>
        <em class="operate-remove glyphicon glyphicon-remove js_remove" title="移除"></em>
        `
      }
      return temple[status]||"";
    },
    _fileStatusTemple(status,file){
      let temple = {
        inited:`<span class="prepare">准备上传…</span>`,
        queued:`<span class="waiting">排队中…</span>`,
        progress:` <span class="uploading">
          <em class="precent js_precent">上传中...</em>
          <em class="speed js_speed"></em>
        </span>`,
        complete:`<span class="success">
          <em class="glyphicon glyphicon-ok-sign"></em>
          <i>上传成功</i>
        </span>`,
        error:`<span class="error">
           <em class="glyphicon glyphicon-remove-sign"></em>
          <i>${file.statusText||'服务器错误'}</i>
        </span>`,
        interrupt:`<span class="pause">
          <em></em>
          <i>已暂停</i>
        </span>`,
        cancelled:`<span class="pause">
          <em></em>
          <i>已暂停</i>
        </span>`
      }
      return temple[status]||"";
        /*<span class="waiting">排队中…</span>
        <span class="prepare">准备上传…</span>
        <span class="uploading">
          <em class="precent">6.60%</em>
          <em class="speed">(3.1MB/s)</em>
        </span>
        <span class="error">
           <em class="glyphicon glyphicon-remove-sign"></em>
          <i>服务器错误</i>
        </span>
        <span class="pause">
          <em></em>
          <i>已暂停</i>
        </span>
        <span class="cancel">
          <em></em>
          <i>已取消</i>
        </span>
        <span class="success">
          <em class="glyphicon glyphicon-ok-sign"></em>
          <i>上传成功</i>
        </span>*/
    },
    relist(){
      let liDoms = "";
      for(let file of this.opts.data){
        let liDom = `
          <li class="file-list" data-id=${file.id}>
            <div class="process js_process" style="width:${file.precent}"></div>
            <div class="info">
              <div class="file-name" title="${file.name}">
                <i class="file-icon ${this.getIconByfile(file.type,file.name)}"></i>
                <span class="name-text">${file.name}</span>
              </div>
              <div class="file-size">${WebUploader.formatSize(file.size)}</div>
              <div class="file-status">
                ${this._fileStatusTemple(file.getStatus(),file)}
              </div>
              <div class="file-operate">
               ${this._fileOptTemple(file.getStatus())}
              </div>
            </div>
          </li>`;
          liDoms+=liDom;
      }
      let len = this.opts.data.length;
      $(".js_xupload_box .js_title").html(len==0?"文件上传":`文件上传 (${len})`);
      $(".js_xupload_box .uploader-list-container").html(liDoms);
    },
    reli(id){
      let file = this.opts.data.filter(v=>v.id==id)[0];
      $(".js_xupload_box").find(`li[data-id='${file.id}']`).html(`
        <div class="process js_process" style="width:${file.precent}"></div>
        <div class="info">
          <div class="file-name" title="${file.name}">
            <i class="file-icon ${this.getIconByfile(file.type,file.name)}"></i>
            <span class="name-text">${file.name}</span>
          </div>
          <div class="file-size">${WebUploader.formatSize(file.size)}</div>
          <div class="file-status">
            ${this._fileStatusTemple(file.getStatus(),file)}
          </div>
          <div class="file-operate">
           ${this._fileOptTemple(file.getStatus())}
          </div>
        </div>  
      `)
    },
    progress(file){
      $(".js_xupload_box").find(`li[data-id='${file.id}']`).find(".js_process").css("width",file.precent)
      .end().find(".js_precent").html(file.precent)
      .end().find(".js_speed").html(file.speed);
    },
    getInsByFileId(id){
      for(let ins of this.opts.ins){
          if(ins.getFile(id)){
            return ins;
          }
      }
    },
    removeFile(id){
      /*
          1.删除总的
          2.更新input的显示
          3.
          * */
         let ins = this.getInsByFileId(id)
         let file = ins.getFile(id);
         let $input = $(ins.options.pick.id).find(".js_fileChoose input")
          ins.removeFile(file,true);
          let files = ins.getFiles().filter(v=>{
            return v.getStatus();
          });
          //input显示
          if(files.length==0){
            ins.reset();
            $input.val("");
          }else if(files.length==1){
            $input.val(files[0].name);
          }else if(files.length>1){
            $input.val(`已选择了${files.length}个文件`);
          }
          //删除data
          for(let index in this.opts.data){
            if(this.opts.data[index].id ==id){
              this.opts.data.splice(index,1);
            }
          }
          if(this.opts.data.length==0){
            this.closeBox();
          }
          this.relist();
    },
    _event:{
      init(){
        this._event.minEvent.call(this);
        this._event.closeEvent.call(this);
        
        this._event.playEvent.call(this);
        this._event.pauseEvent.call(this);
        this._event.repeatEvent.call(this);
        this._event.removeEvent.call(this);
      },
      minEvent(){
        let mark = true;
        let $this =this;
        $(".js_xupload_box").on("click",".js_mins",function(){
          if(mark){
            $(this).addClass("glyphicon-unchecked").removeClass("glyphicon-minus");
            $this.minBox()
          }else{
            $(this).addClass("glyphicon-minus").removeClass("glyphicon-unchecked");
            $this.bigEvent()
          }
          mark=!mark;
        });
      },
      closeEvent(){
         let $this =this;
         $(".js_xupload_box").on("click",".js_close",function(){
          $this.closeBox()
           $(".js_xupload_box").on("animationend",function(){
               $(".js_xupload_box").hide().unbind("animationend")
           })
        });
      },
      playEvent(){
        let $this =this;
         $(".js_xupload_box").on("click",".js_play",function(){
          let id = $(this).closest("li").data("id");
          
          let ins = $this.getInsByFileId(id)
          let file = ins.getFile(id);
          ins.retry(file);
          
          $this.reli(id);
        });
      },
      pauseEvent(){
        let $this =this;
         $(".js_xupload_box").on("click",".js_pause",function(){
          let id = $(this).closest("li").data("id");
          
          let ins = $this.getInsByFileId(id)
          let file = ins.getFile(id);
          file.mark = true;
          //记录下   因为用 stop(file)方法在用upload(file)只能让文件处于列队状态并不能继续上传  所以用cancelFile 因为连带状态值的改变  所以这里需要mark做个状态值的标记
          ins.cancelFile( file );
          
          $this.reli(id);
        });
      },
      repeatEvent(){
        let $this =this;
         $(".js_xupload_box").on("click",".js_repeat",function(){
          let id = $(this).closest("li").data("id");
           let ins = $this.getInsByFileId(id)
           let file = ins.getFile(id);
					 file.statusText="";
           ins.retry(file);
          $this.reli(id);
        });
      },
      removeEvent(){
        let $this =this;
         $(".js_xupload_box").on("click",".js_remove",function(){
            let id = $(this).closest("li").data("id");
            $this.removeFile(id);
        });
      }
    },
    destroy(){
      $(".js_xupload_box").unbind("click");
      this.opts = {
        dom:"",
        data:[],
        status:"close",
        ins:[],
      }
       $(".js_xupload_box").remove();
    },
    html(){
        /*<li class="file-list status-error">
                    <div class="process" style="width: 0%; display: none;"></div>
                    <div class="info">
                      <div class="file-name" title="fileblock.zip">
                        <i class="file-icon fa fa-file-o text-muted"></i>
                        <span class="name-text">fileblock.zip</span>
                      </div>
                      <div class="file-size">494.5M</div>
                      <div class="file-status"><span class="waiting">排队中…</span><span class="prepare">准备上传…</span><span class="uploading"><em class="precent">20.22%</em><em class="speed">(1.8MB/s)</em></span><span class="error"><em></em><i title="服务器错误">服务器错误</i><b style="display: inline;">(-1000)</b></span><span class="caution"><em></em><i>服务器错误</i><b></b></span><span class="pause"><em></em><i>已暂停</i></span><span class="cancel"><em></em><i>已取消</i></span><span class="success"><em></em><i></i></span></div>
                      <div class="file-operate"><em class="operate-pause"></em><em class="operate-continue"></em><em class="operate-retry"></em><em class="operate-remove"></em>
                      </div>
                    </div>
                  </li>
                  <li class="file-list status-pause">
                    <div class="process" style="width: 6.6%;"></div>
                    <div class="info">
                      <div class="file-name" title="150M的东西.zip">
                        <i class="file-icon fa fa-file-o text-muted"></i>
                        <span class="name-text">150M的东西.zip</span>
                      </div>
                      <div class="file-size">141M</div>
                      <div class="file-status">
                        <span class="waiting">排队中…</span>
                        <span class="prepare">准备上传…</span>
                        <span class="uploading">
                          <em class="precent">6.60%</em>
                          <em class="speed">(3.1MB/s)</em>
                        </span>
                        <span class="error">
                           <em class="glyphicon glyphicon-remove-sign"></em>
                          <i>服务器错误</i>
                        </span>
                        <span class="pause">
                          <em></em>
                          <i>已暂停</i>
                        </span>
                        <span class="cancel">
                          <em></em>
                          <i>已取消</i>
                        </span>
                        <span class="success">
                          <em class="glyphicon glyphicon-ok-sign"></em>
                          <i>上传成功</i>
                        </span>
                      </div>
                      <div class="file-operate">
                        <em class="operate-pause glyphicon glyphicon-pause" title="暂停"></em>
                        <em class="operate-continue glyphicon glyphicon-play"title="开始"></em>
                        <em class="operate-retry glyphicon glyphicon-repeat" title="重新上传"></em>
                        <em class="operate-remove glyphicon glyphicon-remove" title="移除"></em>
                      </div>
                    </div>
                  </li>*/
      let html =`
        <div class="xupload js_xupload_box">
          <div class="xupload-header">
            <div class="xupload-header-title js_title">文件上传</div>
            <div class="xupload-control">
              <span class="xupload-icon glyphicon glyphicon-minus js_mins"></span>
              <span class="xupload-icon glyphicon glyphicon-remove js_close"></span>
            </div>
          </div>
          <div class="xupload-body">
            <div class="xupload-list-wrapper">
              <div class="xupload-list-header">
                <div class="file-name">文件名</div>
                <div class="file-size">大小</div>
                <div class="file-status">状态</div>
                <div class="file-operate">操作</div>
              </div>
              <div class="uploader-list">
                <ul class="uploader-list-container">
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
      this.opts.dom = $(html)
      $("body").append( this.opts.dom);
      return this.opts.dom;
    },
 //根据文件类型和文件名获取对应图标
    getFileType(vType, vName) {
        let fileTypeSettings = {
            image: function (vType, vName) {
                return (compare(vType, 'image.*') && !compare(vType, /(tiff?|wmf)$/i) ||
                    compare(vName, /\.(gif|png|jpe?g)$/i));
            },
            html: function (vType, vName) {
                return compare(vType, 'text/html') || compare(vName, /\.(htm|html)$/i);
            },
            doc: function (vType, vName) {
                return compare(vType, /(word|office)$/i) ||
                    compare(vName, /\.(docx?)$/i);
            },
            xls: function (vType, vName) {
                return compare(vType, /(excel|office)$/i) ||
                    compare(vName, /\.(xlsx?)$/i);
            },
            ppt: function (vType, vName) {
                return compare(vType, /(powerpoint|office)$/i) ||
                    compare(vName, /\.(pptx?|potx?)$/i);
            },
            zip: function (vType, vName) {
                return compare(vName, /(zip|rar|tar|gzip|gz|7z)$/i);
            },
            gdocs: function (vType, vName) {
                return compare(vType, /(word|excel|powerpoint|office|iwork-pages|tiff?)$/i) ||
                    compare(vName, /\.(docx?|xlsx?|pptx?|pps|potx?|rtf|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i);
            },
            text: function (vType, vName) {
                return compare(vType, 'text.*') || compare(vName, /\.(xml|javascript)$/i) ||
                    compare(vName, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i);
            },
            video: function (vType, vName) {
                return (compare(vType, /(ogg|mp4|mp?g|mov|webm|3gp)$/i) ||
                    compare(vName, /\.(og?|mp4|webm|mp?g|mov|3gp|avi|rmvb)$/i));
            },
            audio: function (vType, vName) {
                return (compare(vName, /(ogg|mp3|mp?g|wav)$/i) ||
                    compare(vName, /\.(og?|mp3|mp?g|wav)$/i));
            },
            flash: function (vType, vName) {
                return compare(vType, 'application/x-shockwave-flash', true) || compare(vName, /\.(swf)$/i);
            },
            pdf: function (vType, vName) {
                return compare(vType, 'application/pdf', true) || compare(vName, /\.(pdf)$/i);
            },
            obj: function () {
                return true;
            },
            other: function () {
                return true;
            }
          }
              function compare(input, str, exact) {
                  return input !== undefined && (exact ? input === str : input.match(str));
              }
          
              for (let key in fileTypeSettings) {
                  let result = fileTypeSettings[key](vType, vName);
                  if (result) return key
              }
          },
    getIconByfile(vType, vName){
        var icon = {
            'doc': 'fa fa-file-word-o text-primary',
            'xls': 'fa fa-file-excel-o text-success',
            'ppt': 'fa fa-file-powerpoint-o text-danger',
            'pdf': 'fa fa-file-pdf-o text-danger',
            'zip': 'fa fa-file-archive-o text-muted',
            'html': 'fa fa-file-code-o text-info',
            'text': 'fa fa-file-text-o text-info',
            'video': 'fa fa-file-video-o text-warning',
            'audio': 'fa fa-file-audio-o text-warning',
            'image': 'fa fa-file-photo-o text-danger',
            'gif': 'fa fa-file-photo-o text-muted',
            'png': 'fa fa-file-photo-o text-primary',
            "obj": 'fa fa-file-o text-muted',
            "other": 'fa fa-file-o text-muted'
        }
        return icon[this.getFileType(vType, vName)];
    }
  }
  window.xuploadbox= xuploadbox;
})();
