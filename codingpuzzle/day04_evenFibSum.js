// https://twitter.com/ASpittel/status/1016656616484233217

function evenFibSum(n) {
    let first = 1;
    let second = 1;
    let sum = 0;

    while (first <= n && second <= n) {
        let next = first + second;
        if (next % 2 == 0) sum += next;
        first = second;
        second = next;
    }

    return sum;
}

console.log(evenFibSum(4000000)); // 4613732