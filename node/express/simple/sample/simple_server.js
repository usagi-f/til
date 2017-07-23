const http = require('http');
const url = require('url');
const server = http.createServer();

server.on('request', (req, res) => {
    const incomingUrl = url.parse(req.url);

    if (incomingUrl.path === '/foo') {
        res.writeHead(200);
        res.end('Hello, Node Server! FOOOOOOO!!');
    } else if (incomingUrl.path === '/bar') {
        res.writeHead(200);
        res.end('Hello, Node Server! BARRRRRRRRRRR!!');
    } else {
        res.writeHead(200);
        res.end('Not Found.');
    }
});

server.listen(3000);
