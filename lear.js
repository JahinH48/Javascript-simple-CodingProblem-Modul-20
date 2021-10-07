/* function LargestNamber(Number) {
    let lergest = Number[0];

    for (let i = 0; i <= Number.length; i++) {

        let element = Number[i];
        if (element < lergest) {
            lergest = element;
        }

    }
    return lergest;
}

const Jisan = [12, 51, 54, 454, 855, 55, 55, 878, 44, 455,]
const jahin = LargestNamber(Jisan);
console.log(' Here Your Leargest Number   :  ', jahin);


// Lower Number 


function LargestNamber(Number) {
    let lergest = Number[0];

    for (let i = 0; i <= Number.length; i++) {

        let element = Number[i];
        if (element > lergest) {
            lergest = element;
        }

    }
    return lergest;
}

const Jisan = [12, 51, 54, 454, 855, 55, 55, 878, 44, 455,]
const jahin = LargestNamber(Jisan);
console.log(' Here Your Leargest Number   :  ', jahin);
 */





const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);