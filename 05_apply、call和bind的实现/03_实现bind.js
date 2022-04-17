/**
 * @description 实现 bind
 * @author 草帽Plasticine
 */

Function.prototype.wfBind = function (thisArg, ...argArray) {
  // 1. 获取到真实调用的函数
  var fn = this

  // 2. 绑定 this
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  // 3. 将被执行函数放进闭包中
  function proxyFn(...args) {
    var tempFn = Symbol('tempFn')
    thisArg[tempFn] = fn

    // 拼接函数参数
    var finalArgs = [...argArray, ...args]
    var result = thisArg[tempFn](...finalArgs)

    delete thisArg[tempFn]

    return result
  }

  return proxyFn
}

function foo() {
  console.log('foo', this)
}

function sum(num1, num2) {
  console.log('sum', this)
  return num1 + num2
}

var wfBindFoo = foo.wfBind('666')
wfBindFoo()

var wfBindSum = sum.wfBind('abc')
var res = wfBindSum(1, 2)
console.log(res)
