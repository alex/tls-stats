chrome.tabs.onCreated.addListener(function(tab) {
    chrome.browserAction.setBadgeText({
        text: "",
        tabId: tab.id
    });
});

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(info) {
        var url = new URL(info.url);
        // Don't care about localhost
        if (url.hostname == "localhost") {
            return;
        }
        if (url.protocol == "http:") {
            if (info.tabId !== -1) {
                chrome.browserAction.getBadgeText({tabId: info.tabId}, function(value) {
                    var newValue = (value ? parseInt(value) : 0) + 1;
                    chrome.browserAction.setBadgeText({
                        text: newValue.toString(),
                        tabId: info.tabId
                    });
                });
            }
            var key = "http:" + url.hostname;
            chrome.storage.local.get(key, function(values) {
                var data = {};
                data[key] =  (values[key] || 0) + 1
                chrome.storage.local.set(data);
            });
        }
    },
    {urls: ["<all_urls>"]}
);
