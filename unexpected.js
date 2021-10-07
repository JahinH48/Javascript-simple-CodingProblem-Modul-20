function NamberList(num) {
    if (typeof num != 'number') {
        return 'Enter Your Number';
    }
    else if (num < 2) {
        return 'Enter 2 Number ';
    }


    const fibo = [0, 1];
    for (let i = 2; i <= 10; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const Namber = NamberList(-10);
console.log(Namber);