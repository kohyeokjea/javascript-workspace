let x3 = 7;

function foo2() {
    x3 = 100
    console.log(x3);

    function bar1() {
        x3 = 1000
        console.log(x3);
    }

    bar1()
}
foo2()
console.log(x3);