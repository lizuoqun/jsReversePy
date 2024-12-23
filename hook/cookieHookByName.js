/**
 * 拦截document.cookie[v]的设置和获取，并打印日志
 * @author: modify
 * */

(function () {
  'use strict'
  let cookieTemp = '';
  Object.defineProperty(document, 'cookie', {
    // 在这里拦截设置的cookie值，拦截单个字符串v
    set: function (value) {
      if (value.indexOf('v') != -1) {
        debugger
      }
      console.log('hook 捕获到的cookie: ' + value);
      cookieTemp = value;
      return value;
    }, get: function () {
      return cookieTemp;
    }
  });
})();