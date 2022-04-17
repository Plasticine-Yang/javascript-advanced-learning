/**
 * 用 setTimeout 模拟网络请求数据
 * @param {string} url url
 * @returns Promise 包装的 url
 */
function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 500)
  })
}

// // 1. 回调地狱
// // plasticineaaabbb
// function getData() {
//   requestData('plasticine').then((res1) => {
//     requestData(res1 + 'aaa').then((res2) => {
//       requestData(res2 + 'bbb').then((res3) => {
//         console.log(res3)
//       })
//     })
//   })
// }

// // 2. Promise 链式调用
// function getData() {
//   requestData('plasticine')
//     .then((res) => {
//       return requestData(res + 'aaa')
//     })
//     .then((res) => {
//       return requestData(res + 'bbb')
//     })
//     .then((res) => {
//       console.log(res)
//     })
// }

// // 3. Promise + 生成器
// function* getData() {
//   const res1 = yield requestData('plasticine')
//   const res2 = yield requestData(res1 + 'aaa')
//   yield requestData(res2 + 'bbb')
// }

// const generator = getData()

// generator.next().value.then((res) => {
//   generator.next(res).value.then((res) => {
//     generator.next(res).value.then((res) => {
//       console.log(res)
//     })
//   })
// })

// // 4. 自动执行生成器函数
// function execGeneratorFn(genFn) {
//   const generator = genFn()

//   function exec(res) {
//     const result = generator.next(res)
//     // base case
//     if (result.done) return result.value

//     result.value.then((res) => {
//       exec(res)
//     })
//   }

//   exec()
// }

// function* getData() {
//   const res1 = yield requestData('plasticine')
//   const res2 = yield requestData(res1 + 'aaa')
//   const res3 = yield requestData(res2 + 'bbb')
//   console.log(res3)
// }

// execGeneratorFn(getData)

// 5. async/await
async function getData() {
  const res1 = await requestData('plasticine')
  const res2 = await requestData(res1 + 'aaa')
  const res3 = await requestData(res2 + 'bbb')
  console.log(res3)
}

getData()
