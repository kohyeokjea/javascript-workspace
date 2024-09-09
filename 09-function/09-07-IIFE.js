(function myFunc(x) {
    let a = 3
    let b = 5
    let result = a * b * x
    console.log(result);
})(3);

// myFunc(); // 호출 불가 (재사용 불가)

// 익명 즉시 실행 함수
(function (x) {
    let a = 3
    let b = 5
    let result = a * b * x
    console.log(result);
})(3);