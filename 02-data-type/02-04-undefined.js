let foo
console.log(foo); //undefined

foo = "kim"
foo = null // 가비지 콜렉터
// fo = undefined
console.log(foo);

console.log(typeof foo);
console.log(typeof foo === null);