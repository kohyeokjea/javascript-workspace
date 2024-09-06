// 레이블 블록문
let count = 0
console.log(1);
foo: {
    console.log(2);
    count = 1;
    if (count === 1) {
        break foo
    }
    console.log(3);
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j == 3) {
            console.log(i + j);
        }
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j == 3) {
            console.log(i + j);
            break;
        }
    }
}

outher: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j == 3) {
            console.log(i + j);
            break outher;
        }
    }
}