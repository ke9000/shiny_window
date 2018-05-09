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

	chrome.runtime.onMessage.addListener(
		function(message, snder, sendResponse){
			if (message.type == "img_send") {
				if (!message.data) {
					alert("SS取得に失敗しました");
				} else {
					img.src = message.data;
					dl.href = message.data;
				}
			}
		}
	);
});