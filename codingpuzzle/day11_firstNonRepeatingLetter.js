function firstNonRepeatingLetter(s) {
	const chars = s.split('');
	const lc = chars.map(c => c.toLowerCase());
	for (let i = 0; i < lc.length; i++) {
	   const appears = lc.filter(val => val == lc[i]).length;
	   if (appears == 1) return chars[i];
	}
	return '';
}

console.log(firstNonRepeatingLetter('stress')); // t
console.log(firstNonRepeatingLetter('sTreSS')); // T