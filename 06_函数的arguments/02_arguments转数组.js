function foo(arg1, arg2, arg3) {
  // 1. 直接遍历
  var argArray = []
  for (var i = 0; i < arguments.length; i++) argArray.push(arguments[i])
  console.log(argArray)

  // 2. 使用 Array 原型上的 slice 方法
  var argArray = Array.prototype.slice.call(arguments)
  console.log(argArray)

  // 3. ES6 的 Array.from -- 能够将 可迭代对象 或 类数组对象 转成数组
  var argArray = Array.from(arguments)
  console.log(argArray)

  // 4. 使用展开运算符
  var argArray = [...arguments]
  console.log(argArray)
}

foo('a', 'b', 'c')
