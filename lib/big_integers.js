/*
 * big_integers.js
 *
 * A simple library for the safe handling of very large integers.
 *
 * (c) 2013 max thom stahl <max@villainousindustri.es>
 */

var BigInt = (function () {
  //// Class variables/settings
  var $ = function (str) {
    if(typeof(str) === 'object') {
      this.representation = str
    }
    else if(typeof(str) === 'number') {
      this.representation = []
      while(str > 0) {
        this.representation.push(str % this.get_base())
        str = Math.floor(str / this.get_base())
      }
    }

    this.sign = 1
  }
  $.base = 0xFFFF
  //// Private methods
  var zip = function (list_a, list_b) {
    if(list_a.length === 0 && list_b.length === 0) {
      return []
    }
    else {
      var a = list_a[0] || 0,
      b = list_b[0] || 0
      return [[a, b]].concat(zip(list_a.slice(1), list_b.slice(1)))
    }
  }
  //// Public instance methods
  $.prototype = {
    get_base: function () {
      return $.base
    },
    add: function (other) {
      var carry = 0,
          sum   = []
      zip(this.representation, other.representation).forEach(function (pair) {
        var s = pair[0] + pair[1] + carry
        sum.push(s % $.base)
        carry = Math.floor(s / $.base)
      })
      if(carry !== 0) {
        sum.push(carry)
      }
      return new BigInt(sum)
    },
    compare: function (other) {
      var a = this.representation.reverse()
      var b = other.representation.reverse()
      if(a < b) {
        return -1
      }
      else if(a > b) {
        return 1
      }
      else {
        return 0
      }
    },
    subtract: function (other) {
      var borrow = 0,
          difference = [],
          a = this,
          b = other,
          sign = 1
      if(this.compare(other) < 0) {
        a = other
        b = this
        sign = -1
      }
      zip(a.representation, b.representation).forEach(function (pair) {
        var diff = pair[0] - borrow - pair[1]
        borrow = 0
        if(diff < 0) {
          diff += $.base
          borrow = 1
        }
        difference.push(diff)
      })
      var i = new BigInt(difference)
      i.sign = sign
      return i
    },
    multiply: function (other) {
    },
    divide: function (other) {
    },
    divmod: function (other) {
    },
    modulo: function (other) {
    }
  }
  return $
})()
module.exports = BigInt
