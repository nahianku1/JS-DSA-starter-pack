import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  terminal: false,
});

let result = [];
let it;
const fileReadPromise = new Promise((resolve) => {
  rl.on("line", (line) => {
    let lineArray = line.split(" ");
    lineArray.forEach((item) => result.push(item));
  }).on("close", () => {
    it = generator(result);
    resolve();
  });
});

export default async function cin() {
  await fileReadPromise;
  return new Promise((resolve) => {
    resolve(it.next().value);
  });
}

function* generator(inputs) {
  for (let input of inputs) {
    yield input;
  }
}


