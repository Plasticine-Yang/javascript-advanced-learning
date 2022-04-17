var name = 'window'

var person = {
  name: 'person',
  sayName: function () {
    console.log(this.name)
  },
}

function sayName() {
  var sss = person.sayName
  sss() // window -- 独立函数调用
  person.sayName() // person -- 隐式绑定
  person.sayName() // (person.sayName)() -- person -- 隐式绑定
  ;(b = person.sayName)() // window -- 赋值表达式返回 person.sayName 然后调用相当于全局函数调用
}

sayName()
