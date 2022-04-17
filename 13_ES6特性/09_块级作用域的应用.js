const btns = document.getElementsByTagName('button')

// 使用 var 遍历
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', () => console.log(`按钮${i + 1}被点击了`))
// }

// for (var i = 0; i < btns.length; i++) {
//   ;(function (n) {
//     btns[n].addEventListener('click', () => console.log(`按钮${n + 1}被点击了`))
//   })(i)
// }

// 使用 let 遍历
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => console.log(`按钮${i + 1}被点击了`))
}
