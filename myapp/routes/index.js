var userCtrl = require('../controllers/server.controller');

/* GET home page. */
exports.index = function(req, res){
    var data={
    details:[{
    name:"Cane",
    price:"120"
    },
    {
    name:"Abel",
    price:"120"
    },
    {
    name:"Nirmala",
    price:"120"
    },
    {
    name:"Vaijanti",
    price:"120"
    },
    {
    name:"Priya",
    price:"120"
    },
    {
    name:"Surbhi",
    price:"120"
    }]
  };

    var dishdata={
    dishes:[{
    name:"Aloo Parantha",
    price:"120"
    },
    {
    name:"Dal Tadka",
    price:"120"
    },
    {
    name:"Fried Rice",
    price:"120"
    },
    {
    name:"Chhole Bhature",
    price:"120"
    },
    {
    name:"Rajma Chawal",
    price:"120"
    },
    {
    name:"Dal Makhni",
    price:"120"
    }]
  };

 var dishdata={
    dishes:[{
    name:"Aloo Parantha",
    price:"120"
    },
    {
    name:"Dal Tadka",
    price:"120"
    },
    {
    name:"Fried Rice",
    price:"120"
    },
    {
    name:"Chhole Bhature",
    price:"120"
    },
    {
    name:"Rajma Chawal",
    price:"120"
    },
    {
    name:"Dal Makhni",
    price:"120"
    }]
  };

  res.render('index', { title: 'Express',Data:data,DishData:dishdata});
};

exports.login = function(req, res){ 
  res.render('login', {  });
};

exports.update=function(req,res){
 var obj={
        first_name: req.first_name,
        last_name: req.last_name,
        user_name: req.user_name,
        email: req.email,
        address1: req.address1,
        address2: req.address2,
        zipcode:req.zipcode,
        phone:req.phone,
        mobile:req.mobile
 };
var userinfo= userCtrl.update(request,res);
}

exports.loginPost = function(req, res){
 // console.log(req.body.uname, + " " + req.body.pwd);
  var request = {user_name: req.body.uname};
  var userInfo = userCtrl.GetUserInformation(request,res);
  var userType = userInfo.userrole;
  var indexPage = "";
//   switch (userType.toLowercase()) {
//     case 'provider':
//       indexPage = 'providerprofilepage'
//       break;  
//     case 'consumer':
//       indexPage = 'index'    
//       break;
//   }
  res.render('login', { title: 'Express' });
};

exports.register = function(request, res)
{
  //console.log(request.body.);
 // console.log(request.body.pwd);

  var regData = sanitizeRegisterationData (request.body);
 // var val=userCtrl.GetProviderById(request);
  var user = userCtrl.create(regData,res);  
  res.render('/login', { title: 'Express' });
};

exports.chef=function(req,res){
  res.render('profile',{ });
};

function sanitizeRegisterationData (requestOb)
{
   var registerObject = {
   };
  if(requestOb != null)
  {
    registerObject.UserName = requestOb.user_name;
    registerObject.Mobile = requestOb.mobile;
    registerObject.Email = requestOb.email;  
    registerObject.UserType = requestOb.usertype;  
     
  }
  return registerObject;
};