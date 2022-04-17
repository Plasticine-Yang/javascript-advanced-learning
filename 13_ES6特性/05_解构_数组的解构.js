var foo = {
  name: 'foo',
  age: 20,
}

// 对象解构
var { name, age } = foo
console.log(name, age) // foo, 20

// 起别名
var { name: newName, age: newAge } = foo
console.log(newName, newAge) // // foo, 20

// 给不存在的属性设置默认值
var { address = '广州市' } = foo
console.log(address) // 广州市

// 起别名和默认值可以一起用
var { address: newAddress = '广州市' } = foo
console.log(newAddress) // 广州市
