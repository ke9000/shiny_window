export function lunch(type) {
	
	//これ別のcomponentにすべき?
	function create(width, height) {
		chrome.windows.create ( {
			"url":"https://shinycolors.enza.fun/",
			"type":"popup",
			"width":width,
			"height":height
		});
	}

	if (type == 1) {
		create(620, 378);
		console.log("type=1");
	} else if (type == 2) {
		create(1226, 720);
		console.log("type=2");
	} else {
		console.log("createできない引数を受け取りました");
	}
}
 