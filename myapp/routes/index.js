/* GET home page. */
exports.index = function(req, res){
  res.render('index', {  });
};

exports.login = function(req, res){ 
  res.render('login', {  });
};

exports.loginPost = function(req, res){
  console.log(req.body.uname);
  console.log(req.body.pwd);
  res.render('login', {  });
};

exports.register = function(request, res)
{
  //console.log(request.body.);
  console.log(request.body.pwd);

  sanitizeRegisterationData (request.body);

  var userType = request.body.user_type;
  var indexPage = "";
  switch (userType.toLowercase()) {
    case 'provider':
      indexPage = 'providerprofile'
      break;  
    case 'customer':
      indexPage = 'searchpage'    
      break;
  }
  res.render(indexPage, { title: 'Express' });
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