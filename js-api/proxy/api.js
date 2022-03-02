// const http = new Proxy(
//     {},
//     {
//       get: (target, key) => {
//         return funs[key]
//       }
//     }
//   )


function proxyMethod(callback, urlPath = '') {
    const methods = ['get', 'delete', 'post', 'put', 'patch']
    let fn = function() {
      return new Proxy(
        {},
        {
          get: (target, key) => {
            if (methods.includes(key)) {
              //每次调用完后url清空
              let url = urlPath;
              urlPath = '';
              return (params = {}, options = {}) => {
                return (
                  callback &&
                  callback.call(null, {
                    url,
                    method: key,
                    params,
                    options
                  })
                )
              
              }
            } else {
              urlPath += `/${key}`
              return fn(callback, urlPath)
            }
          }
        }
      )
    }
     return fn(callback, urlPath)
  }

let callback = function(...arg){
    console.log(arg);
}
const api = proxyMethod(callback);

//
api.sys.user.list.get({data:1},{set:333});





