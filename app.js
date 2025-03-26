const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [N, Q] = input[0].split(" ").map(Number);
  let A = input[1].split(" ").map(Number);
  let queries = input.slice(2).map(Number);
  let result = queries.map((X) => (A.includes(X) ? "found" : "not found"));
  console.log(result.join("\n"));
});
