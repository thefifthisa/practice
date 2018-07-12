// Given a set (as a string), print all subsets of it. The subsets can be printed in any order.

function getSubsets(str) {
    const n = 2 << str.length-1; // number of subsets = 2^(str.length)

    // each subset of letters corresponds to a binary number from 0 to n-1
    // ex. 000 = '', 001 = 'a', 010 = 'b', 011 = 'ab', ..., 110 = 'bc', 111 = 'abc'

    const letters = str.split('').reverse();
    let subs = [];

    for (let i = 0; i < n; i++) {
        const bin = parseInt(i, 10).toString(2).split('');
        while (bin.length != str.length) bin.unshift('0');

        let tmp = [];
        for (let j = 0; j < bin.length; j++)
            if (bin[j] == '1')
                tmp.unshift(letters[j]);
        subs.push(tmp.join(''));
    }

    if (subs.length == 0) subs.push(''); // handle empty set
    return subs;
}

function printSubsets(str) {
    const subs = getSubsets(str);
    let result = '';
    for (let i = 0; i < subs.length-1; i++)
        result += `'${subs[i]}', `;
    console.log(`${result}'${subs[subs.length-1]}'`);
}

printSubsets(''); // ''
printSubsets('abc'); // '', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc'