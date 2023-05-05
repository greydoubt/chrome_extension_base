// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "replaceDuckWithGoose") {
    // Replace all occurrences of "duck" with "GOOSE"
    document.body.innerHTML = document.body.innerHTML.replace(/duck/gi, "GOOSE");
  }
});