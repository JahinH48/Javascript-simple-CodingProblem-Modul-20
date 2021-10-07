const business = 450;
const minister = 550;
const army = 600;

/* if (business > minister && business > army) {
    console.log('Business is bigger ');
}
else if (minister > business && minister > army) {
    console.log(' Minister is bigger ');
}
else {
    console.log(' Army id bigger ');
} */

/* 
var Max = Math.max(business, minister, army);
console.log('larger namber is    :', Max); */

function FineLarger(first, second, thard) {

    if (first > second && first > thard) {
        return first;
    }
    else if (second > thard && second > first) {
        return second;
    }
    else if (thard > first && thard > second) {
        return thard;
    }
    else {
        return thard;
    }
}

const jisan = FineLarger(20, 30, 10);
console.log(jisan);