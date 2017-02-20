/**
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 * fearNotLetter("abce") should return 'd'.
 * fearNotLetter("pqrt") should return 's'.
 * fearNotLetter("bcd") should return undefined.
 */

function fearNotLetter (str) {
  const nums = Array.from(str)
  let string

  for (const [i] of nums.entries()) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      string = String.fromCharCode(str.charCodeAt(i) + 1)
    }
  }
  return string
}

fearNotLetter('abce')
