const obj = { name: "오일남", age: 99 }

const { name, age } = obj
console.log(`이름: ${name}, 나이: ${age}`);

const { name: newName, age: newAge } = obj
console.log(`이름: ${newName}, 나이: ${newAge}`);

// 기본값
const { naem: n, age: a, address = "부산" } = { ...obj, address: "서울" }
console.log(`이름: ${newName}, 나이: ${newAge}, 주소: ${address}`);

//! 구조분해할당 사용예 1
const todos = [
    { id: 1, content: "HTML", completed: true },
    { id: 2, content: "CSS", completed: true },
    { id: 3, content: "JS", completed: false }
]

let completedTodos = todos.filter((todo) => {
    console.log("todo >>> ", todo);
    const { id, content, completed } = todo
    return completed
})
console.log(completedTodos);

completedTodos = todos.filter(({ id, content, completed }) => completed)
console.log(completedTodos);

//! 구조분해할당 사용예 2
const person = {
    name: "오일남",
    address: {
        zipCode: "12345",
        city: "부산"
    }
}

console.log(person.address.city);

const { name: name2, address: { city } } = person
console.log(city);

/**
 * 기본값 매개변수
 * 나머지 매개변수
 * 전개 문법(...)
 * 구조분해할당
 */