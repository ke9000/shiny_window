"use strict";

chrome.runtime.onMessage.addListener ( 
	function ( message, sender, sendResponse)
		{
			if (message.type == "click_btn" ) 
				{
					//origのElement
					var orig_canvas = document.getElementsByTagName("canvas")[0];
					var orig_context_gl = orig_canvas.getContext("webgl");
					
					//cloneのcanvas生成
					var create_clone = document.createElement("canvas");
					create_clone.id = "clone_canvas";
					create_clone.width = orig_canvas.width;
					create_clone.height = orig_canvas.height;
					
					//cloneのElement
					var clone_canvas = document.getElementById("clone_canvas");	
					var context_clone_2d = create_clone.getContext("2d");
					
					//origから取得 -> cloneへ貼り付け
					var Ui8 = new Uint8Array(orig_canvas.width*orig_canvas.height*4);
					orig_context_gl.readPixels
						(
							0,
							0,
							orig_canvas.width,
							orig_canvas.height,
							orig_context_gl.RGBA,
							orig_context_gl.UNSIGNED_BYTE,
							Ui8
						);
						
						var img_data = new Image();
					var img_data = {
						data : Ui8,
						height: orig_canvas.height,
						width: orig_canvas.width
					}
					
					context_clone_2d.putImageData(img_data, 0, 0);
					
					//toDataURLによる画像化
					var canvas_img = clone_canvas.toDataURL();        
					
					
					chrome.runtime.sendMessage (
						{
							type : "img_send",
							data : canvas_img
						}
					
					);
				}
		
		}
);
