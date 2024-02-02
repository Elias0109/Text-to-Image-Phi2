chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.text) {
      document.getElementById("selectedText").innerText = request.text;
    }
  });
  