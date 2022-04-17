// 对象的__proto__指向构造函数的prototype
function Foo(name, age) {
  this.name = name
  this.age = age
}

var foo = new Foo('plasticine', 20)
console.log(foo.__proto__ === Foo.prototype) // true
