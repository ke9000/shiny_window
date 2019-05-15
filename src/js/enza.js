setInterval("getPosition()", 5000);

function getPosition(){
	console.log("start get Position.")
	let left = window.screenX;
	let top = window.screenY;

	chrome.storage.sync.set({
		left : left
	}, function(){
		chrome.storage.sync.set({
			top : top
		}, function(){
			console.log("Position Saved: left="+left+", top="+top);
		});
	});
}