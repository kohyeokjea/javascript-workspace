// 예제 1
let x1 = "global"

function foo() {
    let x1 = "local"
    console.log(x1);

    function bar() {
        console.log(x1);
    }

    bar()
}
foo()

// 예제 2
let x2 = 7;

function foo1() {
    x2 = 100
    console.log(x2);

    function bar1() {
        console.log(x2);
    }

    bar1()
}
foo1()
console.log(x2);

// 예제 3
let x3 = 7;

function foo2() {
    x3 = 100
    console.log(x3);

    function bar2() {
        x3 = 1000
        console.log(x3);
    }

    bar2()
}
foo2()
console.log(x3);

// 예제 4
let foo3 = function () {
    let a = 3, b = 5

    let bar3 = function () {
        let b = 7, c = 11

        a += b + c
        console.log(a);
    }
    bar3()
}
foo3()

// 예제 5
// Lexcical scope
let x4 = 1
function foo4() {
    let x4 = 10
    bar4()
}

function bar4() {
    console.log(x4);
}

foo4()

// 내부 함수의 경우
let x5 = 1
function foo5() {
    let x5 = 10
    function bar5() {
        console.log(x5);
    }
    bar5()
}


foo5()