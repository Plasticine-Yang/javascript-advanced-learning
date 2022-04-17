// var 声明的变量没有块级作用域
{
  var foo = 'foo'
}

console.log(foo) // foo

// let/const 声明的变量有块级作用域
{
  let bar = 'bar'
  let demo = 'demo'
}

console.log(bar) // ReferenceError: bar is not defined
console.log(demo) // ReferenceError: demo is not defined

// let/const/function/class 都是在块级作用域中有效的
{
  function foo() {
    console.log('foo...')
  }

  class Foo {}
}

// ES6 规范是不允许访问的，因为函数在块级作用域中，全局作用域下不可见
// 但是为了兼容旧代码，大部分 JS 引擎还是会允许调用的
foo()

new Foo() // ReferenceError: Foo is not defined
