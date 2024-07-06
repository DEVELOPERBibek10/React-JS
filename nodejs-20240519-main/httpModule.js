import http from "http";

const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    if (request.url === "/") {
      response.writeHead(200, "Content-Type", "text/plain");
      response.end("Homepage");
    } else if (request.url === "/about") {
      response.writeHead(200, "Content-Type", "text/plain");
      response.end("About page");
    } else {
      response.writeHead(404, "Content-Type", "text/plain");
      response.end("Page not found");
    }
  } else {
    response.writeHead(500, "Content-Type", "text/plain");
    response.end("something went wrong");
  }
});

const PORT = 5000;

server.listen(5000, () => {
  console.log(`Server running at port: ${PORT}`);
});
