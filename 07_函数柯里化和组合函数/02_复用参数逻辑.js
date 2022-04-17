// function log(date, type, msg) {
//   console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] [${msg}]`)
// }

// log(new Date(), 'WARNING', '出bug1了...')
// log(new Date(), 'WARNING', '出bug2了...')
// log(new Date(), 'WARNING', '出bug3了...')
// log(new Date(), 'WARNING', '出bug4了...')

function log(date) {
  return function (type) {
    return function (msg) {
      console.log(
        `[${date.getHours()}:${date.getMinutes()}] [${type}] [${msg}]`
      )
    }
  }
}

// nowLog
var nowLog = log(new Date())
nowLog('WARNING')('出bug1了...')
nowLog('WARNING')('出bug2了...')
nowLog('WARNING')('出bug3了...')

function nowLog2(type, msg) {
  return log(new Date())(type)(msg)
}
nowLog2('WARNING', '出bug1了...')
nowLog2('WARNING', '出bug2了...')
nowLog2('WARNING', '出bug3了...')

// nowWarningLog
var nowWarningLog = log(new Date())('WARNING')
nowWarningLog('出bug1了...')
nowWarningLog('出bug2了...')
nowWarningLog('出bug3了...')

function nowWarningLog2(msg) {
  return log(new Date())('WARNING')(msg)
}
nowWarningLog2('出bug1了...')
nowWarningLog2('出bug2了...')
nowWarningLog2('出bug3了...')
