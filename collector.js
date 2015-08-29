chrome.webRequest.onBeforeSendHeaders.addListener(
    function(info) {
        var url = new URL(info.url);
        if (url.protocol == "http:") {
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
