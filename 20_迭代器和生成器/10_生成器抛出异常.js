function* foo() {
  console.log('函数开始执行...')

  try {
    yield 'plasticine'
  } catch (e) {
    console.log('生成器函数捕获异常 -- ', e)
  }

  yield 'hahaha'

  console.log('函数结束')
}

const generator = foo()

console.log(generator.next()) // { value: 'plasticine', done: false }

console.log(generator.throw('error msg')) // { value: 'hahaha', done: false }

console.log(generator.next()) // { value: undefined, done: true }
