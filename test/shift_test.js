var BigInt = require('../lib/big_integers')

var should = require('should')

describe('BigInt', function () {
  describe('#shift', function () {

    it('should do nothing if given zero', function () {
      (new BigInt(1)).shift(0).representation.should.eql([1])
    })

    it('should shift by 1', function () {
      (new BigInt(1)).shift(1).representation.should.eql([0, 1])
    })

    it('should shift by 3', function () {
      (new BigInt(1)).shift(3).representation.should.eql([0, 0, 0, 1])
    })

  })
})
