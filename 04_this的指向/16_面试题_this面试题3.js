var name = 'window'

// Person 是一个构造函数 会提供一个作用域
function Person(name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  }
  this.foo2 = () => console.log(this.name)
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  }
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() // person1 -- 隐式绑定
person1.foo1.call(person2) // person2 -- 显式绑定

// person1 -- 箭头函数的父级作用域为 Person 函数，而 Person 函数中 this 指向 new 绑定返回的构造函数产生的对象
person1.foo2()
person1.foo2.call(person2) // person1 -- 等价于 person1.foo2()

person1.foo3()() // window -- 独立函数调用
person1.foo3.call(person2)() // window -- 独立函数调用
person1.foo3().call(person2) // person2 -- 显式绑定

person1.foo4()() // person1 -- 箭头函数父级作用域为 foo4 函数，而 foo4 中 this 隐式绑定到 person1
person1.foo4.call(person2)() // person2 -- 箭头函数父级作用域为 foo4 函数，而 foo4 中 this 显式绑定到 person2
person1.foo4().call(person2) // person1 -- 等价于 person1.foo4()()
