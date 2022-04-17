var fn = () => {
  console.log(this)
}

fn() // this --> window
fn.apply('abc') // this --> window
fn.call('abc') // this --> window

var bindFn = fn.bind('abc')
bindFn() // this --> window

var obj = {
  name: 'obj',
  foo: fn,
}
obj.foo() // this --> window

// 箭头函数中关于 this 的应用场景
var obj1 = {
  data: [],
  getData: function () {
    // 使用 function 时，由于 setTimeout 中 this 绑定到全局对象 因此无法将 data 放入 obj1.data中
    setTimeout(function () {
      this.data = [1, 2, 3]
    }, 500)
  },
  getDataWithArrowFn: function () {
    /**
     * 使用箭头函数时，setTimeout 中的绑定会失效
     * this 是一个不存在的变量，因此会到父级作用域，也就是 getDataWithArrowFn 的 AO 中去寻找
     * 而 getDataWithArrowFn 是通过 obj1.getDataWithArrowFn() 方式调用的，进行了隐式绑定
     * 因此 this 指向了 obj1，所以能够拿到 obj1.data
     */
    setTimeout(() => {
      this.data = [1, 2, 3]
    }, 500)
  },
}

obj1.getData()
setTimeout(() => {
  console.log(obj1.data)
}, 500) // --> []

obj1.getDataWithArrowFn()
setTimeout(() => {
  console.log(obj1.data)
}, 500) // --> [1, 2, 3]
