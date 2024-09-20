/**
 * 논리곱(&&)
 */
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false
console.log(false && true); //false

/**
 * 논리합(||)
 */
console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false
console.log(false || true); //true
console.log(1 > 0 || false); //true

/**
 * 논리 부정(!)
 * - 단항 연산자
 */
console.log(!true); //false
console.log(!!true); //true

console.log(!0); //true
console.log(!1); //false
console.log(!undefined); //true
console.log(undefined === false); //false
console.log(!!undefined === false); //true


