function foo(arg1, arg2, arg3) {
  console.log(arguments.length) // 3
  console.log(arguments[0]) // arg1 -- 'a'
  console.log(arguments[1]) // arg2 -- 'b'
  console.log(arguments[2]) // arg3 -- 'c'
}

foo('a', 'b', 'c')
