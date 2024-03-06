import express from "express";
import { readFile } from "fs";

const hostname = "localhost";
const port = 8080;

const app = express();

app.get("/*", (req, res) => {
  let filePath = `.${req.url}.html`;
  if (req.url === "/") {
    filePath = "./index.html";
  } else if (req.url !== "/about" && req.url !== "/contact-me") {
    filePath = "./404.html";
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  readFile(filePath, (err, data) => {
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
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
