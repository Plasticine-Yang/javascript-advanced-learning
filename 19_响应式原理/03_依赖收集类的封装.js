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

// ============== 对 obj.name 做出响应式 ==============
const nameDepend = new Depend()
function nameWatchFn(fn) {
  nameDepend.addDepend(fn)
}

// 需要响应式的函数
nameWatchFn(() =>
  console.log('对 obj.name 做出响应式的函数 1 被执行', obj.name)
)
nameWatchFn(() =>
  console.log('对 obj.name 做出响应式的函数 2 被执行', obj.name)
)

// 不需要响应式的函数
function demo() {
  console.log(obj.name)
}

// 修改 obj.name 后，通知对其有依赖的函数进行执行
obj.name = 'temp'
nameDepend.notify()

// ============== 对 obj.age 做出响应式 ==============

// 对 obj.age 做出响应式
const ageDepend = new Depend()
function ageWatchFn(fn) {
  ageDepend.addDepend(fn)
}

ageWatchFn(() => console.log('对 obj.age 做出响应式的函数 1 被执行', obj.name))
ageWatchFn(() => console.log('对 obj.age 做出响应式的函数 2 被执行', obj.name))

// 修改 obj.age 后，通知对其有依赖的函数进行执行
obj.age = 21
ageDepend.notify()
