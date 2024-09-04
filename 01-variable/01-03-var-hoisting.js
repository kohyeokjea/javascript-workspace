/**
 * 호이스팅
 * var, let, const, function, function*, class
*/
console.log(foo)
var foo = 123;

console.log(func());

console.log(foo);
{
    var foo = 456
}
console.log(foo);

function func() {
    var foo = 789
    return foo;
}
console.log(foo)
console.log(func())

