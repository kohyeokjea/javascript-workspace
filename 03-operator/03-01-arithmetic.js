let x = 5;
let result

// 선대입 후증가
result = x++;

console.log(result, x); // 5 6

// 후대입 선증가
result = ++x;

console.log(result, x); // 7 7

// 선대입 후감소
result = x--;

console.log(result, x); // 7 6

// 후대입 선감소
result = --x;

console.log(result, x); // 5 5

let strNum="10"
console.log("문자열 10:",typeof "10", "10");
console.log("숫자 10:",typeof +"10", +"10");
console.log("숫자 10:",typeof +"10", +strNum +"10");
console.log("숫자 10:",typeof  Number(strNum), 10 + Number("10"));

console.log(typeof -strNum);
console.log(+"abc");
console.log(typeof NaN);
console.log(Boolean(NaN));
console.log(null === null);
console.log(NaN === NaN);
console.log(0 === -0);
console.log(Object.is(0,-0));
console.log(Object.is(NaN, NaN));
