/*
문제 1) 
1. Write a recursive function called reverse 
2. which accepts a string and returns a new string in reverse.
*/

function reverse(string = '') {
  let reversed = ''

  function helper(index) {
    if (index < 0) return reversed
    reversed = reversed + string[index]
    helper(--index)
  }

  helper(string.length - 1)
  return reversed
}

console.log(reverse('hello, world')) //

/**
문제 2) 
1. write a function called isPalindrome(a word, phrase, or sequence that reads the same backward as forward, e.g., madam)
2. which returns true if the string passed to it is a palindrome. 
 */

function isPalindrome(string = '') {
  const end = string.length - 1
  let result

  function helper(index = 0) {
    if (index <= end) {
      result = string[index] === string[end - index]
      result === true && helper(index + 1)
    }
    return result
  }
  helper(0)
  return result
}

console.log(isPalindrome('madam'))
