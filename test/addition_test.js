var BigInt = require('../lib/big_integers')
var should = require('should')

describe('BigInt', function () {
  describe('#add', function () {
    it('should add two BigInts of the same size', function () {
      var a = new BigInt([1, 1, 1, 1])
      var b = new BigInt([2, 2, 2, 2])
      a.add(b).representation.should.eql([3, 3, 3, 3])
    })

    it('should add a small BigInt to a big BigInt', function () {
      var a = new BigInt([1, 1, 1, 1])
      var b = new BigInt([2, 2, 2, 2, 2, 2, 2, 2])
      a.add(b).representation.should.eql([3, 3, 3, 3, 2, 2, 2, 2])
    })

    it('should add a big BigInt to a small BigInt', function () {
      var a = new BigInt([2, 2, 2, 2, 2, 2, 2, 2])
      var b = new BigInt([1, 1, 1, 1])
      a.add(b).representation.should.eql([3, 3, 3, 3, 2, 2, 2, 2])
    })

    it('should carry digits properly during addition', function () {
      var a = new BigInt([9, 9])
      var b = new BigInt([1])
      a.add(b).representation.should.eql([0, 0, 1])
    })

    it('should carry digits properly during addition 2', function () {
      var a = new BigInt([9])
      var b = new BigInt([2])
      a.add(b).representation.should.eql([1, 1])
    })
  })
})
