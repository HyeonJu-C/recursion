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
