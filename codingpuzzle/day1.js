// https://twitter.com/ASpittel/status/1014849122308767744

function pigIt(str) {
    let words = str.split(' ');

    for (let [i, w] of words.entries()) {
        if (w.match(/[A-Za-z]/))
            w = w.slice(1) + w[0] + 'ay';
        words[i] = w;
    }

    return words.join(' ');
}

console.log(pigIt('Pig latin is cool !')); // 'igPay atinlay siay oolcay !'