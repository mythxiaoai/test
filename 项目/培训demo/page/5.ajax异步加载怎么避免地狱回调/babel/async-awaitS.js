import { ajax } from "./promiseS.js";
(async () => {
  let res = await ajax("数据", 1000);
  console.log(res);
  
})();

//webpack中解析的源码
// function (module, exports, __webpack_require__) {
//     "use strict";
//     var _promiseS = __webpack_require__("./promiseS.js");
    function _asyncToGenerator(fn) {
      return function () {
        var gen = fn.apply(this, arguments);
        return new Promise(function (resolve, reject) {
          function step(key, arg) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              return Promise.resolve(value).then(
                function (value) {
                  step("next", value);
                },
                function (err) {
                  step("throw", err);
                }
              );
            }
          }
          return step("next");
        });
      };
    }

    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2;
                  return (0, _promiseS.ajax)("数据", 1000);

                case 2:
                  res = _context.sent;

                  console.log(res);

                case 4:

                case "end":
                  return _context.stop();
              }
            }
          },
          _callee,
          undefined
        );
      })
    )(); //# sourceURL=webpack:///./async-awaitS.js?'

    /***/
  }