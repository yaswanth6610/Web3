const crypto = require("crypto");

function hashStartsWithPrefix(prefix) {
  let input = 0;
  while (true) {
    let inputStr =
      `harkirat => Raman | Rs 100
Ram => Ankit | Rs 10` + input.toString();
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }
}

const result = hashStartsWithPrefix("00000");
console.log(`input": ${result.input}`);
console.log(`hash": ${result.hash}`);
