var obj = {
  name: 'plasticine',
  age: 20,
}

Object.defineProperty(obj, 'address', {
  value: '广州市', // 属性值
  configurable: false, // 是否可以 删除/修改，以及是否可以将其修改为存取属性描述符
  enumerable: false, // 是否可以通过 for in 循环或者 Object.keys() 遍历该属性
  writable: false, // 是否可以修改属性值
})

console.log(obj) // { name: 'plasticine', age: 20, address: '广州市' }

// configurable 为 false 时无法删除属性
delete obj.address
console.log(obj) // { name: 'plasticine', age: 20, address: '广州市' }

// enumberable 为 false 时无法遍历到该属性
for (var key in obj) {
  console.log(key) // name age
}
console.log(Object.keys(obj)) // [ 'name', 'age' ]
console.log(obj) // { name: 'plasticine', age: 20 }

// writable 为 false 时修改无效
obj.address = '深圳市'
console.log(obj) // { name: 'plasticine', age: 20, address: '广州市' }
