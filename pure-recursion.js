/*
강의 내용) 
1. pure recursion은 inner function을 이용하지 않고, outer 함수 자체에서 재귀를 실행한다.
2. helper method를 이용하는 경우보다 이해하기는 어려울 수 있지만, 더 짧게 코드를 작성할 수 있다. 
    - 이 때문에 pure function이 더 나은 해결책이라는 뜻은 아님
*/

/*
문제) collect all of the odd values in array
*/

function collectOdds(array = []) {
  let newArray = []

  if (array.length === 0) return newArray
  if (array[0] % 2 !== 0) newArray.push(array[0])

  // collectOdds가 실행될 때 마다 newArray 변수가 초기화 되므로, concat 이용한다.
  newArray = newArray.concat(collectOdds(array.slice(1)))

  // +) line 19 대신 collectOdds(array.slice(1))만 작성하면 console에 무엇이 출력될까요?
  // => call stack에서 (재귀) 함수가 빠져나오는 순서를 생각해 보면, [1]이 출력될 것을 알 수 있다.
  return newArray
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7]))
/*
collectOdds([1, 2, 3, 4])
newArray = [1].concat(collectOdds([2, 3, 4]))
                    [].concat(collectOdds([3, 4]))
                            [3].concat(collectOdds([4]))
                                    []
=> newArray = [1, 3]
*/
