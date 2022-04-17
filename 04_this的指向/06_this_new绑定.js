function foo() {
  console.log(this)
}

new foo() // this --> foo {}
