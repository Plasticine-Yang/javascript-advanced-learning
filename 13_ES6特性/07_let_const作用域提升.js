// var 能使变量作用域提升
console.log(foo) // undefined
var foo = 'foo'

// let/const 不能提升作用域 -- ReferenceError: Cannot access 'bar' before initialization
console.log(bar)
let bar = 'bar'

console.log(temp)
const temp = 'temp'
