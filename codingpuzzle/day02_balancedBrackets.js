// https://twitter.com/ASpittel/status/1015211258897977345

function balancedBrackets(str) {
    if (str.length % 2 == 0) {
        let stack = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] == '{' || str[i] == '[' || str[i] == '(')
                stack.push(str[i]);
            if ((str[i] == '}' && stack.pop() != '{') || (str[i] == ']' && stack.pop() != '[') || (str[i] == ')' && stack.pop() != '('))
                break;
        }

        if (stack.length == 0) 
            return 'YES';
    }

    return 'NO';
}

console.log(balancedBrackets('{[()]}')); // YES
console.log(balancedBrackets('{[(])}')); // NO
console.log(balancedBrackets('{{[[(())]]}}')); // YES