import cin from "./input.js";
import cout from "./output.js";

let n = Number(await cin());
let sum = 0;
let t1 = performance.now();
for (let i = 0; i <= n; ++i) {
  sum += i;
}
// sum = (n * (n + 1)) / 2;
let t2 = performance.now();

cout(sum);
cout(t2 - t1);
