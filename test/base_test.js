var BigInt = require('../lib/big_integers')

var should = require('should')

describe('BigInt', function () {
  describe('#base', function () {
    it('should return the value of BigInt.base', function () {
      BigInt.base = 1234
      var a = new BigInt(1)
      a.get_base().should.eql(1234)
    })

    it('should set the base of the BigInt', function () {
      BigInt.base = 16
      var a = new BigInt(17)
      a.representation.should.eql([1, 1])
      var b = new BigInt(7183)
      b.representation.should.eql([0xF, 0x0, 0xC, 0x1])
    })

  })
})
