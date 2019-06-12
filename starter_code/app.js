const words = 'O rato roeu a roupa do rei de roma';

function wordCounter(arr) {
  const regExp = /[A-Z]/ig;
  const test2 = arr.match(regExp);
  console.log(test2.length);
}

wordCounter(words);

function counter(arr, target) {
  let count = 0;
  const lowerTarget = target.toLowerCase();
  const lower = arr.toLowerCase();
  for (let i = 0; i < lower.length; i += 1) {
    if (lower[i] === lowerTarget) {
      count += 1;
    }
  }
  console.log(count);
}

counter(words, 'r');

console.log(words.indexOf('rato'));

function reverse(arr) {
  const empty = [];
  for (let i = arr.length; i >= 0; i -= 1) {
    empty.push(arr[i]);
  }
  const extra = empty.join('').toLowerCase();
  console.log(extra);
}

reverse(words);
