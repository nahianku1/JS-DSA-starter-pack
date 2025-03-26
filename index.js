import cin from "./input.js";
import cout from "./output.js";

let n = Number(await cin());
let sum = 0;
for (let i = 0; i <= n; ++i) {
  sum += i;
}
// sum = (n * (n + 1)) / 2;

cout(sum);
