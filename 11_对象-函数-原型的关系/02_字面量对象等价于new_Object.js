// 字面量对象等价于new Object()
var foo = {
  name: 'foo',
}

var bar = new Object()
bar.name = 'bar'

console.log(foo.__proto__) // [Object: null prototype] {}
console.log(bar.__proto__) // [Object: null prototype] {}
