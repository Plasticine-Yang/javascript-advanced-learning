// 1. apply/call
function foo() {
  console.log(this)
}

var obj = {
  name: 'plasticine',
  fn: foo,
}

obj.fn() // 隐式绑定 -- this --> obj
obj.fn.apply('abc') // 显式绑定高于隐式绑定 -- this --> 'abc'
obj.fn.call('abc')

// 2. bind
var obj1 = {
  name: 'plasticine',
  fn: foo.bind('abc'),
}

// 如果 bind 绑定优先级比 隐式绑定 高 则 this 应当指向 'abc'
obj1.fn() // this --> 'abc'
