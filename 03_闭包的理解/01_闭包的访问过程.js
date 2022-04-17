function outer() {
  var outVar = 'outVar'

  function inner() {
    console.log(outVar)
  }

  return inner
}

var fn = outer()
fn()
