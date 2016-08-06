
$( document ).ready(function() {

var userName = $('#user_name');
var password = $('#password');
var loginButton = $('#btnLogin');


$(loginButton).off('click').on('click',function(){
    var obHelper = new Helper();
   obHelper.PostDataToServer('/login', {"uname": $(userName).val(), "pwd":$(password).val()}, function(){ console.log('hello On success');});
});

//registration region
$('#registerBtn').off('click').on('click', function(){
  var inputData = {      
   "user_name" : $('#reg_user_name').val(),
   "email"  : $('#email').val(),
   "mobile": $('#pri_mobile_no').val(),
   "userType":  $('#rac').is(':checked') ? 'Consumer':  'Provider'
  };

var obHelper = new Helper();    
   obHelper.PostDataToServer('/register', inputData , function(){ console.log('hello On success');});
});



});





