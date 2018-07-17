import React					from "react";
import { render } 				from "react-dom";
import { lunch } 				from "../sub/lunch";
import { capt } 				from "../sub/capt";
import { dl }					from "../sub/dl";




render(
	<div id="content">
		<button id="lunch_s" onClick={() => lunch(1)} data-type="1" >小型</button>
		<button id="lunch_l" onClick={() => lunch(2)} data-type="2">大型</button>
		<button id="capt" onClick={capt}> スクリーンショット</button>
		<br/>
		<img id="img" href="" width="284" height="160"></img>
		<button id="copy">クリップボードにコピー</button>
		<button id="dl" onClick={dl}>画像ダウンロード</button>
	
	</div>,

	document.getElementById("main")
);
