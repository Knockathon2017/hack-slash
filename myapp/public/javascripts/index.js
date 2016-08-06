$(document).ready(function(){
    var item=$('#timelist').find('option[value=1]').length;
});

var eventListeners={
    "onSelectPlacementTime":function(){
     var item=$('#timelist :selected');
    alert('You selected :'+item.text());
    var data=JSON.stringify(item);
    var url="http://abc";
    callToServer(data,url,onSelectPlacementTimeCallback);
    },

    "onClickSearchByZip":function(){
        var search_text=$('#zip').val();
        var data=JSON.stringify(search_text);
        var url="http://aaa";
        callToServer(data,url,onClickSearchByZipCallback);
    },

    "onClickSendRequest":function(){

    },

    "onSelectPlacementTimeCallback":function(){
        alert('Hello');
    },

    "onClickSearchByZipCallback":function(){
        alert('Hello');
    },

};

$('select#timelist').on('change',eventListeners.onSelectPlacementTime);


var callToServer=function(data,url,callback){
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: callback,
        dataType: application/json
    });
}