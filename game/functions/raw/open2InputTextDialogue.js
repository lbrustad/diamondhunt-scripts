/**
 * open2InputTextDialogue extracted from ../../deobfuscated/bundle.js at line 5562-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/open2InputTextDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function open2InputTextDialogue(_0x1DB0E, _0x1C7CE, _0x1DB1C, _0x1DB2A, _0x1DAF2, _0x1DB00, _0x1D080)
{
	if (_0x1DB0E == "none")
	{
		document.getElementById("dialogue-text-input2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input2-img").style.display = "";
		document.getElementById("dialogue-text-input2-img").src = _0x1DB0E
	};
	document.getElementById("dialogue-text-input2-description").innerHTML = _0x1C7CE;
	document.getElementById("dialogue-text-input2-title1").innerHTML = _0x1DB1C;
	document.getElementById("dialogue-text-input2-title2").innerHTML = _0x1DB2A;
	document.getElementById("dialogue-text-input2-confirm").innerHTML = _0x1DAF2;
	document.getElementById("dialogue-text-input2-cancel").innerHTML = _0x1DB00;
	document.getElementById("dialogue-text-input2-confirm").onclick = function ()
	{
		sendBytes(_0x1D080 + "=" + document.getElementById("dialogue-text-input2-box1").value + "~" + document.getElementById("dialogue-text-input2-box2").value);
		closeDialogue("dialogue-text-input2")
	};
	openDialogue("dialogue-text-input2")
}