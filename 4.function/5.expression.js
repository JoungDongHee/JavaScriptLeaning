// 함수 선언문 function name() { }
// 함수 표현식 const name = function() { }
// 화살표 함수 const name = () =>{ }

// 이름이 없는 함수를 무명 함수
let add = function(a,b){
    return a+b;
};

// 화살표 함수 
let add2 = (a,b)=>{
    return a+b;
}

// 값 만 리턴 하는 경우 
add2 = (a,b)=> a+b;

console.log(add(1,2));
console.log(add2(1,2));

// 생성자 함수 const object = new Function(); 뒤 객체편에서 다룸 

// IIF  Immediately-Invoked Function Expresstions
// 즉각적으로 실행되는 함수
(function run(){
    console.log('웃음');
})();