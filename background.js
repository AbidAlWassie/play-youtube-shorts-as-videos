chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/")) {
    const channelVideos = tab.url.split("@")[1];
    const user = channelVideos.split("/")[0];
    console.log(user);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      user: user,
    });
  }
});