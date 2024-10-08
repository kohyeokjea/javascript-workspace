//! toString()
let arr = [1, 2, 3, 4, 5]
console.log(typeof arr); // object
console.log(typeof arr.toString()); // string

arr = [1, 'a', 2, 'b']
console.log(typeof arr.toString()); // string
console.log(arr.toString()); // string
arr = [null, undefined, 2, 'b']
console.log(typeof arr.toString()); // string
console.log(arr.toString()); // string

//! join()
arr = [1, 2, 3, 4, 5]
console.log(typeof arr.join()); // string
console.log(arr.join()); // 1,2,3,4,5
console.log(arr.join("")); // 12345

arr = ["010", "1234", "5678"]
console.log(arr.join("-")); // 010-1234-5678

arr = ["Hello", "World"]
console.log(arr.join(" ")); // Hello World

arr = []
console.log(arr.join(":")); // ""

arr = [null, undefined, "", 2, 'b']
console.log(arr.join()); // ,,,2,b
console.log(arr.join("")); // 2b

//! push(), pop(), shift()
arr = []
console.log(arr);

arr.push("문자열1")
arr.push("문자열2")
arr.push("문자열3")
arr.push("문자열4")
arr.push("문자열5")
console.log(arr);

let str = arr.pop() // 배열의 요소를 제거하고 제거한 요소를 반환
console.log(str);
console.log(arr); // [ '문자열1', '문자열2', '문자열3', '문자열4' ]

arr.shift()
console.log(arr);

arr.unshift(1) // 0번 인덱스에 값 추가
console.log(arr);

//! reverse()
arr = ["a", "b", "c"]
console.log(arr.reverse()); // 원본 변경
console.log(arr);

//! fill()
arr = new Array(10)
console.log(arr.length); // 10

arr = new Array(10).fill(0)
console.log(arr); // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

arr = new Array(10).fill(undefined)
console.log(arr); // [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ]

//! from()
arr = Array.from("Hello") // 1. 문자열 분해해서 배열로 변환
console.log(arr); // [ 'H', 'e', 'l', 'l', 'o' ]

// 2. 유사 배열 객체를 새로운 배열로 변환해서 바노한
let arrLike = { length: 5, 0: "a", 1: "b" } // 유사 배열 객체
// console.log(arrLike["0"]); // a
// console.log(arrLike["1"]); // b
// console.log(arrLike["2"]); // undefined

// let arrLike = ["a", "b", undefined, undefined, undefined]
// console.log(arrLike.length);
// arrLike.forEach(el =>{
//     console.log(el);
// })


arr = Array.from(arrLike)
console.log(arr);  // [ 'a', 'b', undefined, undefined, undefined ]
arr.forEach(el => {
    console.log(el);
})

// 첫번째 인수에 반복 가능한 객체, 두번째 인수에 콜백 함수
// 반복 가능한 객체를 순회하여 콜백 함수의 결과 배열로 반환
arr = Array.from({ length: 5 }, function (_, index) {
    return index;
})
console.log(arr); // [ 0, 1, 2, 3, 4 ]

arr = Array.from([10, 20, 30, 40, 50], function (value, index) {
    return value + index;
})
console.log(arr); // [ 10, 21, 32, 43, 54 ]