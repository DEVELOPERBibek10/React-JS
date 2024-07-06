import fs from "fs/promises";

// read file with callback
fs.readFile("./testFile.txt", "utf8", (err, data) => {
  if (err) return console.log(err);

  console.log(data);
});

// read file with synchronous version

// const data = fs.readFileSync("./testFile.txt", "utf8");
// console.log(data);

// write file

// fs.writeFile("./testFile.txt", "Hello world", () => {
//   console.log("file written");
// });

// append file
// fs.appendFile("./testFile.txt", "\nthis text is added to my new file", () => {
//   console.log("file is appended");
// });

// read file with promise
fs.readFile("./testFile.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

async function readMyTextFile() {
  try {
    const data = await fs.readFile("./testFile.txt", "utf8");

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// readMyTextFile()

// async function writeToMyTextFile() {
//   try {
//     await fs.writeFile("./testFile.txt", "file written using promises");
//     console.log("file is written");
//   } catch (error) {
//     console.log(error);
//   }
// }

// writeToMyTextFile();
