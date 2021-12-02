const fs = require("fs");
let text = fs.readFileSync("del.txt", "utf-8");
text= text.replace("hi", "hello xbxbbxxbbbxxbbxbxb")
console.log(text);

fs.writeFileSync("del.txt", text);