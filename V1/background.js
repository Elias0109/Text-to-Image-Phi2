chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
      id: "textToImage",
      title: "Generate Illustration from Text",
      contexts: ["selection"],
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "textToImage") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var selectedText = info.selectionText;
        chrome.tabs.sendMessage(tabs[0].id, { text: selectedText });
      });
    }
  }); 
  