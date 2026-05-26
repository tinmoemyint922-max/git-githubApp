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

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server running on port" + PORT);
});
