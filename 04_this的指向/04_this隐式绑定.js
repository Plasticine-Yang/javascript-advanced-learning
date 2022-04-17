// 案例一
var obj = {
  name: 'plasticine',
  foo: function () {
    console.log(this)
  },
}
obj.foo() // 隐式绑定 --> this 绑定到 obj

var fn = obj.foo
fn() // 默认绑定 --> this 绑定到 GO

// 案例二
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this)
  },
}

var obj2 = {
  name: 'obj2',
  bar: obj1.foo,
}

obj2.bar() // 隐式绑定 --> this 绑定到 obj2
