const foo = {
  name: 'foo',
  age: 20,
}

// handler 不做任何操作 -- 代理对象和被代理对象一样
// const fooProxy = new Proxy(foo, {})
// fooProxy.name = 'bar'
// fooProxy.age = 21

// console.log(foo) // { name: 'bar', age: 21 }
// console.log(fooProxy) // { name: 'bar', age: 21 }

// 代理对象中监听属性的访问和修改
const fooProxy = new Proxy(foo, {
  get(target, key) {
    console.log(`[${target.name}]对象的 ${key} 属性被访问`)
    return target[key]
  },
  set(target, key, newValue) {
    console.log(
      `[${target.name}]对象的 ${key} 属性被修改 -- 从 ${target[key]} 修改为 ${newValue}`
    )
    target[key] = newValue
  },
})

fooProxy.name // [foo]对象的 name 属性被访问
fooProxy.age // [foo]对象的 age 属性被访问

fooProxy.name = 'plasticine' // [foo]对象的 name 属性被修改 -- 从 foo 修改为 plasticine
fooProxy.age = 21 // [foo]对象的 age 属性被修改 -- 从 20 修改为 21

console.log(foo.name) // plasticine
console.log(foo.age) // 21
