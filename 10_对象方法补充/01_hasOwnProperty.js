var foo = {
  name: 'plasticine',
  age: 20,
}

var bar = Object.create(foo)
bar.myAttr = 'myAttr'

console.log(bar.hasOwnProperty('myAttr')) // true
console.log(bar.hasOwnProperty('name')) // false
