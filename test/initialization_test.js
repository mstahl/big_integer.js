var BigInt = require('../lib/big_integers')

var should = require('should')

describe('BigInt', function () {
  describe('#initialize', function () {
    it('should initialize with a small value', function () {
      var i = new BigInt(12345)
      i.representation.should.equal([12345])
    })

    it('should initialize with a list', function () {
      var i = new BigInt([1,2,3,4])
      i.representation.should.equal([1,2,3,4])
    })
  })

  describe('#add', function () {
    it('should add two BigInts of the same size', function () {
      var a = new BigInt([1, 1, 1, 1])
      var b = new BigInt([2, 2, 2, 2])
      a.add(b).representation.should.equal([3, 3, 3, 3])
    })

    it('should add a small BigInt to a big BigInt', function () {
      var a = new BigInt([1, 1, 1, 1])
      var b = new BigInt([2, 2, 2, 2, 2, 2, 2, 2])
      a.add(b).representation.should.equal([3, 3, 3, 3, 2, 2, 2, 2])
    })

    it('should add a big BigInt to a small BigInt', function () {
      var a = new BigInt([2, 2, 2, 2, 2, 2, 2, 2])
      var b = new BigInt([1, 1, 1, 1])
      a.add(b).representation.should.equal([3, 3, 3, 3, 2, 2, 2, 2])
    })
  })

})
