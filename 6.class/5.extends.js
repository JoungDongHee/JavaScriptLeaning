class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("애니멀 잔다");
  }
}

class Tiger extends Animal {}

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자옹");
  }
  // 자동 오버라이딩
  eat() {
    console.log("강아지가 먹는다");
  }

  sleep() {
    super.sleep();
    console.log("강아지 잔다");
  }
}

const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.sleep();
tiger.eat();

const dog = new Dog("까망이", "엘리");
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
