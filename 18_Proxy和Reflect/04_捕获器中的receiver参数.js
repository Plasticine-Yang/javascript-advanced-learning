const foo = {
  _name: 'plasticine',
  get name() {
    return this._name
  },
  set name(value) {
    this._name = value
  },
}

// 未使用 receiver
// const fooProxy = new Proxy(foo, {
//   get(target, key) {
//     console.log(`[${target.name}]对象的 ${key} 属性被访问`)

//     return Reflect.get(target, key)
//   },
//   set(target, key, value) {
//     console.log(
//       `[${target.name}]对象的 ${key} 属性被修改 -- 从 ${target[key]} 修改为 ${newValue}`
//     )

//     Reflect.set(target, key, value)
//   },
// })

// 使用 receiver
const fooProxy = new Proxy(foo, {
  get(target, key, receiver) {
    console.log(`[${target.name}]对象的 ${key} 属性被访问`)

    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    console.log(
      `[${target.name}]对象的 ${key} 属性被修改 -- 从 ${target[key]} 修改为 ${newValue}`
    )

    Reflect.set(target, key, value, receiver)
  },
})

console.log(fooProxy.name)

/** output -- 未使用 receiver
  [plasticine]对象的 name 属性被访问
  plasticine
 */

/** output -- 使用 receiver
  [plasticine]对象的 name 属性被访问
  [plasticine]对象的 _name 属性被访问
  plasticine
 */
