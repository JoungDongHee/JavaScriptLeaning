// 동등 비교 관계 연산자()
// == 값이 같음
// != 값이 다름
// === 값 과 타입이 둘다 같음
// !== 값 과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2'); // *타입 비교 연산자를 쓰는게 가장 베스트
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

console.clear();


const Obj1 = {
    name : 'js'
};

const Obj2 = {
    name : 'js'
};

const Obj3 = Obj1;

// 서로 다른 메모리 주소가 다름으로 Obj1 == Obj2 는 false;
console.log(Obj1 == Obj2); 
console.log(Obj1 === Obj2);
// 안에 있는 값은 같기 때문에 
console.log(Obj1.name == Obj2.name);
console.log(Obj1.name === Obj2.name);

// 가르키는 주소가 같기 때문에 true
console.log(Obj1 == Obj3);
