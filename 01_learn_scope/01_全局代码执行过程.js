var name = "plasticine";
function foo() {
  var name = "foo";
  console.log(name);
}

var name1 = 10;
var name2 = 20;
var result = name1 + name2;

console.log(result);

foo();

console.log(globalThis);
