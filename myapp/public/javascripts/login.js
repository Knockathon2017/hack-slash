var userName = $('#user_name');
var password = $('#password');
var loginButton = $('#btnLogin');
$(loginButton).off('click').on('click',function(){

$.ajax({
                url: '/login',
                datatype: 'json',
                type: 'POST',
                data: {"uname": $(userName).val(), "pwd":$(password).val()},
                success: function (data) {
                    console.log(data);
                },
                error: function (errorObject, reponseText) {
                    console.log(errorObject);
                }
            });


});

