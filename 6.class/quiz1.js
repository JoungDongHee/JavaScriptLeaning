// 카운터 만들기
// 0 이상의 값으로 초기화 한뒤 하나씩 숫자를 증가할수 있는 카운터 만들기
// Counter 클래스 만들기

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }
  increment() {
    this.#value++;
  }
}

const conuter = new Counter(0);
conuter.increment(); // 1
conuter.increment(); // 2
console.log(conuter.value);
