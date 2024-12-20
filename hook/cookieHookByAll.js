/**
 * 拦截document.cookie的写入，每次都会弹出一个debugger，用于调试
 * @author modify
 * */

(function () {
  Object.defineProperty(document, 'cookie', {
    get: function () {
      return '';
    }, set: function (value) {
      debugger
      return value;
    }
  });
})();