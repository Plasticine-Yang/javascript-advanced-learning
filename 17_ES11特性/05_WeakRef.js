const finalRegistry = new FinalizationRegistry(() => {
  console.log('对象被销毁')
})

let obj = {
  name: 'plasticine',
}

finalRegistry.register(obj)

const weakObj = new WeakRef(obj)

// 将唯一的强引用置为 null 让 GC 将其回收
obj = null

// 等对象被销毁后，通过弱引用去取值会失败，说明 GC 回收时会忽略弱引用的存在
setTimeout(() => {
  console.log(weakObj.deref()?.name) // 应当用可选链去取值
  console.log(weakObj.deref().name)
}, 5000)
