function* foo() {
  console.log('生成器函数开始执行...')
  const data1 = 100
  console.log('生成器函数第一段内的变量 data1 ===', data1)
  const res1 = yield

  console.log('生成器函数第二段开始执行...')
  console.log(`调用第二段函数时传入的参数 === 上一次 yield 的返回值 -- ${res1}`)
  const res2 = yield

  console.log('生成器函数第三段开始执行...')
  console.log(`调用第三段函数时传入的参数 === 上一次 yield 的返回值 -- ${res2}`)
  const res3 = yield

  console.log(`调用第四段函数时传入的参数 === 上一次 yield 的返回值 -- ${res3}`)
  console.log('函数执行结束...')
}

// 得到的是一个生成器
const generator = foo()

// 首次调用 next 时传入的参数无效，因为首次执行函数时，并没有之前的 yield，无法获取返回值
generator.next()
/** output
  生成器函数开始执行...
  生成器函数第一段内的变量 data1 === 100
 */

// 之后调用 next 时都可以传入参数，并在上一次的 yield 返回值中拿到
generator.next('param2')
/** output
  生成器函数第二段开始执行...
  调用第二段函数时传入的参数 === 上一次 yield 的返回值 -- param2
 */

generator.next('param3')
/**
  生成器函数第三段开始执行...
  调用第三段函数时传入的参数 === 上一次 yield 的返回值 -- param3
 */

generator.next('param3')
/**
  函数执行结束...
  调用第四段函数时传入的参数 === 上一次 yield 的返回值 -- param3
 */
