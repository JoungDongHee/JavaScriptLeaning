// 객체 안에서 자기 자신에 접근 할때는 this 를 사용
const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name} : 사과`);
  },
};

apple.display();
