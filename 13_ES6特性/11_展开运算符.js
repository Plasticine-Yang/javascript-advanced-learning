// 1. 函数调用时使用
function foo(a, b, c) {
  console.log(a, b, c)
}

let names = ['abc', 'cba', 'nba']
foo(...names) // abc cba nba

// 2. 数组构造时使用
let arr1 = ['abc', 'cba', 'nba']
let arr2 = ['hahaha', 'hehehe']
let arr3 = [...arr1, ...arr2]
console.log(arr3) // [ 'abc', 'cba', 'nba', 'hahaha', 'hehehe' ]

// 3. 构建对象字面量时使用 -- ES2018(ES9) 的特性
const info1 = { name: 'plasticine', address: '广州市' }
const info2 = { age: 20, hobbit: 'coding' }
const person = { ...info1, ...info2, phone: '110' }

/**
 * {
    name: 'plasticine',
    address: '广州市',
    age: 20,
    hobbit: 'coding',
    phone: '110'
  }
 */
console.log(person)
