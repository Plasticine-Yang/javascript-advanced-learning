// 1. setTimeout -- 默认绑定
setTimeout(function () {
  console.log(this) // --> window
}, 1000)

// 2. 事件监听器
const box = document.querySelector('.box')
box.onclick = function () {
  console.log(this)
}

box.addEventListener('click', function () {
  console.log('click listener 1', this)
})

box.addEventListener('click', function () {
  console.log('click listener 2', this)
})

box.addEventListener('click', function () {
  console.log('click listener 3', this)
})

// 3. forEach/map/filter 等数组 API
const names = [1, 2, 3, 4, 5, 6]
names.forEach(function (item) {
  console.log(item, this)
}, 'abc')
