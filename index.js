const http = require("node:http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
  let filePath = `.${req.url}.html`;
  if (req.url === "/") {
    filePath = "./index.html";
  } else if (req.url !== "/about" && req.url !== "/contact-me") {
    filePath = "./404.html";
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

// In the example below, hostname can be omitted from the arguments.
// It's added here in case the hostname is changed.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
