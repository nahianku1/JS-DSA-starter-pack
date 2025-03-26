// why we need time complexity?
// what is time complexity?
// How to calculate time complexity?

import cin from "./input.js";
import cout from "./output.js";

let n = Number(await cin());
let sum = 0;
// Naive version
let t1 = performance.now();
// for (let i = 0; i <= n; ++i) {
//   sum += i;
// }
// using formula
// Optimized Version
sum = (n * (n + 1)) / 2;
let t2 = performance.now();
cout(sum);
cout(t2 - t1);



