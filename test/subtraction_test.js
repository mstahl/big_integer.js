var BigInt = require('../lib/big_integers')

var should = require('should')

describe('BigInt', function () {
  describe('#subtract', function () {
    it('can subtract two bigints without borrowing digits', function () {
      var a = new BigInt([9, 9, 9, 9, 9])
      var b = new BigInt([8, 8, 8, 8, 8])
      a.subtract(b).representation.should.eql([1, 1, 1, 1, 1])
    })

    it('can subtract two bigints with borrowing digits', function () {
      var a = new BigInt([1, 1, 1, 1, 1])
      var b = new BigInt([9, 8, 7])
      a.subtract(b).representation.should.eql([2, 2, 3, 0, 1])
    })

    it('can subtract two bigints to get a negative number', function () {
      var a = new BigInt([1, 1, 1])
      var b = new BigInt([8, 8, 8])
      var c = a.subtract(b)
      c.sign.should.equal(-1)
      c.representation.should.eql([7, 7, 7])
    })

  })
})
