var obj = {
  name: 'plasticine',
  age: 20,
}

// 1. 禁止对象添加新的属性
Object.preventExtensions(obj)

obj.gender = '男'
console.log(obj) // { name: 'plasticine', age: 20 }
console.log(obj.gender) // undefined

// 2. 禁止对象 配置/删除 属性，也能够禁止对象添加新的属性
Object.seal(obj)

obj.gender = '男'
console.log(obj) // { name: 'plasticine', age: 20 }
console.log(obj.gender) // undefined

delete obj.name
console.log(obj) // { name: 'plasticine', age: 20 }

// 3. 禁止对象修改属性
Object.freeze(obj)
obj.name = 'hahaha'
console.log(obj.name) // plasticine

console.log(Object.getOwnPropertyDescriptors(obj))

/**
 * {
    value: 'plasticine',
    writable: false,
    enumerable: true,
    configurable: false
    }
 */
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
