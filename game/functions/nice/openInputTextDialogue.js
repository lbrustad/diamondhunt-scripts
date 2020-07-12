'use strict';

function openInputTextDialogue(effect, img, mode, state, errorCode, text)
{
	if (effect == "none")
	{
		document.getElementById("dialogue-text-input-img").style.display = "none";
	}
	else
	{
		document.getElementById("dialogue-text-input-img").style.display = "";
		document.getElementById("dialogue-text-input-img").src = effect;
	}
	document.getElementById("dialogue-text-input-description").innerHTML = img;
	document.getElementById("dialogue-text-input-title").innerHTML = mode;
	document.getElementById("dialogue-text-input-confirm").innerHTML = state;
	document.getElementById("dialogue-text-input-cancel").innerHTML = errorCode;
	document.getElementById("dialogue-text-input-confirm").onclick = function ()
	{
		sendBytes(text + "=" + document.getElementById("dialogue-text-input-box").value);
		closeDialogue("dialogue-text-input");
	};
	openDialogue("dialogue-text-input");
};
