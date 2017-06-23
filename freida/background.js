var socket = new WebSocket("ws://localhost:8080/ws")
chrome.webRequest.onBeforeRequest.addListener(
  requestCallback, {urls: ["<all_urls>"]}, ["requestBody"])
// chrome.webRequest.onHeadersReceived.addListener(
  // callback, {urls: ["<all_urls>"]})

// info depends on event type and opt_extraInfoSpec
function requestCallback(message) {
  if (message.requestBody) {
    socket.send(JSON.stringify(message.requestBody))
  }
  // socket.send(JSON.stringify(message))
}

// function responseCallback(message) {
  // socket.send(JSON.stringify(message))
// }

function toHexString(byteArray) {
  return Array.from(byteArray, function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('')
}
