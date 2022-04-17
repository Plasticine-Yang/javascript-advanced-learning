var obj = {
  name: 'plasticine',
  fn: function () {
    console.log(this)
  },
}

new obj.fn() // this --> fn {}
