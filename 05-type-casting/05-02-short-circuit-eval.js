let animal = "Cat"
// animal = "Dog"

// if (animal == "Cat") {
//     console.log("냐옹");
// }

console.log(animal === "Cat" && "냐옹")

animal === "Cat" && console.log("냐용")

animal === "Cat" && function () {
    console.log("냐용")
    console.log("고양이");
}
