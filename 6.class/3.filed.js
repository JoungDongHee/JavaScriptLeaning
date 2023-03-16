// 접근 제어자 - 캡슐화
// private(#), public(기본) , protected
// private 으로 선언하기 위해서는 # 을 붙여준다
class FruitClass {
  // 필드
  #type = "과일";
  #name;
  #emoji;
  // 생성자
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.name} : ${emoji}`);
  };
}

const apple = new FruitClass("사과", "사과");
console.log(apple);
