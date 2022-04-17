function Person(name, age) {
  this.name = name
  this.age = age
  this.eating = function () {
    console.log('eating...')
  }
}

var p1 = new Person('张三', 20)
var p2 = new Person('李四', 21)
var p3 = new Person('王五', 22)
var p4 = new Person('Plasticine', 23)

console.log(p1) // Person { name: '张三', age: 20, eating: [Function (anonymous)] }
console.log(p2)
console.log(p3)
console.log(p4)

p1.eating()
p2.eating()
p3.eating()
p4.eating()

console.log(p1.eating === p2.eating) // false
