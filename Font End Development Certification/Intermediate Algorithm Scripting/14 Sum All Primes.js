/**
 * Sum all the prime numbers up to and including the provided number.
 *
 * A prime number is defined as a number greater than one and having
 * only two divisors, one and itself. For example, 2 is a prime number 
 * because it's only divisible by one and two.
 *
 * The provided number may not be a prime.
 */

function sumPrimes (num) {
  var sum = 0
  for (var i = 1; i <= num; i++) {
    if (isPrime(i)) sum += i
  }
  return sum
}

function isPrime (n) {
  if (n < 2 || n !== Math.round(n)) return false
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

sumPrimes(11)
