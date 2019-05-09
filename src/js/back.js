chrome.webRequest.onBeforeSendHeaders.addListener(
	function (details) {
		//console.log(details.url+"\n"+details.requestHeaders );
		console.log(details.requestHeaders);
	},
	{urls: ['https://api.shinycolors.enza.fun/*']},
	["requestHeaders"]
);