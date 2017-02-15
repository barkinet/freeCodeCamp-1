function palindrome(str) {
 
  // split out strings to compare
  const strNormal = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
  const strReverse = strNormal.split('').reverse().join('')
  // compare strNormal vs strReverse
  return (strNormal === strReverse)

}
 
palindrome("RaceCar")