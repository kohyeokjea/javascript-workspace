let foo = 123; //지역 변수

console.log(foo);

{
    let foo = 456 //지역 변수
}

// let foo = 789 // 재 선언 불가

foo = 789
console.log(foo)