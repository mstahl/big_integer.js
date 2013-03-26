var BigInt = require('../lib/big_integers')

var should = require('should')

describe('BigInt', function () {
  describe('#multiply', function () {

    it('should multiply two BigInts', function () {
      var i = new BigInt(1234)
      var j = new BigInt(5678)
      var p = i.multiply(j)
      p.representation.should.eql([2, 5, 6, 6, 0, 0, 7])
    })

    it('should multiply a BigInt by an integer', function () {
      var i = new BigInt(12345679)
      var p = i.multiply(9)
      p.representation.should.eql([1, 1, 1, 1, 1, 1, 1, 1, 1])
    })

  })
})
