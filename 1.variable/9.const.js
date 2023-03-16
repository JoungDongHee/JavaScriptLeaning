// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수 변수 또는 변수
const text = 'hello';
//text = 'hi';


// 1. 상수

const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
    name : '사과',
    color : 'red',
    display : '빨간 사과',
};

let orage = apple;
orage.name = "오렌지";
console.log(apple);