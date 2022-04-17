function double(num) {
  return num * 2
}

function square(num) {
  return num * num
}

console.log(square(double(10)))
console.log(square(double(20)))
console.log(square(double(30)))
console.log(square(double(40)))
console.log(square(double(50)))

// 简单组合函数
function compose(fn1, fn2) {
  return function (num) {
    return fn2(fn1(num))
  }
}

var calcFn = compose(double, square)
console.log(calcFn(10))
console.log(calcFn(20))
console.log(calcFn(30))
console.log(calcFn(40))
console.log(calcFn(50))

// 稍微复杂一些的组合函数 -- 考虑了一些边界情况 edge case
function compose2(...fns) {
  var length = fns.length
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== 'function') {
      throw TypeError(`fns[${i}] is not a function`)
    }
  }

  // 取出所有函数按顺序依次调用
  return function (...args) {
    // 先获取第一次执行的结果
    var index = 0
    var result = length ? fns[index].apply(this, args) : args

    while (++index < length) {
      result = fns[index].call(this, result)
    }

    return result
  }
}

var calcFn2 = compose2(double, square)
console.log(calcFn2(10))
console.log(calcFn2(20))
console.log(calcFn2(30))
console.log(calcFn2(40))
console.log(calcFn2(50))
