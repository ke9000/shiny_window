//document.addEventListener("DOMContentLoaded", function() {
	canvas = document.getElementsByTagName("CANVAS");
	console.log(canvas[0]);


	chrome.runtime.onMessage.addListener ( 
		function ( message, sender, sendResponse)
			{
				if (message.type == "click_btn" ) 
					{
					
				
						canvas_img = canvas[0].toDataURL();
				
						chrome.runtime.sendMessage (
							{
								type : "img_send",
								data : canvas_img
							}
						)
					}
			}
	);
//});