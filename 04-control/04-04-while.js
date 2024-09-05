/**
 * !반복횟수가 정해져 있지 않을 때
 */
let count = 0;

while (count < 3) {
    console.log(count);
    count++;
}

while (true) {
    console.log(count);
    count++
    if (count == 10) {
        break
    }
}