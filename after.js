// this code will be executed after page load
(function () {
  console.log("after.js executed");

  const targetNode = document.querySelector("body");

  const config = { childList: true, subtree: true };

  const observer = new MutationObserver(function () {
    const videoTitle = document.querySelector(".ytp-title");
    if (videoTitle) {
      videoTitle.remove();
      observer.disconnect();
    }
  });

  observer.observe(targetNode, config);
})();
