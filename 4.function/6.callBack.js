// 콜백 함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action 은 콜백 함수이다.
// 전달된 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값) 을 전달한다.
// 그래서 함수는 고차함수(calculator) 필요한 순간에 호출이 나중에 됨

function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}

console.log(calculator(1, 2, add));
console.log(calculator(1, 2, multiply));
