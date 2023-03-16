// 삼항 조건 연산자 
// 조건식 ? 표현식 : 표현식  
// true 일 경우 첫번째 표현식이 false 일경우 뒤에 있는 표현식이 실행됨
console.clear()
let fruit = 'apple';
if(fruit === 'apple'){
    console.log('사과');
}else if(fruit === 'orange'){
  console.log('오렌지');
}else{
  console.log('웃 음');
}

fruit === 'apple' ? console.log('사과') : console.log('오렌지');


let emoji = fruit === 'apple' ? '사과' : '이모지';
console.log(emoji);