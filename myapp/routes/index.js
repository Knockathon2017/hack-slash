var userCtrl = require('../controllers/server.controller');

/* GET home page. */
exports.index = function(req, res){
  res.render('index', {  });
};

exports.login = function(req, res){ 
  res.render('login', {  });
};

exports.loginPost = function(req, res){

  console.log(req.body.uname, + " " + req.body.pwd);
  var request = {user_name: req.body.uname};
  var userInfo = userCtrl.GetUserInformation(request,res);
  // var userType = request.body.user_type;
  // var indexPage = "";
  // switch (userType.toLowercase()) {
  //   case 'provider':
  //     indexPage = 'providerprofile'
  //     break;  
  //   case 'customer':
  //     indexPage = 'searchpage'    
  //     break;
  // }
  console.log(userInfo);
  res.render('login', { title: 'Express' });
};

exports.register = function(request, res)
{
  //console.log(request.body.);
  console.log(request.body.pwd);

  var regData = sanitizeRegisterationData (request.body);
  var user = userCtrl.create(regData,res);  
  res.render('/login', { title: 'Express' });
};


function sanitizeRegisterationData (requestOb)
{
   var registerObject = {

   };
  if(requestOb != null)
  {
    registerObject.UserName = requestOb.user_name;
    registerObject.Password = requestOb.password;
    registerObject.FirstName = requestOb.first_name; 
    registerObject.Address1 = requestOb.address1;     
        


  }


}