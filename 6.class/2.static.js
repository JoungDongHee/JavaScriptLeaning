// Static 정적 프로퍼티 , 메서드
class FruitClass {
  static MAX_FRUIT = 5;
  // 생성자  : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name} : ${emoji}`);
  };

  // 클래스 레벨의 메서드
  static makeRandomFruit = () => {
    return new FruitClass("banana", "바나나");
  };
}

console.log(FruitClass.name);
//FruitClass.display();
const bananObj = FruitClass.makeRandomFruit();
console.log(bananObj);
console.log(FruitClass.MAX_FRUIT);

console.log("=================== Class 로 만든 Object");
// pi 는 FruitClass 의 인스턴스 이다
const pi = new FruitClass("파인애플", "파인애플");
// apple2 는 FruitClass 의 인스턴스 이다
const apple2 = new FruitClass("사과", "사과");
// console.log(apple2.makeRandomFruit()); 오류
console.log(pi);
console.log(apple2);
// obj 는 그냥 객체이고 그 어떠한 클래스의 인스턴스도 아니다
const obj = { name: "ddd" };

Math.pow();
Number.isFinite(1);
