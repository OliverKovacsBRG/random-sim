const n = 100000000;
const amount = 3;
const expected = 1 / amount;
let results = Array(amount).fill(0);

console.time("time");

const randomInt = max => {
    return Math.floor(Math.random() * max);
};

for (let i = 0; i < n; i++) {
    results[randomInt(amount)]++;
}

results = results.map(result => result / n);
const variance = results.reduce((s, result) => s + Math.pow(expected - result, 2), 0) / n;

console.log("results:", results);
console.log("expected:", expected);
console.log("std deviation:", Math.sqrt(variance));
console.log("n:", n);
console.timeEnd("time");
