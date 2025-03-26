import fs from "fs";

fs.truncateSync('./output.txt')

export default function cout(data, delimiter = "\n") {
  const buf = Buffer.from(String(data) + delimiter); 
  fs.appendFileSync("./output.txt", buf); 
}
