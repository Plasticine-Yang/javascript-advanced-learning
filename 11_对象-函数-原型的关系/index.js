// 1. 字面量创建对象等价于new Object()调用Object构造函数来创建对象
// var foo = {
//   name: 'foo',
// }

// var bar = new Object()
// bar.name = 'bar'

// console.log(foo.__proto__) // [Object: null prototype] {}
// console.log(bar.__proto__) // [Object: null prototype] {}

// 2. 对象的 __proto__ 指向构造函数的 prototype
// function Foo(name, age) {
//   this.name = name
//   this.age = age
// }

// var foo = new Foo('plasticine', 20)
// console.log(foo.__proto__ === Foo.prototype) // true

// 3. 函数也是对象
function Foo(name, age) {
  this.name = name
}
