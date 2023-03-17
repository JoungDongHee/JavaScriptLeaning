// 래퍼 객체(Wrapper Oject)
// 원시값을 관련된 빌트인 객체로 변환한다.
const number = 123; // number 원시 타입

// 특정한 함수를 호출하는 순간  number 원시타입을 감싸고 있는 Number 객체로 감싸짐
console.log(number.toString()); 
console.log(number); // number 원시 타입

console.log(typeof (number.valueOf(1))); 
console.log(typeof number); // number 원시 타입

const text = 'text';
console.log(text); // String 문자열 원시 타입
text.length // String 객체의 레퍼 클래스 
text.trim();