const http = require('http');
const fs = require('fs');

// création du serveur 
const host = 'localhost';
const port = 8000;

// Réponse text 
// const server = http.createServer(function(request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text-plain'
//     });
//     response.end("Hello World !");
// });

// Réponse HTML => asynchrone 
// const server = http.createServer(function(request, response) {
//     fs.readFile('hello.html', (err, data) => {
//         if (err) throw err;
//         response.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
        
//         response.end(data);
//     });
// });

// Réponse JSON 
// const server = http.createServer(function(request, response) {

//     response.writeHead(200, {
//         'Content-Type':'application/json'
//     });

//     let tasks = [
//         { title: "Faire Mes Devoirs"},
//         { title: "Lire Article MOZ"}
//     ]

//     response.end(JSON.stringify(tasks));
  
// });

// Réponse MutiLien => HTML / JSON 
const server = http.createServer(function(request, response) {

    if(request.url === "/") {
        fs.readFile('hello.html',(err, data) => {
            if(err) throw err;
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        });
    }
    else if(request.url === "/tasks") {
        response.writeHead(200, {
            'Content-Type': 'text/json'
        });
        const tasks = [
            {title: "Faire mes devoirs"},
            {title: "Lire l'article MOZ"}
        ]
        response.end(JSON.stringify(tasks));
    }
});

server.listen(port, host, (err) => {
    if (err) throw err;
    console.log(`Server is running on http://${host}:${port}`);
});