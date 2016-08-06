var Helper = function(){    
};

Helper.prototype = function (){
return {    
"PostDataToServer" : function(url, postDataJson ,callbackSuccessMethod, callbackErrorMethod)
    {
        $.ajax({
            url: url,
            datatype: 'json',
            type: 'POST',
            data: postDataJson,
            success: function (data) {
                console.log('success on url '+ url);
                if( callbackSuccessMethod && typeof callbackSuccessMethod == 'function')
                    callbackSuccessMethod(data);
            },
            error: function (data) {
                if( callbackErrorMethod && typeof callbackErrorMethod == 'function')
                    callbackErrorMethod(data);
            }
        });
    }
};   

}();


 