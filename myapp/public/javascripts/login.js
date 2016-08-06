
$( document ).ready(function() {

$('#loginButton').off('click').on('click',function(){
    var userName = $('#user_name');
    var password = $('#password'); 
    var obHelper = new Helper();
   obHelper.PostDataToServer('/login', {"uname": $(userName).val(), "pwd":$(password).val()}, function(){ console.log('hello On success');});
});

//registration region
$('#registerBtn').off('click').on('click', function(){
  var inputData = {      
   "first_name" : $('#first_name').val(),
   "last_name"  : $('#last_name').val(),
   "address1": $('#address1').val() 
  };

var obHelper = new Helper();    
   obHelper.PostDataToServer('/register', inputData , function(){ console.log('hello On success');});
});

});





