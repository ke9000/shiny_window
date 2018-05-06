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
			var Window_Id = tabs[0].windowId;
			
			chrome.runtime.sendMessage (
				{
					type: "click_btn",
					windowId : Window_Id
				}
			)
		});
	});

	chrome.runtime.onMessage.addListener(
		function(message, snder, sendResponse){
			if (message.type == "img_send") {
				img.src = message.data;
				dl.href = message.data;
			}
		}
	);
});