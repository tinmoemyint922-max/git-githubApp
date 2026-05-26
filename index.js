const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === "/") {
    res.end("Hello Git + GitHub 🚀");
  } else if (req.url === "/about") {
    res.end("This is simple Node.js project using Git & GitHub");
  } else {
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
