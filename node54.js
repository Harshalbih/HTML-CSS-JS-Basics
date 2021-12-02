//console.log("hello world")
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>css Transform</title>
  </head>
  <style>
      *{
          margin: 0px;
          padding: 0px;
      }
      .container{
          background-color: blue;
          height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      .box{
          justify-content: center;
          align-items: center;
          background-color: hotpink;
          border: 2px solid black;
          border-radius: 8px;
          height: 300px;
          width: 300px;
          transition: all 1s ease-in-out;
      }
      .box:hover{
          transform: rotate(360deg);
          /* transform: skew(45deg); */
          /* transform: scale(1.5); */
      }
  
  </style>
  <body>
      <div class="container">
          <div class="box">
              This is box
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});