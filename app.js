// const fs = require('fs');
// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if(url === '/') {
//            res.setHeader('Content-Type', 'text/html');
//         res.write('<html>'); 
//         res.write('<head><title>My first page</title></head>');
//         //    res.write('<body><h1>Hello WU lab</h1></body>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
//         res.write('</html>');
//         return res.end();
//     }
//     if(url === '/message' && method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });
//         return req.on('end', () => {
//             const parsebody = Buffer.concat(body).toString();
//             console.log(parsebody);
//             const message = parsebody.split('=')[1];
//             console.log(message);
//             // fs.writeFileSync('message.txt', message);
//             fs.writeFile('message.txt', message, err => {
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 return res.end();
//             })
//         });
//         // fs.writeFileSync('message.txt', 'DUMMY');
//         // res.statusCode = 302;
//         // res.setHeader('Location', '/');
//         // return res.end();
//     }
// })
const http = require('http');
const requestHandler = require('./routes');

const routes = require('./routes');

const server = http.createServer(requestHandler);

server.listen(8000);