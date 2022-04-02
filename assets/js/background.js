
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('browserAction.onClicked')
    chrome.tabs.sendMessage(tab.id, "toggle");
});

chrome.tabs.onActivated.addListener(function(info) {
    console.log('tabs.onActivated');
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == "complete") {
        console.log('tabs.updated');
    }
});