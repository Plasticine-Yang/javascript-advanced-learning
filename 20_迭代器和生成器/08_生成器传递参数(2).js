function* foo() {
  console.log('生成器函数开始执行...')
  const data1 = 100
  const param1 = yield data1

  console.log('生成器函数第二段开始执行...')
  console.log(
    `调用第二段函数时传入的参数 === 上一次 yield 的返回值 -- ${param1}`
  )
  const param2 = yield param1

  console.log('生成器函数第三段开始执行...')
  console.log(
    `调用第三段函数时传入的参数 === 上一次 yield 的返回值 -- ${param2}`
  )
  const param3 = yield param2

  console.log(
    `调用第四段函数时传入的参数 === 上一次 yield 的返回值 -- ${param3}`
  )
  console.log('函数执行结束...')
}

// 得到的是一个生成器
const generator = foo()

// 首次调用 next 时传入的参数无效，因为首次执行函数时，并没有之前的 yield，无法获取返回值
const res1 = generator.next()
console.log('拿到第一段函数执行后的返回值 -- ', res1)
/** output
  生成器函数开始执行...
  拿到第一段函数执行后的返回值 --  { value: 100, done: false }
 */

// 之后调用 next 时都可以传入参数，并在上一次的 yield 返回值中拿到
const res2 = generator.next('param2')
console.log('拿到第二段函数执行后的返回值 -- ', res2)
/** output
  生成器函数第二段开始执行...
  调用第二段函数时传入的参数 === 上一次 yield 的返回值 -- param2
  拿到第二段函数执行后的返回值 --  { value: 'param2', done: false }
 */

const res3 = generator.next('param3')
console.log('拿到第三段函数执行后的返回值 -- ', res3)
/**
  生成器函数第三段开始执行...
  调用第三段函数时传入的参数 === 上一次 yield 的返回值 -- param3
  拿到第三段函数执行后的返回值 --  { value: 'param3', done: false }
 */

generator.next('param3')
/**
  调用第四段函数时传入的参数 === 上一次 yield 的返回值 -- param3
  函数执行结束...
 */
