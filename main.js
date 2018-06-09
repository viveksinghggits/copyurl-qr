/***************
 * 
 * this java script file is going to handle all the JS related events that will 
 * happen on the popup page
 *      
 */
document.addEventListener("DOMContentLoaded", function(){
    chrome.tabs.getSelected(null, function(tab){
        document.getElementById("qrimage").setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+tab.url);  
        
    });
});
