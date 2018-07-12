// https://twitter.com/ASpittel/status/1017024338418167810

function findOdd(arr) {
    arr = arr.sort();
    let i = 0;
    while (i < arr.length) {
      const curr = arr.slice(i, arr.lastIndexOf(arr[i]) + 1);
      if (curr.length % 2 != 0) return arr[i];
      else i += curr.length;
    }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5