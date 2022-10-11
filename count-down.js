/*
recursion)
1. 중단점(base case)에 도달할 때 까지, 다른 input을 투입해서 같은 function을 반복적으로 호출한다.
2. => base case & different inputs are essential! 
*/

/*
문제) countDown 함수 작성하기
*/

// 1. loop
function countDown(number = 0) {
  while (number > 0) {
    console.log(number)
    number--
  }
  console.log('done!')
}
countDown(3)

// 2. recursion
function countDown2(number = 0) {
  if (number <= 0) {
    console.log('done!')
    return // end function call
  }
  console.log(number)
  countDown2(--number)
}
countDown2(5)
