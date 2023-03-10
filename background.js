chrome.action.onClicked.addListener(async (tab) => {
  const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log(currentTab);
});
