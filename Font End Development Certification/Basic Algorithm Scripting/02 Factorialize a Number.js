/* WTF is factorial? I found this https://simple.wikipedia.org/wiki/Factorial
 * before I had no idea! All the other sites expect you to be a maths person
 * do you even! So it is used to find out how many possible ways there are to 
 * arrange `n` objects.
 * Example:
 * For example, if there are 3 letters (A, B, and C), they can be arranged 
 * as ABC, ACB, BAC, BCA, CAB, and CBA. That's 6 choices because A can be 
 * put in 3 different places, B has 2 choices left after A is placed, and 
 * C has only one choice left after A and B have been placed. That is 
 * 3×2×1 = 6 choices.
 */

function factorialize(num) {
  // store num
  var result = num;
  // If num = 0 OR num = 1, then 1
  if (num === 0 || num === 1) 
    return 1; 
  // while loop 
  while (num > 1) { 
    // decrement by 1 at each iteration
    num--
    console.log(`decrement=`, num, `result=`, result)
    result *= num
  }
  return result
}

factorialize(5);

