function whatIsInAName (collection, source) {
    // What's in a name?
  var arr = []
    // Only change code below this line

  var keys = Object.keys(source)

    // Filter array and remove the ones that do not have the keys from source.
  arr = collection.filter(function (obj) {
        // Use the Array method every() instead of a for loop to check for every key from source.
    return keys.every(function (key) {
            // Check if the object has the property and the same value.
      return obj.hasOwnProperty(key) && obj[key] === source[key]
    })
  })
    // Only change code above this line
  return arr
}

whatIsInAName([{
  first: 'Romeo',
  last: 'Montague'
}, {
  first: 'Mercutio',
  last: null
}, {
  first: 'Tybalt',
  last: 'Capulet'
}], {
  last: 'Capulet'
})
