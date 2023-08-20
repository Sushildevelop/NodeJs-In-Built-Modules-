const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("<h1> I am Happy to learn full stack web development form Pw skills</h1>");
    }
    res.end();
})

server.listen(5500);
console.log(`the http server is running on port 5500`);