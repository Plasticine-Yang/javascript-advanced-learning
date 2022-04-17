// 1. 异步函数的返回值是一个 Promise
async function foo() {
  console.log('async function foo exec...')

  // 返回普通值会被包裹到 Promise.resolve 中
  // return 'foo'

  // 返回一个 thenable 对象
  // return {
  //   then(resolve, reject) {
  //     resolve('foo')
  //   },
  // }

  // 返回一个 Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo')
    }, 500)
  })
}

const promise = foo()
console.log(promise) // Promise { 'foo' }
promise.then((res) => console.log(res)) // foo
