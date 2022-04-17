function sum(a, b, c) {
  return a + b + c
}

function curryingSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

function curryingSum2(a, b) {
  return function (c) {
    return a + b + c
  }
}

var res1 = sum(1, 2, 3)
console.log(res1)

var res2 = curryingSum(1)(2)(3)
console.log(res2)

var res3 = curryingSum2(1, 2)(3)
console.log(res3)
