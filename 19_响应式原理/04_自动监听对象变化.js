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

const obj = {
  name: 'plasticine',
  age: 20,
}

const nameDepend = new Depend() // 对 obj.name 进行依赖收集管理
const ageDepend = new Depend() // 对 obj.age 进行依赖收集管理

// 用 Proxy 代理 obj 实现自动监听对象变化并做出响应
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    nameDepend.notify()
  },
})

// ============== 对 objProxy.name 做出响应式 ==============
function nameWatchFn(fn) {
  nameDepend.addDepend(fn)
}

// 需要响应式的函数
nameWatchFn(() =>
  console.log('对 objProxy.name 做出响应式的函数 1 被执行', objProxy.name)
)
nameWatchFn(() =>
  console.log('对 objProxy.name 做出响应式的函数 2 被执行', objProxy.name)
)

// 不需要响应式的函数
function demo() {
  console.log(objProxy.name)
}

// 修改 objProxy.name 后，通知对其有依赖的函数进行执行
objProxy.name = 'temp'

// ============== 对 objProxy.age 做出响应式 ==============

// 对 objProxy.age 做出响应式
function ageWatchFn(fn) {
  ageDepend.addDepend(fn)
}

ageWatchFn(() =>
  console.log('对 objProxy.age 做出响应式的函数 1 被执行', objProxy.name)
)
ageWatchFn(() =>
  console.log('对 objProxy.age 做出响应式的函数 2 被执行', objProxy.name)
)

// 修改 objProxy.age 后，通知对其有依赖的函数进行执行
objProxy.age = 21
