// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수(오래된 고전적인 방법)
const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name} : 사과`);
  },
};

const orange = {
  name: "orange",
  display: function () {
    console.log(`${this.name} : 오렌지`);
  },
};

console.log(apple);
console.log(orange);

//
console.log("=========================== NEW 사용한 방법");

//생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name} : ${emoji}`);
  };
}

console.log(new Fruit("파인애플", "파인애플"));
console.log(new Fruit("사과", "사과"));

// 2. 클래스 (최근에 사용하는 함수)

class FruitClass {
  // 생성자  : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name} : ${emoji}`);
  };
}
console.log("=================== Class 로 만든 Object");
// pi 는 FruitClass 의 인스턴스 이다
const pi = new FruitClass("파인애플", "파인애플");
// apple2 는 FruitClass 의 인스턴스 이다
const apple2 = new FruitClass("사과", "사과");
console.log(pi);
console.log(apple2);
// obj 는 그냥 객체이고 그 어떠한 클래스의 인스턴스도 아니다
const obj = { name: "ddd" };
