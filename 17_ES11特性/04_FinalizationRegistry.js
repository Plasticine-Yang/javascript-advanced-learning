const finalRegistry = new FinalizationRegistry((value) => {
  console.log('对象被销毁', value)
})

let foo = {
  name: 'foo',
}

let bar = {
  name: 'bar',
}

finalRegistry.register(foo, 'foo')
finalRegistry.register(bar, 'bar')

foo = null
bar = null
