// 函数也是对象，是对象就会有__proto__隐式原型
function Foo(name, age) {
  this.name = name
  this.age = age
}

console.log(Foo.__proto__) // {}
console.log(Foo.prototype) // {}
console.log(Foo.__proto__ === Foo.prototype) // false
