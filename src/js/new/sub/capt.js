export function capt() {
	console.log("onclick:capt");
	chrome.tabs.query({
		active: true,
		windowType: "popup",
		url: "https://shinycolors.enza.fun/*"
	},
		function (tabs) {
			if (tabs[0].windowId == "undefined") {
				alert("tabId取得失敗");
			} else {
				let Window_Id = tabs[0].windowId;
				chrome.tabs.captureVisibleTab(Window_Id, { format: "png" },
					function (img_data) {
						var today = new Date();

						let img = document.getElementById("img");
					
						if (img_data) {
							img.src = img_data;
						} else {
							console.log("画像取得に失敗");
						}
					}
				);
			}
		});
}