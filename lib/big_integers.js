/*
 * big_integers.js
 *
 * A simple library for the safe handling of very large integers.
 *
 * (c) 2013 max thom stahl <max@villainousindustri.es>
 */

var BigInt = (function () {
  //// Class variables/settings
  var BASE = 0xFFFFFFFF
  var $ = function (str) {
    if(typeof(str) === 'object') {
      this.representation = str
    }
    else {
      this.representation = [str]
    }

    this.base = BASE
    this.sign = 1
  }
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
    add: function (other) {
      var carry = 0,
          sum   = []
      zip(this.representation, other.representation).forEach(function (pair) {
        var s = pair[0] + pair[1] + carry
        sum.push(s % BASE)
        carry = Math.floor(s / BASE)
      })
      if(carry !== 0) {
        sum.push(carry)
      }
      return new BigInt(sum)
    },
    subtract: function (other) {
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
