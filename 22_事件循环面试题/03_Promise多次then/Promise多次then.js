Promise.resolve()
  .then(() => {
    console.log(0)

    // 1. 直接 return 4 -- 相当于直接 resolve(4)
    // return 4

    // 2. 返回一个 thenable 对象 -- 会将本次的 return 推迟到下一次微任务中执行
    // return {
    //   then(resolve) {
    //     resolve(4)
    //   },
    // }

    // 3. 返回一个 Promise.resolve(4)
    return Promise.resolve(4)
  })
  .then((res) => {
    console.log(res)
  })

Promise.resolve()
  .then(() => {
    console.log(1)
  })
  .then(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
  .then(() => {
    console.log(5)
  })
  .then(() => {
    console.log(6)
  })

// 1. 直接 return 4
// 0
// 1
// 4
// 2
// 3
// 5
// 6

// 2. 返回一个 thenable 对象
