const shadowWrapper_popup = document.createElement('div');
shadowWrapper_popup.id = "shadow-wrapper-popup-eathu";
shadowWrapper_popup.style = "position: fixed;top: 0;right: 0;z-index:999999999;display:none;width:320px";
document.body.appendChild(shadowWrapper_popup);
const host_popup = document.getElementById('shadow-wrapper-popup-eathu');
const shadowRootPopup = host_popup.attachShadow({
    mode: 'open'
});

function appendStyles() {
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL('assets/css/material-icons.css');
    document.head.appendChild(link);
}


function loadPopup() {
    console.log("LoadPopup start!");
    const html = document.createElement('html');
    var head = document.createElement('head');
    var head = document.createElement('head');

    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    head.appendChild(link);
    var script = document.createElement('script');
    script.type = 'javascript';
    script.src = chrome.runtime.getURL('assets/js/libs/bootstrap.min.js');
    head.appendChild(script);

    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL('assets/css/material-icons.css');
    head.appendChild(link);

    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL('assets/css/style.css');;
    head.appendChild(link);

    var body = document.createElement('body');
    html.appendChild(head);
    html.appendChild(body);
    var html_content = `
        <div class="script-application-sidebar-header"><div class="script-application-sidebar-title" id="titlee59r4s:xz">ASIN Barcode</div>
        
        <div class="script-application-sidebar-close" tabindex="0" title="Close sidebar" aria-label="Close sidebar" role="button" id="close_sidebar">
        <div class="docs-icon goog-inline-block ">
        <div class="docs-icon-img-container docs-icon-img docs-icon-close-white" aria-hidden="true"> <span class="material-icons">
    close
    </span></div>
        </div>
        </div>
        </div>
        <div class="tab-content" id="myTabContent" style="padding:5px;">
            <svg id="barcode"></svg>
            <h2 id="cantsee" style="margin-top:10px !important; margin-bottom:10px !important;">Can't Find ASIN</h2>
        </div>
        `;
    body.innerHTML = html_content;
    
    shadowRootPopup.innerHTML = null;
    shadowRootPopup.appendChild(html);

    
    var url = window.location.href;
    
    var barcode = shadowRootPopup.getElementById('barcode')
    var cantsee = shadowRootPopup.getElementById('cantsee')
    if(url.indexOf('www.amazon.com')!=-1) {
        if(url.indexOf("/dp/B")!=-1) {
            var temp = url.split("/dp/B")[1];
            temp = temp.slice(0,9);
            temp = 'B'+temp
            console.log(temp)
            JsBarcode(barcode, temp);
            barcode.removeAttribute('hidden');
            cantsee.setAttribute('hidden', 'hidden');
        } else {
            barcode.setAttribute('hidden', 'hidden');
            cantsee.removeAttribute('hidden');
        }
    } else {
        barcode.setAttribute('hidden', 'hidden');
        cantsee.removeAttribute('hidden');
    }
    
}
    