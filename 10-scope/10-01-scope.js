var x = "global"

function foo() {
    var x = "function scope"
    console.log(x);
}

foo()
console.log(x);

var y = 0
{
    var y = 1
    console.log(y);
}

console.log(y);

let z = 0
{
    let z = 1
    console.log(z);
}
console.log(z);