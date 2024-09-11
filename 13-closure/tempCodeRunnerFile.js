arr = []

for (var i = 0; i < 5; i++) {
    arr[i] = (function (num) {
        return num;
    })(i);
}

console.log(arr);