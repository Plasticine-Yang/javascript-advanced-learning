var obj = {
  name: 'plasticine',
  age: 20,
}

Object.defineProperty(obj, 'temp', { value: 'tempValue' })

console.log(obj) // { name: 'plasticine', age: 20 }
console.log(obj.temp) // tempValue
