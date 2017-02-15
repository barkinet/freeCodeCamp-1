/* Return the provided string with the first letter of each word 
 * capitalized. Make sure the rest of the word is in lower case.
 * 
 */

function titleCase(str) {
  splitStr = str.toLowerCase().split(' ')
  
  var r =  splitStr.map(function(word) {
    return word.replace(word[0], word[0].toUpperCase())
  }).join(' ')
  
  return r  
}
titleCase("I'm a little tea pot")
