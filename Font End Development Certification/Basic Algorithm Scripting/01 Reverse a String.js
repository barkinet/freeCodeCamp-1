function reverseString(str) {
/*
  // Step 1. Use the split() method to return a new array
  var splitStr = str.split('')
  console.log(splitStr)
  // Step 2. Use the reverse() method to reverse the array
  var reverseStr = splitStr.reverse()
  console.log(reverseStr)
  // Step 3. Use the join() method 
  var joinArr = reverseStr.join('')
  console.log(reverseStr)
  //Step 4. Return the reversed string
  return joinArr
*/

  // OR chain them all together
  return str.split('').reverse().join('')
}
 
reverseString("Hello");