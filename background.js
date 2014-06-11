
chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('demo_app.html', {
    'id': '_mainWindow', 'bounds': {'width': 600, 'height': 400 }
  });
});
