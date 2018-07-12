// https://twitter.com/ASpittel/status/1016305978164183040

function spinWords(str) {
    let words = str.split(' ');

    for (let [i, w] of words.entries())
        if (w.length >= 5)
            words[i] = w.split('').reverse().join('');
    
    return words.join(' ');
}

console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
console.log(spinWords('This is a test')); // 'This is a test'
console.log(spinWords('This is another test')); // 'This is rehtona test'