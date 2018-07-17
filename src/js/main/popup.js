document.addEventListener("DOMContentLoaded", function () {
	
	function create_window () {
		chrome.windows.create ( {
				"url":"https://shinycolors.enza.fun/",
				"type":"popup",
				"width":width_size,
				"height":height_size
			});
	};
	
	
	var button1 = document.getElementById("button1");
	
	button1.addEventListener("click", function() {
			width_size = 620,
			height_size = 378
	});
	button1.addEventListener("click",create_window);
	
	
	var button2 = document.getElementById("button2");
	
	button2.addEventListener("click", function() {
			width_size = 1226,
			height_size = 720
	});
	button2.addEventListener("click",create_window);
	
});