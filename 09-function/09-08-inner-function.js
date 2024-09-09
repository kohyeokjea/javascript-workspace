//* case1
function parent(param) {
    let parentVar = param
    function child() {
        let childVar = "Kim"
        console.log(parentVar + " " + childVar);
    }
    child()
    console.log(parentVar);
    // console.log(childVar); // !불가
}

parent("Hello")

//* case 2
function sayHello(name) {
    let text = "Hello " + name

    const logHello = function () {
        console.log(text);
    }
    logHello()
}
sayHello("Lee")

// sayHello.logHello() // !불가