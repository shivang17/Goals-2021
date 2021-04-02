const http = require('http');

const server = http.createServer(function(req, res){
    console.log(`User visited ${req.url}`);
    res.end(`Hello user, Welcome to ${req.url}`);
});

console.log("listening on http://localhost:3000");
server.listen(3000);