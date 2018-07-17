// https://twitter.com/ASpittel/status/1019206900817235969

function isPrime(num) { // assuming num >= 2
	if (num != 2 && num % 2 == 0) return false;

	const root = Math.sqrt(num);
	for (let i = 3; i <= root; i += 2)
		if (num % i == 0)
			return false;

	return true;
}

function getPrimorial(num) {
	let primes = [];
	let curr = 2;

	while (num > 0) {
		if (isPrime(curr)) {
			primes.push(curr);
			num--;
		}
		curr++;
	}

	return primes.reduce((a, b) => a * b);
}

console.log(getPrimorial(1)); // 2
console.log(getPrimorial(3)); // 30
console.log(getPrimorial(5)); // 2310
console.log(getPrimorial(6)); // 30030