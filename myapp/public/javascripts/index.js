$(document).ready(function(){
    var item=$('#timelist').find('option[value=1]').length;
     $('.modal-trigger').leanModal();
});

 $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute
      ready: '', // Callback for Modal open
      complete:''// Callback for Modal close
    }
  );

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

    "onClickViewDishes":function(){
        $('#modal1').openModal();
    },

    "onClickSearchByZipCallback":function(){
        alert('Hello');
    },

    "onClickViewChefProfile":function(){
        
    },

    "onClickEditProfile":function(){
       
    }

};

$('[id^=sendrequest]').on('click',eventListeners.onClickViewDishes);

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