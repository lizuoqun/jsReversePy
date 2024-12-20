/**
 * 覆盖原型链上的debugger方法，使其无法执行
 * @author modify
 * */

const noDebugger = Function.prototype.constructor;


Function.prototype.constructor = function (e) {
  if (e === 'debugger') {
    return function () {
    };
  }

  return noDebugger(e);
};