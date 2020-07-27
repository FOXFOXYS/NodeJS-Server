const http = require('http');
const fs = require('fs');
const axios = require('axios');

// création du serveur 
const host = 'localhost';
const port = 8001;

// EXO1
const server = http.createServer( function(request, response) {

    if(request.url === "/") {
        fs.readFile('hello.html', (err, data) => {
            if(err) throw err;
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        });
    }
    else if(request.url === "/services") {
        fs.readFile('services.html', (err, data) => {
            if(err) throw err;
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        });
    }
    else if(request.url === "/api/post") {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            response.writeHead(200, {
                'Content-Type': 'text/json'
            });
            response.end(JSON.stringify(res.data));
        })

    }
    else {
        response.writeHead(404, {
            'Content-Type': 'text-plain'
        });
        response.end("404 Page not Found")
    }
});

server.listen(port, host, (err) => {
    if (err) throw err;
    console.log(`Server is running on http://${host}:${port}`);
});