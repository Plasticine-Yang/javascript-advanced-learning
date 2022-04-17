// 封装响应式函数
const reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
}

const obj = {
  name: 'plasticine',
  age: 20,
}

// 需要响应式的函数
watchFn(function foo() {
  console.log('响应式函数 foo 被执行', obj.name)
})
watchFn(function bar() {
  console.log('响应式函数 bar 被执行', obj.name)
})

// 不需要响应式的函数
function demo() {
  console.log(obj.name)
}

// 修改 obj.name 后，让 foo 和 bar 执行，demo 不执行
obj.name = 'temp'

reactiveFns.forEach((fn) => {
  fn()
})
