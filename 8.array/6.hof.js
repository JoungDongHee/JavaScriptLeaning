let fruits = ["바나나", "딸기", "포도", "딸기"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// 고차함수 배열을 빙글 빙글 돌면서 원하는 것을 할때
fruits.forEach((value, index, array) => {
  console.log("===================");
  console.log(value);
  console.log(index);
  console.log(array);
});
console.log("===================");

// 조건에 맞는 아이템을 찾을 때
// 제일 먼저 조건에 맞는 아이템을 반환
const items1 = { name: "우유", price: 2 };
const items2 = { name: "쿠키", price: 3 };
const items3 = { name: "김밥", price: 4 };
const product = [items1, items2, items3, items2];
console.log(product);
let found = product.find((value) => {
  return value.name === "쿠키";
});
console.log(found);

// findeIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환

found = product.findIndex((value) => {
  return value.name === "쿠키";
});
console.log(found);

// 배열의 아이템들이 부분적으로 조건(콜백)에 맞는지 확인
found = product.some((items) => items.name === "쿠키");
console.log(found);

// 배열의 아이템들이 모두 조건(콜백)에 맞는지 확인
found = product.every((items) => items.name === "쿠키");
console.log(found);

// 조건에 맞는 모든 아이템들을 새로울 배열로!
found = product.filter((items) => items.name === "쿠키");
console.log(found);

console.log("===========================");

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할수 있는 , 변환할수 있는 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
let result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// flatmap: 중첩된 배열을 쫘악 펴줌

result = nums.map((items) => [1, 2]);
console.log(result);

result = nums.flatMap((items) => [1, 2]);
console.log(result);

// [ [ 'd', 'r', 'e', 'a', 'm' ], [ 'c', 'o', 'd', 'i', 'n', 'g' ] ]
result = ["dream", "coding"].map((text) => text.split(""));
console.log(result);

// [
//   'd', 'r', 'e', 'a',
//   'm', 'c', 'o', 'd',
//   'i', 'n', 'g'
// ]
result = ["dream", "coding"].flatMap((text) => text.split(""));
console.log(result);

// 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬 하고 기존의 배열을 변경
const text = ["hi", "abc"];
text.sort();
console.log(text);

const number = [0, 5, 4, 2, 1, 10];
number.sort();
console.log(number);
// <0 a가 앞으로 정렬 오름차순
// >0 b 가 앞으로 정렬 내림 차순
number.sort((a, b) => a - b);
console.log(number);

// reduce 배열의 요소들을 저버서 값을 하나로 만들어줌
let result2 = number.reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result2);
