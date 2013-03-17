var BigInt = require('../lib/big_integers')

var should = require('should')

describe('BigInt', function () {
  describe('#initialize', function () {
    it('should initialize with a small value', function () {
      var i = new BigInt(1)
      i.representation.should.eql([1])
    })

    it('should initialize with a list', function () {
      var i = new BigInt([1,2,3,4])
      i.representation.should.eql([1,2,3,4])
    })
  })

})
