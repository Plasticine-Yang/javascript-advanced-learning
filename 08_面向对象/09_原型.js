function Person(name, age) {
  this.name = name
  this.age = age
}

var p1 = new Person('张三', 20)
var p2 = new Person('李四', 21)

// ES5 之前通过 __proto__ 获取原型（这个不是 ECMA 规范规定的，是浏览器自行实现的）
console.log(p1.__proto__) // {}
console.log(p2.__proto__) // {}

// ES5 之后可以获得隐式原型
console.log(Object.getPrototypeOf(p1)) // {}

// 显式原型
console.log(Person.prototype) // {}

// 将方法放到函数原型上
Person.prototype.eating = function () {
  console.log('eating...')
}

p1.eating()
p2.eating()
console.log(p1.eating === p2.eating) // true
