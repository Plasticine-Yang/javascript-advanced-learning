// 父类
function Person() {
  this.name = 'plasticine'
  this.friends = []
}

Person.prototype.eating = function () {
  console.log('Person is eating...')
}

// 子类
function Student() {
  this.sno = 666
}

Student.prototype = new Person() // Student 继承自 Person

Student.prototype.studying = function () {
  console.log('Student is studying...')
}

var stu = new Student()

stu.studying()

// 子类对象能够调用父类的方法
stu.eating()

// 弊端一：打印stu对象的时候，看不到继承来的 name 属性
console.log(stu) // Person { sno: 666 }

// 弊端二：多个子类对象中的父类引用属性是共用的
var stu1 = new Student()
var stu2 = new Student()

stu1.friends.push('plasticine')
console.log(stu1.friends) // [ 'plasticine' ]
console.log(stu2.friends) // [ 'plasticine' ]

stu1.name = 'hahaha'
console.log(stu1.name) // name
console.log(stu2.name) // plasticine

// 弊端三：new子类构造函数的时候无法传递参数
var stu3 = new Student()
