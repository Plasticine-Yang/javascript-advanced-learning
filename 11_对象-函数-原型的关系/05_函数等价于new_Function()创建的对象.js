// 这两种形式的函数等价，因此函数也是对象，且是 Function 对象
var Foo = new Function()
function Foo() {}

console.log(Foo.__proto__)
console.log(Foo.prototype)
console.log(Foo.__proto__ === Foo.prototype)
