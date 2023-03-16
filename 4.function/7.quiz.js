// 주어진 숫자 만큼 0 부터 순회하는 함수
// 순회 하면서 주어진 특정한 일을 수행해야함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max,action) { }

const print = (a) => console.log(a); // 출력
const add = (a) => console.log(a * 2);

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

iterate(5, print);
iterate(5, add);

console.log("화살표 함수 활용 =========");
iterate(5, (num) => console.log(num));
iterate(5, (num) => console.log(num * 2));

setTimeout(() => {
  console.log("10초뒤 이 함수가 실행될거에요");
}, 10000);
