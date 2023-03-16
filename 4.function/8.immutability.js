// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 못한 코드
// 만약의 상태 변경이 필요한 경우에는 새로운 상태를(오브젝트 , 값) 을 만들어서 반환해야한다.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사(메모리주소)
function display(num) {
  num = 5;
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

// 오브젝트를 변경 하게 될경우 참조값이 변경되기 때문에
// 원본 Obj 도 변경이 된다.
// 이는 좋지 못한 코드

function displayObjet(obj) {
  obj.name = "bob";
  console.log(obj);
}

const ellie = {
  name: "ellie",
};

displayObjet(ellie);
console.log(ellie);

function changeObjet(obj) {
  // 이름을 변경하는 느낌을 주도록
  return { ...obj, name: "ellie" }; // 반활할때는 새로운 오브젝트를 만들어서 반환
}

const newObj = changeObjet(ellie);

console.log("오브젝트 비교" + newObj === ellie);

console.log(newObj);
