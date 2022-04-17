// ============================== 实现响应式原理 ==============================
const targetMap = new WeakMap() // 用于存放响应式对象的 Map 对象

// 依赖收集管理类
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    this.reactiveFns.push(fn)
  }

  notify() {
    this.reactiveFns.forEach((fn) => {
      fn()
    })
  }
}

// 响应式包装函数
let activeFn = null
function watchFn(fn) {
  activeFn = fn
  fn()
  activeFn = null
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

// ============================== 实现响应式原理 ==============================

const obj = {
  name: 'plasticine',
  age: 20,
}

// 用 Proxy 代理 obj 实现自动监听对象变化并做出响应
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    const dep = getDepend(target, key)
    dep.addDepend(activeFn)

    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    // 调用 getDepend 获取当前属性对应的 依赖收集对象，并对其通知
    const dep = getDepend(target, key)
    dep.notify()
  },
})

// ============== 对 objProxy.name 做出响应式 ==============

// 需要响应式的函数
watchFn(() =>
  console.log('对 objProxy.name 做出响应式的函数 1 被执行', objProxy.name)
)
watchFn(() =>
  console.log('对 objProxy.name 做出响应式的函数 2 被执行', objProxy.name)
)

// 不需要响应式的函数
function demo() {
  console.log(objProxy.name)
}

// 修改 objProxy.name 后，通知对其有依赖的函数进行执行
console.log('================ 修改 objProxy.name 为 temp ================')
objProxy.name = 'temp'

// ============== 对 objProxy.age 做出响应式 ==============

// 对 objProxy.age 做出响应式
watchFn(() =>
  console.log('对 objProxy.age 做出响应式的函数 1 被执行', objProxy.age)
)
watchFn(() =>
  console.log('对 objProxy.age 做出响应式的函数 2 被执行', objProxy.age)
)

// 修改 objProxy.age 后，通知对其有依赖的函数进行执行
console.log('================ 修改 objProxy.age 为 21 ================')
objProxy.age = 21
