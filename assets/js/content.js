var selection_buffer = null;
var jb = document.createElement("script");
jb.src = "assets/js/libs/JsBarcode.all.min.js", document.getElementsByTagName("head")[0].appendChild(jb);

chrome.storage.local.get('popup', res => {
    if (res.popup) {
        $('#shadow-wrapper-popup-eathu').slideToggle("slow");
    }
})
// Global variable
// Modal popup
chrome.runtime.onMessage.addListener(function(msg, sender) {
    switch (msg) {
        case "toggle":
            $('#shadow-wrapper-popup-eathu').slideToggle("slow");
            break;
        case "loader":        
            $('body').prepend(`<div class="overlay"><div class="overlay-logo"><i class="js-spin icn-spinner"><img src="${overlay_big_spinner}"/></i></div></div>`);    
            $('.overlay').show();
            break;
    }
});
if ("undefined" == typeof jQuery) {
    var jq = document.createElement("script");
    jq.src = "https://code.jquery.com/jquery-3.6.0.min.js", document.getElementsByTagName("head")[0].appendChild(jq);
}
var jqryinvl = setInterval(function() {
    if ("undefined" != typeof jQuery) {
        clearInterval(jqryinvl);
    }
}, 200);

init();
function init() {
    chrome.runtime.sendMessage({
        contentScriptQuery: "getSheetInfo",
    }, function(object) {
        appendStyles();
        loadPopup();
        
        $('#shadow-wrapper-popup-eathu').slideToggle("slow");

        shadowRootPopup.getElementById('close_sidebar').addEventListener('click', function() {
            $('#shadow-wrapper-popup-eathu').slideToggle("slow");
            chrome.storage.local.set({
                popup: false
            }, console.log('popup state set'));
        });

    });
}
