// 배열의 함수들
// 배열 자체를 변경하는지 , 새로운 배열을 반환하는지

const fruits = ["바나나", "사과", "배"];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf("바나나"));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes("바나나"));

// 추가 - 제일뒤
let length = fruits.push("복숭아"); // 기존 자체 배열을 업데이트 하는 함수
console.log(fruits);
console.log(length);
// 추가 - 제일 앞
let length1 = fruits.unshift("딸기"); // 기존 자체 배열을 업데이트 하는 함수
console.log(fruits);
console.log(length1);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 기존 자체 배열을 업데이트 하는 함수
console.log(fruits);
console.log(lastItem);

// 제거 - 제일앞
let firstItem = fruits.shift(); // 기존 자체 배열을 업데이트 하는 함수
console.log(fruits);
console.log(firstItem);

// 중간에 추가 또는 삭제
let deleteItem = fruits.splice(1, 1); // 기존 자체 배열을 업데이트 하는 함수
console.log(fruits);
console.log(deleteItem);

// 삭제 하고 추가
fruits.splice(1, 1, "사과", "딸기"); // 기존 자체 배열을 업데이트 하는 함수
console.log(fruits);

/**
 * 새로운 배열을 만드는 함수들
 */

// 잘라진 새로운 배열을 만듬
let newArray = fruits.slice(0, 2);
console.log("기존 배열", fruits);
console.log("새롭게 만든 배열 ", newArray);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로\
const arr4 = arr3.reverse();
console.log(arr4);

console.log("===================================");

// 중첩된 배열을 하나로 합침
let arr = [
  [1, 2, 3],
  [4, [5, 6, [7, 8]]],
];
console.log(arr);
console.log(arr.flat()); // 1 단계 까지의 배열을 풀어줌
console.log(arr.flat(2)); // 2 단계 까지의 배열을 풀어줌
console.log(arr.flat(3)); // 3 단계 까지의 배열을 풀어줌
arr = arr.flat(3);
// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr);

arr.fill("s", 1, 3);
console.log(arr);

arr.fill("s", 1);
console.log(arr);

// 배열을 문자열로 함하지
let text = arr.join();
console.log(text);

text = arr.join(" | ");
console.log(text);
