const person = new Object()
console.log(person);

person.name = "김일남"
person.age = 98
person.sayHello = function () {
    console.log("안녕하세요. 제 이름은 " + this.name + "입니다.");
}

console.log(person);
console.log(person.sayHello)
person.sayHello()