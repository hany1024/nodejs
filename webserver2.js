/*
  web server가 1337번을 listen하며
  127.0.0.1로 접속한 사용자에대해 응답하고
  그 응답 결과는 Hello World
*/

const http = require('http'); // 모듈 호출

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => { // 서버가 1337 포트를 듣고있음
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*  Above code is same as .....

  var server = http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
  });
  server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
  });

*/
