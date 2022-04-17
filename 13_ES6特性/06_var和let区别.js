// var 可以重复声明同名变量
var foo = 'foo'
var foo = 'bar'
console.log(foo) // bar

// let/const 不可以重复声明同名变量 -- SyntaxError: Identifier 'bar' has already been declared
let bar = 'bar'
let bar = 'foo'
console.log(bar)

const age = 12
const age = 13
console.log(age)
