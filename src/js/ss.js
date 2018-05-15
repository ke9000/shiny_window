document.addEventListener("DOMContentLoaded", function() {
	var get_ss = document.getElementById("get_ss");
	var img = document.getElementById("img");
	var dl = document.getElementById("dl");

	get_ss.addEventListener("click", function() {
		chrome.tabs.query({
			active: true,
			windowType: "popup",
			url: "https://shinycolors.enza.fun/*"
		},
		function(tabs) {
			if(tabs[0].windowId == "undefined") {
				alert("シャニマス開いてる???");
			} else {
				var Window_Id = tabs[0].windowId;
			
				chrome.runtime.sendMessage (
					{
						type: "click_btn",
						windowId : Window_Id
					}
				)
			}
		}
		);
	});

	var image_data;
	chrome.runtime.onMessage.addListener(
		function(message, snder, sendResponse){
			if (message.type == "img_send") {
					img.src = message.data;
					image_data = message.data;
				}
		}
	);
	
	//DL処理
	var download = document.getElementById("copy");
	download.addEventListener("click", function () {
		var dl_link = document.createElement("a");
		dl_link.download = "screenshot.png";
		dl_link.target="_blank";
		if (image_data) {
			dl_link.href = image_data;
			dl_link.click();
		}
	});
		
	
});