// 논리 연산자 
// && 그리고
// || 또는
// ! 부정(단항연산자 에서 온것)
// !! 불리언 값으로 변환(단항연산자 응용버전)

let num = 8;
if(num>=0 && num<9){
    console.log("따봉");
}

if(num>=0 || num>20){
    console.log("따봉");
}

if(!(num>=0 || num>20)){
    console.log("따봉");
}

if(num != 8){
    console.log("지져스");
}

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


console.log(!'txt'); // false;
console.log(!!'txt'); // true