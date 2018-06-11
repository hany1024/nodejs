var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine','jade');
app.set('views','./views');	// template directory
app.use(express.static('public'));	// 정적 파일 서비스
app.get('/template',function(req,res){
	res.render('temp',{time:Date(), title:'Jade'});
})
app.get('/',function(req,res){
	res.send('Hello home page');
});	// url을 입력하고 접속하는 사용자

// 동적 파일처리는 파일변경시 서버를 다시 실행해야 함

app.get('/dynamic', function(req,res){
	var lis = '';
	for (var i =0; i<5; i++){
		lis = lis+'<li>coding</li>';
	}
	var time = Date();
	// 문자열이 아니라 변수임을 알려주는법 :  $
	var output = `<!DOCTYPE html>
	<html lang="en" dir="ltr">
  	<head>
    	<meta charset="utf-8">
    	<title></title>
  	</head>
  	<body>
      Hello, Dynamic
			<ul>
			${lis}
			</ul>
			${time}
  	</body>
	</html>`;
	res.send(output)
});

// 정적 서비스는 정보가 들어올때마다 실행하기 떄문에 다시 실행 필요 X
app.get('/C',function(req,res){			// 정적 파일 서비스
	res.send('Hello C Grade, <img src ="/C.jpg">');
});

app.get('/login',function(req,res){
	res.send('<h1>Login please</h1>');
}); // login이라는 창으로 들어온 사용자

app.listen(3000,function(){
	console.log('Connected 3000 port!');
});
