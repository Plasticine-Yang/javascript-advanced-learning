var msg = 'Hello Global'

function foo() {
  console.log(msg)
}

function bar() {
  var msg = 'Hello Bar'
  foo()
}

bar()
