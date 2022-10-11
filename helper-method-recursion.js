/*
강의 내용) 
1. helper method recursion은 재귀와 함께 사용되는 설계 패턴 중 하나이다. 
2. outer function과 inner function으로 이루어져 있다.
    - outer function 안에서 inner function을 호출한다.
    - inner function은 재귀 함수이다. 즉, inner function은 코드 블럭 안에서 스스로를 호출한다.
*/

/*
문제) collect all of the odd values in array
*/

function collectOdds(array = []) {
  // 1. collectOdds 자체를 재귀 함수로 만들면, 매번 results 변수가 초기화된다.
  let result = []

  // 2. 따라서 내부의 helper 함수를 재귀 함수로 만든다.
  //    +) 전역에 result를 선언하거나, loop를 이용하는 방법도 있다.
  function helper(i = 0) {
    if (i > array.length - 1) return
    if (array[i] % 2 !== 0) result.push(array[i])
    i++
    helper(i)
  }

  // 3. helper를 호출한다.
  helper(0)

  return result
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7]))
