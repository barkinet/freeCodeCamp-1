/*
 * Perform a search and replace on the sentence using the arguments 
 * provided and return the new sentence.
 * 
 * If the first letter of the before OR after word is upper case,  
 * then make sure the corresponding before OR after word is returned
 * with an uppercase character. 
 */


function myReplace (str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1)
  }
  return str.replace(before, after)
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");