chrome.webRequest.onBeforeRequest.addListener(
    callback, {urls: ["<all_urls>"]})
chrome.webRequest.onHeadersReceived.addListener(
    callback, {urls: ["<all_urls>"]})

// info depends on event type and opt_extraInfoSpec
function callback(info) {
    var str = JSON.stringify(info, null, 2)
    console.log(str)
}


