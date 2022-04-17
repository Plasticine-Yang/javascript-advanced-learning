function* foo() {
  const value1 = yield 'plasticine'
  const value2 = yield value1
  const value3 = yield value2
  console.log('最后一次接收的参数 --', value3)
}

// 得到的是一个生成器
const generator = foo()

const res1 = generator.next()
console.log('拿到第一段函数执行后的返回值 -- ', res1) // { value: 'plasticine', done: false }

// 之后调用 next 时都可以传入参数，并在上一次的 yield 返回值中拿到
const res2 = generator.return('param2')
console.log('拿到第二段函数执行后的返回值 -- ', res2) // { value: 'param2', done: true }

// 之后再调用 next 是不会继续执行的
console.log(generator.next()) // { value: undefined, done: true }
