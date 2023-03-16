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
