'use strict';

function open2InputTextDialogue(effect, img, size, module, id, hkey, val)
{
	if (effect == "none")
	{
		document.getElementById("dialogue-text-input2-img").style.display = "none";
	}
	else
	{
		document.getElementById("dialogue-text-input2-img").style.display = "";
		document.getElementById("dialogue-text-input2-img").src = effect;
	}
	document.getElementById("dialogue-text-input2-description").innerHTML = img;
	document.getElementById("dialogue-text-input2-title1").innerHTML = size;
	document.getElementById("dialogue-text-input2-title2").innerHTML = module;
	document.getElementById("dialogue-text-input2-confirm").innerHTML = id;
	document.getElementById("dialogue-text-input2-cancel").innerHTML = hkey;
	document.getElementById("dialogue-text-input2-confirm").onclick = function ()
	{
		sendBytes(val + "=" + document.getElementById("dialogue-text-input2-box1").value + "~" + document.getElementById("dialogue-text-input2-box2").value);
		closeDialogue("dialogue-text-input2");
	};
	openDialogue("dialogue-text-input2");
};
