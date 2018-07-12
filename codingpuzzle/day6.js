// https://twitter.com/ASpittel/status/1017383837112963077

function largestPrimeFactor(num) {
    let factors = [];

    while (num % 2 == 0) {
        factors.push(2);
        num = num / 2;
    }

    // num must be odd at this point
    const root = Math.sqrt(num); // "every composite number has a prime factor less than or equal to its square root"
    for (let i = 3; i <= root; i += 2) {
        while (num % i == 0) {
            factors.push(i);
            num = num / i;
        }
    }

    // num must be a prime greater than 2 at this point
    if (num > 2) factors.push(num);

    return factors.pop();
}

console.log(largestPrimeFactor(4)); // 2
console.log(largestPrimeFactor(12)); // 3
console.log(largestPrimeFactor(17)); // 17
console.log(largestPrimeFactor(147)); // 7
console.log(largestPrimeFactor(315)); // 7
console.log(largestPrimeFactor(13195)); // 29
console.log(largestPrimeFactor(600851475143)); // 6857