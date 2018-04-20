chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "openDialog"){
       // $('.title').css('font-style','italic');
       //  $('.title').css('color', addColor);
       var email=request.mail;
       $('#:oa').val(email);
       //document.getElementById(':oa').value=email;
   // alert("HI");
    }
});
/*
$function(){
	window.setTimeout( 5000 );
	document.getElementById(':oa').value='mail';
}*/