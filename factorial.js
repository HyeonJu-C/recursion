/*
문제) factorial 함수 작성하기
- loop 이용하기
- recursion 이용하기
*/

function factorial(number = 1) {
  let multiple = 1
  while (number > 1) {
    multiple *= number // do not times zero!
    number--
  }
  return multiple
}
console.log(factorial(4)) // 24

function factorial2(number = 1) {
  if (number === 1) return 1
  return number * factorial2(--number)
}

console.log(factorial2(4)) // 24
