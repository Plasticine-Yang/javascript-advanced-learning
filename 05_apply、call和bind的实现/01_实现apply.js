/**
 * @description 实现 apply 函数
 * @author 草帽Plasticine
 */

Function.prototype.wfApply = function (thisArg, argArray) {
  var fn = this // this 指向要调用的函数 -- 隐式绑定上去的

  // 使用 Symbol 保证对象的属性名不会重复
  var tempFn = Symbol('tempFn')

  // 对被执行函数的 this 绑定做判断，如果没有显式指定绑定 则默认绑定到 window
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  // 将被执行函数隐式绑定到 thisArg 指向的对象上
  thisArg[tempFn] = fn

  // 执行函数拿到结果
  argArray = argArray ? argArray : [] // 处理参数
  var result = thisArg[tempFn](...argArray)

  // 将临时绑定到 thisArg 对象上的函数属性删除
  delete thisArg[tempFn]

  return result
}

function foo() {
  console.log('foo', this)
}

function sum(num1, num2) {
  console.log('sum', this)
  return num1 + num2
}

// 在 wfApply函数中，this 会隐式绑定到 foo
foo.wfApply('666')

var res = sum.wfApply('abc', [1, 2])
console.log(res)
