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
      if(str < 0) {
        this.sign = -1
      }
      else {
        this.sign = 1
      }
      str = Math.abs(str)
      this.representation = []
      while(str > 0) {
        this.representation.push(str % this.get_base())
        str = Math.floor(str / this.get_base())
      }
    }
    else if(typeof(str) === 'string') {
      // TODO: Requires multiply function
    }
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
      var carry      = 0,
          sum        = [],
          other_list = [other]
      if(typeof(other) !== 'number' && typeof(other.representation) !== 'undefined') {
        other_list = other.representation
      }
      zip(this.representation, other_list).forEach(function (pair) {
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
      var pairs = zip(this.representation, other.representation).reverse()
      for(var i in pairs) {
        if(pairs[i][0] < pairs[i][1]) {
          return -1
        }
        else if(pairs[i][0] > pairs[i][1]) {
          return 1
        }
      }
      return 0
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
      if(typeof(other) === 'number') {
        var carry = 0,
            product = [],
            self = this
        this.representation.forEach(function (r) {
          var p = carry + r * other
          product.push(p % self.get_base())
          carry = Math.floor(p / self.get_base())
        })
        if(carry > 0) {
          product.push(carry)
        }
        return new BigInt(product)
      }
      else {
        // TODO: For multiplying two BigInts
      }
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
