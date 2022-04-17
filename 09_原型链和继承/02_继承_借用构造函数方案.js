// 父类
function Person(name, friends) {
  this.name = name
  this.friends = friends
}

Person.prototype.eating = function () {
  console.log('Person is eating...')
}

// 子类
function Student(name, sno, friends) {
  Person.call(this, name, friends)
  this.sno = sno
}

Student.prototype = new Person() // Student 继承自 Person

Student.prototype.studying = function () {
  console.log('Student is studying...')
}

var stu = new Student('stu', 66666, ['friend'])

stu.studying()

// 子类对象能够调用父类的方法
stu.eating()

// 解决弊端一：打印stu对象的时候，看不到继承来的 name 属性
console.log(stu) // Person { name: 'stu', friends: [ 'friend' ], sno: 66666 }

// 解决弊端二：多个子类对象中的父类引用属性是共用的
var stu1 = new Student('stu1', 1, ['friend1'])
var stu2 = new Student('stu2', 2, ['friend2'])

stu1.friends.push('plasticine')
console.log(stu1.friends) // [ 'friend1', 'plasticine' ]
console.log(stu2.friends) // [ 'friend2' ]

stu1.name = 'hahaha'
console.log(stu1.name) // hahaha
console.log(stu2.name) // stu2

// 解决弊端三：new子类构造函数的时候无法传递参数
var stu3 = new Student('plasticine', 666, ['mike'])
