/**
 * Pig Latin takes the first consonant (or consonant cluster) of an English word,
 * moves it to the end of the word and * * suffixes an "ay". If a word begins 
 * with a vowel you just add "way" to the end.
 * 
 * Turn the string into an array then look for vowels.
 * If the first letter is a vowel return the original string with a 'way'
 * Move consonant cluster to end of the string and append 'ay'.
 * 
 */

function translatePigLatin(str) {
  var newStr = str
  // if string starts with vowel make 'way' adjustment
  if (newStr.slice(0, 1).match(/[aeiouAEIOU]/)) {
    newStr = newStr + 'way'
  }
  // else, iterate through first consonents to find end of cluster
  // move consonant cluster to end, and add 'ay' adjustment
  else {
    var moveLetters = ''
    while (newStr.slice(0, 1).match(/[^aeiouAEIOU]/)) {
      moveLetters += newStr.slice(0, 1)
      newStr = newStr.slice(1, newStr.length)
    }
    newStr = newStr + moveLetters + 'ay'
  }
  return newStr
}

translatePigLatin('consonant')
