/*
문제 1) 
1. Write a function called power which accepts a base and an exponent. 
2. The function should return the power of the base to the exponent. 
3. This function should mimic the functionality of Math.pow()  
4. do not worry about negative bases and exponents.
*/

function power(base = 2, exponent = 0) {
  if (exponent <= 0) return 1
  return base * power(base, exponent - 1)
}

console.log(power(2, 4))

/*
문제 2) 
1. Write a function called productOfArray.
2. It takes in an array of numbers,  
3. and returns the product of them all.
=> productOfArray([1, 2, 3, 10]) // 60 
*/

function productOfArray(array = []) {
  let result = 1

  function helper(subArray) {
    if (subArray.length <= 0) return result
    result *= subArray[0]
    helper(subArray.slice(1))
  }
  helper(array)
  return result
}

console.log(productOfArray([1, 2, 3, 4])) // 24

/*
문제 3) 
1. Write a function called recursiveRange 
2. which accepts a number 
3. and adds up all the numbers from 0 to the number passed to the function 
=> recursiveRange(10) // 55 
*/

function recursiveRange(number) {
  let result = number
  if (number === 0) return result
  result += recursiveRange(number - 1)
  return result
}

console.log(recursiveRange(10))

/*문제 4)
1. Write a recursive function called fib 
2. which accepts a number 
3. and returns the nth number in the Fibonacci sequence. 
+) Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
=> fib(4) // 3
=> fib(6) // 8
*/

function fib(number) {
  let result = 0

  if (number <= 2) return 1
  result = fib(number - 1) + fib(number - 2)
  return result
}

console.log(fib(6)) // 8
