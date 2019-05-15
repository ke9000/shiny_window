//LUNCH
document.getElementById("lunch_s").addEventListener("click",function(){lunch_window(1);});
document.getElementById("lunch_l").addEventListener("click",function(){lunch_window(2);});
document.getElementById("lunch_c").addEventListener("click",function(){lunch_window(3);});

// Get LastPosition on open Popup.
let left_data=0, top_data=0;

chrome.storage.sync.get(["left"], function(result){
	if(result.left){
		left_data = result.left;
	} else {
		console.error("failed to get last window position.(left)")
		//なんか変なタイミングで発火してることがある
	}
	console.log(result.left);
});
chrome.storage.sync.get(["top"],function(result){
	if(result){
		top_data = result.top;
	} else {
		console.error("failed to get last window position.(top)")
	}
	console.log(result.top);
});

function lunch_window(mode){
	let width, height;
	
	switch (mode){
		case 1:
			width = 620;
			height = 378;
			break;
		case 2:
			width = 1226;
			height = 720;
			break;
		case 3:
			width = document.forms.custom.custom_width.value;
			height = document.forms.custom.custom_height.value;
			console.info("set_custom_size:"+width+","+height);
			break;
		default:
			console.error("Failed to set window size.")
			break;
	}

	if((width)&&(height)) {
		chrome.windows.create ( {
			"url": "https://shinycolors.enza.fun",
			"type":"popup",
			"width":Number(width),
			"height":Number(height),
			"top":top_data,
			"left":left_data
		});
	} else {
		console.error("Failed to get size.")
	}
	
}

//GET_SS
document.getElementById("ss").addEventListener("click",function(){get_ss();});
let imgdata;

function get_ss(){
	chrome.tabs.query({
		active:true,
		windowType: "popup",
		url: "https://shinycolors.enza.fun/*"
	}, function(tabs){
		if(tabs[0].windowId){
			chrome.tabs.captureVisibleTab(tabs[0].windowId, {format:"png"},function(imgUri){
				imgdata = imgUri;
				document.getElementById("img").src = imgdata;
			});
		} else {
			console.error("Failed to get ScreenShot.")
		}
	});
}

//COPY_to_CLIPBOARD
// document.getElementById("clip_ss").addEventListener("click",function(){clip();});

// function clip(){
// 	if(imgdata){
// 		const data = new DataTransfer();
// 		data.items.add(imgdata,"image/png");
// 		if(data){
// 			navigator.clipboard.write(data);
// 			console.info("copied to clipboard.");
// 		} else {
// 			console.error("Failed to Write Clipboard data");
// 		}
// 	} else{
// 		console.error("failed to get ScreenShot.");
// 	}
// }

//Wating Correspond Chrome's clipboard API(https://github.com/ke9000/shiny_window/issues/7#issuecomment-489324144)

//DL_SS
document.getElementById("dl_ss").addEventListener("click",function(){dl();});

function dl(){
	if(imgdata){
		const dl_data = document.createElement("a");
		
		dl_data.download = getdate()+".png";
		dl_data.href = imgdata;
		dl_data.click();
	} else {
		console.error("Failed to download ScreenShot.")
	}
}

function getdate(){
	let date = new Date();
	let y = date.getFullYear();
	let m = ("0"+(date.getMonth()+1)).slice(-2);
	let d = ("0"+date.getDate()).slice(-2);
	let h = ("0"+date.getHours()).slice(-2);
	let min = ("0"+date.getMinutes()).slice(-2);
	let sec = ("0"+date.getSeconds()).slice(-2);

	return y+"-"+m+"-"+d+"-"+h+min+"."+sec;
}