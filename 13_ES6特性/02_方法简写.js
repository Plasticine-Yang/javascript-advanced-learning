// 方法简写
var foo = {
  name: 'foo',
  eating() {
    console.log('eating...')
  },
  // 箭头函数仍然是传统方式编写
  playing: () => console.log('playing...'),
}

console.log(foo) // { name: 'foo', eating: [Function: eating] }
foo.eating() // eating...
foo.playing() // playing...
