/**
 * Return the provided character as the first element in each array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 * The character and its pair are paired up in an array, and all the arrays 
 * are grouped into one encapsulating array.
 */

function pairElement(str) {
  const paired = []

  const search = function (char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T'])
        break
      case 'T':
        paired.push(['T', 'A'])
        break
      case 'C':
        paired.push(['C', 'G'])
        break
      case 'G':
        paired.push(['G', 'C'])
        break
    }
  }

  for (const s of str) {
    search(s)
  }

  return paired
}

pairElement('ATCGA')
