function sum(a) {
    return (b) => {
        return b * a;
    }
}
let answer = sum(5)
console.log(answer(4));
console.log(answer(6));