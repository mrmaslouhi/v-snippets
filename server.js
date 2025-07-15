const http = require("node:http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Welcome to the home page");
      break;
    case "/snippets":
      res.end("Snippets page");
      break;
    
  }
});
