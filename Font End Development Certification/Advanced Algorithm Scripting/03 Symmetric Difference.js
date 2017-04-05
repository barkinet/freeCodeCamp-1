function sym(args) {
  var cleanDups = function (arr) {
    return arr.filter(function (el, index, array) {
      if (arr.slice(0, index).indexOf(el) == -1) {
        return true
      } else {
        return false
      }
    })
  }

  var uniquesInOneArr = function (arr1, arr2) {
    return arr1.filter(function (value) {
      if (arr2.indexOf(value) === -1) {
        return true
      } else {
        return false
      }
    })
  }

  var diffTwo = function (arr1, arr2) {
    var cleaned1 = cleanDups(arr1),
      cleaned2 = cleanDups(arr2)
    return uniquesInOneArr(cleaned1, cleaned2).concat(uniquesInOneArr(cleaned2, cleaned1))
  }

  if (arguments.length === 2) { // 2 arrays - WORKS
    return diffTwo(arguments[0], arguments[1])
  } else if (arguments.length === 1 && typeof arguments[0][0] === 'number') { // 1D array - WORKS
    return cleanDups(arguments[0])
  } else if (arguments.length === 1 && arguments[0].length === 2) { //2D array, with 2 arrays - WORKS
    return diffTwo(arguments[0][0], arguments[0][1])
  } else if (arguments.length === 1 && arguments[0].length > 2) { //2D array, 3+ args - WORKS
    var argArr = arguments[0]
    return sym([diffTwo(argArr[0], argArr[1])].concat(argArr.slice(2)))
  } else if (arguments.length > 2) { // 3+ arrays -
    return sym([diffTwo(arguments[0], arguments[1])].concat(Array.prototype.slice.call(arguments, 2)))
  }
}

/**
 * tests
 * sym([1, 2, 3], [5, 2, 1, 4]) // should return [3, 4, 5].
 * sym([1, 2, 3], [5, 2, 1, 4]) // should contain only three elements.
 * sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) // should return [1, 4, 5]
 * sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) // should contain only three elements.
 * sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) // should return [1, 4, 5].
 * sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) // should contain only three elements.
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) // should return [2, 3, 4, 6, 7].
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) // should contain only five elements.
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) // should return [1, 2, 4, 5, 6, 7, 8, 9].
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) // should contain only eight elements.
 */