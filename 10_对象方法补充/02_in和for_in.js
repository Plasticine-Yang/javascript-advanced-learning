var foo = {
  name: 'plasticine',
  age: 20,
}

var bar = Object.create(foo)
bar.myAttr = 'myAttr'

// in
console.log('myAttr' in bar) // true
console.log('name' in bar) // true

// for in
for (var key in bar) console.log(key) // myAttr name age
