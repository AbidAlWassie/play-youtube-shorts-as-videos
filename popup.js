chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var currentTab = tabs[0];

  // Debugging
  var currentUrl = currentTab.url;
  var urlDiv = document.getElementById('current-url');
  urlDiv.textContent = currentUrl;

  if (currentUrl && currentUrl.includes("youtube.com/")) {
    const channelVideos = currentUrl.split("@")[1];
    const user = channelVideos.split("/")[0];
  }

});
