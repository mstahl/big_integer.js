var BigInt = require('../lib/big_integers')

var should = require('should')

describe('BigInt', function () {
  describe('#compare', function () {
    it('is not easily confused by numbers of differing lengths', function () {
      var a = new BigInt(1234)
      var b = new BigInt(234)
      a.compare(b).should.eql(1)
      b.compare(a).should.eql(-1)
    })

    it('returns -1 when comparing a small number to a large one', function () {
      var a = new BigInt(1983)
      var b = new BigInt(1986)
      a.compare(b).should.eql(-1)
    })

    it('returns 0 when comparing identical numbers', function () {
      var a = new BigInt(1983)
      var b = new BigInt(1983)
      a.compare(b).should.eql(0)
    })

    it('returns +1 when comparing identical numbers', function () {
      var a = new BigInt(1986)
      var b = new BigInt(1983)
      a.compare(b).should.eql(1)
    })

  })
})
