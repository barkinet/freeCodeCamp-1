/**
 * Flatten a nested array. You must account for varying
 * levels of nesting.
 */
function steamrollArray (arr) {
  return arr.reduce(function (prev, curr) {
    return prev.concat(Array.isArray(curr) ? steamrollArray(curr) : curr)
  }, [])
}

steamrollArray([1, [2], [3, [[4]]]])
