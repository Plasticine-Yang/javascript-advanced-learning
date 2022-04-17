/**
 * @description 实现 call
 * @author 草帽Plasticine
 */

Function.prototype.wfCall = function (thisArg, ...argArray) {
  var fn = this
  var tempFn = Symbol('tempFn')

  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  thisArg[tempFn] = fn

  var res = thisArg[tempFn](...argArray)

  delete thisArg[tempFn]

  return res
}

function foo() {
  console.log('foo', this)
}

function sum(num1, num2) {
  console.log('sum', this)
  return num1 + num2
}

foo.wfCall('666')

var res = sum.wfCall('abc', 1, 2)
console.log(res)
const a = 123
a.fn = function () {
  console.log('123')
}
a.fn()
