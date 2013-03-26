var BigInt = require('../lib/big_integers')

var should = require('should')

describe('BigInt', function () {
  describe('#initialize', function () {
    it('should initialize with a small integer', function () {
      var i = new BigInt(1)
      i.representation.should.eql([1])
    })

    it('should initialize with a negative integer', function () {
      var i = new BigInt(-1234)
      i.representation.should.eql([4, 3, 2, 1])
      i.sign.should.equal(-1)
    })

    it('should initialize with a list', function () {
      var i = new BigInt([1,2,3,4])
      i.representation.should.eql([1,2,3,4])
    })

    it('should initialize with a string', function () {
      var i = new BigInt("12345")
      i.representation.should.eql([5, 4, 3, 2, 1])
    })

    it.skip('should initialize with a negative string', function () {
      var i = new BigInt("-12345")
      i.representation.should.eql([5, 4, 3, 2, 1])
      i.sign.should.equal(-1)
    })
  })

})
