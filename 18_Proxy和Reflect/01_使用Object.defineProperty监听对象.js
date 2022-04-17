const foo = {
  name: 'foo',
  age: 20,
}

Object.keys(foo).forEach((key) => {
  let value = foo[key]

  Object.defineProperty(foo, key, {
    get() {
      console.log(`监听到对象的[${key}]属性被访问`)
      return value
    },
    set(newValue) {
      console.log(
        `监听到对象的[${key}]属性被修改 -- 从 ${value} 改为 ${newValue}`
      )
      value = newValue
    },
  })
})

foo.name // 监听到对象的[name]属性被访问
foo.age // 监听到对象的[age]属性被访问

foo.name = 'plasticine' // 监听到对象的[name]属性被修改 -- 从 foo 改为 plasticine
foo.age = 21 // 监听到对象的[age]属性被修改 -- 从 20 改为 21

console.log(foo.name) // plasticine
console.log(foo.age) // 21
