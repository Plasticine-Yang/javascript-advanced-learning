function foo() {
  console.log(this)
}

var obj1 = {
  name: 'obj1',
}

var obj2 = {
  name: 'obj2',
}

// 使用 apply
foo.apply(obj1) // --> { name: 'obj1' }
foo.apply(obj2) // --> { name: 'obj2' }

// 使用 call
foo.call(obj1) // --> { name: 'obj1' }
foo.call(obj2) // --> { name: 'obj2' }

// apply 和 call 的区别
function sum(num1, num2) {
  return num1 + num2
}

var res1 = sum.apply(null, [1, 2])
var res2 = sum.call(null, 1, 2)
console.log(res1) // --> 3
console.log(res2) // --> 3

// 使用 bind 进行显示绑定
var fn = foo.bind(obj1)
fn() // --> { name: 'obj1' }
