function foo() {
  console.log(this)
}

var obj = {
  name: 'obj',
  fn: foo,
}

foo.apply(null) //  this --> window
foo.apply(undefined) //  this --> window

foo.call(null) //  this --> window
foo.call(undefined) //  this --> window

var bindFn = foo.bind(null)
bindFn() // this --> window

obj.fn.apply(null) // this --> window
obj.fn.apply(undefined) // this --> window

obj.fn.call(null) // this --> window
obj.fn.call(undefined) // this --> window

var objBindFn = obj.fn.bind(null)
objBindFn() // this --> window
