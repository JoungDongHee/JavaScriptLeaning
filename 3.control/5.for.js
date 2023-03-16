// 반복문 
// for (변수 선언문 ; 조건식; 증감식) { }
// 실행순서 :
// 1. 변수 선언문
// 2. 조건식 값이 참이면 {} 코드 블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될때 까지 2 번과 3번을 반복만

for(let i = 0; i<5 ; i++){
    console.log(i);
}


for(let i =0;i<5;i++){
    for(let j=0;j<5;j++){
        console.log(i,j)
    }
}


// 무한 루프 
// let i = 0;
// for(;;){
//     console.log(i);
//     i++;
// }

// 반복문 제어
for(let i =0;i<20;i++){
    if(i===10){
        continue;
        console.log(`${i} 가 10이 되었다!`);
        break;
    }
    console.log(i);
}