import path from "path";
import url from "url";

const filePath = "./dir1/dir2/data.txt";

// baseName();
// console.log(path.basename(filePath));

// // dirName();
// console.log(path.dirname(filePath));

// // parse();
// console.log(path.parse(filePath));

// // extName();
// console.log(path.extname(filePath));

// filename and dirname;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);
