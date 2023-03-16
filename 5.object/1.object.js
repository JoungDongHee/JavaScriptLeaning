// 오브젝트를 만드는 방법
// Object literal {ket : value}
// new Object()
// Object.create();
// key - 문자 , 숫자 , 문자열 , 심볼
// value - 원시값 , 객체(함수)

let apple = {
  name: "apple",
  "hello-bye": "안녕",
  0: 1,
  ["hello-bye1"]: "안녕2",
};

// 속성 , 데이터 에 접근 하기 위해서는
console.log(apple.name);
apple.name; // 마침표 표기법 dot notaion
console.log(apple["hello-bye"]);
console.log(apple["hello-bye1"]); // 대괄호 표기법 bracket notaion
apple["name"];
apple[0];

// 속성 추가
apple.emoji = "이모지";
console.log(apple.emoji);
console.log(apple["emoji"]);
console.log(apple);
// 속성 삭제
delete apple.emoji;
console.log(apple);
