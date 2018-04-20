var menuItem = {
    "id": "MailIt",
    "title": "MailIt",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}
function ValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "MailIt"){
        if( ValidateEmail(clickData.selectionText)){    
        var mail=clickData.selectionText;
        var MailUrl = "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to="+mail;
        var createData = {
            "url": MailUrl,
                 };  
           //https://mail.google.com/mail/?view=cm&fs=1&tf=1
        chrome.tabs.create(createData, function(tabs){
            chrome.tabs.sendMessage(tabs.id, {todo: "openDialog",mail});
       // chrome.tabs.executeScript(tabs.id,{file:"content.js"},function(tabs){});
        }); 
        
        }else 
        {
             var notifOptions = {
                type: "basic",
                iconUrl: "icon48.png",
                title: "E-mail Address",
                message: "Not a valid e-mail address!!"
            };
           
            chrome.notifications.create('notAMail', notifOptions);
        }       
    }
});

 //   chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            //chrome.tabs.sendMessage(tabs.id, {todo: "openDialog",mail} );
           
    // 5 seconds
          /*chrome.tabs.executeScript(tabs.id,{
    code: "document.getElementById(':oa').value='mail';"
  },function(tabs){});*/
    
 /*   chrome.tabs.executeScript({
    code: "console.alert('hi')"
  });*/
        //document.getElementById(':oa').value=mail;
        
     //  chrome.tabs.sendMessage(tabs[0].id, {todo: "openDialog",mail});
       // chrome.tabs.query({active:true,currentWindow: true}, function(tabs)
    