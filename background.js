// Create a context menu item
chrome.contextMenus.create({
  id: "duckfinder",
  title: "Duckfinder",
  contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "duckfinder") {
    chrome.tabs.sendMessage(tab.id, { action: "replaceDuckWithGoose" });
  }
});


// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "replaceDuckWithGoose") {
    // Replace all occurrences of "duck" with "GOOSE"
    document.body.innerHTML = document.body.innerHTML.replace(/duck/gi, "GOOSE");
  }
});
