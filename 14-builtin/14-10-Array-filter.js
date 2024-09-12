// 조건에 맞는 요소만 선택해서 새로운 배열 생성
// 원본 배열 변경 안함

let arr = [1, 2, 3, 4, 5, 6]
let result = arr.filter(num => num % 2 === 0)
console.log(result);

arr = [
    { name: "오삼남", age: 97 },
    { name: "오일남", age: 99 },
    { name: "오이남", age: 98 }
]
result = arr.filter(person => person.age >= 99)
console.log(result);

result = arr.filter(person => true)
console.log(result);