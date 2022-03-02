function sleep(v) {
    return new Promise(resolve => {
      setTimeout(() => {
          console.log(v);
        resolve(1);
      }, 2000)
    })
  }




function parallel(arr,count){
}




//promise方法
let superAjax = parallel([sleep(1),sleep(2),sleep(3),sleep(4)],2);
async sendRequest(forms, max=4) {
      return new Promise(resolve => {
        const len = forms.length;
        let idx = 0;
        let counter = 0;
        const start = async ()=> {
          // 有请求，有通道
          while (idx < len && max > 0) {
            max--; // 占用通道
            console.log(idx, "start");
            const form = forms[idx].form;
            const index = forms[idx].index;
            idx++
            request({
              url: '/upload',
              data: form,
              onProgress: this.createProgresshandler(this.chunks[index]),
              requestList: this.requestList
            }).then(() => {
              max++; // 释放通道
              counter++;
              if (counter === len) {
                resolve();
              } else {
                start();
              }
            });
          }
        }
        start();
      });
    }
    
    async uploadChunks(uploadedList = []) {
      // 这里一起上传，碰见大文件就是灾难
      // 没被hash计算打到，被一次性的tcp链接把浏览器稿挂了
      // 异步并发控制策略，我记得这个也是头条一个面试题
      // 比如并发量控制成4
      const list = this.chunks
        .filter(chunk => uploadedList.indexOf(chunk.hash) == -1)
        .map(({ chunk, hash, index }, i) => {
          const form = new FormData();
          form.append("chunk", chunk);
          form.append("hash", hash);
          form.append("filename", this.container.file.name);
          form.append("fileHash", this.container.hash);
          return { form, index };
        })
    // -     .map(({ form, index }) =>
    // -       request({
    // -           url: "/upload",
    // -         data: form,
    // -         onProgress: this.createProgresshandler(this.chunks[index]),
    // -         requestList: this.requestList
    // -       })
    // -     );
    // -   // 直接全量并发
    // -   await Promise.all(list);
         // 控制并发  
       const ret =  await this.sendRequest(list,4)
    
      if (uploadedList.length + list.length === this.chunks.length) {
        // 上传和已经存在之和 等于全部的再合并
        await this.mergeRequest();
      }
    }
    
    // 作者：花果山大圣
    // 链接：https://juejin.cn/post/6844904055819468808
    // 来源：掘金
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
