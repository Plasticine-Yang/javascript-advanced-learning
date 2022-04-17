function foo() {
  console.log(this)
}

// 1. 在全局作用域下调用函数
foo()

// 2. 在对象中引用函数并调用
var obj = {
  foo: foo,
}
obj.foo()

// 3. apply 调用
foo.apply('plasticine')
