(() => {
  let aTags, channelId;
  currentUser = "";

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, user } = obj;

    if (type === "NEW") {
      currentUser = channelId;
      newChannelLoaded();
    }

    const newChannelLoaded = () => {
      const filterBtnExists = document.getElementById("myFilterBtn");

      console.log(filterBtnExists);
    }
  });
})();