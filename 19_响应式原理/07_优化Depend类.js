// ============================== 实现响应式原理 ==============================
const targetMap = new WeakMap() // 用于存放响应式对象的 Map 对象

// 响应式包装函数
let activeFn = null
function watchFn(fn) {
  activeFn = fn
  fn()
  activeFn = null
}

// 依赖收集管理类
class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  depend() {
    if (activeFn) this.reactiveFns.add(activeFn)
  }

  notify() {
    this.reactiveFns.forEach((fn) => {
      fn()
    })
  }
}

/**
 * 获取 obj[key] 对应的 Depend 对象
 * @param {object} obj 对象
 * @param {string | Symbol} key 属性 key
 */
function getDepend(obj, key) {
  // 根据对象获取到该对象对应的 Map 对象
  let objMap = targetMap.get(obj)
  if (!objMap) {
    objMap = new Map()
    targetMap.set(obj, objMap)
  }

  // 根据 key 获取 Depend 对象
  let depend = objMap.get(key)
  if (!depend) {
    depend = new Depend()
    objMap.set(key, depend)
  }

  return depend
}

/**
 * 包装一个普通对象成为响应式的对象
 * @param {object} obj 对象
 * @returns 具有响应式的 Proxy 代理对象
 */
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      const dep = getDepend(target, key)
      dep.depend()

      return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      // 调用 getDepend 获取当前属性对应的 依赖收集对象，并对其通知
      const dep = getDepend(target, key)
      dep.notify()
    },
  })
}

// ============================== 实现响应式原理 ==============================

const obj = reactive({
  name: 'plasticine',
  age: 20,
})

console.log('*************** 初次执行函数 ***************')
watchFn(() => {
  console.log('访问了 obj.name, obj.age ==> ', obj.name, obj.age)
})

console.log('============== 修改 obj.name = abc ==============')
obj.name = 'abc'

console.log('============== 修改 obj.age = 21 ==============')
obj.age = 21

const info = reactive({
  address: '广州市',
  height: 1.78,
  habbit: 'coding',
})

console.log('*************** 初次执行函数 ***************')
watchFn(() => {
  console.log(
    '访问了 info.address, info.height, info.habbit ==> ',
    info.address,
    info.height,
    info.habbit
  )
})

console.log('============== 修改 info.address = 深圳市 ==============')
info.address = '深圳市'

console.log('*************** 初次执行函数 ***************')
watchFn(() => {
  console.log('同时访问两个对象 obj.name, info.address', obj.name, info.address)
})

console.log(
  '============== 修改 obj.name = plasticine | info.address = 广州市 =============='
)
obj.name = 'plasticine'
info.address = '广州市'
