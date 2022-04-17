// 数据的响应式
let data = 100

// 使用到响应式数据的一些代码
console.log(data)
console.log(data * 2)
console.log(data ** 2)

// 响应式数据被更新后，应当让使用到响应式数据的代码重新执行
data = 200

// 对象的响应式
const obj = {
  name: 'plasticine',
  age: 20,
}

// 使用到响应式对象属性的一些代码
console.log(obj.name) // (1)
console.log(obj.age) // (2)

// 响应式对象的属性被更新后，使用了相关属性的代码应当被重新执行
// 只更新了 obj.name 没更新 obj.age -- (1) 代码被重新执行，而 (2) 不会重新执行
obj.name = 'foo'
