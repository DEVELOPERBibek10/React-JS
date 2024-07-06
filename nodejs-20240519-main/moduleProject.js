import fs from "fs/promises";
import http from "http";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (request, response) => {
  try {
    if (request.method !== "GET") throw new Error("Method not allowed");

    let filePath;

    if (request.url === "/") {
      filePath = path.join(__dirname, "pages", "index.html");
    } else if (request.url === "/about") {
      filePath = path.join(__dirname, "pages", "about.html");
    } else {
      filePath = path.join(__dirname, "pages", "404.html");
    }

    console.log(filePath);

    const data = await fs.readFile(filePath);

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);

    response.end();
  } catch (error) {
    response.writeHead(500);
    response.end("something went wrong!");
  }
});

const PORT = 5000;

server.listen(5000, () => {
  console.log(`Server running at port: ${PORT}`);
});
