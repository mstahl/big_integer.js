# big\_integers.js

This is a library for handling arithmetic with arbitrarily large integers.
There are many such libraries like it, but this one is mine.

## Usage

BigInts can be initialized in a few ways: with a string, with a regular
integer, or with a list of integers.

    var a = new BigInt("7658963745894652748926748239657489563278594631")
    var b = new BigInt(1871)
    var c = new BigInt([190, 374, 11])

If you are initializing with a list, the least significant radix goes first,
and no item in the list should exceed `BigInt.base`.

    a.add(b)      #=> Add two numbers
    a.subtract(b) #=> Subtract b from a
    a.multiply(b) #=> Multiply a by b
    a.compare(b)  #=> Compare a with b (returns -1, 0, or 1)
    a.shift(n)    #=> Shift a by `n` digits (equivalent of `<<`)

## To do

  * Better test coverage for negative numbers
  * Division
  * Modular arithmetic
  * Exponentiation/up-arrow

## License

Released under the MIT public license.
