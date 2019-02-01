document.querySelectorAll('a').forEach(el => {
  el.addEventListener('click', (e) => {
    chrome.tabs.create({
      url: e.target.href
    });
  });
});