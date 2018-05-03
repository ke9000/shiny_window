document.addEventListener("DOMContentLoaded", function() {
	var get_ss = document.getElementById("get_ss");
	var img = document.getElementById("img");

	get_ss.addEventListener("click", function() {
		chrome.tabs.query({
			active: true,
			windowType: "popup",
			url: "https://shinycolors.enza.fun/*"
		},
		function(tabs) {
			var tab_id = tabs[0].id;
			
			chrome.tabs.sendMessage (
				tab_id,
				{
					type: "click_btn"
				}
			)
		});
	});

	chrome.runtime.onMessage.addListener(
		function(message, snder, sendResponse){
			if (message.type == "img_send") {
				img.src = message.data
			}
		}
	);
});