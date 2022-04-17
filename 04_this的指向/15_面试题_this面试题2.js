var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  },
}

var person2 = { name: 'person2' }

person1.foo1() // person1 -- 隐式绑定
person1.foo1.call(person2) // person2 -- 显式绑定

person1.foo2() // window -- 箭头函数的父级作用域为 全局对象 window (注意：person1 对象不是作用域)
// window -- 对于箭头函数来说 不存在 this 的概念，因此无论是如何绑定 this 都没用，等价于 person1.foo2()
person1.foo2.call(person2)

person1.foo3()() // window -- 独立函数调用
person1.foo3.call(person2)() // window -- 独立函数调用
person1.foo3().call(person2) // person2 -- 显式绑定

person1.foo4()() // person1 -- 箭头函数的父级作用域为 foo4 而 foo4 中 this 隐式绑定到 person1
person1.foo4.call(person2)() // person2 -- 箭头函数的父级作用域为 foo4 而 foo4 中 this 显式绑定到 person2
person1.foo4().call(person2) // person1 -- 箭头函数没有 this，显示绑定无效
