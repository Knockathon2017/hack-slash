/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.login = function(req, res){
  console.log(req['body']);
  res.render('login', { title: 'Express' });
};

exports.loginPost = function(req, res){
  console.log(req.body.uname);
  console.log(req.body.pwd);
  res.render('login', { title: 'Express' });
};

var privateMethods={

"abc" :function(){

},

"cde":function(){

}

}