// Write a function that returns the longest number in a string.

function longestNum(str) {
    let i = str.search(/\d/); // index of first number
    if (i == -1) return null; // no numbers in string

    let num = parseInt(str.slice(i), 10);
    if (num == 0) { // handle leading zeros
        let zero = num.toString();
        let j = 0;
        while (str.slice(i+1)[j] == 0) {
            zero += 0;
            j++;
        }
        num = zero;
    }
    let count = num.toString().length; // number of digits

    let next = longestNum(str.slice(i+count));
    if (next != null && count < next.toString().length) return next;
    
    return num;
}

console.log(longestNum('')); // null
console.log(longestNum('isabelle543is000always12091so232hungry')); // 12091
console.log(longestNum('isabelle543is00000always12091so232hungry')); // 00000
console.log(longestNum('3218a1234b2468c8123d')); // 3218
console.log(longestNum('no nums here')); // null