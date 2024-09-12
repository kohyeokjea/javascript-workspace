/**
 * 숫자를 다루는 wrapper 객체(원시 타입의 값을 감싸서 객체로 만드는 것)
 * 자바스크립트의 모든 수는 실수(IEEE 754 국제 표준에서 정의한 64비트 부동 소수점 수로 저장)
 * number 타입
 */

//! toString()
let num = 123
console.log(typeof num); // number
console.log(typeof num.toString()); // string
console.log(typeof (123).toString()); // string

let now = new Date()
// console.log(now);
let year = now.getFullYear()
let month = now.getMonth() + 1; // 0~11
let day = now.getDate();

let newDateFormat = `${year}-${month}-${day}`
console.log(newDateFormat);

newDateFormat = `${year}-${month.toString().padStart(2, 0)}-${day.toString().padStart(2, 0)}`
console.log(newDateFormat);

//! toFixed()
// - 반올림 적용
num = 123.456789
console.log(num.toFixed(2)); // 123.46
console.log(num.toFixed(0)); 
console.log(num.toFixed());  

num = 123
console.log(num.toFixed(2));

//! toPrecision()
// - 반올림 적용
// - 정수, 소수를 포함한 전체 자릿수 결정
num = 123.456789
console.log(num.toPrecision());
console.log(num.toPrecision(3));
console.log(num.toPrecision(2));
console.log(num.toPrecision(5));
console.log(num.toPrecision(7));

num = 123
console.log(num.toPrecision(7));

//! parseInt()
let str = "123"
let numParseInt = parseInt(str)
console.log(typeof numParseInt);

str = "     456"
numParseInt = parseInt(str)
console.log(typeof numParseInt, numParseInt);

str = "ABC456"
numParseInt = parseInt(str)
console.log(typeof numParseInt, numParseInt);

str = "1010"
numParseInt = parseInt(str, 2) // 2는 이진수라는 뜻
console.log(typeof numParseInt, numParseInt); // 반환값은 10진수

str = "1010"
numParseInt = parseInt(str, 8) // 8는 이진수라는 뜻
console.log(typeof numParseInt, numParseInt);

//! parseFloat()
str = "123.456789"
let numParseFloat = parseFloat(str)
console.log(typeof numParseFloat, numParseFloat);


str = "123.456789"
numParseFloat = parseInt(str)
console.log(typeof numParseFloat, numParseFloat);

str = "      123.456789"
numParseFloat = parseFloat(str)
console.log(typeof numParseFloat, numParseFloat);

str = "123.456789abc"
numParseFloat = parseFloat(str)
console.log(typeof numParseFloat, numParseFloat);

str = "abc123.456789"
numParseFloat = parseFloat(str)
console.log(typeof numParseFloat, numParseFloat);

str = "123.456ab789"
numParseFloat = parseFloat(str)
console.log(typeof numParseFloat, numParseFloat);

str = "123.456ab789"
numParseFloat = parseFloat(str)
console.log(typeof numParseFloat, numParseFloat);

//! 상수
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 (자바스크립트로 표현가능한 가장 큰 수)
console.log(Number.MIN_VALUE); // 5e-324 (자바스크립트로 표현가능한 가장 작은 수)
console.log(Number.NaN); // NaN
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991