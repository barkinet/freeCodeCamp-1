/**
 * Convert the characters &, <, >, " (double quote), and '
 * (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML (str) {
  let loopString = str

  for (let char of loopString) {
    console.log(char)
    switch (char) {
      case '<':
        char = '&lt'
        break
      case '&':
        char.char = '&amp'
        break
      case '>':
        char = '&gt'
        break
      case '"':
        char = '&quot'
        break
      case "'":
        char = '&apos'
        break
    }

  }

  loopString.split('')
  return loopString
}

convertHTML('Dolce & Gabbana')
