// this code will be executed after page load
(function () {
  console.log("after.js executed");
  // .ytp-title
  // Select the node that will be observed for mutations
  const targetNode = document.getElementsByTagName("body");

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    // console.log(mutationList);
    // I would want to delete the target node
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        console.log("A child node has been added or removed.");
      } else if (mutation.type === "attributes") {
        console.log(`The ${mutation.attributeName} attribute was modified.`);
      }
    }

    console.log("mutation is added");
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);

  observer.disconnect();
})();
