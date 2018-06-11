var fs = require('fs');

// Sync 방식  data라는 변수에다 전송 후 display
// readFileSync가 완료후 data에 전달하고 나서야 console 실행
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);

// Async
// read파일 실행시킬동안 console 4를 리턴하고 완료시 3과 data 리턴
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'},function(err,data){
  console.log(3);
  console.log(data);
})
console.log(4);
