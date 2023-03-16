// 접근자 프로퍼티
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.lastName}${this.firstName}`;
  }
  // get 을 사용 하면 속성에 접근하는 것 처럼 접근이 가능 해진다
  // 없다면 () 사용해야 호출을 해야한다.
  get fullName() {
    return `${this.lastName}${this.firstName}`;
  }
  set fullName(value) {
    return console.log("set : " + value);
  }
}
const student = new Student("수지", "김");
student.firstName = "안나";
console.log(student.firstName);

// get fullName
console.log(student.fullName);
// set fullName
student.fullName = "김철수";
