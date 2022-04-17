function testArr() {
  var arr = new Array(1024 * 1024).fill(1)

  function inner() {
    console.log(arr.length)
  }

  return inner
}

// fn -> inner -> testArr 的 AO -> arr
// 创建 100 个对 inner 的引用放到数组 arrFns 中
// 每个 inner 引用都会指向 testArr 的 AO 的 arr
// 因此 arrFns 的每一个元素都会保持着对一个 4MB 大小的内存空间的间接引用
// 100 个元素创建完毕后，会占用 400MB 内存大小
var arrFns = []
for (var i = 0; i < 100; i++) {
  setTimeout(function () {
    arrFns.push(testArr())
  }, i * 100)
}

// 等十秒钟后执行释放的逻辑
// 等十秒是为了先让所有元素创建完毕，然后再开始慢慢释放 50 个元素
// 因此最终会占用 200MB 的内存大小
setTimeout(function () {
  for (var i = 0; i < 50; i++) {
    setTimeout(function () {
      arrFns.pop()
    }, i * 100)
  }
}, 10000)
