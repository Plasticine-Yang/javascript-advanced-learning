var obj = {
  name: 'plasticine',
  age: 20,
  _address: '未知',
}

Object.defineProperties(obj, {
  _address: {
    enumerable: false,
  },
  address: {
    configurable: true,
    enumerable: true,
    get: function () {
      return this.name
    },
    set: function (address) {
      this._address = address
    },
  },
  gender: {
    value: '男',
    configurable: false,
    enumerable: true,
    writable: false,
  },
})
