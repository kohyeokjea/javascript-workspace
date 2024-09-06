const person = {
    "first-name": "일남",
    "last-name": "김",
    age: 99,
    1: 1
}

console.log(person);

// delete person.age;
// console.log(person);

delete person["first-name"]
console.log(person);

// 불변성 유지 위해 새로운 객체 생성
// const newPerson = {
//     "last-name": person["last-name"]
// }

const { "last-name": lastName, age } = person; // 구조분해 할당
const newPerson = {
    // "last-name": lastName,
    lastName,
    age
}
console.log(newPerson);