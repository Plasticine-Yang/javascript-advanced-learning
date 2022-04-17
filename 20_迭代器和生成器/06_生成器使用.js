function* foo() {
  console.log('生成器函数开始执行...')
  const data1 = 100
  console.log('生成器函数第一段内的变量 data1 ===', data1)
  yield

  console.log('生成器函数第二段开始执行...')
  const data2 = 200
  console.log('生成器函数第二段内的变量 data2 ===', data2)
  yield

  console.log('生成器函数第三段开始执行...')
  const data3 = 300
  console.log('生成器函数第三段内的变量 data3 ===', data3)
  yield

  console.log('函数执行结束...')
}

// 得到的是一个生成器
const generator = foo()

// 生成器是特殊的迭代器，也可以调用 next 方法，让生成器函数开始执行
generator.next()
/** output
  生成器函数开始执行...
  生成器函数第一段内的变量 data1 === 100
 */

generator.next()
/** output
  生成器函数第二段开始执行...
  生成器函数第二段内的变量 data2 === 200
 */

generator.next()
/**
  生成器函数第三段开始执行...
  生成器函数第三段内的变量 data3 === 300
 */

generator.next()
// 函数执行结束...
