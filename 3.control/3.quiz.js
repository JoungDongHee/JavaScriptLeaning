// 퀴즈 !
let num = 2;
// num 의 숫자가 짝수 이면 엄지척 , 홀수 라면 죽음 출력 하도록

//if
if((num%2)===0){
    console.log("엄지척");
}else{
    console.log("죽음");
}


// terary
(num%2) === 0 ? console.log("엄지척") : console.log("죽음");
let emoji = (num%2) === 0 ? "엄지척" : "죽음";
console.log(emoji);