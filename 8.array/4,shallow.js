// 얕은 복수 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 얕은 복사가 이루어짐
// Array.from , concat , slice , spread(...) , Object.assign
const pizza = { name: "피자", price: 2, owner: { name: "Ellie" } };
const ramen = { name: "라면", price: 3 };
const sushi = { name: "초밥", price: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);

console.log("store1 : ", store1);
console.log("store2 : ", store2);
console.log("==============================");
store2.push(sushi);
console.log("store1 : ", store1);
console.log("store2 : ", store2);
console.log("==============================");
// store1 , store2 두개다 동일한 Object 를 가르키고 있기 때문에
//  pizza.price = 4; 처럼 수정을 하게 될경우 store1 , store2 두개다 수정됨
pizza.price = 4;
console.log("store1 : ", store1);
console.log("store2 : ", store2);
