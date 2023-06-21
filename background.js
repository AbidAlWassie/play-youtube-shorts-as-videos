// try {
//   chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    
//     if(changeInfo.status == "complete") {
//       chrome.scripting.executeScript({
//         files: ["contentScript.js"],
//         target: {tabId: tab.id}
//       });
//     }
//   });
// } catch(e) {
//   console.log(e);
// }


// // chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
// //   const activeTab = tabs[0];
// //   chrome.tabs.sendMessage(activeTab.id, {message: "Hello from background!"});
// // });


// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   if (tab.url && tab.url.includes("youtube.com/@")) {
//     const channelVideos = tab.url.split("@")[1];
//     const user = channelVideos.split("/")[0];
//     console.log(user);

//     chrome.tabs.sendMessage(tabId, {
//       type: "NEW",
//       user: user,
//     });
//   }
// });

// // chrome.action.onClicked.addListener((tab) => {
// //   chrome.scripting.executeScript({
// //     target: {tabId: tab.id},
// //     function: () => {
// //       const button = document.createElement('button');
// //       button.textContent = 'My Button';
// //       button.addEventListener('click', () => {
// //         // code to handle button click
// //       });
// //       document.body.appendChild(button);
// //     },
// //   });
// // });
