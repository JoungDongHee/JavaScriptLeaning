// 단항 연산자
// + (양)
// - (음)
// ! (부정)
let a = 5;
a = -a // -1*5
console.log(a);
a = -a
console.log(a); // -5 * -1

a = +a;
console.log(a);

a = -a;
a = +a;
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 화깅 할수 있슴

console.log();
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+'text'); // NaN
console.log(+undefined); // NaN 


// !! 값을 booblean 타입으로 변환함
console.log(!!1);