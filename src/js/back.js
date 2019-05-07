Chrome.webRequest.onSendHeaders.addListener(function(detail){
	if(detail.url == "https://shinycolors.enza.fan/*"){
		console.log(detail.url);
		console.log(detail.HttpHeaders);
	}
});