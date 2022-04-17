function wfCurrying(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      // base case: 如果调用时传入的函数参数个数大于等于原本函数的参数个数 -- 直接调用
      fn.apply(this, args)
    } else {
      // 递归调用 直到传入的参数个数 大于或等于 原函数的参数个数，触发 base case
      function subCurried(...subArgs) {
        return curried.apply(this, [...args, ...subArgs])
      }

      return subCurried
    }
  }

  return curried
}

function log(date, type, msg) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] [${msg}]`)
}

var curryingLog = wfCurrying(log)
curryingLog(new Date(), 'WARNING', 'bug1')
curryingLog(new Date(), 'WARNING')('bug1')
curryingLog(new Date())('WARNING', 'bug1')
curryingLog(new Date())('WARNING')('bug1')
