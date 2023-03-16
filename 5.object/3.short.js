const x = 0;
const y = 0;
const coordinate = { x: x, y: y };
// 이름과 key 와 value 가 같은 경우 생략 가능
const coordinate2 = { x, y };
console.log(coordinate);
console.log(coordinate2);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}

console.log(makeObj("나훈아", 40)); //  { name: '나훈아', age: 40 }
