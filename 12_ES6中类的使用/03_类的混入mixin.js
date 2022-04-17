class Test {
  playing() {
    console.log('playing...')
  }
}

function fooMixin(BaseClass) {
  return class extends BaseClass {
    foo() {
      console.log('foo...')
    }
  }
}

function barMixin(BaseClass) {
  return class extends BaseClass {
    bar() {
      console.log('bar...')
    }
  }
}

var FooTest = fooMixin(Test)
var FooBarTest = barMixin(fooMixin(Test))

class NewClass extends FooBarTest {
  say() {
    console.log('say...')
  }
}

var newClass = new NewClass()
newClass.say()
newClass.foo()
newClass.bar()

var fooTest = new FooTest()
fooTest.playing()
fooTest.foo()

var fooBarTest = new FooBarTest()
fooBarTest.playing()
fooBarTest.foo()
fooBarTest.bar()
