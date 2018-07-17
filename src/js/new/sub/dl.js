export function dl() {
	var img = document.getElementById("img");

	if (!img) {
		console.log("画像未取得");
	} else {
		let today = new Date();

		let img_url = img.src;
		let dl_link = document.createElement("a");

		dl_link.download = "screenshot" + today.getFullYear() + (today.getMonth() + 1) + today.getDate() + ".png";
		dl_link.target = "_blank";
		dl_link.href = img_url;

		dl_link.click();
	}
}
