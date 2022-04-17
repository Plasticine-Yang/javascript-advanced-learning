// Nullish Coalescing Operator
const foo = ''
// const bar = foo !== null && foo !== undefined ? foo : 'default value'
const bar = foo || 'default value'

console.log(bar) // ''

const foo1 = ''
const bar1 = foo1 ?? 'default value'
console.log(bar1) // ''
