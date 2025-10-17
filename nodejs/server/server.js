const http = require("http");
const fs = require("fs");
const path = require("path");


const port = 3000;

//Imp line***
const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url) //Imp***
  
  console.log(filePath);
  
  const extName = String(path.extname(filePath)).toLowerCase();

  //js object not function or array
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png"
  }
    
  const contentType = mimeTypes[extName] || "application/octet-stream";

  //Imp*** //Not readFileSync as we need a callback*** //First error then content
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code==="ENOENT") {
        //Imp line***
        res.writeHead(404,{"Content-Type" : "text/html"});
        res.end("404 File not found Brooooooo")
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  })
  
});
//listen after creating
server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
