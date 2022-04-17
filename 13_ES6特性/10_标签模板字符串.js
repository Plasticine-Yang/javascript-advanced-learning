function foo(a, b, c) {
  console.log('foo', a, b, c)
}

foo`Hello${1}Wo${2}rld` // foo [ 'Hello', 'Wo', 'rld' ] 1 2
