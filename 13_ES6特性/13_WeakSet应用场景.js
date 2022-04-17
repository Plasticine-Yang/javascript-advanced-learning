const personSet = new WeakSet()
class Person {
  constructor() {
    personSet.add(this)
  }

  // 不希望该方法被 this 指向非 Person 实例的时候调用
  // 如 personObj.running.call('abc')
  running() {
    if (!personSet.has(this)) {
      throw new Error('不能通过非构造方法创造出来的对象调用 running 方法！')
    }
    console.log('running...')
  }
}

const person = new Person()
person.running() // running...

person.running.call('abc') // Error: 不能通过非构造方法创造出来的对象调用 running 方法！
