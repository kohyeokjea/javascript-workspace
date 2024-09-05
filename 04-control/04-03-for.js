/**
 * !반복횟수가 정해져 있을 때
 */
for (let i = 0; i < 2; i++) {
    console.log(i);
}

// 중첩
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(i, j);
    }
}


for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        // console.log(i + " * " + j + " = " + (i * j));
        console.log(`${i} * ${j} = ${i*j}`);
    }
}