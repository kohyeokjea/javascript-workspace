// splice와 다름
// 원본 배열을 변경하지 않음
let arr1 = [1, 2, 3, 4, 5]
let result = arr1.slice(0, 2);
console.log(result);

arr1 = [1, 2, 3, 4, 5]
result = arr1.slice(2);
console.log(result);

arr1 = [1, 2, 3, 4, 5]
result = arr1.slice(-2);
console.log(result);

arr1 = [1, 2, 3, 4, 5]
result = arr1.slice(-3, -1);
console.log(result);

arr1 = [1, 2, 3, 4, 5]
result = arr1.slice(-3, 4);
console.log(result);

arr1 = [1, 2, 3, 4, 5]
result = arr1.slice(3, 2);
console.log(result);