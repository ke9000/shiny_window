chrome.webRequest.onBeforeSendHeaders.addListener(
	function (details) {
		console.log(details.url);
		console.log(details.requestHeaders);
	},
	{urls: ['https://shinycolors.enza.fun/*']},
	["requestHeaders"]
);