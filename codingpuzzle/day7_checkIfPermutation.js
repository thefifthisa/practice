// https://twitter.com/ASpittel/status/1017749093953744896

function checkifPermutation(str1, str2) {
    if (str1.length != str2.length) return false;
    return str1.split('').sort().join('') == str2.split('').sort().join('');
}

console.log(checkifPermutation('abc', 'cab')); // true
console.log(checkifPermutation('abc', 'aaa')); // false
console.log(checkifPermutation('abc', 'bbccaa')); // false