chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var currentTab = tabs[0];

  // Debugging
  var currentUrl = currentTab.url;
  var urlDiv = document.getElementById('current-url');
  var debugUrl = document.getElementById("debugUrl");
  urlDiv.textContent = currentUrl;

  if (currentUrl && currentUrl.includes("youtube.com/@")) {
    const channelVideos = currentUrl.split("@")[1];
    const user = channelVideos.split("/")[0];
  }
  else if (currentUrl && currentUrl.includes("youtube.com/shorts")) {
    const shortsLink = currentUrl.split("/")[4];
    const fullLink = "https://www.youtube.com/watch?v=" + shortsLink;
    debugUrl.href = fullLink;
    console.log(debugUrl);
  }

});
