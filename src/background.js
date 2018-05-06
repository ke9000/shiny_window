
//debugger;
chrome.runtime.onMessage.addListener ( 
	function ( message, sender, sendResponse)
		{
			if (message.type == "click_btn" ) 
				{
					chrome.tabs.captureVisibleTab(message.windowId, {format:"png"}, 
						function(img_data) {
							console.log(img_data);
							chrome.runtime.sendMessage (
								{
									type : "img_send",
									data : img_data
								}
					
							);
						}
					);
				}
		}
);
