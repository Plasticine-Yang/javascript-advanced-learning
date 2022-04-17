// 1. 案例一
function foo() {
  console.log(this)
}
foo()

// 2. 案例二
function foo1() {
  console.log(this)
  foo2()
}

function foo2() {
  console.log(this)
  foo3()
}

function foo3() {
  console.log(this)
}

foo1()

// 3. 案例三
function outer(func) {
  func()
}

var obj = {
  name: 'plasticine',
  bar: function () {
    console.log(this)
  },
}

outer(obj.bar)
