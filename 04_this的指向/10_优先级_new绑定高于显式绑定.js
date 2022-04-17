// new 和 apply/call 不能同时使用
var obj = {
  name: 'obj',
  fn: function () {
    console.log(this)
  },
}

var bindFn = obj.fn.bind('abc')
new bindFn() // this --> fn {}
