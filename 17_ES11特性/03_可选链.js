// const obj = {
//   name: 'plasticine',
//   friend: {
//     name: 'foo',
//   },
// }

const obj = {
  name: 'plasticine',
}

// ES11 以前
if (obj && obj.friend && obj.friend.name) {
  console.log(obj.friend.name)
}

// ES11 以后
console.log(obj.friend?.name) // undefined
