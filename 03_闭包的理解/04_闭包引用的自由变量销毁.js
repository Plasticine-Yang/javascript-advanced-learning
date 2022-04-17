function foo() {
  var name = 'plasticine'
  var age = 20

  function bar() {
    console.log(name)
  }

  return bar
}

var fn = foo()
fn()
